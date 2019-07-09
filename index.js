import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";


//import * pages from "./components/pages"; 



const root = document.querySelector("#root");

let state = {
  'Header' : {
    title : "Header title"
  },
  'Content' : {
    title : "Content title"
  },
  'Footer' : {
    title : "Footer title"
  },
  'Navigation' : {
    title : "Navigation title"
  }

};


function render(state) {
    console.log("this is my state;", state);
    root.innerHTML = `
    ${Navigation(state.Navigation)}
    ${Header(state.Header)}
    ${Content(state.Content)}
    ${Footer(state.Footer)}
  `;
}

render(state);




//upon clicking, we need to know what we clicked on and match to it's respective pg 

//look for a click event on Nav bar 
let links = document.querySelectorAll('nav li a')
.forEach((link) => link.addEventListener('click', (event) => {


//override default behavior
event.preventDefault();
console.log("textContent:", event.target.textContent);

})
);