
/*Getting all the section elements from the document and storing it in 'sections'*/
const sections = document.querySelectorAll("section");



/*--Building the Navigation Menu--*/

/*The navigation menu is built once the DOM content is loaded*/
document.addEventListener("DOMContentLoaded", buildNavBar);
function buildNavBar() {
    /*storing the empty ul with id = navbar__list in the navBar variable*/
    const navBar = document.querySelector("#navbar__list");
    /*Creating a document fragment to store the list items in it*/
    const fragment = document.createDocumentFragment();
    /*Looping through the existing sections*/
    for (const section of sections) {
        const item = document.createElement("li");
        const link = document.createElement("a");
        /*Adding text, class, id and href to the anchors*/
        link.textContent = section.getAttribute("data-nav");
        link.classList.add("menu__link");
        link.setAttribute("id", `${section.id}-link`);
        link.setAttribute("href", `#${section.id}`);
        /*Appending the anchors to the list items*/
        item.appendChild(link);
        /*Appendinng the list items to the document fragment*/
        fragment.appendChild(item);
    
    }

    /*Appending the fragment to unordered list*/
    navBar.appendChild(fragment);  
}



/*--Highlighting section in viweport with corresponding nav bar item while scrolling--*/

/*While scrolling the highlight function will take place*/ 
document.addEventListener("scroll", highlight);

function highlight () {
    for (const section of sections) {
        /*Storing the corresponding anchors to each section in the variable correslink*/
        const corresLink = document.querySelector(`#${section.id}-link`);
        /*Adding a condition to specify when the section should be highlighted*/
        if (section.getBoundingClientRect().top <= 150 && section.getBoundingClientRect().top >= -400 ) {
            section.classList.add("your-active-class");
            corresLink.classList.add("your-active-link-class");
        } else {
            section.classList.remove("your-active-class");
            if (corresLink.classList.contains("your-active-link-class")) {
            corresLink.classList.remove("your-active-link-class");
            }
        }
    }
}



/*Adding Smooth scroll when user clicks the nav link*/

/*Storing the nav bar ul into the navbar const*/
const navbar = document.querySelector("#navbar__list");
/*Adding an event listener that will scroll to the corresponding section when the user click one of the nav bar links*/
navbar.addEventListener("click", function(event){
    /*Preventing the default action of the click*/
    event.preventDefault();
    /*Adding a conditional that will check if the user clicked on one of the links or not*/
if (event.target.classList.contains("menu__link")) {
    /*Storing the corresponding section in the variable coressSection */
    const corresSection = document.querySelector(`[data-nav ="${event.target.textContent}"]`);
    corresSection.scrollIntoView({
        behavior: "smooth",
         block: "center"
    });
}

});



/*Adding an event that will display the nav bar when the user clicks on the burger menu */
const navList = document.querySelector("#navbar__list");
const burgerButton = document.querySelector(".burger__menu");

burgerButton.addEventListener("click", displayMenu)
function displayMenu() {
    navList.style.display = "block";
    
}



