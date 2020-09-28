let arr = [
    [
        '130421',
        '邯郸县',
        '130400',
        '邯郸',
        '3',
        '0310',
        '056101',
        '中国,河北省,邯郸市,邯郸县',
        '114.53103',
        '36.59385',
        'Handan'
    ],
    [
        '130423',
        '临漳县',
        '130400',
        '临漳',
        '3',
        '0310',
        '056600',
        '中国,河北省,邯郸市,临漳县',
        '114.6195',
        '36.33461',
        'Linzhang'
    ],
    [
        '130424',
        '成安县',
        '130400',
        '成安',
        '3',
        '0310',
        '056700',
        '中国,河北省,邯郸市,成安县',
        '114.66995',
        '36.44411',
        "Cheng'an"
    ],
    [
        '130425',
        '大名县',
        '130400',
        '大名',
        '3',
        '0310',
        '056900',
        '中国,河北省,邯郸市,大名县',
        '115.15362',
        '36.27994',
        'Daming'
    ]
];

const result = arr.reduce((acc, cur) => {
    let item = {};
    let reverseItem = cur.reverse();
    item['name'] = reverseItem[0] ? reverseItem[0] : null;
    item['num'] = reverseItem[1] ? reverseItem[1] : null;
    acc.push(item);
    return acc;
}, []);

console.log(result);
