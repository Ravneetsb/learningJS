const imageOne = document.getElementById("switch");

if (imageOne) {
    imageOne.onclick = () => {
        const mySrc = imageOne.getAttribute("src");
        if (mySrc === "images/apple.png") {
            imageOne.setAttribute("src", "images/orange.png");
        } else {
            imageOne.setAttribute("src", "images/apple.png");
        }
    }
}