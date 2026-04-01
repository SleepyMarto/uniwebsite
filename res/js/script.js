const imgsMembers = document.querySelectorAll(".img");
const namesMembers = document.querySelectorAll(".members-names");
const bioMembers = document.querySelectorAll(".font");
let notClicked = true;

function hideTexts() {
    namesMembers.forEach(li => {
                        li.style.visibility = 'hidden';
    });
    bioMembers.forEach(li => {
        li.style.visibility = 'hidden';
    });
}
function showTexts() {
    namesMembers.forEach(li => {
        li.style.visibility = 'visible';
    });
    bioMembers.forEach(li => {
        li.style.visibility = 'visible';
    });
}

imgsMembers.forEach(img => {
    img.addEventListener('click', () => {
        img.style.width = '900px';
        img.style.height = '70vh';
        img.style.zIndex = '1';
        img.style.marginTop = '-10vw';
        hideTexts();

        notClicked = !notClicked;

        if (notClicked) {
            img.style.width = '65%';
	    	img.style.height = 'auto';
            img.style.zIndex = ' ';
            img.style.marginTop = '0';
            showTexts();
        }
    });
});