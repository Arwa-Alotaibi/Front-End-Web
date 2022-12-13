/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const nav_bar = document.getElementById("navbar__list");

const All_Section =document.querySelectorAll("section");

/**
 * End Global Variables
 * 
*/

// build navigation 
function createss() {
    for (section of All_Section) {
        section_name = section.getAttribute('data-nav');
        section_id = section.getAttribute('id');
        create_item = document.createElement('li');
        create_item.innerHTML = `<li><a href='#${section_id}' class='menu__link' >${section_name}</a></li>`;
       nav_bar.appendChild(create_item);
    }
}
createss();
//Section Active State
function active_State(){
    for ( section= 0; section<= All_Section.length; section++) {
        const size = All_Section[section].getBoundingClientRect();

        if(size.top >=0 ){
            //active state on the current section
            All_Section[section].classList.add("your-active-class")
        }
        else{
            // Remove active state
            All_Section[section].classList.remove("your-active-class")

        }

        
    }
}

document.addEventListener("scroll", active_State);
active_State();
//Scroll to Anchor
// //When clicking an item from the navigation menu, the link should scroll to the appropriate section.
//  All_Section.addEventListener('click' , function(event){
//       event.preventDefault();
//        document.addEventListener("scroll",active_class)

//     });
