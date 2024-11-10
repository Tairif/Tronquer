const texts = document.querySelectorAll(".text");

texts.forEach(text => {
    truncateString(text.innerHTML, 50, text);
});

function truncateString(str, num, el) {
    if(str.length <= num) {
        return el.innerHTML = str;
    }
    else{
        return el.innerHTML = str.slice(0, num).concat("...");
    }
}
//  splice
truncateString("Salut tout le monde", 15);