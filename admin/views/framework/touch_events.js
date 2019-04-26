$(function () {
    // 触碰
    $('#touchBox').kendoTouch({
        touchstart: function (e) {
            noticeMsg('触碰~', 'info', 'center', 500);
        }
    });
    // 拖放
    $('#dragBox').kendoTouch({
        dragstart: function (e) {
            noticeMsg('拖放~', 'info', 'center', 500);
        }
    });
    // 点击
    $('#tapBox').kendoTouch({
        tap: function (e) {
            noticeMsg('点击~', 'info', 'center', 500);
        }
    });
    // 双击
    $('#doubletapBox').kendoTouch({
        doubletap: function (e) {
            noticeMsg('双击~', 'info', 'center', 500);
        }
    });
    // 按住
    $('#holdBox').kendoTouch({
        hold: function (e) {
            noticeMsg('按住~', 'info', 'center', 500);
        }
    });
    // 滑动
    $('#swipeBox').kendoTouch({
        swipe: function (e) {
            noticeMsg('滑动~', 'info', 'center', 500);
        }
    });
    // 手势
    $('#gestureBox').kendoTouch({
        gesturestart: function (e) {
            noticeMsg('手势~', 'info', 'center', 500);
        }
    });
});