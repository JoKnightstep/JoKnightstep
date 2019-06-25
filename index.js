import Navigation from "./components/Navigation.js";
import Blog from "./components/Blog.js";
import Contact from "./components/Contact.js";
import Project from "./components/Project.js";


function looper() {
  for (x=1; x<21; x++) {
      console.log(x);
  }
  };

  import Navigation from "./components/Navigation.js"
  console.log(Navigation);

  const initialHTML = document.body.innerHTML;

  document.body.innerHTML = `${Navigation}${initialHTML}`;




for (var i=1; i < 101; i++){
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}