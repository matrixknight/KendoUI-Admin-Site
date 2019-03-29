$(function() {
    // 年龄
    numericRange($('#ageStart'), $('#ageEnd'), 'n0', 0, 1, 1, 120);
    // 身高
    numericRange($('#heightStart'), $('#heightEnd'), '0.00 m', 2, 0.01, 1.01, 3.00);
    // 血型
    $('#bloodType').kendoDropDownList();
    // 生日
    dateRange($('#birthdayStart'), $('#birthdayEnd'), 'Date');
    // 配偶生日
    dateInputRange($('#mateBirthdayStart'), $('#mateBirthdayEnd'), 'Date');
    // 银行卡
    $('#creditCard').kendoMaskedTextBox({
        mask: '0000 0000 0000 0000'
    });
    // 资产
    numericRange($('#assetStart'), $('#assetEnd'), 'c', 2, 10000, 0, 10000000000);
    // 籍贯
    $('#province').kendoDropDownList({
        dataSource: {
            transport: {
                read: function(options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/province.json',
                        succeed: function(res) {
                            options.success(res);
                        },
                        failed: function(res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'data'
            }
        },
        optionLabel: '-= 省份 =-',
        dataValueField: 'province',
        dataTextField: 'provinceName',
        filter: 'contains'
    });
    $('#city').kendoDropDownList({
        dataSource: {
            transport: {
                read: function(options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/city.json',
                        succeed: function(res) {
                            options.success(res);
                        },
                        failed: function(res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'data'
            }
        },
        autoBind: false,
        cascadeFrom: 'province',
        optionLabel: '-= 城市 =-',
        dataValueField: 'city',
        dataTextField: 'cityName',
        filter: 'contains'
    });
    $('#area').kendoDropDownList({
        dataSource: {
            transport: {
                read: function(options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/area.json',
                        succeed: function(res) {
                            options.success(res);
                        },
                        failed: function(res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'data'
            }
        },
        autoBind: false,
        cascadeFrom: 'city',
        optionLabel: '-= 区县 =-',
        dataValueField: 'area',
        dataTextField: 'areaName',
        filter: 'contains'
    });
    // 居住地
    $('#domicile').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function(options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
                        succeed: function(res) {
                            options.success(res);
                        },
                        failed: function(res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'data',
                model: {
                    children: 'items'
                }
            }
        },
        placeholder: '树形下拉单选框',
        dataValueField: 'code',
        dataTextField: 'name',
        loadOnDemand: true,
        filter: 'contains'
    });
    // 民族
    $('#nation').kendoComboBox({
        dataSource: {
            transport: {
                read: function(options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/nation.json',
                        succeed: function(res) {
                            options.success(res);
                        },
                        failed: function(res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'data'
            }
        },
        dataValueField: 'nation',
        dataTextField: 'nationName',
        suggest: true
    });
    // 生肖
    $('#zodiac').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function(options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/zodiac.json',
                        succeed: function(res) {
                            options.success(res);
                        },
                        failed: function(res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'data'
            }
        },
        dataValueField: 'zodiac',
        dataTextField: 'zodiacName',
        columns: [
            { field: 'zodiacName', title: '生肖', width: '56px' },
            { field: 'zodiacValue1', title: '年份', width: '60px' },
            { field: 'zodiacValue2', title: '年份', width: '60px' },
            { field: 'zodiacValue3', title: '年份', width: '60px' },
            { field: 'zodiacValue4', title: '年份', width: '60px' },
            { field: 'zodiacValue5', title: '年份', width: '60px' }
        ],
        filter: 'contains',
        filterFields: ['zodiacValue1', 'zodiacValue2', 'zodiacValue3', 'zodiacValue4', 'zodiacValue5'],
        minLength: 4,
        suggest: true
    });
    // 语言
    $('#language').kendoAutoComplete({
        dataSource: {
            transport: {
                read: function(options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/language.json',
                        succeed: function(res) {
                            options.success(res);
                        },
                        failed: function(res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'data'
            }
        },
        dataTextField: 'language',
        suggest: true,
        separator: ' '
    });
    // 毕业年份
    dateRange($('#graduationStart'), $('#graduationEnd'), 'Year');
    // 参加工作年月
    dateRange($('#firstJobStart'), $('#firstJobEnd'), 'Month');
    // 起床时间
    dateRange($('#getUpStart'), $('#getUpEnd'), 'Time');
    // 最有意义的时刻
    dateRange($('#importantMomentStart'), $('#importantMomentEnd'), 'DateTime');
    // 性格
    $('#character').kendoSlider({
        decreaseButtonTitle: '内向',
        increaseButtonTitle: '开朗',
        min: -10,
        max: 10,
        smallStep: 2,
        largeStep: 1,
        tooltip: {
            template:
                '# if (value === 10) { #' +
                    '超级开朗' +
                '# } else if (value === 8) { #' +
                    '非常开朗' +
                '# } else if (value === 6) { #' +
                    '很开朗' +
                '# } else if (value === 4) { #' +
                    '比较开朗' +
                '# } else if (value === 2) { #' +
                    '有点开朗' +
                '# } else if (value === 0) { #' +
                    '普通' +
                '# } else if (value === -2) { #' +
                    '有点内向' +
                '# } else if (value === -4) { #' +
                    '比较内向' +
                '# } else if (value === -6) { #' +
                    '很内向' +
                '# } else if (value === -8) { #' +
                    '非常内向' +
                '# } else if (value === -10) { #' +
                    '超级内向' +
                '# } #'
        }
    });
    // 颜色喜好
    $('#color').kendoColorPicker({
        opacity: true,
        buttons: false
    });
    // 相配的星座
    $('#constellation').kendoMultiSelect({
        placeholder: '多选下拉框',
        autoClose: false
    });
    // 旅游足迹
    $('#tourism').kendoDropDownTree({
        dataSource: {
            transport: {
                read: {
                    url: 'json/select_hierarchical_data.json',
                    dataType: 'json'
                }
            },
            schema: {
                data: 'data',
                model: {
                    children: 'items'
                }
            }
        },
        placeholder: '树形下拉多选框',
        dataValueField: 'code',
        dataTextField: 'name',
        valuePrimitive: true,
        loadOnDemand: true,
        filter: 'contains',
        checkboxes: true,
        autoClose: false,
        change: function() {
            var that = this;
            $(that.element).parent().find('[type=hidden]').remove();
            $.each(that.value(), function(i, items) {
                $(that.element).parent().append('<input name="tourism" type="hidden" value="' + items + '">');
            });
        }
    });
    // 是否在线
    $('#online').kendoSwitch({
        messages: {
            checked: '',
            unchecked: ''
        },
        checked: true
    });
    // 生成工具条
    $('#toolbar').kendoToolBar({
        resizable: false,
        items: [
            { template: '<input class="k-checkbox" id="selectAll" type="checkbox" title="全选"><label class="k-checkbox-label" for="selectAll"></label>' },
            { template: '<a class="k-button k-button-icontext k-add-button" href="javascript:;"><span class="k-icon k-i-add"></span>新增</a>' },
            { template: '<a class="k-button k-button-icontext" href="javascript:;"><span class="k-icon k-i-x"></span>批量删除</a>' },
            { template: '<a class="k-button k-button-icontext" href="javascript:;"><span class="k-icon k-i-sort-asc-sm"></span>升序</a><a class="k-button k-button-icontext hide" href="javascript:;"><span class="k-icon k-i-sort-desc-sm"></span>降序</a>' },
            { template: '<input class="k-textbox w-100" id="search" name="search" type="text" placeholder="搜索...">' },
            { template: '<select class="w-100" id="filter" name="filter"></select>' }
        ]
    });
    $('#filter').kendoDropDownList({
        dataSource: {
            data: [
                { text: '在线', value: true },
                { text: '离线', value: false }
            ]
        },
        optionLabel: "- 筛选 -",
        dataValueField: 'value',
        dataTextField: 'text'
    });
    // 定义数据源
    var dataSource = new kendo.data.DataSource({
        transport: {
            create: function(options) { createItem(options, 'json/response.json') },
            destroy: function(options) { destroyItem(options, 'json/response.json') },
            update: function(options) { updateItem(options, 'json/response.json') },
            read: function(options) { readItem(options, 'json/list.json') }
        },
        schema: {
            total: 'total',
            data: 'data',
            model: {
                id: 'id',
                fields: {
                    userName: { type: 'string' },
                    realName: { type: 'string' },
                    nickName: { type: 'string',
                        validation: {
                            nickName: function(input) {
                                if (!input.is('#editForm [name=nickName]')) {
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
                                input.attr('data-nickName-msg', '此昵称已存在，请重新输入！');
                                return unique;
                            }
                        }
                    },
                    password: { type: 'string' },
                    confirmPassword: { type: 'string',
                        validation: {
                            matchPassword: function(input) {
                                if (!input.is('#editForm [name=confirmPassword]')) {
                                    return true;
                                }
                                input.attr('data-matchPassword-msg', '两次输入的密码不一致！');
                                return (input.val() === $('#editForm [name=password]').val());
                            }
                        }
                    },
                    online: { type: 'boolean' },
                    gender: { type: 'string',
                        validation: {
                            gender: function(input) {
                                if (!input.is('#editForm [name=gender]')) {
                                    return true;
                                }
                                input.attr('data-gender-msg', '请选择性别！');
                                return $('#editForm [name=gender]').is(':checked');
                            }
                        }
                    },
                    age: { type: 'number',
                        defaultValue: null
                    },
                    height: { type: 'number',
                        defaultValue: null
                    },
                    bloodType: { type: 'string' },
                    birthday: { type: 'date',
                        defaultValue: null,
                        parse: function(e) {
                            return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                        },
                        validation: {
                            birthday: function(input) {
                                if (!input.is('#editForm [name=birthday]')) {
                                    return true;
                                }
                                input.attr('data-birthday-msg', '日期格式不正确！');
                                return kendo.parseDate(input.val(), 'yyyy-MM-dd') instanceof Date;
                            }
                        }
                    },
                    mateBirthday: { type: 'date',
                        defaultValue: null,
                        parse: function(e) {
                            return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                        },
                        validation: {
                            mateBirthday: function(input) {
                                if (!input.is('#editForm [name=mateBirthday]')) {
                                    return true;
                                }
                                input.attr('data-mateBirthday-msg', '日期格式不正确！');
                                return kendo.parseDate(input.val(), 'yyyy-MM-dd') instanceof Date;
                            }
                        }
                    },
                    creditCard: { type: 'string',
                        parse: function(e) {
                            return e.replace(/\s*/g, '');
                        }
                    },
                    asset: { type: 'number',
                        defaultValue: null
                    },
                    nativePlace: { type: 'object',
                        defaultValue: {
                            province: '',
                            provinceName: '',
                            city: '',
                            cityName: '',
                            area: '',
                            areaName: ''
                        }
                    },
                    domicile: { type: 'object',
                        defaultValue: {
                            code: '',
                            name: ''
                        },
                        parse: function(e) {
                            var obj = {};
                            obj.code = e.code;
                            obj.name = e.name;
                            return obj;
                        }
                    },
                    nation: { type: 'object',
                        defaultValue: {
                            nation: '',
                            nationName: ''
                        },
                        validation: {
                            nation: function(input) {
                                if (!input.is('#editForm [name=nation_input]')) {
                                    return true;
                                }
                                input.attr('data-nation-msg', '请输入汉字！');
                                return input.val() === '' || input.val().match(/^[\u4E00-\u9FA5]+$/) !== null;
                            }
                        }
                    },
                    zodiac: { type: 'object',
                        defaultValue: {
                            zodiac: '',
                            zodiacName: ''
                        },
                        parse: function(e) {
                            var obj = {};
                            obj.zodiac = e.zodiac;
                            obj.zodiacName = e.zodiacName;
                            return obj;
                        },
                        validation: {
                            zodiac: function(input) {
                                if (!input.is('#editForm [name=zodiac_input]')) {
                                    return true;
                                }
                                input.attr('data-zodiac-msg', '请输入生肖！');
                                return input.val() === '' || input.val().match(/^[鼠|牛|虎|兔|龙|蛇|马|羊|猴|鸡|狗|猪]{1}$/) !== null;
                            }
                        }
                    },
                    language: { type: 'string',
                        parse: function(e) {
                            return $.trim(e);
                        }
                    },
                    education: { type: 'object',
                        defaultValue: [],
                        validation: {
                            education: function(input) {
                                if (!input.is('#editForm [name=education]')) {
                                    return true;
                                }
                                input.attr('data-education-msg', '请选择教育程度！');
                                return $('#editForm [name=education]').is(':checked');
                            }
                        }
                    },
                    graduation: { type: 'date',
                        defaultValue: null,
                        parse: function(e) {
                            return kendo.toString(new Date(e), 'yyyy');
                        },
                        validation: {
                            graduation: function(input) {
                                if (!input.is('#editForm [name=graduation]')) {
                                    return true;
                                }
                                input.attr('data-graduation-msg', '年份格式不正确！');
                                return kendo.parseDate(input.val(), 'yyyy') instanceof Date;
                            }
                        }
                    },
                    firstJob: { type: 'date',
                        defaultValue: null,
                        parse: function(e) {
                            return kendo.toString(new Date(e), 'yyyy-MM');
                        },
                        validation: {
                            firstJob: function(input) {
                                if (!input.is('#editForm [name=firstJob]')) {
                                    return true;
                                }
                                input.attr('data-firstJob-msg', '月份格式不正确！');
                                return kendo.parseDate(input.val(), 'yyyy-MM') instanceof Date;
                            }
                        }
                    },
                    mobile: { type: 'string' },
                    email: { type: 'string' },
                    homepage: { type: 'string' },
                    getUp: { type: 'date',
                        defaultValue: null,
                        parse: function(e) {
                            return kendo.toString(kendo.parseDate(e), 'HH:mm');
                        },
                        validation: {
                            getUp: function(input) {
                                if (!input.is('#editForm [name=getUp]')) {
                                    return true;
                                }
                                input.attr('data-getUp-msg', '时间格式不正确！');
                                return kendo.parseDate(input.val(), 'HH:mm') instanceof Date;
                            }
                        }
                    },
                    importantMoment: { type: 'date',
                        defaultValue: null,
                        parse: function(e) {
                            return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd HH:mm');
                        },
                        validation: {
                            importantMoment: function(input) {
                                if (!input.is('#editForm [name=importantMoment]')) {
                                    return true;
                                }
                                input.attr('data-importantMoment-msg', '日期时间格式不正确！');
                                return kendo.parseDate(input.val(), 'yyyy-MM-dd HH:mm') instanceof Date;
                            }
                        }
                    },
                    character: { type: 'number' },
                    color: {
                        defaultValue: '',
                        parse: function(e) {
                            return 'rgba('+ kendo.parseColor(e).r +', '+ kendo.parseColor(e).g +', '+ kendo.parseColor(e).b +', '+ kendo.parseColor(e).a +')';
                        }
                    },
                    constellation: { type: 'object',
                        defaultValue: []
                    },
                    tourism: { type: 'object',
                        defaultValue: [],
                        parse: function(e) {
                            var arr = [];
                            for (var i = 0; i < e.length; i++) {
                                arr.push({
                                    code: e[i].code,
                                    name: e[i].name
                                });
                            }
                            return arr;
                        }
                    },
                    summary: { type: 'string' },
                    photo: { type: 'object',
                        defaultValue: {
                            url: 'img/avatar.png',
                            name: 'avatar',
                            extension: '.png',
                            size: 53284
                        },
                        validation: {
                            photo: function(input) {
                                if (!input.is('#editForm [name=photo]')) {
                                    return true;
                                }
                                input.attr('data-photo-msg', '请上传头像！');
                                return $('#photoShow').attr('alt') !== 'avatar.png' && $('#photoShow').attr('title') !== '52.04 KB';
                            }
                        }
                    },
                    sign: { type: 'string' }
                }
            }
        },
        pageSize: 10
    });
    // 获取数据源生成列表
    $('#listView').kendoListView({
        dataSource: dataSource,
        template: kendo.template($('#listTemplate').html()),
        selectable: 'multiple',
        navigatable: true,
        editTemplate: kendo.template($('#editTemplate').html()),
        edit: function(e) {

        }
    });
    // 获取数据源并分页
    $('#pager').kendoPager({
        dataSource: dataSource,
        buttonCount: 5,
        input: true,
        pageSizes: [5, 10, 15, 20, 25, 30, 50, 100, 'all'],
        refresh: true
    });
});