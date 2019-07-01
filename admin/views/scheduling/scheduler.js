$(function () {
    // 普通日程表
    $('#generalScheduler').kendoScheduler({
        dataSource: {
            batch: true,
            transport: {
                create: function (options) {
                    $('#loading').show();
                    $.fn.ajaxPost({
                        ajaxData: options.data,
                        ajaxUrl: 'json/response.json',
                        finished: function () {
                            $('#loading').hide();
                        },
                        succeed: function (res) {
                            options.success(res);
                            $('#generalScheduler').data('kendoScheduler').dataSource.read();
                        },
                        failed: function (res) {
                            options.error(res);
                        },
                        isMsg: true
                    });
                },
                destroy: function (options) {
                    $('#loading').show();
                    $.fn.ajaxPost({
                        ajaxData: {'id': options.data.id},
                        ajaxUrl: 'json/response.json',
                        finished: function () {
                            $('#loading').hide();
                        },
                        succeed: function (res) {
                            options.success(res);
                            $('#generalScheduler').data('kendoScheduler').dataSource.read();
                        },
                        failed: function (res) {
                            options.error(res);
                        },
                        isMsg: true
                    });
                },
                update: function (options) {
                    $('#loading').show();
                    $.fn.ajaxPost({
                        ajaxData: options.data,
                        ajaxUrl: 'json/response.json',
                        finished: function () {
                            $('#loading').hide();
                        },
                        succeed: function (res) {
                            options.success(res);
                            $('#generalScheduler').data('kendoScheduler').dataSource.read();
                        },
                        failed: function (res) {
                            options.error(res);
                        },
                        isMsg: true
                    });
                },
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxData: options.data,
                        ajaxUrl: 'json/scheduler.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                total: 'total',
                data: 'data',
                model: {
                    id: 'taskId',
                    fields: {
                        taskId: { from: 'TaskID', type: 'number' },
                        ownerId: { from: 'OwnerID',
                            defaultValue: 'gold_00'
                        },
                        title: { from: 'Title',
                            defaultValue: '无标题',
                            validation: {
                                required: true
                            }
                        },
                        description: { from: 'Description' },
                        start: { from: 'Start', type: 'date',
                            parse: function (e) {
                                return kendo.parseDate(e);
                            }
                        },
                        end: { from: 'End', type: 'date',
                            parse: function (e) {
                                return kendo.parseDate(e);
                            }
                        },
                        startTimezone: { from: 'StartTimezone' },
                        endTimezone: { from: 'EndTimezone' },
                        recurrenceId: { from: 'RecurrenceID' },
                        recurrenceRule: { from: 'RecurrenceRule' },
                        recurrenceException: { from: 'RecurrenceException' },
                        isAllDay: { from: 'IsAllDay', type: 'boolean' }
                    }
                }
            }
        },
        resources: [
            {
                field: 'ownerId',
                name: "saint",
                title: '圣斗士',
                dataSource: [
                    { text: '穆', value: 'gold_01', color: '#c39b8f' },
                    { text: '阿鲁迪巴', value: 'gold_02', color: '#d770ad' },
                    { text: '撒加', value: 'gold_03', color: '#da4453' },
                    { text: '迪斯马斯克', value: 'gold_04', color: '#ff9800' },
                    { text: '艾欧里亚', value: 'gold_05', color: '#f6bb42' },
                    { text: '沙加', value: 'gold_06', color: '#8cc152' },
                    { text: '童虎', value: 'gold_07', color: '#37bc9b' },
                    { text: '米罗', value: 'gold_08', color: '#3bafda' },
                    { text: '艾俄洛斯', value: 'gold_09', color: '#4a89dc' },
                    { text: '修罗', value: 'gold_10', color: '#967adc' },
                    { text: '卡妙', value: 'gold_11', color: '#434a54' },
                    { text: '阿布罗狄', value: 'gold_12', color: '#aab2bd' },
                    { text: '星矢', value: 'bronze_01', color: '#007bff' },
                    { text: '紫龙', value: 'bronze_02', color: '#28a745' },
                    { text: '冰河', value: 'bronze_03', color: '#17a2b8' },
                    { text: '瞬', value: 'bronze_04', color: '#dc3545' },
                    { text: '一辉', value: 'bronze_05', color: '#ffc107' },
                    { text: '雅典娜', value: 'goddess', color: '#6c757d' }
                ]
            }
        ],
        toolbar: ['pdf'],
        views: [
            { type: 'day',
                selected: true,
                group: {
                    resources: ['saint'],
                    date: true
                }
            },
            { type: 'week' },
            { type: 'workWeek' },
            { type: 'month' },
            { type: 'agenda' },
            { type: 'timeline' },
            { type: 'timelineWeek' },
            { type: 'timelineWorkWeek' },
            { type: 'timelineMonth',
                columnWidth: 128
            }
        ],
        pdf: {
            fileName: 'Scheduler.pdf',
            creator: 'IKKI Studio',
            author: 'IKKI & Amikoko',
            title: '日程表展示',
            subject: '黄金十二宫',
            keywords: 'Gold Saint',
            landscape: true,
            avoidLinks: true
        },
        date: new Date('2019/8/15'),
        startTime: new Date('2019/8/15 00:00'),
        endTime: new Date('2019/8/15 24:00'),
        workDayStart: new Date('2019/8/15 11:00 AM'),
        workDayEnd: new Date('2019/8/15 11:00 PM'),
        selectable: true,
        showWorkHours: true,
        dateHeaderTemplate: '<strong>#= kendo.toString(date, "MM月dd日 dddd") #</strong>',
        groupHeaderTemplate: '<strong style="color: #= color #">#= text #</strong>',
        allDayEventTemplate: '<p class="mb-0 px-2"><small><strong>任务：</strong>#: title #<br><strong>描述：</strong>#: description #</small></p>',
        majorTimeHeaderTemplate: '<strong>#= kendo.toString(date, "HH:mm") #</strong>',
        eventTemplate: '<p class="mb-0 px-2"><small>#: title #</small></p>'
    });
    // 联动显示
    $('#saint :checkbox').change(function (e) {
        var checked = $.map($('#saint :checked'), function (checkbox) {
            return $(checkbox).val();
        });
        $('#generalScheduler').data('kendoScheduler').dataSource.filter({
            logic: 'or',
            filters: $.map(checked, function (value) {
                return {
                    operator: 'eq',
                    field: 'ownerId',
                    value: value
                };
            })
        });
    });
});