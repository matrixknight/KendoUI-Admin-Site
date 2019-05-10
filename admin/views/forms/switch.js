$(function () {
    // DOM 转换框
    $('#domSwitch').kendoSwitch({
        messages: {
            checked: '',
            unchecked: ''
        }
    });
    // 普通转换框
    $('#generalSwitch').kendoSwitch({
        messages: {
            checked: '',
            unchecked: ''
        }
    });
    // 选中转换框
    $('#checkedSwitch').kendoSwitch({
        messages: {
            checked: '',
            unchecked: ''
        },
        checked: true
    });
    // 只读转换框
    $('#readonlySwitch').kendoSwitch({
        messages: {
            checked: '',
            unchecked: ''
        },
        checked: true,
        readonly: true
    });
    // 禁用转换框
    $('#disabledSwitch').kendoSwitch({
        messages: {
            checked: '',
            unchecked: ''
        },
        enabled: false
    });
    // 文字转换框
    $('#textSwitch').kendoSwitch({
        checked: true
    });
    // 等宽转换框
    $('#widthSwitch').kendoSwitch({
        messages: {
            checked: '',
            unchecked: ''
        },
        width: '100%'
    });
});