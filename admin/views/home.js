$.getScript(path + 'js/countUp.min.js');
$(function() {
    // 首页统计数据获取
    $.fn.ajaxPost({
        ajaxUrl: 'json/home.json',
        succeed: function(res) {
            // 数字跳动
            // 浏览量
            new CountUp('pvCount', 0, res.count.pv_count).start();
            // 访问次数
            new CountUp('visitCount', 0, res.count.visit_count).start();
            // 访客数
            new CountUp('visitorCount', 0, res.count.visitor_count).start();
            // IP 数
            new CountUp('ipCount', 0, res.count.ip_count).start();
        }
    });
});