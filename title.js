if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = ["x", "h", "ha", "haj", "haje", "hajen", "ㅤ", "hajen", "haje", "haj", "ha","h", ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}
