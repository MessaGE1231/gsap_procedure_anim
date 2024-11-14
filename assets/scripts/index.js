


const map = document.getElementsByClassName("pop-up-map");
const documents = document.getElementsByClassName("pop-up-document");

document.getElementById("mapOpen").onclick = () => {
    console.log(map[0]);
    map[0].classList.toggle("active");
    console.log("test");
}
function closeBlock(block) {
    let s = document.getElementsByClassName('pop-up-'+ block);
        s[0].classList.toggle('active');
}


