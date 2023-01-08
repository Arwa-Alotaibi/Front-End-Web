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

var navli = document.querySelectorAll('nav a')

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
        create_item.innerHTML = `<a href='#${section_id}' class='menu__link' >${section_name}</a>`;
       nav_bar.appendChild(create_item);
    }
}
createss();
//Section Active State
function active_State(){
    
    for ( const section of All_Section) {
        let size = section.getBoundingClientRect();
        let currentid=section.attributes.id.value;
        let active_link = `nav a[href="#${currentid}"]`;
        if(size.top<= 200 && size.bottom >= 150){
            //apply active state on current section and corresponding Nav link
            section.classList.add("your-active-class");
            document.querySelector(active_link).classList.add("active_link");

        }
       else{
            //Remove active state from other section and corresponding Nav link
            section.classList.remove("your-active-class")
            document.querySelector(active_link).classList.remove("active_link");
        }

    }
}


active_State();

document.addEventListener("scroll", function() {
    active_State();
  });



//Scroll to Anchor
 let ALLlink =document.querySelectorAll('navbar__list')

ALLlink.forEach(link=>{
    link.addEventListener('click',function(event){
         event.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth'});
     })


 })
