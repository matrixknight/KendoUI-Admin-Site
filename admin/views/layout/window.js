$(function () {
    // 警告框小按钮
    $('#alertMsgSuccess').click(function () {
        alertMsgBtn('这里是成功信息的内容~', 'success');
    });
    $('#alertMsgInfo').click(function () {
        alertMsgBtn('这里是普通信息的内容~', 'info');
    });
    $('#alertMsgQuestion').click(function () {
        alertMsgBtn('这里是提问信息的内容~', 'question');
    });
    $('#alertMsgWarning').click(function () {
        alertMsgBtn('这里是警告信息的内容~', 'warning');
    });
    $('#alertMsgError').click(function () {
        alertMsgBtn('这里是错误信息的内容~', 'error');
    });
    // 确认框小按钮
    $('#confirmMsgSuccess').click(function () {
        confirmMsgBtn('成功信息', '这里是成功信息的内容~', 'success', function () {
            alertMsgNoBtn('你点了确定~', 'info');
        });
    });
    $('#confirmMsgInfo').click(function () {
        confirmMsgBtn('普通信息', '这里是普通信息的内容~', 'info', function () {
            alertMsgNoBtn('你点了确定~', 'info');
        });
    });
    $('#confirmMsgQuestion').click(function () {
        confirmMsgBtn('提问信息', '这里是提问信息的内容~', 'question', function () {
            alertMsgNoBtn('你点了确定~', 'info');
        });
    });
    $('#confirmMsgWarning').click(function () {
        confirmMsgBtn('警告信息', '这里是警告信息的内容~', 'warning', function () {
            alertMsgNoBtn('你点了确定~', 'info');
        });
    });
    $('#confirmMsgError').click(function () {
        confirmMsgBtn('错误信息', '这里是错误信息的内容~', 'error', function () {
            alertMsgNoBtn('你点了确定~', 'info');
        });
    });
    // 弹出层
    $('#divWindow').click(function () {
        divWindow('弹出层', '60%', '30%', $('#window').html());
    });
    // 弹出页
    $('#iframeWindow').click(function () {
        iframeWindow('弹出页', '80%', '40%', 'admin/login.html');
    });
    // 大图预览
    $('#showBigPic').click(function () {
        showBigPic('img/lock_bg.jpg');
    });
    // 限制范围
    $('#rangeWindow').click(function () {
        var divWindow = $('<div class="window-box"></div>').kendoWindow({
            draggable: {
                containment: "#container"
            },
            title: '限制层',
            modal: true,
            close: function () {
                divWindow.destroy();
            }
        }).data('kendoWindow');
        divWindow.content('<div>拖放窗口无法超出阴影限制的范围~</div>').open();
    });
    // 自定义模态框
    $('#customWindow').click(function () {
        var divWindow = $('<div class="window-box"></div>').kendoWindow({
            actions: ['Custom', 'Minimize', 'Maximize', 'Close'],
            animation: {open: {effects: 'fade:in'}, close: {effects: 'fade:out'}},
            title: {
                text: '<i class="fab fa-weixin mr-2"></i>自定义标题图标',
                encoded: false
            },
            minWidth: 320,
            minHeight: 160,
            pinned: true,
            close: function () {
                divWindow.destroy();
            }
        }).data('kendoWindow');
        divWindow.content('<div class="py-3">左上角标题图标及右上角第一个按钮均为自定义~</div>').center().open();
        divWindow.wrapper.find('.k-i-custom').parent().click(function (e) {
            divWindow.title('换个标题');
            e.preventDefault();
        });
    });
});