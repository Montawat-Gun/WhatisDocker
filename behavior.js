window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
    if (scrolled === 0) {
        document.getElementById("indicator").style.display = "none"
    } else {
        document.getElementById("indicator").style.display = "block"
    }
}