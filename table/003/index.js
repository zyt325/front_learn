window.onload = function () {
    var stars = document.getElementsByClassName("star");
    for (var i = 0; i < stars.length; i++) {
        stars[i].onmouseover = function () {
            console.log(this.cellIndex);
            for (var n = 0; n <= this.cellIndex; n++) {
                console.log(n,'0')
                stars[n].innerHTML = "★";
            }
            for (var m = this.cellIndex+1 ; m < stars.length; m++) {
                console.log(m,'1');
                stars[m].innerHTML = "☆"
            }
        }
    }
}