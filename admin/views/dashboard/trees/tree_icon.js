$(function() {
    // 获取数据源生成树形
    $('#treeView').kendoTreeView({
        dataSource: {
            transport: {
                read: function(options) { readTree(options, 'json/nav.json') }
            },
            schema: {
                data: 'data',
                model: {
                    id: 'id',
                    children: 'items'
                }
            }
        }
    });
});