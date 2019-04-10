var cardDataList = new Array({
    'url' : '',
    'card_img': './img/01.png',
    'title' : 'Wave n Go',
    'tag' : 'Visa',
    'bank': 'CIMB Niaga',
    'level' : 'Gold',
    'detail' : './carddetail.html'
},
{
    'url' : '',
    'card_img': './img/02.png',
    'title' : 'White Card',
    'tag' : 'Master',
    'bank': 'Maybank',
    'level' : 'Platinum'
},
{
    'url' : '',
    'card_img': './img/03.png',
    'title' : 'Style',
    'tag' : 'Master',
    'bank': 'BNI',
    'level' : 'Titanium'
},
{
    'url' : '',
    'card_img': './img/04.png',
    'title' : 'Easy Card',
    'tag' : 'Master',
    'bank': 'BRI',
    'level' : 'Gold'
},
{
    'url' : '',
    'card_img': './img/05.png',
    'title' : 'Skyz Card',
    'tag' : 'Master',
    'bank': 'Mandiri',
    'level' : 'Titanium'
},
// {
//     'url' : '',
//     'card_img': './index_files/7ff2f0f866ac4508b0a089382bf7112754f5',
//     'title' : '浦发白金卡简约版',
//     'tag' : '银联',
//     'bank': '浦发',
//     'level' : '白金卡'
// },
// {
//     'url' : '',
//     'card_img': './index_files/b47c189a53de42ca88c97d12ccc6bfb37d36',
//     'title' : '浦发万事达卡无价世界卡',
//     'tag' : '银联',
//     'bank': '浦发',
//     'level' : '世界卡'
// },
// {
//     'url' : '',
//     'card_img': './index_files/b47c189a53de42ca88c97d12ccc6bfb37d36',
//     'title' : '建设龙卡优享信用卡',
//     'tag' : '银联',
//     'bank': '建设',
//     'level' : '金卡'
// }
)

var htmlGenerate = function(e){
    return "<div class='m-card-item'>\
    <div class='left'><a href='"+ e.url + "'>\
        <img src='"+e.card_img+"' alt='"+e.title+"'></a></div>\
    <div class='center'><a href='"+e.url+"'><h1 class='title'>"+e.title+"</h1></a>\
        <ul class='sub-infos'>\
            <li></li>\
        </ul>\
        <ul class='tags'>\
            <li>"+e.bank+"</li>\
            <li>"+e.tag+"</li>\
        </ul>\
    </div>\
    <div class='right highlight'>\
        <a href='"+e.detail+"' onclick=' '>免费申请</a>\
    </div>\
</div>"
}

var loadCard = function(bank){
    $("#card-list").empty();
    for (i in cardDataList){
        // console.log(i);
        // console.log(bank);
    if(bank === "推荐"){
        $("#card-list").append(htmlGenerate(cardDataList[i]));
    }
    if(cardDataList[i].bank === bank){
        $("#card-list").append(htmlGenerate(cardDataList[i]));}
    }
}
