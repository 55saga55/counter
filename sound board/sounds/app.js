

function playAudio() {

    document.getElementById("boo").play();

}
function playAudio1() {

    document.getElementById("gasp").play();

}
function playAudio2() {

    document.getElementById("tada").play();

}
function playAudio3() {

    document.getElementById("victory").play();

}
function playAudio4() {

    document.getElementById("wrong").play();

}

function pauseAudio() {

    document.querySelectorAll("audio")[0].pause();
    document.querySelectorAll("audio")[1].pause();
    document.querySelectorAll("audio")[2].pause();
    document.querySelectorAll("audio")[3].pause();
    document.querySelectorAll("audio")[4].pause();

}