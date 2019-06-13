$.getScript('js/jszip.min.js');
$(function () {
    // 定义 PDF 嵌入字体
    kendo.pdf.defineFont({
        'Microsoft YaHei': 'fonts/msyh.ttf',
        'Microsoft YaHei|Bold': 'fonts/msyhbd.ttf'
    });
    // 普通电子表格
    $('#generalSpreadsheet').kendoSpreadsheet({
        excel: {
            fileName: 'Spreadsheet.xlsx'
        },
        pdf: {
            fileName: 'Spreadsheet.pdf',
            creator: 'IKKI Studio',
            author: 'IKKI & Amikoko',
            title: '电子表格展示',
            subject: '黄金圣斗士',
            keywords: 'Gold Saint',
            area: 'selection',
            guidelines: true,
            hCenter: true,
            vCenter: true,
            landscape: false,
            fitWidth: true
        },
        headerHeight: 24,
        columns: 36,
        columnWidth: 72,
        headerWidth: 36,
        rows: 100,
        rowHeight: 24,
        images: {
            Pegasus: 'img/temp/Pegasus.png',
            Dragon: 'img/temp/Dragon.png',
            Cygnus: 'img/temp/Cygnus.png',
            Andromeda: 'img/temp/Andromeda.png',
            Phoenix: 'img/temp/Phoenix.png',
            Aries: 'img/temp/Aries.png',
            Taurus: 'img/temp/Taurus.png',
            Gemini: 'img/temp/Gemini.png',
            Cancer: 'img/temp/Cancer.png',
            Leo: 'img/temp/Leo.png',
            Virgo: 'img/temp/Virgo.png',
            Libra: 'img/temp/Libra.png',
            Scorpion: 'img/temp/Scorpion.png',
            Sagittarius: 'img/temp/Sagittarius.png',
            Capricorn: 'img/temp/Capricorn.png',
            Aquarius: 'img/temp/Aquarius.png',
            Picses: 'img/temp/Picses.png'
        },
        activeSheet: '黄金圣斗士',
        sheets: [
            {
                name: '青铜圣斗士',
                mergedCells: [
                    'A1:K1',
                    'A8:C8',
                    'G8:K8'
                ],
                frozenColumns: 3,
                frozenRows: 2,
                rows: [
                    {
                        index: 0,
                        height: 48,
                        cells: [
                            {
                                index: 0,
                                background: minorColor,
                                fontSize: 24,
                                color: 'white',
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '五小强档案'
                            }
                        ]
                    },
                    {
                        index: 1,
                        height: 30,
                        cells: [
                            {
                                index: 0,
                                background: 'rgb(238, 238, 238)'
                            },
                            {
                                index: 1,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                fontSize: 14,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '姓名'
                            },
                            {
                                index: 2,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                fontSize: 14,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '英文名'
                            },
                            {
                                index: 3,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                fontSize: 14,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '年龄(岁)'
                            },
                            {
                                index: 4,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                fontSize: 14,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '身高(cm)'
                            },
                            {
                                index: 5,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                fontSize: 14,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '体重(kg)'
                            },
                            {
                                index: 6,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                fontSize: 14,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '生日'
                            },
                            {
                                index: 7,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                fontSize: 14,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '星座'
                            },
                            {
                                index: 8,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                fontSize: 14,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '血型'
                            },
                            {
                                index: 9,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                fontSize: 14,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '出生地'
                            },
                            {
                                index: 10,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                fontSize: 14,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '修炼地'
                            }
                        ]
                    },
                    {
                        index: 2,
                        height: 60,
                        cells: [
                            {
                                index: 0
                            },
                            {
                                index: 1,
                                background: '#007bff',
                                color: '#fff',
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '星矢'
                            },
                            {
                                index: 2,
                                background: '#007bff',
                                color: '#fff',
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 'SEIYA'
                            },
                            {
                                index: 3,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 13
                            },
                            {
                                index: 4,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 165
                            },
                            {
                                index: 5,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 53
                            },
                            {
                                index: 6,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '12月1日'
                            },
                            {
                                index: 7,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '天马座 Pegasus',
                                wrap: true
                            },
                            {
                                index: 8,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 'B型'
                            },
                            {
                                index: 9,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '日本'
                            },
                            {
                                index: 10,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '希腊圣域'
                            }
                        ]
                    },
                    {
                        index: 3,
                        height: 60,
                        cells: [
                            {
                                index: 0
                            },
                            {
                                index: 1,
                                background: '#28a745',
                                color: '#fff',
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '紫龙'
                            },
                            {
                                index: 2,
                                background: '#28a745',
                                color: '#fff',
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 'SHIRYU'
                            },
                            {
                                index: 3,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 14
                            },
                            {
                                index: 4,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 172
                            },
                            {
                                index: 5,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 53
                            },
                            {
                                index: 6,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '10月4日'
                            },
                            {
                                index: 7,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '天龙座 Dragon',
                                wrap: true
                            },
                            {
                                index: 8,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 'A型'
                            },
                            {
                                index: 9,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '日本'
                            },
                            {
                                index: 10,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '中国庐山五老峰'
                            }
                        ]
                    },
                    {
                        index: 4,
                        height: 60,
                        cells: [
                            {
                                index: 0
                            },
                            {
                                index: 1,
                                background: '#17a2b8',
                                color: '#fff',
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '冰河'
                            },
                            {
                                index: 2,
                                background: '#17a2b8',
                                color: '#fff',
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 'HYOGA'
                            },
                            {
                                index: 3,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 14
                            },
                            {
                                index: 4,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 173
                            },
                            {
                                index: 5,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 60
                            },
                            {
                                index: 6,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '1月23日'
                            },
                            {
                                index: 7,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '白鸟座 Cygnus',
                                wrap: true
                            },
                            {
                                index: 8,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 'O型'
                            },
                            {
                                index: 9,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '苏联'
                            },
                            {
                                index: 10,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '西伯利亚'
                            }
                        ]
                    },
                    {
                        index: 5,
                        height: 60,
                        cells: [
                            {
                                index: 0
                            },
                            {
                                index: 1,
                                background: '#dc3545',
                                color: '#fff',
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '瞬'
                            },
                            {
                                index: 2,
                                background: '#dc3545',
                                color: '#fff',
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 'SHUN'
                            },
                            {
                                index: 3,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 13
                            },
                            {
                                index: 4,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 165
                            },
                            {
                                index: 5,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 51
                            },
                            {
                                index: 6,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '9月9日'
                            },
                            {
                                index: 7,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '仙女座 Andromeda',
                                wrap: true
                            },
                            {
                                index: 8,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 'A型'
                            },
                            {
                                index: 9,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '日本'
                            },
                            {
                                index: 10,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '仙女岛'
                            }
                        ]
                    },
                    {
                        index: 6,
                        height: 60,
                        cells: [
                            {
                                index: 0
                            },
                            {
                                index: 1,
                                background: '#ffc107',
                                color: '#000',
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '一辉'
                            },
                            {
                                index: 2,
                                background: '#ffc107',
                                color: '#000',
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 'IKKI'
                            },
                            {
                                index: 3,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 15
                            },
                            {
                                index: 4,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 175
                            },
                            {
                                index: 5,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 62
                            },
                            {
                                index: 6,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '8月15日'
                            },
                            {
                                index: 7,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '凤凰座 Phoenix',
                                wrap: true
                            },
                            {
                                index: 8,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: 'AB型'
                            },
                            {
                                index: 9,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '日本'
                            },
                            {
                                index: 10,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                value: '南太平洋死亡皇后岛'
                            }
                        ]
                    },
                    {
                        index: 7,
                        height: 28,
                        cells: [
                            {
                                index: 0,
                                bold: true,
                                color: accentColor,
                                textAlign: 'right',
                                verticalAlign: 'center',
                                value: '平均：'
                            },
                            {
                                index: 3,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                color: accentColor,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                formula: 'AVERAGE(D3:D7)'
                            },
                            {
                                index: 4,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                color: accentColor,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                formula: 'AVERAGE(E3:E7)'
                            },
                            {
                                index: 5,
                                background: 'rgb(238, 238, 238)',
                                bold: true,
                                color: accentColor,
                                textAlign: 'center',
                                verticalAlign: 'center',
                                formula: 'AVERAGE(F3:F7)'
                            }
                        ]
                    }
                ],
                columns: [
                    {
                        width: 60
                    },
                    {
                        width: 60
                    },
                    {
                        width: 80
                    },
                    {
                        width: 80
                    },
                    {
                        width: 80
                    },
                    {
                        width: 80
                    },
                    {
                        width: 80
                    },
                    {
                        width: 80
                    },
                    {
                        width: 80
                    },
                    {
                        width: 80
                    },
                    {
                        width: 128
                    }
                ],
                drawings: [
                    {
                        topLeftCell: 'A3',
                        offsetX: 6,
                        offsetY: 6,
                        width: 48,
                        height: 48,
                        image: 'Pegasus'
                    },
                    {
                        topLeftCell: 'A4',
                        offsetX: 6,
                        offsetY: 6,
                        width: 48,
                        height: 48,
                        image: 'Dragon'
                    },
                    {
                        topLeftCell: 'A5',
                        offsetX: 6,
                        offsetY: 6,
                        width: 48,
                        height: 48,
                        image: 'Cygnus'
                    },
                    {
                        topLeftCell: 'A6',
                        offsetX: 6,
                        offsetY: 6,
                        width: 48,
                        height: 48,
                        image: 'Andromeda'
                    },
                    {
                        topLeftCell: 'A7',
                        offsetX: 6,
                        offsetY: 6,
                        width: 48,
                        height: 48,
                        image: 'Phoenix'
                    }
                ]
            },
            {
                name: '黄金圣斗士',
                dataSource: {
                    transport: {
                        read: function (options) { readItem(options, 'json/list.json') }
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
                                password: { type: 'string',
                                    parse: function (e) {
                                        return e.replace(e.substr(0), '******');
                                    }
                                },
                                confirmPassword: { type: 'string',
                                    parse: function (e) {
                                        return e.replace(e.substr(0), '******');
                                    }
                                },
                                online: { type: 'boolean',
                                    parse: function (e) {
                                        if (e) {
                                            return '在线';
                                        } else {
                                            return '离线';
                                        }
                                    }
                                },
                                gender: { type: 'string',
                                    parse: function (e) {
                                        if (e === '1') {
                                            return '男';
                                        } else if (e === '2') {
                                            return '女';
                                        }
                                    }
                                },
                                age: { type: 'number',
                                    parse: function (e) {
                                        return e + ' 岁';
                                    }
                                },
                                height: { type: 'number' },
                                bloodType: { type: 'string',
                                    parse: function (e) {
                                        if (e === '1') {
                                            return 'A 型';
                                        } else if (e === '2') {
                                            return 'B 型';
                                        } else if (e === '3') {
                                            return 'O 型';
                                        } else if (e === '4') {
                                            return 'AB 型';
                                        } else if (e === '5') {
                                            return '其他';
                                        }
                                    }
                                },
                                birthday: { type: 'date',
                                    parse: function (e) {
                                        return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                                    }
                                },
                                mateBirthday: { type: 'date',
                                    parse: function (e) {
                                        return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                                    }
                                },
                                creditCard: { type: 'string',
                                    parse: function (e) {
                                        return e.replace(e.substr(2, 12), '** **** **** **');
                                    }
                                },
                                asset: { type: 'number' },
                                nativePlace: { type: 'string',
                                    parse: function (e) {
                                        return e.provinceName + ' - ' + e.cityName + ' - ' + e.areaName;
                                    }
                                },
                                domicile: { type: 'string',
                                    parse: function (e) {
                                        return e.name;
                                    }
                                },
                                nation: { type: 'string',
                                    parse: function (e) {
                                        return e.nationName;
                                    }
                                },
                                zodiac: { type: 'string',
                                    parse: function (e) {
                                        return e.zodiacName;
                                    }
                                },
                                language: { type: 'string' },
                                education: { type: 'string',
                                    parse: function (e) {
                                        var str = '';
                                        for (var i = 0; i < e.length; i++) {
                                            if (e[i] === '1') {
                                                str += '小学 ';
                                            } else if (e[i] === '2') {
                                                str += '初中 ';
                                            } else if (e[i] === '3') {
                                                str += '高中 ';
                                            } else if (e[i] === '4') {
                                                str += '中专 ';
                                            } else if (e[i] === '5') {
                                                str += '大专 ';
                                            } else if (e[i] === '6') {
                                                str += '本科 ';
                                            } else if (e[i] === '7') {
                                                str += '硕士 ';
                                            } else if (e[i] === '8') {
                                                str += '博士 ';
                                            } else if (e[i] === '9') {
                                                str += '其他 ';
                                            }
                                        }
                                        return str;
                                    }
                                },
                                graduation: { type: 'date',
                                    parse: function (e) {
                                        return kendo.toString(new Date(e), 'yyyy');
                                    }
                                },
                                firstJob: { type: 'date',
                                    parse: function (e) {
                                        return kendo.toString(new Date(e), 'yyyy-MM');
                                    }
                                },
                                mobile: { type: 'string' },
                                email: { type: 'string' },
                                homepage: { type: 'string' },
                                getUp: { type: 'date',
                                    parse: function (e) {
                                        return kendo.toString(kendo.parseDate(e), 'HH:mm');
                                    }
                                },
                                importantMoment: { type: 'date',
                                    parse: function (e) {
                                        return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd HH:mm');
                                    }
                                },
                                character: { type: 'number',
                                    parse: function (e) {
                                        if (e === 10) {
                                            return '超级开朗';
                                        } else if (e === 8) {
                                            return '非常开朗';
                                        } else if (e === 6) {
                                            return '很开朗';
                                        } else if (e === 4) {
                                            return '比较开朗';
                                        } else if (e === 2) {
                                            return '有点开朗';
                                        } else if (e === 0) {
                                            return '普通';
                                        } else if (e === -2) {
                                            return '有点内向';
                                        } else if (e === -4) {
                                            return '比较内向';
                                        } else if (e === -6) {
                                            return '很内向';
                                        } else if (e === -8) {
                                            return '非常内向';
                                        } else if (e === -10) {
                                            return '超级内向';
                                        }
                                    }
                                },
                                color: { type: 'string' },
                                constellation: { type: 'string',
                                    parse: function (e) {
                                        var str = '';
                                        for (var i = 0; i < e.length; i++) {
                                            if (e[i] === '1') {
                                                str += '白羊座 ';
                                            } else if (e[i] === '2') {
                                                str += '金牛座 ';
                                            } else if (e[i] === '3') {
                                                str += '双子座 ';
                                            } else if (e[i] === '4') {
                                                str += '巨蟹座 ';
                                            } else if (e[i] === '5') {
                                                str += '狮子座 ';
                                            } else if (e[i] === '6') {
                                                str += '处女座 ';
                                            } else if (e[i] === '7') {
                                                str += '天秤座 ';
                                            } else if (e[i] === '8') {
                                                str += '天蝎座 ';
                                            } else if (e[i] === '9') {
                                                str += '射手座 ';
                                            } else if (e[i] === '10') {
                                                str += '山羊座 ';
                                            } else if (e[i] === '11') {
                                                str += '水瓶座 ';
                                            } else if (e[i] === '12') {
                                                str += '双鱼座 ';
                                            }
                                        }
                                        return str;
                                    }
                                },
                                tourism: { type: 'string',
                                    parse: function (e) {
                                        var str = '';
                                        for (var i = 0; i < e.length; i++) {
                                            str += e[i].name + ' ';
                                        }
                                        return str;
                                    }
                                },
                                summary: { type: 'string' },
                                photo: { type: 'string',
                                    parse: function (e) {
                                        return '　　' + e.url;
                                    }
                                },
                                sign: { type: 'string' }
                            }
                        }
                    }
                },
                frozenColumns: 4,
                frozenRows: 1,
                activeCell: 'O14',
                selection: 'C6:D8',
                filter: {
                    ref: 'A1:AI13'
                },
                rows: [
                    {
                        index: 0,
                        cells: [
                            {
                                index: 0,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: 'ID'
                            },
                            {
                                index: 1,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '用户名'
                            },
                            {
                                index: 2,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '姓名'
                            },
                            {
                                index: 3,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '昵称'
                            },
                            {
                                index: 4,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '密码'
                            },
                            {
                                index: 5,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '确认密码'
                            },
                            {
                                index: 6,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '状态'
                            },
                            {
                                index: 7,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '性别'
                            },
                            {
                                index: 8,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '年龄'
                            },
                            {
                                index: 9,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '身高'
                            },
                            {
                                index: 10,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '血型'
                            },
                            {
                                index: 11,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '生日'
                            },
                            {
                                index: 12,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '配偶生日'
                            },
                            {
                                index: 13,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '银行卡'
                            },
                            {
                                index: 14,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '资产'
                            },
                            {
                                index: 15,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '籍贯'
                            },
                            {
                                index: 16,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '居住地'
                            },
                            {
                                index: 17,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '民族'
                            },
                            {
                                index: 18,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '生肖'
                            },
                            {
                                index: 19,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '语言'
                            },
                            {
                                index: 20,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '教育程度'
                            },
                            {
                                index: 21,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '毕业年份'
                            },
                            {
                                index: 22,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '参加工作年月'
                            },
                            {
                                index: 23,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '手机'
                            },
                            {
                                index: 24,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '电子邮件'
                            },
                            {
                                index: 25,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '个人主页'
                            },
                            {
                                index: 26,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '起床时间'
                            },
                            {
                                index: 27,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '最有意义的时刻'
                            },
                            {
                                index: 28,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '性格'
                            },
                            {
                                index: 29,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '颜色喜好'
                            },
                            {
                                index: 30,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '相配的星座'
                            },
                            {
                                index: 31,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '旅游足迹'
                            },
                            {
                                index: 32,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '自我介绍'
                            },
                            {
                                index: 33,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '头像'
                            },
                            {
                                index: 34,
                                background: minorColor,
                                bold: true,
                                color: '#fff',
                                comment: '签名'
                            }
                        ]
                    },
                    {
                        index: 1,
                        cells: [
                            {
                                index: 0,
                                enable: false
                            },
                            {
                                index: 6,
                                color: '#809507'
                            },
                            {
                                index: 29,
                                background: 'rgba(195, 155, 143, 1)',
                                color: '#fff'
                            },
                            {
                                index: 33,
                                link: 'javascript:showBigPic("img/temp/Aries.png");'
                            },
                            {
                                index: 34,
                                background: 'rgba(217, 182, 172, .8)'
                            }
                        ]
                    },
                    {
                        index: 2,
                        cells: [
                            {
                                index: 0,
                                enable: false
                            },
                            {
                                index: 6,
                                color: '#809507'
                            },
                            {
                                index: 29,
                                background: 'rgba(215, 112, 173, 1)',
                                color: '#fff'
                            },
                            {
                                index: 33,
                                link: 'javascript:showBigPic("img/temp/Taurus.png");'
                            },
                            {
                                index: 34,
                                background: 'rgba(236, 135, 192, .8)'
                            }
                        ]
                    },
                    {
                        index: 3,
                        cells: [
                            {
                                index: 0,
                                enable: false
                            },
                            {
                                index: 6,
                                color: '#a64515'
                            },
                            {
                                index: 29,
                                background: 'rgba(218, 68, 83, 1)',
                                color: '#fff'
                            },
                            {
                                index: 33,
                                link: 'javascript:showBigPic("img/temp/Gemini.png");'
                            },
                            {
                                index: 34,
                                background: 'rgba(237, 85, 101, .8)'
                            }
                        ]
                    },
                    {
                        index: 4,
                        cells: [
                            {
                                index: 0,
                                enable: false
                            },
                            {
                                index: 6,
                                color: '#a64515'
                            },
                            {
                                index: 29,
                                background: 'rgba(255, 152, 0, 1)',
                                color: '#fff'
                            },
                            {
                                index: 33,
                                link: 'javascript:showBigPic("img/temp/Cancer.png");'
                            },
                            {
                                index: 34,
                                background: 'rgba(255, 183, 77, .8)'
                            }
                        ]
                    },
                    {
                        index: 5,
                        cells: [
                            {
                                index: 0,
                                enable: false
                            },
                            {
                                index: 6,
                                color: '#809507'
                            },
                            {
                                index: 29,
                                background: 'rgba(246, 187, 66, 1)',
                                color: '#fff'
                            },
                            {
                                index: 33,
                                link: 'javascript:showBigPic("img/temp/Leo.png");'
                            },
                            {
                                index: 34,
                                background: 'rgba(255, 206, 84, .8)'
                            }
                        ]
                    },
                    {
                        index: 6,
                        cells: [
                            {
                                index: 0,
                                enable: false
                            },
                            {
                                index: 6,
                                color: '#809507'
                            },
                            {
                                index: 29,
                                background: 'rgba(140, 193, 82, 1)',
                                color: '#fff'
                            },
                            {
                                index: 33,
                                link: 'javascript:showBigPic("img/temp/Virgo.png");'
                            },
                            {
                                index: 34,
                                background: 'rgba(160, 212, 104, .8)'
                            }
                        ]
                    },
                    {
                        index: 7,
                        cells: [
                            {
                                index: 0,
                                enable: false
                            },
                            {
                                index: 6,
                                color: '#809507'
                            },
                            {
                                index: 29,
                                background: 'rgba(55, 188, 155, 1)',
                                color: '#fff'
                            },
                            {
                                index: 33,
                                link: 'javascript:showBigPic("img/temp/Libra.png");'
                            },
                            {
                                index: 34,
                                background: 'rgba(72, 207, 173, .8)'
                            }
                        ]
                    },
                    {
                        index: 8,
                        cells: [
                            {
                                index: 0,
                                enable: false
                            },
                            {
                                index: 6,
                                color: '#809507'
                            },
                            {
                                index: 29,
                                background: 'rgba(59, 175, 218, 1)',
                                color: '#fff'
                            },
                            {
                                index: 33,
                                link: 'javascript:showBigPic("img/temp/Scorpion.png");'
                            },
                            {
                                index: 34,
                                background: 'rgba(79, 193, 233, .8)'
                            }
                        ]
                    },
                    {
                        index: 9,
                        cells: [
                            {
                                index: 0,
                                enable: false
                            },
                            {
                                index: 6,
                                color: '#809507'
                            },
                            {
                                index: 29,
                                background: 'rgba(74, 137, 220, 1)',
                                color: '#fff'
                            },
                            {
                                index: 33,
                                link: 'javascript:showBigPic("img/temp/Sagittarius.png");'
                            },
                            {
                                index: 34,
                                background: 'rgba(93, 156, 236, .8)'
                            }
                        ]
                    },
                    {
                        index: 10,
                        cells: [
                            {
                                index: 0,
                                enable: false
                            },
                            {
                                index: 6,
                                color: '#a64515'
                            },
                            {
                                index: 29,
                                background: 'rgba(150, 122, 220, 1)',
                                color: '#fff'
                            },
                            {
                                index: 33,
                                link: 'javascript:showBigPic("img/temp/Capricorn.png");'
                            },
                            {
                                index: 34,
                                background: 'rgba(172, 146, 236, .8)'
                            }
                        ]
                    },
                    {
                        index: 11,
                        cells: [
                            {
                                index: 0,
                                enable: false
                            },
                            {
                                index: 6,
                                color: '#a64515'
                            },
                            {
                                index: 29,
                                background: 'rgba(67, 74, 84, 1)',
                                color: '#fff'
                            },
                            {
                                index: 33,
                                link: 'javascript:showBigPic("img/temp/Aquarius.png");'
                            },
                            {
                                index: 34,
                                background: 'rgba(101, 109, 120, .8)'
                            }
                        ]
                    },
                    {
                        index: 12,
                        cells: [
                            {
                                index: 0,
                                enable: false
                            },
                            {
                                index: 6,
                                color: '#a64515'
                            },
                            {
                                index: 29,
                                background: 'rgba(170, 178, 189, 1)',
                                color: '#fff'
                            },
                            {
                                index: 33,
                                link: 'javascript:showBigPic("img/temp/Picses.png");'
                            },
                            {
                                index: 34,
                                background: 'rgba(204, 209, 217, .8)'
                            }
                        ]
                    },
                    {
                        index: 13,
                        height: 30,
                        cells: [
                            {
                                index: 9,
                                bold: true,
                                fontSize: 16,
                                color: accentColor,
                                formula: 'AVERAGE(J2:J13)'
                            },
                            {
                                index: 14,
                                bold: true,
                                fontSize: 16,
                                color: accentColor,
                                formula: 'SUM(O2:O13)'
                            }
                        ]
                    }
                ],
                columns: [
                    {
                        width: 45
                    },
                    {
                        width: 85
                    },
                    {
                        width: 80
                    },
                    {
                        width: 80
                    },
                    {
                        width: 80
                    },
                    {
                        width: 125
                    },
                    {
                        width: 60
                    },
                    {
                        width: 65
                    },
                    {
                        width: 45
                    },
                    {
                        width: 60
                    },
                    {
                        width: 85
                    },
                    {
                        width: 75
                    },
                    {
                        width: 100
                    },
                    {
                        width: 105
                    },
                    {
                        width: 90
                    },
                    {
                        width: 200
                    },
                    {
                        width: 75
                    },
                    {
                        width: 70
                    },
                    {
                        width: 65
                    },
                    {
                        width: 165
                    },
                    {
                        width: 90
                    },
                    {
                        width: 85
                    },
                    {
                        width: 70
                    },
                    {
                        width: 85
                    },
                    {
                        width: 130
                    },
                    {
                        width: 135
                    },
                    {
                        width: 60
                    },
                    {
                        width: 125
                    },
                    {
                        width: 80
                    },
                    {
                        width: 130
                    },
                    {
                        width: 125
                    },
                    {
                        width: 150
                    },
                    {
                        width: 250
                    },
                    {
                        width: 165
                    },
                    {
                        width: 780
                    }
                ],
                drawings: [
                    {
                        topLeftCell: 'AH2',
                        offsetX: 4,
                        offsetY: 4,
                        width: 18,
                        height: 18,
                        image: 'Aries'
                    },
                    {
                        topLeftCell: 'AH3',
                        offsetX: 4,
                        offsetY: 4,
                        width: 18,
                        height: 18,
                        image: 'Taurus'
                    },
                    {
                        topLeftCell: 'AH4',
                        offsetX: 4,
                        offsetY: 4,
                        width: 18,
                        height: 18,
                        image: 'Gemini'
                    },
                    {
                        topLeftCell: 'AH5',
                        offsetX: 4,
                        offsetY: 4,
                        width: 18,
                        height: 18,
                        image: 'Cancer'
                    },
                    {
                        topLeftCell: 'AH6',
                        offsetX: 4,
                        offsetY: 4,
                        width: 18,
                        height: 18,
                        image: 'Leo'
                    },
                    {
                        topLeftCell: 'AH7',
                        offsetX: 4,
                        offsetY: 4,
                        width: 18,
                        height: 18,
                        image: 'Virgo'
                    },
                    {
                        topLeftCell: 'AH8',
                        offsetX: 4,
                        offsetY: 4,
                        width: 18,
                        height: 18,
                        image: 'Libra'
                    },
                    {
                        topLeftCell: 'AH9',
                        offsetX: 4,
                        offsetY: 4,
                        width: 18,
                        height: 18,
                        image: 'Scorpion'
                    },
                    {
                        topLeftCell: 'AH10',
                        offsetX: 4,
                        offsetY: 4,
                        width: 18,
                        height: 18,
                        image: 'Sagittarius'
                    },
                    {
                        topLeftCell: 'AH11',
                        offsetX: 4,
                        offsetY: 4,
                        width: 18,
                        height: 18,
                        image: 'Capricorn'
                    },
                    {
                        topLeftCell: 'AH12',
                        offsetX: 4,
                        offsetY: 4,
                        width: 18,
                        height: 18,
                        image: 'Aquarius'
                    },
                    {
                        topLeftCell: 'AH13',
                        offsetX: 4,
                        offsetY: 4,
                        width: 18,
                        height: 18,
                        image: 'Picses'
                    }
                ]
            }
        ]
    });
});