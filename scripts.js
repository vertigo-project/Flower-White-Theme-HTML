setInterval(function () { bgchange(); }, 10000);

preloads = "bg.jpg,bg2.jpg,bg3.jpg".split(",");
var tempImg = [];

for(var x=0;x<preloads.length;x++) {
    tempImg[x] = new Image();
    tempImg[x].src = preloads[x];
}

function bgchange()
{
    var bg;
    var a = Math.random()*4;
    a=Math.floor(a);
    
    if(a==0) bg = "url('bg.jpg')";
    if(a==1) bg = "url('bg2.jpg')";
    if(a==3) bg = "url('bg3.jpg')";
    document.body.style.transition = "all 0.4s";
    document.body.style.backgroundImage = bg;
}
function eksport(kod)
{
    var u=document.getElementById("fulllarticle");
    u.innerHTML=kod;
}
function fadedivnow(iddiv)
{
    var thisdiv = document.getElementById(iddiv);

    thisdiv.style.opacity=0;
    $(thisdiv).animate({opacity: 1}, 350);
}
function about()
{
    var txt = "<div id=\"actualinfo\"><span class=\"title\">O Nas</span><br /><br /><div style=\"font-size:11px;color:#252525\">Flower-White jest szablonem stworzonym przez <a href=\"http://a.test10.besaba.com/\">Vertigo Project</a>, bazującym na najnowszych rozwiązaniach i trendach w sieci oferujących nowoczesny wygląd strony.</div><div style=\"margin-top:40px;font-size:11px;\"><span class=\"title\">Kontakt</span><br /><br />E-mail: <a href=\"mailto:formoza@autistici.org\">formoza@autistici.org</a><br />Właściciel: Kamil Wiśniewski (<a href=\"http://a.test10.besaba.com/\">A.Test10</a>)<br />Cena: Do negocjacji</div></div>";
    eksport(txt);
    fadedivnow('actualinfo');
}
function offerthis()
{
    var txt = "<div id=\"actualinfo\"><span class=\"title\">Oferta</span><div id=\"offerstyle\">- Przejrzytość strony <br />- Intuicyjna nawigacja<br />- Łatwość edycji kodu<br />- Nowoczesny wygląd<br />- Szybkość wczytywania<br />- Zgodność wyświetlania na różnych platformach<br /><br /><span style=\"font-style:italic;font-size:16px;\"><a href=\"http://a.test10.besaba.com/\">Vertigo Project</a></span></div></div>";
    eksport(txt);
    fadedivnow('actualinfo');
}
function gallery()
{
    var txt = "<div id=\"actualinfo\"><div id=\"sliderFrame\"><div id=\"ribbon\"></div><div id=\"slider\"><a class=\"lazyImage\" href=\"gallery/img1.jpg\" title=\"Zdjęcie 1\"></a><a class=\"lazyImage\" href=\"gallery/img2.jpg\" title=\"Zdjęcie 2\"></a><a class=\"lazyImage\" href=\"gallery/img3.jpg\" title=\"Zdjęcie 3\"></a><a class=\"lazyImage\" href=\"gallery/img4.jpg\" title=\"Zdjęcie 4\"></a><a class=\"lazyImage\" href=\"gallery/img5.jpg\" title=\"Zdjęcie 5\"></a><a class=\"lazyImage\" href=\"gallery/img6.jpg\" title=\"Zdjęcie 6\"></a><a class=\"lazyImage\" href=\"gallery/img7.jpg\" title=\"Zdjęcie 7\"></a><a class=\"lazyImage\" href=\"gallery/img8.jpg\" title=\"Zdjęcie 8\"></a></div><!--thumbnails--><div id=\"thumbs\"><div class=\"thumb\"><img src=\"gallery/img1_thumb.jpg\" /></div><div class=\"thumb\"><img src=\"gallery/img2_thumb.jpg\" /></div><div class=\"thumb\"><img src=\"gallery/img3_thumb.jpg\" /></div><div class=\"thumb\"><img src=\"gallery/img4_thumb.jpg\" /></div><div class=\"thumb\"><img src=\"gallery/img5_thumb.jpg\" /></div><div class=\"thumb\"><img src=\"gallery/img6_thumb.jpg\" /></div><div class=\"thumb\"><img src=\"gallery/img7_thumb.jpg\" /></div><div class=\"thumb\"><img src=\"gallery/img8_thumb.jpg\" /></div></div></div></div></div>";
    
    eksport(txt);
    fadedivnow('actualinfo');
}
function start()
{
    var txt ="<div id=\"welcomeinfo\">Witaj na Flower-White Theme !<div id=\"motto\">Szablonie stworzonym specjalnie na potrzeby stylu natury.</div></div>";
    
    eksport(txt);
    fadedivnow('welcomeinfo');
}