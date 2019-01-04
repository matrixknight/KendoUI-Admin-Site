$(function() {
    // 获取数据源生成表格
    $('#grid').kendoGrid({
        dataSource: {
            transport: {
                create: function(options) { createGrid(options, 'json/response.json') },
                destroy: function(options) { destroyGrid(options, 'json/response.json') },
                update: function(options) { updateGrid(options, 'json/response.json') },
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
                        sign: { type: 'string' }
                    }
                }
            },
            group: [
                { field: 'online', dir: 'desc',
                    aggregates: [
                        { field: 'online', aggregate: 'count' },
                        { field: 'gender', aggregate: 'count' },
                        { field: 'age', aggregate: 'min' },
                        { field: 'age', aggregate: 'max' },
                        { field: 'asset', aggregate: 'sum' }
                    ]
                },
                { field: 'gender', dir: 'asc',
                    aggregates: [
                        { field: 'online', aggregate: 'count' },
                        { field: 'gender', aggregate: 'count' },
                        { field: 'age', aggregate: 'min' },
                        { field: 'age', aggregate: 'max' },
                        { field: 'asset', aggregate: 'sum' }
                    ]
                }
            ],
            aggregate: [
                { field: 'realName', aggregate: 'count' },
                { field: 'age', aggregate: 'average' },
                { field: 'height', aggregate: 'average' },
                { field: 'asset', aggregate: 'sum' }
            ],
            sort: [
                { field: 'userName', dir: 'desc' }
            ],
            filter: {
                logic: 'or',
                filters: [
                    { field: 'age', operator: 'neq', value: 90 },
                    { field: 'height', operator: 'gt', value: 2 },
                    { field: 'height', operator: 'lt', value: 1.8 }
                ]
            },
            // serverGrouping: true,
            // serverAggregates: true,
            // serverSorting: true,
            // serverFiltering: true,
            // serverPaging: true,
            pageSize: 15
        },
        columns: [
            { field: 'userName', title: '用户名', width: '180px' },
            { field: 'realName', title: '姓名', width: '200px',
                footerTemplate: '总计：#= count # 人'
            },
            { field: 'nickName', title: '昵称', width: '210px' },
            { hidden: true, field: 'password', title: '密码', width: '70px',
                template: function(dataItem) {
                    return dataItem.password.replace(dataItem.password.substr(0), '******');
                }
            },
            { field: 'online', title: '状态', width: '180px',
                values: [
                    { text: '在线', value: true },
                    { text: '离线', value: false }
                ],
                template:
                    '# if (online) { #' +
                        '<span class="d-inline-block border border-success rounded-circle k-notification-success" style="width: 10px; height: 10px;"></span><span class="k-notification-success bg-transparent ml-2">在线</span>' +
                    '# } else { #' +
                        '<span class="d-inline-block border border-danger rounded-circle k-notification-error" style="width: 10px; height: 10px;"></span><span class="k-notification-error bg-transparent ml-2">离线</span>' +
                    '# } #',
                aggregates: ['count'],
                groupHeaderTemplate:
                    '状态：' +
                    '# if (value) { #' +
                        '<span class="d-inline-block border border-success rounded-circle k-notification-success" style="width: 10px; height: 10px;"></span><span class="k-notification-success bg-transparent ml-2">在线</span>' +
                    '# } else { #' +
                        '<span class="d-inline-block border border-danger rounded-circle k-notification-error" style="width: 10px; height: 10px;"></span><span class="k-notification-error bg-transparent ml-2">离线</span>' +
                    '# } #' +
                    '（合计：#= count # 人）'
            },
            { field: 'gender', title: '性别', width: '160px',
                values: [
                    { text: '男', value: '1' },
                    { text: '女', value: '2' }
                ],
                aggregates: ['count'],
                groupHeaderTemplate:
                    '性别：' +
                    '# if (value === "1") { #' +
                        '男<i class="fas fa-mars ml-2" style="color: rgb(82, 177, 255);"></i>' +
                    '# } else if (value === "2") { #' +
                        '女<i class="fas fa-venus ml-2" style="color: rgb(255, 150, 192);"></i>' +
                    '# } #' +
                    '（合计：#= count # 人）'
            },
            { field: 'age', title: '年龄', width: '180px',
                template: '#= age # 岁',
                aggregates: ['min', 'max', 'average'],
                groupHeaderColumnTemplate: '最小：#= min # 岁',
                groupFooterTemplate: '最大：#= max # 岁',
                footerTemplate: '平均：#= kendo.toString(average, "n0") # 岁'
            },
            { field: 'height', title: '身高', width: '160px',
                template: '#= kendo.toString(height, "0.00") # m',
                aggregates: ['average'],
                footerTemplate: '平均：#= kendo.toString(average, "0.00") # m'
            },
            { field: 'bloodType', title: '血型', width: '180px',
                values: [
                    { text: 'A 型', value: '1' },
                    { text: 'B 型', value: '2' },
                    { text: 'O 型', value: '3' },
                    { text: 'AB 型', value: '4' },
                    { text: '其他', value: '5' }
                ]
            },
            { field: 'birthday', title: '生日', width: '210px' },
            { field: 'mateBirthday', title: '配偶生日', width: '210px' },
            { field: 'creditCard', title: '银行卡', width: '260px',
                template: function(dataItem) {
                    return dataItem.creditCard.replace(dataItem.creditCard.substr(2, 12), '** **** **** **');
                }
            },
            { field: 'asset', title: '资产', width: '230px',
                format: '{0:c}',
                aggregates: ['sum'],
                groupFooterTemplate: '合计：#= kendo.toString(sum, "c") #',
                footerTemplate: '总计：#= kendo.toString(sum, "c") #'
            },
            { field: 'nativePlace', title: '籍贯', width: '250px',
                template: '#= nativePlace.provinceName # - #= nativePlace.cityName # - #= nativePlace.areaName #',
                filterable: false
            },
            { field: 'domicile', title: '居住地', width: '100px',
                template: '#= domicile.name #',
                filterable: false
            },
            { field: 'nation', title: '民族', width: '100px',
                template: '#= nation.nationName #',
                filterable: false
            },
            { field: 'zodiac', title: '生肖', width: '60px',
                template: '#= zodiac.zodiacName #',
                filterable: false
            },
            { field: 'language', title: '语言', width: '310px' },
            { field: 'education', title: '教育程度', width: '130px',
                template:
                    '# for (i = 0; i < education.length; i++) { #' +
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
                    '# } #',
                filterable: false
            },
            { field: 'graduation', title: '毕业年份', width: '90px',
                filterable: false
            },
            { field: 'firstJob', title: '参加工作年月', width: '110px',
                filterable: false
            },
            { field: 'mobile', title: '手机', width: '220px' },
            { field: 'email', title: '电子邮件', width: '280px' },
            { field: 'homepage', title: '个人主页', width: '290px' },
            { field: 'getUp', title: '起床时间', width: '90px',
                filterable: false
            },
            { field: 'importantMoment', title: '最有意义的时刻', width: '150px',
                filterable: false
            },
            { field: 'character', title: '性格', width: '200px',
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
                template: '<span style="display: inline-block; width: 100%; height: 24px; background: #= color #; border: 1px solid \\#c5c5c5; border-radius: 4px; vertical-align: middle;"></span>',
                filterable: false
            },
            { field: 'constellation', title: '相配的星座', width: '170px',
                template:
                    '# for (i = 0; i < constellation.length; i++) { #' +
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
                    '# } #',
                filterable: false
            },
            { field: 'tourism', title: '旅游足迹', width: '200px',
                template:
                    '# for (i = 0; i < tourism.length; i++) { #' +
                        '#= tourism[i].name #&nbsp;' +
                    '# } #',
                filterable: false
            },
            { field: 'summary', title: '自我介绍', width: '390px' },
            { field: 'photo', title: '头像', width: '120px',
                template: '<a href="javascript:showBigPic(\'#= photo.url #\');"><img class="w-25 rounded-circle" src="#= photo.url #" alt="#= photo.name ##= photo.extension #"></a><small class="ml-2 text-muted">[#= kendo.toString(photo.size/1024, "0.00") # KB]</small>',
                filterable: false
            },
            { field: 'sign', title: '签名', width: '290px',
                template: '#= sign #',
                filterable: false
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
        sortable: {
            mode: 'multiple'
        },
        filterable: {
            mode: 'row'
        },
        groupable: true,
        reorderable: true,
        resizable: true
    });
});