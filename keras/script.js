
let tagLineBox = document.querySelector ("header h4");

let writeIntoDOM = function (word, targetDOM, nextFunc) {
    let n = 0;

    let writeIn = () => {
        targetDOM.innerHTML = targetDOM.innerHTML.slice (0, (targetDOM.innerHTML.length - 1));
        targetDOM.innerHTML += `${word [n]}_`;

        if (n < (word.length - 1)) {
            n ++;

            let pause = 50;
            if (word[n] == " ") {
                pause = 200;
            }

            setTimeout (writeIn, pause);
        } else {
            setTimeout (nextFunc, 1000);
        }
    }
    setTimeout (writeIn, 100);
}

let tagLines = [
    "A window into the heavens...", 
    "A view at the bright night skies...", 
    "A pleasant look at the worlds beyond.",
];

let writenTagLineN = 0;
let writeTagLines = function () {
    let clearCurrentTagLine = () => {
        let one = () => {
            tagLineBox.style.opacity = 0;
            tagLineBox.style.transition = "1s linear opacity";

            setTimeout (two, 1100);
        }
        setTimeout (one, 10);
        let two = () => {
            tagLineBox.innerHTML = "0";

            tagLineBox.style.opacity = 1;
            tagLineBox.style.transition = 0;

            setTimeout (performWriting, 100);
        }
    }
    setTimeout (clearCurrentTagLine, 100);

    let performWriting = () => {
        writeIntoDOM (tagLines [writenTagLineN], tagLineBox, writeTagLines);

        if (writenTagLineN < (tagLines.length - 1)) writenTagLineN += 1;
        else writenTagLineN = 0;
    }
}
setTimeout (writeTagLines, 100);


let body = document.querySelector ("body");
let sections = document.querySelectorAll (".sections");
let items = document.querySelectorAll (".items"); //These are items that will fade in as body is being scrolled

body.onscroll = () => {
    for (i = 0; i < items.length; i ++) {
        if (items [i].getBoundingClientRect ().top < (window.innerHeight / 1.5)) {
            items [i].style.opacity = 1;
            items [i].style.transform = `translateY(0)`;
            items [i].style.transition = `0.5s linear all`;
        } else if (items [i].getBoundingClientRect ().top > (window.innerHeight)) {
            items [i].style.opacity = 0;
            items [i].style.transform = `translateY(30px)`;
            items [i].style.transition = 0;
        }
    }
}

