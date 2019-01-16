$(function() {
    // 获取数据源生成表格
    $('#grid').kendoGrid({
        dataSource: {
            transport: {
                read: function(options) { readGrid(options, 'json/grid.json') }
            },
            schema: {
                total: 'total',
                data: 'data',
                model: {
                    id: 'id',
                    fields: {
                        userName: { type: 'string' },
                        realName: { type: 'string' },
                        nickName: { type: 'string' },
                        password: { type: 'string' },
                        confirmPassword: { type: 'string' },
                        online: { type: 'boolean' },
                        gender: { type: 'string' },
                        age: { type: 'number' },
                        height: { type: 'number' },
                        bloodType: { type: 'string' },
                        birthday: { type: 'date',
                            parse: function(e) {
                                return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                            }
                        },
                        mateBirthday: { type: 'date',
                            parse: function(e) {
                                return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                            }
                        },
                        creditCard: { type: 'string' },
                        asset: { type: 'number' },
                        nativePlace: { type: 'object' },
                        domicile: { type: 'object' },
                        nation: { type: 'object' },
                        zodiac: { type: 'object' },
                        language: { type: 'string' },
                        education: { type: 'object' },
                        graduation: { type: 'date',
                            parse: function(e) {
                                return kendo.toString(new Date(e), 'yyyy');
                            }
                        },
                        firstJob: { type: 'date',
                            parse: function(e) {
                                return kendo.toString(new Date(e), 'yyyy-MM');
                            }
                        },
                        mobile: { type: 'string' },
                        email: { type: 'string' },
                        homepage: { type: 'string' },
                        getUp: { type: 'date',
                            parse: function(e) {
                                return kendo.toString(kendo.parseDate(e), 'HH:mm');
                            }
                        },
                        importantMoment: { type: 'date',
                            parse: function(e) {
                                return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd HH:mm');
                            }
                        },
                        character: { type: 'number' },
                        color: { type: 'string' },
                        constellation: { type: 'object' },
                        tourism: { type: 'object' },
                        summary: { type: 'string' },
                        photo: { type: 'object' },
                        sign: { type: 'string' },
                        type: { type: 'string' },
                        admin: { type: 'boolean' }
                    }
                }
            },
            //serverPaging: true,
            pageSize: 10
        },
        toolbar: [
            { template: '<a href="javascript:batchOperate(\'json/response.json\');" class="k-button k-button-icontext theme-m-box"><span class="k-icon k-i-check"></span>批处理</a>' },
            { template: '<a href="javascript:batchSubmit(\'json/response.json\');" class="k-button k-button-icontext theme-m-box"><span class="k-icon k-i-validation-data"></span>批提交</a>' },
            { template: '<a href="javascript:linkTo(\'/\', \'home\');" class="k-button k-button-icontext float-right"><span class="k-icon k-i-undo"></span>返回首页</a>' }
        ],
        columns: [
            { locked: true, selectable: true, width: '40px' },
            { locked: true, title: '操作', width: '380px',
                command: [
                    { text: '设为管理员',
                        iconClass: 'fa fa-user mr-1',
                        visible: function(dataItem) {
                            return !(dataItem.admin);
                        },
                        click: function(e) {
                            e.preventDefault();
                            var dataItem = this.dataItem($(e.target).closest('tr'));
                            confirmMsg('管理员设置', '你确定要把<strong class="theme-m mx-1">' + dataItem.realName + '</strong>设置为管理员吗？', 'question', function() {
                                $.fn.ajaxPost({
                                    ajaxData: {
                                        'id': dataItem.id,
                                        'admin': true
                                    },
                                    succeed: function() {
                                        dataItem.set('admin', true);
                                    },
                                    isMsg: true
                                });
                            });
                        }
                    },
                    { text: '取消管理员',
                        className: 'theme-s-box',
                        iconClass: 'fa fa-user-tie mr-1',
                        visible: function(dataItem) {
                            return dataItem.admin;
                        },
                        click: function(e) {
                            e.preventDefault();
                            var dataItem = this.dataItem($(e.target).closest('tr'));
                            confirmMsg('管理员设置', '你确定要取消<strong class="theme-m mx-1">' + dataItem.realName + '</strong>的管理员权限吗？', 'question', function() {
                                $.fn.ajaxPost({
                                    ajaxData: {
                                        'id': dataItem.id,
                                        'admin': false
                                    },
                                    succeed: function() {
                                        dataItem.set('admin', false);
                                    },
                                    isMsg: true
                                });
                            });
                        }
                    },
                    { text: '特殊修改',
                        iconClass: 'fa fa-user-edit mr-1',
                        click: function(e) {
                            e.preventDefault();
                            var dataItem = this.dataItem($(e.target).closest('tr')),
                                divWindow = $('<div class="window-box" id="specialEdit"></div>').kendoWindow({
                                    animation: {open: {effects: 'fade:in'}, close: {effects: 'fade:out'}},
                                    title: '特殊修改',
                                    width: '30%',
                                    modal: true,
                                    pinned: true,
                                    resizable: false,
                                    open: function() {
                                        $('#onlineEdit').kendoMobileSwitch({
                                            onLabel: '',
                                            offLabel: ''
                                        });
                                        $('#specialEdit').kendoValidator({
                                            rules: {
                                                nickNameRequired: function(input) {
                                                    if (!input.is('#specialEdit [name=nickName]')) {
                                                        return true;
                                                    }
                                                    return input.val() !== '';
                                                },
                                                nickNamePattern: function(input) {
                                                    if (!input.is('#specialEdit [name=nickName]')) {
                                                        return true;
                                                    }
                                                    return input.val().match(/^[A-Za-z0-9\s_\-\u4E00-\u9FA5]{2,20}$/) !== null;
                                                },
                                                nickNameUnique: function(input) {
                                                    if (!input.is('#specialEdit [name=nickName]')) {
                                                        return true;
                                                    }
                                                    input.next().show();
                                                    var unique = true;
                                                    $.fn.ajaxPost({
                                                        ajaxAsync: false,
                                                        ajaxData: {
                                                            'nickName': input.val()
                                                        },
                                                        finished: function() {
                                                            input.next().hide();
                                                        },
                                                        succeed: function() {
                                                            unique = true;
                                                        },
                                                        failed: function() {
                                                            unique = false;
                                                        }
                                                    });
                                                    return unique;
                                                }
                                            },
                                            messages: {
                                                nickNameRequired: "请输入昵称！",
                                                nickNamePattern: "请输入2-20个大小写字母、数字、空格、下划线、中划线或汉字！",
                                                nickNameUnique: "此昵称已存在，请重新输入！"
                                            }
                                        });
                                        $('#specialEdit button.k-state-selected').unbind('click').click(function(){
                                            if ($('#specialEdit').data('kendoValidator').validate()) {
                                                $.fn.ajaxPost({
                                                    ajaxData: {
                                                        'id': dataItem.id,
                                                        'nickName': $('#specialEdit [name=nickName]').val(),
                                                        'online': $('#onlineEdit').data('kendoMobileSwitch').value()
                                                    },
                                                    succeed: function(res) {
                                                        dataItem.set('nickName', $('#specialEdit [name=nickName]').val());
                                                        dataItem.set('online', $('#onlineEdit').data('kendoMobileSwitch').value());
                                                        divWindow.close();
                                                    },
                                                    isMsg: true
                                                });
                                            }
                                        });
                                    },
                                    close: function() {
                                        divWindow.destroy();
                                    }
                                }).data('kendoWindow'),
                                content =
                                    '<form class="form-row">' +
                                        '<div class="form-group col-6">' +
                                            '<label class="d-block">昵称：</label>' +
                                            '<input class="k-textbox w-100" name="nickName" type="text" value="' + dataItem.nickName + '">' +
                                            '<span class="theme-m ajax-loading"><span class="k-icon k-i-loading"></span>验证中……</span><span class="k-invalid-msg" data-for="nickName"></span>' +
                                        '</div>' +
                                        '<div class="form-group col-6">' +
                                            '<label class="d-block">在线状态：</label>';
                            if (dataItem.online) {
                                content += '<input id="onlineEdit" name="online" type="checkbox" checked>';
                            } else {
                                content += '<input id="onlineEdit" name="online" type="checkbox">';
                            }
                                content +=
                                        '</div>' +
                                        '<div class="form-group col-12 row justify-content-center m-0">' +
                                            '<button class="k-button k-button-lg k-state-selected mx-3" type="button">确 定</button>' +
                                            '<button class="k-button k-button-lg mx-3" type="button" onclick="$(\'#specialEdit\').data(\'kendoWindow\').close();">取 消</button>' +
                                        '</div>' +
                                    '</form>';
                            divWindow.content(content).center().open();
                        }
                    }
                ]
            },
            { locked: true, field: 'type', title: '类型', width: '280px',
                template:
                    '# var type0 = \'<button class="k-button k-button-icontext k-notification-warning ml-1" onclick="setType(this, \\\'\' + id + \'\\\', \\\'0\\\', \\\'临时\\\', \\\'warning\\\');"><i class="k-icon k-i-warning"></i>临时</button>\'; #' +
                    '# var type1 = \'<button class="k-button k-button-icontext k-notification-info ml-1" onclick="setType(this, \\\'\' + id + \'\\\', \\\'1\\\', \\\'标记\\\', \\\'info\\\');"><i class="k-icon k-i-information"></i>标记</button>\'; #' +
                    '# var type2 = \'<button class="k-button k-button-icontext k-notification-success ml-1" onclick="setType(this, \\\'\' + id + \'\\\', \\\'2\\\', \\\'有效\\\', \\\'success\\\');"><i class="k-icon k-i-check-outline"></i>有效</button>\'; #' +
                    '# var type3 = \'<button class="k-button k-button-icontext k-notification-error ml-1" onclick="setType(this, \\\'\' + id + \'\\\', \\\'3\\\', \\\'无效\\\', \\\'error\\\');"><i class="k-icon k-i-close-outline"></i>无效</button>\'; #' +
                    '# if (type === "0") { #' +
                        '<span class="dot-color k-notification-warning"></span><strong class="k-notification-warning bg-transparent mx-2">临时</strong>#= type1 ##= type2 ##= type3 #' +
                    '# } else if (type === "1") { #' +
                        '<span class="dot-color k-notification-info"></span><strong class="k-notification-info bg-transparent mx-2">标记</strong>#= type0 ##= type2 ##= type3 #' +
                    '# } else if (type === "2") { #' +
                        '<span class="dot-color k-notification-success"></span><strong class="k-notification-success bg-transparent mx-2">有效</strong>#= type0 ##= type1 ##= type3 #' +
                    '# } else if (type === "3") { #' +
                        '<span class="dot-color k-notification-error"></span><strong class="k-notification-error bg-transparent mx-2">无效</strong>#= type0 ##= type1 ##= type2 #' +
                    '# } #'
            },
            { field: 'userName', title: '用户名', width: '80px' },
            { field: 'realName', title: '姓名', width: '100px' },
            { field: 'nickName', title: '昵称', width: '110px' },
            { hidden: true, field: 'password', title: '密码', width: '70px',
                template: function(dataItem) {
                    return dataItem.password.replace(dataItem.password.substr(0), '******');
                }
            },
            { field: 'online', title: '状态', width: '70px',
                template:
                    '# if (online) { #' +
                        '<span class="dot-color k-notification-success"></span><span class="k-notification-success bg-transparent ml-2">在线</span>' +
                    '# } else { #' +
                        '<span class="dot-color k-notification-error"></span><span class="k-notification-error bg-transparent ml-2">离线</span>' +
                    '# } #'
            },
            { field: 'gender', title: '性别', width: '60px',
                values: [
                    { text: '男', value: '1' },
                    { text: '女', value: '2' }
                ]
            },
            { field: 'age', title: '年龄', width: '70px',
                template: '#= age # 岁'
            },
            { field: 'height', title: '身高', width: '80px',
                template: '#= kendo.toString(height, "0.00") # m'
            },
            { field: 'bloodType', title: '血型', width: '70px',
                values: [
                    { text: 'A 型', value: '1' },
                    { text: 'B 型', value: '2' },
                    { text: 'O 型', value: '3' },
                    { text: 'AB 型', value: '4' },
                    { text: '其他', value: '5' }
                ]
            },
            { field: 'birthday', title: '生日', width: '110px' },
            { field: 'mateBirthday', title: '配偶生日', width: '110px' },
            { field: 'creditCard', title: '银行卡', width: '150px',
                template: function(dataItem) {
                    return dataItem.creditCard.replace(dataItem.creditCard.substr(2, 12), '** **** **** **');
                }
            },
            { field: 'asset', title: '资产', width: '140px',
                format: '{0:c}'
            },
            { field: 'nativePlace', title: '籍贯', width: '250px',
                template: '#= nativePlace.provinceName # - #= nativePlace.cityName # - #= nativePlace.areaName #'
            },
            { field: 'domicile', title: '居住地', width: '100px',
                template: '#= domicile.name #'
            },
            { field: 'nation', title: '民族', width: '100px',
                template: '#= nation.nationName #'
            },
            { field: 'zodiac', title: '生肖', width: '60px',
                template: '#= zodiac.zodiacName #'
            },
            { field: 'language', title: '语言', width: '210px' },
            { field: 'education', title: '教育程度', width: '130px',
                template:
                    '# for (var i = 0; i < education.length; i++) { #' +
                        '# if (education[i] === "1") { #' +
                            '小学&nbsp;' +
                        '# } else if (education[i] === "2") { #' +
                            '初中&nbsp;' +
                        '# } else if (education[i] === "3") { #' +
                            '高中&nbsp;' +
                        '# } else if (education[i] === "4") { #' +
                            '中专&nbsp;' +
                        '# } else if (education[i] === "5") { #' +
                            '大专&nbsp;' +
                        '# } else if (education[i] === "6") { #' +
                            '本科&nbsp;' +
                        '# } else if (education[i] === "7") { #' +
                            '硕士&nbsp;' +
                        '# } else if (education[i] === "8") { #' +
                            '博士&nbsp;' +
                        '# } else if (education[i] === "9") { #' +
                            '其他&nbsp;' +
                        '# } #' +
                    '# } #'
            },
            { field: 'graduation', title: '毕业年份', width: '90px' },
            { field: 'firstJob', title: '参加工作年月', width: '110px' },
            { field: 'mobile', title: '手机', width: '120px' },
            { field: 'email', title: '电子邮件', width: '180px' },
            { field: 'homepage', title: '个人主页', width: '190px' },
            { field: 'getUp', title: '起床时间', width: '90px' },
            { field: 'importantMoment', title: '最有意义的时刻', width: '150px' },
            { field: 'character', title: '性格', width: '90px',
                values: [
                    { text: '超级开朗', value: 10 },
                    { text: '非常开朗', value: 8 },
                    { text: '很开朗', value: 6 },
                    { text: '比较开朗', value: 4 },
                    { text: '有点开朗', value: 2 },
                    { text: '普通', value: 0 },
                    { text: '有点内向', value: -2 },
                    { text: '比较内向', value: -4 },
                    { text: '很内向', value: -6 },
                    { text: '非常内向', value: -8 },
                    { text: '超级内向', value: -10 }
                ]
            },
            { field: 'color', title: '颜色喜好', width: '90px',
                template: '<span style="display: inline-block; width: 100%; height: 24px; background: #= color #; border: 1px solid \\#c5c5c5; border-radius: 4px; vertical-align: middle;"></span>'
            },
            { field: 'constellation', title: '相配的星座', width: '170px',
                template:
                    '# for (var i = 0; i < constellation.length; i++) { #' +
                        '# if (constellation[i] === "1") { #' +
                            '白羊座&nbsp;' +
                        '# } else if (constellation[i] === "2") { #' +
                            '金牛座&nbsp;' +
                        '# } else if (constellation[i] === "3") { #' +
                            '双子座&nbsp;' +
                        '# } else if (constellation[i] === "4") { #' +
                            '巨蟹座&nbsp;' +
                        '# } else if (constellation[i] === "5") { #' +
                            '狮子座&nbsp;' +
                        '# } else if (constellation[i] === "6") { #' +
                            '处女座&nbsp;' +
                        '# } else if (constellation[i] === "7") { #' +
                            '天秤座&nbsp;' +
                        '# } else if (constellation[i] === "8") { #' +
                            '天蝎座&nbsp;' +
                        '# } else if (constellation[i] === "9") { #' +
                            '射手座&nbsp;' +
                        '# } else if (constellation[i] === "10") { #' +
                            '山羊座&nbsp;' +
                        '# } else if (constellation[i] === "11") { #' +
                            '水瓶座&nbsp;' +
                        '# } else if (constellation[i] === "12") { #' +
                            '双鱼座&nbsp;' +
                        '# } #' +
                    '# } #'
            },
            { field: 'tourism', title: '旅游足迹', width: '200px',
                template:
                    '# for (var i = 0; i < tourism.length; i++) { #' +
                        '#= tourism[i].name #&nbsp;' +
                    '# } #'
            },
            { field: 'summary', title: '自我介绍', width: '290px' },
            { field: 'photo', title: '头像', width: '120px',
                template: '<a href="javascript:showBigPic(\'#= photo.url #\');"><img class="w-25 rounded-circle" src="#= photo.url #" alt="#= photo.name ##= photo.extension #"></a><small class="ml-2 text-muted">[#= kendo.toString(photo.size / 1024, "0.00") # KB]</small>'
            },
            { field: 'sign', title: '签名', width: '290px',
                template: '#= sign #'
            }
        ],
        noRecords: {
            template: '<div class="text-center p-4">无相关数据</div>'
        },
        pageable: {
            buttonCount: 5,
            input: true,
            pageSizes: [5, 10, 15, 20, 25, 30, 50, 100, 'all'],
            refresh: true
        },
        reorderable: true,
        resizable: true
    });
});

function setType(dom, id, type, msg, color) {
    confirmMsgBtn('类型操作', '你确定要设置为<strong class="d-inline-block mx-1 px-2 py-1 k-notification-' + color + '">' + msg + '</strong>吗？', 'question', function() {
        $.fn.ajaxPost({
            ajaxData: {
                'id': id,
                'type': type
            },
            succeed: function() {
                $('#grid').data('kendoGrid').dataItem($(dom).closest('tr')).set('type', type);
            },
            isMsg: true
        });
    });
}