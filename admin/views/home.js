$.getScript(path + 'js/countUp.min.js');
$(function() {
    // 首页统计数据获取
    $.fn.ajaxPost({
        ajaxUrl: 'json/home.json',
        succeed: function(res) {
            // 浏览量
            new CountUp('pvCount', 0, res.count.pv_count).start();
            // 访问次数
            new CountUp('visitCount', 0, res.count.visit_count).start();
            // 访客数
            new CountUp('visitorCount', 0, res.count.visitor_count).start();
            // IP 数
            new CountUp('ipCount', 0, res.count.ip_count).start();
            // 访客趋势图
            $('#trendMonth').kendoChart({
                theme: 'sass',
                chartArea: {
                    height: 240
                },
                dataSource: {
                    data: res.area,
                    schema: {
                        model: {
                            id: 'uid',
                            fields: {
                                category: { type: 'string' },
                                pv_count: { type: 'number' },
                                visitor_count: { type: 'number' }
                            }
                        }
                    }
                },
                legend: {
                    position: 'top'
                },
                seriesDefaults: {
                    type: 'area',
                    area: {
                        line: {
                            width: 1,
                            style: 'smooth'
                        }
                    },
                    markers: {
                        visible: true,
                        size: 3
                    }
                },
                series: [
                    {
                        field: 'pv_count',
                        name: '浏览量（PV）'
                    },
                    {
                        field: 'visitor_count',
                        name: '访客数（UV）'
                    }
                ],
                categoryAxis: {
                    field: 'category'
                },
                tooltip: {
                    visible: true,
                    template: '#= value #'
                }
            });
            // 新访客占比
            $('#visitNew').kendoChart({
                theme: 'sass',
                chartArea: {
                    height: 240
                },
                dataSource: {
                    data: res.donut,
                    schema: {
                        model: {
                            id: 'uid',
                            fields: {
                                category: { type: 'string' },
                                value: { type: 'number' }
                            }
                        }
                    }
                },
                legend: {
                    visible: false
                },
                seriesDefaults: {
                    type: 'donut',
                    startAngle: 90,
                    holeSize: 100
                },
                series: [
                    {
                        field: 'value'
                    }
                ]
            });
            $('#visitNewInnerContent').text(kendo.toString(res.donut[0].value, 'p1')).css('color', accentColor);
        }
    });
});