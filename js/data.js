var cardDataList = new Array({
    'url' : './form.html',
    'card_img': './img/01.png',
    'title' : 'Ndigo',
    'tag' : 'MasterCard',
    'limit' : 'Annual Fee GRATIS',
    'bank': 'BEIJING',
    'level' : 'Gold',
    'detail' : './carddetail01.html',
},
{
    'url' : './form.html',
    'card_img': './img/02.png',
    'title' : 'Capital One',
    'tag' : 'MasterCard',
    'limit' : 'Annual Fee GRATIS',
    'bank': 'GUANGDA',
    'level' : 'Platinum',
    'detail' : './carddetail02.html',
},
{
    'url' : './form.html',
    'card_img': './img/03.png',
    'title' : 'Catital',
    'tag' : 'MasterCard',
    'limit' : 'Annual Fee GRATIS',
    'bank': 'ICBC',
    'level' : 'Titanium',
    'detail' : './carddetail03.html'
},
{
    'url' : './form.html',
    'card_img': './img/04.png',
    'title' : 'Freedom',
    'tag' : 'VISA',
    'limit' : 'Annual Fee Rp 250rb',
    'bank': 'MINTAI',
    'level' : 'Gold',
    'detail' : './carddetail04.html'
},
{
    'url' : './form.html',
    'card_img': './img/05.png',
    'title' : 'OneZi',
    'limit' : 'Annual Fee Rp 300rb',
    'tag' : 'VISA',
    'bank': 'PUFA',
    'level' : 'Titanium',
    'detail' : './carddetail05.html'
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
    <div class='left'><a href='"+ e.detail + "'>\
        <img src='"+e.card_img+"' alt='"+e.title+"'></a></div>\
    <div class='center'><a href='"+e.detail+"'><h1 class='title'>"+e.title+"</h1></a>\
        <ul class='sub-infos'>\
            <li>"+e.bank+"</li>\
        </ul>\
        <ul class='tags'>\
            <li>"+e.limit+"</li>\
        </ul>\
    </div>\
    <div class='right highlight'>\
        <a href='"+e.detail+"' onclick=' '>Info Detail</a>\
    </div>\
</div>"
}

var loadCard = function(bank){
    console.log(bank)
    $("#card-list").empty();
    for (i in cardDataList){
    if(bank === "Rekomendasi"){
        console.log("")
        $("#card-list").append(htmlGenerate(cardDataList[i]));
    }
    if(cardDataList[i].bank === bank){
        console.log(bank +"nice")
        $("#card-list").append(htmlGenerate(cardDataList[i]));}
    }
}
