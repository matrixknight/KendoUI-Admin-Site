/* JS for All Kendo UI Components Korean (ko-KR) Language Pack | Written by IKKI | 2018-02-03 */

/* Cultures ------------------------------ */
(function ( window, undefined ) {
    kendo.cultures["ko-KR"] = {
        name: "ko-KR",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "South Korean Won",
                abbr: "KRW",
                pattern: ["-$n","$n"],
                decimals: 0,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "₩"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
                    namesAbbr: ["일","월","화","수","목","금","토"],
                    namesShort: ["일","월","화","수","목","금","토"]
                },
                months: {
                    names: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
                    namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12"]
                },
                AM: ["오전","오전","오전"],
                PM: ["오후","오후","오후"],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "yyyy'년' M'월' d'일' dddd",
                    F: "yyyy'년' M'월' d'일' dddd tt h:mm:ss",
                    g: "yyyy-MM-dd tt h:mm",
                    G: "yyyy-MM-dd tt h:mm:ss",
                    m: "M월 d일",
                    M: "M월 d일",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "tt h:mm",
                    T: "tt h:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy'년' M'월'",
                    Y: "yyyy'년' M'월'"
                },
                "/": "-",
                ":": ":",
                firstDay: 0
            }
        }
    }
})(this);

/* Messages ------------------------------ */
(function ($, undefined) {

    /* FlatColorPicker messages */
    if (kendo.ui.FlatColorPicker) {
        kendo.ui.FlatColorPicker.prototype.options.messages =
            $.extend(true, kendo.ui.FlatColorPicker.prototype.options.messages,{
                "apply": "确定",
                "cancel": "取消",
                "noColor": "无颜色",
                "clearColor": "清除颜色",
                "previewInput": "颜色十六进制代码"
            });
    }

    /* ColorPicker messages */
    if (kendo.ui.ColorPicker) {
        kendo.ui.ColorPicker.prototype.options.messages =
            $.extend(true, kendo.ui.ColorPicker.prototype.options.messages,{
                "apply": "确定",
                "cancel": "取消",
                "noColor": "无颜色",
                "clearColor": "清除颜色",
                "previewInput": "颜色十六进制代码"
            });
    }

    /* ColumnMenu messages */
    if (kendo.ui.ColumnMenu) {
        kendo.ui.ColumnMenu.prototype.options.messages =
            $.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
                "sortAscending": "升序排列",
                "sortDescending": "降序排列",
                "filter": "筛选",
                "columns": "字段列",
                "done": "完成",
                "settings": "列设置",
                "lock": "锁定",
                "unlock": "解锁"
            });
    }

    /* Editor messages */
    if (kendo.ui.Editor) {
        kendo.ui.Editor.prototype.options.messages =
            $.extend(true, kendo.ui.Editor.prototype.options.messages,{
                "bold": "粗体",
                "italic": "斜体",
                "underline": "下划线",
                "strikethrough": "删除线",
                "superscript": "上标",
                "subscript": "下标",
                "justifyCenter": "水平居中",
                "justifyLeft": "左对齐",
                "justifyRight": "右对齐",
                "justifyFull": "两端对齐",
                "insertUnorderedList": "插入无序列表",
                "insertOrderedList": "插入有序列表",
                "indent": "增加缩进",
                "outdent": "减少缩进",
                "createLink": "插入链接",
                "unlink": "删除链接",
                "insertImage": "插入图片",
                "insertFile": "插入文件",
                "insertHtml": "插入HTML",
                "viewHtml": "源代码编辑",
                "fontName": "请选择字体",
                "fontNameInherit": "（默认字体）",
                "fontSize": "请选择字号",
                "fontSizeInherit": "（默认字号）",
                "formatBlock": "格式",
                "formatting": "格式",
                "foreColor": "文字颜色",
                "backColor": "文字背景色",
                "style": "样式",
                "emptyFolder": "文件夹为空",
                "editAreaTitle": "在可编辑区域可按 F10 跳转工具栏。",
                "uploadFile": "上传文件",
                "overflowAnchor": "更多功能",
                "orderBy": "排序方式：",
                "orderBySize": "按大小排序",
                "orderByName": "按名称排序",
                "invalidFileType": "你上传的文件格式 {0} 是无效的，支持的文件类型为：{1}",
                "deleteFile": "你确定要删除【{0}】这个文件吗？",
                "overwriteFile": "当前文件夹已存在文件名为【{0}】的文件，是否覆盖？",
                "directoryNotFound": "文件夹未找到",
                "imageWebAddress": "图片链接地址",
                "imageAltText": "图片占位符",
                "imageWidth": "图片宽度（单位px）",
                "imageHeight": "图片高度（单位px）",
                "fileWebAddress": "文件链接地址",
                "fileTitle": "文件标题",
                "linkWebAddress": "链接地址",
                "linkText": "链接文字",
                "linkToolTip": "链接提示",
                "linkOpenInNewWindow": "在新窗口中打开链接",
                "dialogUpdate": "更新",
                "dialogInsert": "插入",
                "dialogButtonSeparator": "或",
                "dialogOk": "确定",
                "dialogCancel": "取消",
                "cleanFormatting": "清除格式",
                "createTable": "创建表格",
                "createTableHint": "创建一个 {0} 行 {1} 列的表格",
                "addColumnLeft": "在左侧插入列",
                "addColumnRight": "在右侧插入列",
                "addRowAbove": "在上方插入行",
                "addRowBelow": "在下方插入行",
                "deleteRow": "删除行",
                "deleteColumn": "删除列",
                "tableWizard": "表格向导",
                "tableTab": "表格",
                "cellTab": "单元格",
                "accessibilityTab": "可访问性",
                "caption": "标题",
                "summary": "摘要",
                "width": "宽",
                "height": "高",
                "units": "单位",
                "cellSpacing": "单元格间距",
                "cellPadding": "单元格内边距",
                "cellMargin": "单元格外边距",
                "alignment": "对齐",
                "background": "背景色",
                "cssClass": "样式表",
                "id": "ID",
                "border": "边框",
                "borderStyle": "边框样式",
                "collapseBorders": "合并边框",
                "wrapText": "文字换行",
                "associateCellsWithHeaders": "关联表头与单元格",
                "alignLeft": "左对齐",
                "alignCenter": "居中对齐",
                "alignRight": "右对齐",
                "alignLeftTop": "左上对齐",
                "alignCenterTop": "中上对齐",
                "alignRightTop": "右上对齐",
                "alignLeftMiddle": "左中对齐",
                "alignCenterMiddle": "居中对齐",
                "alignRightMiddle": "右中对齐",
                "alignLeftBottom": "左下对齐",
                "alignCenterBottom": "中下对齐",
                "alignRightBottom": "右下对齐",
                "alignRemove": "移除对齐",
                "columns": "列",
                "rows": "行",
                "selectAllCells": "选择所有单元格",
                "exportAs": "导出",
                "import": "导入"
            });
    }

    /* FileBrowser messages */
    if (kendo.ui.FileBrowser) {
        kendo.ui.FileBrowser.prototype.options.messages =
            $.extend(true, kendo.ui.FileBrowser.prototype.options.messages,{
                "uploadFile": "上传文件",
                "orderBy": "排序方式",
                "orderByName": "按名称排序",
                "orderBySize": "按大小排序",
                "directoryNotFound": "文件夹未找到",
                "emptyFolder": "文件夹为空",
                "deleteFile": "你确定要删除【{0}】这个文件吗？",
                "invalidFileType": "你上传的文件格式 {0} 是无效的，支持的文件类型为：{1}",
                "overwriteFile": "当前文件夹已存在文件名为【{0}】的文件，是否覆盖？",
                "dropFilesHere": "将文件拖拽到此处上传",
                "search": "搜索"
            });
    }

    /* FilterCell messages */
    if (kendo.ui.FilterCell) {
        kendo.ui.FilterCell.prototype.options.messages =
            $.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
                "isTrue": "是",
                "isFalse": "否",
                "filter": "筛选",
                "clear": "清空",
                "operator": "运算符"
            });
    }

    /* FilterCell operators */
    if (kendo.ui.FilterCell) {
        kendo.ui.FilterCell.prototype.options.operators =
            $.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
                "string": {
                    "eq": "等于",
                    "neq": "不等于",
                    "startswith": "开头是",
                    "contains": "包含",
                    "doesnotcontain": "不含",
                    "endswith": "结尾是",
                    "isnull": "为空",
                    "isnotnull": "非空",
                    "isempty": "空字符串",
                    "isnotempty": "非空字符串",
                    "isnullorempty": "无值",
                    "isnotnullorempty": "有值"
                },
                "number": {
                    "eq": "等于",
                    "neq": "不等于",
                    "gte": "大于等于",
                    "gt": "大于",
                    "lte": "小于等于",
                    "lt": "小于",
                    "isnull": "为空",
                    "isnotnull": "非空"
                },
                "date": {
                    "eq": "等于",
                    "neq": "不等于",
                    "gte": "晚于等于",
                    "gt": "晚于",
                    "lte": "早于等于",
                    "lt": "早于",
                    "isnull": "为空",
                    "isnotnull": "非空"
                },
                "enums": {
                    "eq": "等于",
                    "neq": "不等于",
                    "isnull": "为空",
                    "isnotnull": "非空"
                }
            });
    }

    /* FilterMenu messages */
    if (kendo.ui.FilterMenu) {
        kendo.ui.FilterMenu.prototype.options.messages =
            $.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
                "info": "筛选条件：",
                "title": "筛选条件：",
                "isTrue": "是",
                "isFalse": "否",
                "filter": "筛选",
                "clear": "清空",
                "and": "并且",
                "or": "或者",
                "selectValue": "-= 请选择 =-",
                "operator": "运算符",
                "value": "值",
                "additionalValue": "附加值",
                "additionalOperator": "附加运算",
                "logic": "筛选逻辑",
                "cancel": "取消"
            });
    }

    /* FilterMenu operator messages */
    if (kendo.ui.FilterMenu) {
        kendo.ui.FilterMenu.prototype.options.operators =
            $.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
                "string": {
                    "eq": "等于",
                    "neq": "不等于",
                    "startswith": "开头是",
                    "contains": "包含",
                    "doesnotcontain": "不含",
                    "endswith": "结尾是",
                    "isnull": "为空",
                    "isnotnull": "非空",
                    "isempty": "空字符串",
                    "isnotempty": "非空字符串",
                    "isnullorempty": "无值",
                    "isnotnullorempty": "有值"
                },
                "number": {
                    "eq": "等于",
                    "neq": "不等于",
                    "gte": "大于等于",
                    "gt": "大于",
                    "lte": "小于等于",
                    "lt": "小于",
                    "isnull": "为空",
                    "isnotnull": "非空"
                },
                "date": {
                    "eq": "等于",
                    "neq": "不等于",
                    "gte": "晚于等于",
                    "gt": "晚于",
                    "lte": "早于等于",
                    "lt": "早于",
                    "isnull": "为空",
                    "isnotnull": "非空"
                },
                "enums": {
                    "eq": "等于",
                    "neq": "不等于",
                    "isnull": "为空",
                    "isnotnull": "非空"
                }
            });
    }

    /* FilterMultiCheck messages */
    if (kendo.ui.FilterMultiCheck) {
        kendo.ui.FilterMultiCheck.prototype.options.messages =
            $.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages,{
                "checkAll": "全选",
                "clear": "清空",
                "filter": "筛选",
                "search": "搜索",
                "cancel": "取消",
                "selectedItemsFormat": "已选择 {0} 条数据"
            });
    }

    /* Gantt messages */
    if (kendo.ui.Gantt) {
        kendo.ui.Gantt.prototype.options.messages =
            $.extend(true, kendo.ui.Gantt.prototype.options.messages,{
                "actions": {
                    "addChild": "新增子任务",
                    "append": "新增任务",
                    "insertAfter": "插入到后面",
                    "insertBefore": "插入到前面",
                    "pdf": "导出 PDF"
                },
                "cancel": "取消",
                "deleteDependencyWindowTitle": "删除从属任务",
                "deleteDependencyConfirmation": "你确定要删除这项从属任务吗？",
                "deleteTaskWindowTitle": "删除任务",
                "deleteTaskConfirmation": "你确定要删除这项任务吗？",
                "destroy": "删除",
                "editor": {
                    "assingButton": "资源分配",
                    "editorTitle": "编辑任务",
                    "end": "结束时间",
                    "percentComplete": "完成进度",
                    "resources": "资源",
                    "resourcesEditorTitle": "资源编辑",
                    "resourcesHeader": "资源名称",
                    "start": "开始时间",
                    "title": "任务标题",
                    "unitsHeader": "百分比"
                },
                "save": "保存",
                "views": {
                    "day": "日视图",
                    "end": "任务结束",
                    "month": "月视图",
                    "start": "任务开始",
                    "week": "周视图",
                    "year": "年视图"
                }
            });
    }

    /* GanttTimeline messages */
    if (kendo.ui.GanttTimeline) {
        kendo.ui.GanttTimeline.prototype.options.messages =
            $.extend(true, kendo.ui.GanttTimeline.prototype.options.messages,{
                "views": {
                    "day": "日视图",
                    "week": "周视图",
                    "month": "月视图",
                    "year": "年视图",
                    "start": "任务开始",
                    "end": "任务结束"
                }
            });
    }

    /* Grid messages */
    if (kendo.ui.Grid) {
        kendo.ui.Grid.prototype.options.messages =
            $.extend(true, kendo.ui.Grid.prototype.options.messages,{
                "commands": {
                    "cancel": "取消",
                    "canceledit": "取消",
                    "create": "新增",
                    "destroy": "删除",
                    "edit": "编辑",
                    "excel": "导出 Excel",
                    "pdf": "导出 PDF",
                    "save": "保存",
                    "select": "选择",
                    "update": "更新"
                },
                "editable": {
                    "cancelDelete": "取消删除",
                    "confirmation": "你确定要删除这条数据吗？",
                    "confirmDelete": "确定删除"
                },
                "noRecords": "无相关数据",
                "expandCollapseColumnHeader": "..."
            });
    }

    /* Groupable messages */
    if (kendo.ui.Groupable) {
        kendo.ui.Groupable.prototype.options.messages =
            $.extend(true, kendo.ui.Groupable.prototype.options.messages,{
                "empty": "将字段列名称拖拽到此处可进行该列的分组显示"
            });
    }

    /* NumericTextBox messages */
    if (kendo.ui.NumericTextBox) {
        kendo.ui.NumericTextBox.prototype.options =
            $.extend(true, kendo.ui.NumericTextBox.prototype.options,{
                "upArrowText": "增加",
                "downArrowText": "减少"
            });
    }

    /* MediaPlayer messages */
    if (kendo.ui.MediaPlayer) {
        kendo.ui.MediaPlayer.prototype.options.messages =
            $.extend(true, kendo.ui.MediaPlayer.prototype.options.messages,{
                "pause": "暂停",
                "play": "播放",
                "mute": "静音",
                "unmute": "取消静音",
                "quality": "画质",
                "fullscreen": "全屏"
            });
    }

    /* Pager messages */
    if (kendo.ui.Pager) {
        kendo.ui.Pager.prototype.options.messages =
            $.extend(true, kendo.ui.Pager.prototype.options.messages,{
                "allPages": "全部",
                "display": "{0} - {1} 条　共 {2} 条数据",
                "empty": "无相关数据",
                "page": "转到第",
                "of": "页　共 {0} 页",
                "itemsPerPage": "条每页",
                "first": "首页",
                "previous": "上一页",
                "next": "下一页",
                "last": "末页",
                "refresh": "刷新",
                "morePages": "更多..."
            });
    }

    /* PivotGrid messages */
    if (kendo.ui.PivotGrid) {
        kendo.ui.PivotGrid.prototype.options.messages =
            $.extend(true, kendo.ui.PivotGrid.prototype.options.messages,{
                "measureFields": "拖拽数据字段到此处",
                "columnFields": "拖拽列字段到此处",
                "rowFields": "拖拽行字段到此处"
            });
    }

    /* PivotFieldMenu messages */
    if (kendo.ui.PivotFieldMenu) {
        kendo.ui.PivotFieldMenu.prototype.options.messages =
            $.extend(true, kendo.ui.PivotFieldMenu.prototype.options.messages,{
                "info": "筛选条件：",
                "sortAscending": "升序排列",
                "sortDescending": "降序排列",
                "filterFields": "字段筛选",
                "filter": "筛选",
                "include": "包含字段...",
                "title": "包含的字段",
                "clear": "清空",
                "ok": "确定",
                "cancel": "取消",
                "operators": {
                    "contains": "包含",
                    "doesnotcontain": "不含",
                    "startswith": "开头是",
                    "endswith": "结尾是",
                    "eq": "等于",
                    "neq": "不等于"
                }
            });
    }

    /* PivotSettingTarget messages */
    if (kendo.ui.PivotSettingTarget) {
        kendo.ui.PivotSettingTarget.prototype.options.messages =
            $.extend(true, kendo.ui.PivotSettingTarget.prototype.options.messages,{
                "empty": "拖拽字段到此处"
            });
    }

    /* PivotConfigurator messages */
    if (kendo.ui.PivotConfigurator) {
        kendo.ui.PivotConfigurator.prototype.options.messages =
            $.extend(true, kendo.ui.PivotConfigurator.prototype.options.messages,{
                "measures": "拖拽数据字段到此处",
                "columns": "拖拽列字段到此处",
                "rows": "拖拽行字段到此处",
                "measuresLabel": "量",
                "columnsLabel": "列",
                "rowsLabel": "行",
                "fieldsLabel": "字段"
            });
    }

    /* RecurrenceEditor messages */
    if (kendo.ui.RecurrenceEditor) {
        kendo.ui.RecurrenceEditor.prototype.options.messages =
            $.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
                "recurrenceEditorTitle": "周期类型事件编辑",
                "frequencies": {
                    "never": "从不",
                    "hourly": "每小时",
                    "daily": "每天",
                    "weekly": "每周",
                    "monthly": "每月",
                    "yearly": "每年"
                },
                "hourly": {
                    "repeatEvery": "周期",
                    "interval": " 小时"
                },
                "daily": {
                    "repeatEvery": "周期",
                    "interval": " 天"
                },
                "weekly": {
                    "repeatEvery": "周期",
                    "repeatOn": "重复于",
                    "interval": " 周"
                },
                "monthly": {
                    "repeatEvery": "周期",
                    "repeatOn": "重复于",
                    "interval": " 月",
                    "day": "几号 "
                },
                "yearly": {
                    "repeatEvery": "周期",
                    "repeatOn": "重复于",
                    "interval": " 年",
                    "of": " 在 "
                },
                "end": {
                    "label": "截止",
                    "mobileLabel": "截止",
                    "never": "从不",
                    "after": "重复 ",
                    "occurrence": " 次后",
                    "on": "止于 "
                },
                "offsetPositions": {
                    "first": "第一",
                    "second": "第二",
                    "third": "第三",
                    "fourth": "第四",
                    "last": "最后一"
                },
                "weekdays": {
                    "day": "天",
                    "weekday": "工作日",
                    "weekend": "周末"
                }
            });
    }

    /* MobileRecurrenceEditor messages */
    if (kendo.ui.MobileRecurrenceEditor) {
        kendo.ui.MobileRecurrenceEditor.prototype.options.messages =
            $.extend(true, kendo.ui.MobileRecurrenceEditor.prototype.options.messages,{
                "cancel": "取消",
                "update": "保存",
                "endTitle": "周期截止",
                "repeatTitle": "周期模式",
                "headerTitle": "周期事件",
                "end": {
                    "patterns": {
                        "never": "从不",
                        "after": "重复...",
                        "on": "止于..."
                    },
                    "never": "从不",
                    "after": "周期后截止",
                    "on": "周期时截止"
                },
                "daily": {
                    "interval": ""
                },
                "hourly": {
                    "interval": ""
                },
                "weekly": {
                    "interval": ""
                },
                "monthly": {
                    "interval": "",
                    "repeatBy": "重复到：",
                    "dayOfMonth": "几号",
                    "dayOfWeek": "周几",
                    "repeatEvery": "全部重复",
                    "every": "每",
                    "day": "天"
                },
                "yearly": {
                    "interval": "",
                    "repeatBy": "重复到：",
                    "dayOfMonth": "几号",
                    "dayOfWeek": "周几",
                    "repeatEvery": "全部重复",
                    "every": "每",
                    "month": "月",
                    "day": "天"
                }
            });
    }

    /* Scheduler messages */
    if (kendo.ui.Scheduler) {
        kendo.ui.Scheduler.prototype.options.messages =
            $.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
                "allDay": "全天",
                "date": "日期",
                "event": "事件",
                "time": "时间",
                "showFullDay": "显示全天",
                "showWorkDay": "显示工作时间",
                "today": "今天",
                "pdf": "导出 PDF",
                "save": "保存",
                "cancel": "取消",
                "destroy": "删除",
                "deleteWindowTitle": "删除事件",
                "next": "往后",
                "previous": "往前",
                "ariaSlotLabel": "从 {0:t} 到 {1:t} 的选择",
                "ariaEventLabel": "在 {1:D} {2:t} 的 {0}",
                "editable": {
                    "confirmation": "你确定要删除这个事件吗？"
                },
                "views": {
                    "day": "日视图",
                    "week": "周视图",
                    "workWeek": "工作日视图",
                    "agenda": "列表视图",
                    "month": "月视图",
                    "timeline": "时间线",
                    "timelineWeek": "时间线周视图",
                    "timelineWorkWeek": "时间线工作日视图",
                    "timelineMonth": "时间线月视图"
                },
                "recurrenceMessages": {
                    "deleteWindowTitle": "删除周期类型事件",
                    "deleteWindowOccurrence": "删除当前事件",
                    "deleteWindowSeries": "删除整个周期事件",
                    "editWindowTitle": "编辑周期类型事件",
                    "editWindowOccurrence": "编辑当前事件",
                    "editWindowSeries": "编辑整个周期事件",
                    "deleteRecurring": "你想仅删除当前事件还是整个周期事件？",
                    "editRecurring": "你想仅编辑当前事件还是整个周期事件？"
                },
                "editor": {
                    "title": "事件标题",
                    "start": "开始时间",
                    "end": "结束时间",
                    "allDayEvent": "全天事件",
                    "description": "描述",
                    "repeat": "重复",
                    "timezone": "时区",
                    "startTimezone": "开始时区",
                    "endTimezone": "结束时区",
                    "separateTimezones": "使用独立的开始和结束时区",
                    "timezoneEditorTitle": "时区设置",
                    "timezoneEditorButton": "时区选择",
                    "timezoneTitle": "选择时区",
                    "noTimezone": "无时区",
                    "editorTitle": "事件"
                }
            });
    }

    if (kendo.ui.MultiDayView) {
        kendo.ui.MultiDayView.prototype.options.messages =
            $.extend(true, kendo.ui.MultiDayView.prototype.options.messages,{
                "allDay": "全天",
                "showFullDay": "显示全天",
                "showWorkDay": "显示工作时间"
            });
    }

    if (kendo.ui.Agenda) {
        kendo.ui.Agenda.prototype.options.messages =
            $.extend(true, kendo.ui.Agenda.prototype.options.messages,{
                "event": "事件",
                "date": "日期",
                "time": "时间",
                "allDay": "全天"
            });
    }

    if (kendo.ui.TimelineView) {
        kendo.ui.TimelineView.prototype.options.messages =
            $.extend(true, kendo.ui.TimelineView.prototype.options.messages,{
                "defaultRowText": "全部事件",
                "showFullDay": "显示全天",
                "showWorkDay": "显示工作时间"
            });
    }

    /* Spreadsheet messages */
    if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
        kendo.spreadsheet.messages.borderPalette =
            $.extend(true, kendo.spreadsheet.messages.borderPalette,{
                "allBorders": "内外框线",
                "insideBorders": "内框线",
                "insideHorizontalBorders": "横向内框线",
                "insideVerticalBorders": "纵向内框线",
                "outsideBorders": "外框线",
                "leftBorder": "左框线",
                "topBorder": "上框线",
                "rightBorder": "右框线",
                "bottomBorder": "下框线",
                "noBorders": "无框线",
                "reset": "无填充颜色",
                "customColor": "其他颜色...",
                "apply": "确定",
                "cancel": "取消"
            });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
        kendo.spreadsheet.messages.dialogs =
            $.extend(true, kendo.spreadsheet.messages.dialogs,{
                "apply": "确定",
                "save": "保存",
                "cancel": "取消",
                "remove": "移除",
                "retry": "重试",
                "revert": "复原",
                "okText": "确定",
                "formatCellsDialog": {
                    "title": "单元格格式",
                    "categories": {
                        "number": "数字",
                        "currency": "货币",
                        "date": "日期"
                    }
                },
                "fontFamilyDialog": {
                    "title": "字体"
                },
                "fontSizeDialog": {
                    "title": "字号"
                },
                "bordersDialog": {
                    "title": "边框"
                },
                "alignmentDialog": {
                    "title": "对齐",
                    "buttons": {
                        "justtifyLeft": "左对齐",
                        "justifyCenter": "水平居中",
                        "justifyRight": "右对齐",
                        "justifyFull": "两端对齐",
                        "alignTop": "顶端对齐",
                        "alignMiddle": "垂直居中",
                        "alignBottom": "底端对齐"
                    }
                },
                "mergeDialog": {
                    "title": "合并单元格",
                    "buttons": {
                        "mergeCells": "全部合并",
                        "mergeHorizontally": "水平合并",
                        "mergeVertically": "垂直合并",
                        "unmerge": "取消合并"
                    }
                },
                "freezeDialog": {
                    "title": "冻结窗格",
                    "buttons": {
                        "freezePanes": "冻结上行左列",
                        "freezeRows": "冻结上部行",
                        "freezeColumns": "冻结左侧列",
                        "unfreeze": "取消冻结"
                    }
                },
                "confirmationDialog": {
                    "text": "你确定要删除这张工作表吗？",
                    "title": "删除工作表"
                },
                "validationDialog": {
                    "title": "数据验证",
                    "hintMessage": "请输入一个{1}的{0}值",
                    "hintTitle": "验证{0}",
                    "criteria": {
                        "any": "任何值",
                        "number": "数字",
                        "text": "文本",
                        "date": "日期",
                        "custom": "自定义公式",
                        "list": "序列"
                    },
                    "comparers": {
                        "greaterThan": "大于",
                        "lessThan": "小于",
                        "between": "介于",
                        "notBetween": "不介于",
                        "equalTo": "等于",
                        "notEqualTo": "不等于",
                        "greaterThanOrEqualTo": "大于等于",
                        "lessThanOrEqualTo": "小于等于"
                    },
                    "comparerMessages": {
                        "greaterThan": "大于{0}",
                        "lessThan": "小于{0}",
                        "between": "介于{0}和{1}之间",
                        "notBetween": "不介于{0}和{1}之间",
                        "equalTo": "等于{0}",
                        "notEqualTo": "不等于{0}",
                        "greaterThanOrEqualTo": "大于等于{0}",
                        "lessThanOrEqualTo": "小于等于{0}",
                        "custom": "满足公式{0}"
                    },
                    "labels": {
                        "criteria": "允许",
                        "comparer": "比较",
                        "min": "最小值",
                        "max": "最大值",
                        "value": "值",
                        "start": "开始",
                        "end": "结束",
                        "onInvalidData": "对无效的数据",
                        "rejectInput": "拒绝输入",
                        "showWarning": "显示警告",
                        "showHint": "选定单元格时显示",
                        "hintTitle": "选定时的标题",
                        "hintMessage": "选定时的信息",
                        "ignoreBlank": "忽略空值",
                        "showListButton": "显示序列按钮",
                        "showCalendarButton": "显示日历按钮"
                    },
                    "placeholders": {
                        "typeTitle": "请输入标题",
                        "typeMessage": "请输入信息"
                    }
                },
                "exportAsDialog": {
                    "title": "导出...",
                    "labels": {
                        "scale": "缩放",
                        "fit": "调整为一页",
                        "fileName": "文件名",
                        "saveAsType": "保存类型",
                        "exportArea": "导出范围",
                        "paperSize": "纸张大小",
                        "margins": "页边距",
                        "orientation": "纸张方向",
                        "print": "打印",
                        "guidelines": "网格线",
                        "center": "居中方式",
                        "horizontally": "水平",
                        "vertically": "垂直"
                    }
                },
                "modifyMergedDialog": {
                    "errorMessage": "不能更改已合并单元格的局部。"
                },
                "rangeDisabledDialog": {
                    "errorMessage": "指定范围包含禁用单元格。"
                },
                "incompatibleRangesDialog": {
                    "errorMessage": "范围不匹配"
                },
                "noFillDirectionDialog": {
                    "errorMessage": "无法判断填充方向"
                },
                "duplicateSheetNameDialog": {
                    "errorMessage": "工作表名称重复"
                },
                "overflowDialog": {
                    "errorMessage": "不能粘贴，因为复制区域和粘贴区域的大小和形状不一样。"
                },
                "useKeyboardDialog": {
                    "title": "复制和粘贴",
                    "errorMessage": "不能通过菜单调用这些操作，请使用键盘快捷键代替：",
                    "labels": {
                        "forCopy": "为复制",
                        "forCut": "为剪切",
                        "forPaste": "为粘贴"
                    }
                },
                "unsupportedSelectionDialog": {
                    "errorMessage": "不能在多选的情况下执行该操作。"
                },
                "linkDialog": {
                    "title": "链接",
                    "labels": {
                        "text": "链接文字",
                        "url": "链接地址",
                        "removeLink": "移除链接"
                    }
                }
            });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
        kendo.spreadsheet.messages.filterMenu =
            $.extend(true, kendo.spreadsheet.messages.filterMenu,{
                "sortAscending": "按A到Z升序排列",
                "sortDescending": "按Z到A降序排列",
                "filterByValue": "内容筛选",
                "filterByCondition": "条件筛选",
                "apply": "确定",
                "search": "搜索",
                "addToCurrent": "添加到当前选择",
                "clear": "清空",
                "blanks": "（无）",
                "operatorNone": "无",
                "and": "并且",
                "or": "或者",
                "operators": {
                    "string": {
                        "contains": "文本包含",
                        "doesnotcontain": "文本不包含",
                        "startswith": "文本开头是",
                        "endswith": "文本结尾是",
                        "matches": "文本等于",
                        "doesnotmatch": "文本不等于"
                    },
                    "date": {
                        "eq":  "日期等于",
                        "neq": "日期不等于",
                        "lt":  "日期早于",
                        "gt":  "日期晚于"
                    },
                    "number": {
                        "eq": "数字等于",
                        "neq": "数字不等于",
                        "gte": "数字大于等于",
                        "gt": "数字大于",
                        "lte": "数字小于等于",
                        "lt": "数字小于"
                    }
                }
            });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.colorPicker) {
        kendo.spreadsheet.messages.colorPicker =
            $.extend(true, kendo.spreadsheet.messages.colorPicker,{
                "reset": "无填充颜色",
                "customColor": "其他颜色...",
                "apply": "确定",
                "cancel": "取消"
            });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
        kendo.spreadsheet.messages.toolbar =
            $.extend(true, kendo.spreadsheet.messages.toolbar,{
                "addColumnLeft": "在左侧插入列",
                "addColumnRight": "在右侧插入列",
                "addRowAbove": "在上面插入行",
                "addRowBelow": "在下面插入行",
                "alignment": "对齐",
                "alignmentButtons": {
                    "justtifyLeft": "左对齐",
                    "justifyCenter": "水平居中",
                    "justifyRight": "右对齐",
                    "justifyFull": "两端对齐",
                    "alignTop": "顶端对齐",
                    "alignMiddle": "垂直居中",
                    "alignBottom": "底端对齐"
                },
                "backgroundColor": "背景颜色",
                "bold": "粗体",
                "borders": "边框",
                "colorPicker": {
                    "reset": "无填充颜色",
                    "customColor": "其他颜色..."
                },
                "copy": "复制",
                "cut": "剪切",
                "deleteColumn": "删除整列",
                "deleteRow": "删除整行",
                "excelImport": "从 Excel 导入...",
                "exportAs": "导出为...",
                "filter": "筛选",
                "fontFamily": "字体",
                "fontSize": "字号",
                "format": "定制格式...",
                "formatTypes": {
                    "automatic": "自动",
                    "text": "文本",
                    "number": "数字",
                    "percent": "百分比",
                    "financial": "财务",
                    "currency": "货币",
                    "date": "日期",
                    "time": "时间",
                    "dateTime": "日期时间",
                    "duration": "时分秒",
                    "moreFormats": "更多格式..."
                },
                "formatDecreaseDecimal": "减少小数位数",
                "formatIncreaseDecimal": "增加小数位数",
                "freeze": "冻结窗格",
                "freezeButtons": {
                    "freezePanes": "冻结上行左列",
                    "freezeRows": "冻结上部行",
                    "freezeColumns": "冻结左侧列",
                    "unfreeze": "取消冻结"
                },
                "italic": "斜体",
                "merge": "合并单元格",
                "mergeButtons": {
                    "mergeCells": "全部合并",
                    "mergeHorizontally": "水平合并",
                    "mergeVertically": "垂直合并",
                    "unmerge": "取消合并"
                },
                "open": "打开...",
                "paste": "粘贴",
                "quickAccess": {
                    "redo": "重做",
                    "undo": "撤消"
                },
                "toggleGridlines": "切换网格线",
                "saveAs": "另存为...",
                "sort": "排序",
                "sortAsc": "升序排列",
                "sortDesc": "降序排列",
                "sortButtons": {
                    "sortSheetAsc": "表格按A到Z升序排列",
                    "sortSheetDesc": "表格按Z到A降序排列",
                    "sortRangeAsc": "选定范围按A到Z升序排列",
                    "sortRangeDesc": "选定范围按Z到A降序排列"
                },
                "textColor": "文字颜色",
                "textWrap": "文字换行",
                "underline": "下划线",
                "validation": "数据验证...",
                "hyperlink": "链接"
            });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
        kendo.spreadsheet.messages.view =
            $.extend(true, kendo.spreadsheet.messages.view,{
                "errors": {
                    "openUnsupported": "不支持的格式，请选择一个后缀名为 .xlsx 的文件。",
                    "shiftingNonblankCells": "由于数据可能丢失无法插入单元格，请选择另一处插入或者从工作表的尾部删除数据。",
                    "insertColumnWhenRowIsSelected": "在选择所有列时不能插入列。",
                    "insertRowWhenColumnIsSelected": "在选择所有行时不能插入行。",
                    "filterRangeContainingMerges": "无法在包含合并单元格的情况下进行筛选",
                    "sortRangeContainingMerges": "无法在包含合并单元格的情况下排序",
                    "cantSortMultipleSelection": "无法在多选的情况下排序",
                    "cantSortNullRef": "无法在没有选择的情况下排序",
                    "cantSortMixedCells": "无法在包含有混合形状单元格的情况下排序",
                    "validationError": "你输入的值不符合当前单元格的验证规则。",
                    "cannotModifyDisabled": "不能修改被禁用的单元格。"
                },
                "tabs": {
                    "home": "开始",
                    "insert": "插入",
                    "data": "数据"
                }
            });
    }

    /* Slider messages */
    if (kendo.ui.Slider) {
        kendo.ui.Slider.prototype.options =
            $.extend(true, kendo.ui.Slider.prototype.options,{
                "increaseButtonTitle": "增加",
                "decreaseButtonTitle": "减少",
                "dragHandleTitle": "拖"
            });
    }

    /* ListBox messages */
    if (kendo.ui.ListBox) {
        kendo.ui.ListBox.prototype.options.messages =
            $.extend(true, kendo.ui.ListBox.prototype.options.messages,{
                "tools": {
                    "remove": "删除",
                    "moveUp": "上移",
                    "moveDown": "下移",
                    "transferTo": "转移过去",
                    "transferFrom": "转移回来",
                    "transferAllTo": "全部转移过去",
                    "transferAllFrom": "全部转移回来"
                }
            });
    }

    /* TreeList messages */
    if (kendo.ui.TreeList) {
        kendo.ui.TreeList.prototype.options.messages =
            $.extend(true, kendo.ui.TreeList.prototype.options.messages,{
                "noRows": "无相关数据",
                "loading": "载入中...",
                "requestFailed": "请求失败！",
                "retry": "重试",
                "commands": {
                    "edit": "编辑",
                    "update": "更新",
                    "canceledit": "取消",
                    "create": "新增",
                    "createchild": "新增子项",
                    "destroy": "删除",
                    "excel": "导出 Excel",
                    "pdf": "导出 PDF"
                }
            });
    }

    if (kendo.ui.TreeList) {
        kendo.ui.TreeList.prototype.options.columnMenu =
            $.extend(true, kendo.ui.TreeList.prototype.options.columnMenu, {
                "messages": {
                    "columns": "字段列",
                    "filter": "筛选",
                    "sortAscending": "升序排列",
                    "sortDescending": "降序排列"
                }
            });
    }

    /* TreeView messages */
    if (kendo.ui.TreeView) {
        kendo.ui.TreeView.prototype.options.messages =
            $.extend(true, kendo.ui.TreeView.prototype.options.messages,{
                "loading": "载入中...",
                "requestFailed": "请求失败！",
                "retry": "重试"
            });
    }

    /* PanelBar messages */
    if (kendo.ui.PanelBar) {
        kendo.ui.PanelBar.prototype.options.messages =
            $.extend(true, kendo.ui.PanelBar.prototype.options.messages,{
                "loading": "载入中...",
                "requestFailed": "请求失败！",
                "retry": "重试"
            });
    }

    /* Upload messages */
    if (kendo.ui.Upload) {
        kendo.ui.Upload.prototype.options.localization=
            $.extend(true, kendo.ui.Upload.prototype.options.localization,{
                "select": "选择文件",
                "cancel": "取消",
                "retry": "重试",
                "remove": "移除",
                "pause": "暂停",
                "resume": "恢复",
                "clearSelectedFiles": "清空",
                "uploadSelectedFiles": "上传",
                "dropFilesHere": "将文件拖拽到此处上传",
                "invalidFiles": "文件不符合要求！",
                "statusUploading": "上传中...",
                "statusUploaded": "上传成功！",
                "statusWarning": "上传警告！",
                "statusFailed": "上传失败！",
                "headerStatusUploading": "上传中...",
                "headerStatusPaused": "上传暂停",
                "headerStatusUploaded": "上传完成！",
                "invalidMaxFileSize": "文件太大！",
                "invalidMinFileSize": "文件太小！",
                "invalidFileExtension": "不支持的文件格式！"
            });
    }

    /* Validator messages */
    if (kendo.ui.Validator) {
        kendo.ui.Validator.prototype.options.messages =
            $.extend(true, kendo.ui.Validator.prototype.options.messages,{
                "required": "{0} 是必填项！",
                "pattern": "{0} 的格式不正确！",
                "min": "{0} 必须大于或等于 {1} ！",
                "max": "{0} 必须小于或等于 {1} ！",
                "step": "{0} 不是正确的步进值！",
                "email": "{0} 不是正确的电子邮件格式！",
                "url": "{0} 不是正确的网址格式！",
                "date": "{0} 不是正确的日期格式！",
                "dateCompare": "结束日期必须晚于或等于开始日期！"
            });
    }

    /* Progress messages */
    if (kendo.ui.progress) {
        kendo.ui.progress.messages =
            $.extend(true, kendo.ui.progress.messages, {
                "loading": "载入中..."
            });
    }

    /* Dialog messages */
    if (kendo.ui.Dialog) {
        kendo.ui.Dialog.prototype.options.messages =
            $.extend(true, kendo.ui.Dialog.prototype.options.localization, {
                "close": "关闭"
            });
    }

    /* Calendar messages */
    if (kendo.ui.Calendar) {
        kendo.ui.Calendar.prototype.options.messages =
            $.extend(true, kendo.ui.Calendar.prototype.options.messages, {
                "weekColumnHeader": "..."
            });
    }

    /* Alert messages */
    if (kendo.ui.Alert) {
        kendo.ui.Alert.prototype.options.messages =
            $.extend(true, kendo.ui.Alert.prototype.options.localization, {
                "okText": "确定"
            });
    }

    /* Confirm messages */
    if (kendo.ui.Confirm) {
        kendo.ui.Confirm.prototype.options.messages =
            $.extend(true, kendo.ui.Confirm.prototype.options.localization, {
                "okText": "确定",
                "cancel": "取消"
            });
    }

    /* Prompt messages */
    if (kendo.ui.Prompt) {
        kendo.ui.Prompt.prototype.options.messages =
            $.extend(true, kendo.ui.Prompt.prototype.options.localization, {
                "okText": "确定",
                "cancel": "取消"
            });
    }

    /* DateInput messages */
    if (kendo.ui.DateInput) {
        kendo.ui.DateInput.prototype.options.messages =
            $.extend(true, kendo.ui.DateInput.prototype.options.messages, {
                "year": "年",
                "month": "月",
                "day": "日",
                "weekday": "周",
                "hour": "时",
                "minute": "分",
                "second": "秒",
                "dayperiod": "上午/下午"
            });
    }

    /* Mobile Messages ------------------------------ */

    /* Mobile Scroller messages */
    if (kendo.mobile.ui.Scroller) {
        kendo.mobile.ui.Scroller.prototype.options.messages =
            $.extend(true, kendo.mobile.ui.Scroller.prototype.options.messages, {
                "pullTemplate": "下拉刷新",
                "releaseTemplate": "释放刷新",
                "refreshTemplate": "刷新中..."
            });
    }

    /* Mobile ListView messages */
    if (kendo.mobile.ui.ListView) {
        kendo.mobile.ui.ListView.prototype.options.messages =
            $.extend(true, kendo.mobile.ui.ListView.prototype.options.messages, {
                "loadMoreText": "点击载入更多",
                "pullTemplate": "下拉刷新",
                "releaseTemplate": "释放刷新",
                "refreshTemplate": "刷新中..."
            });
    }

})(window.kendo.jQuery);