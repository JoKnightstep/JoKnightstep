
//this is to add a variable assigned to an element //

let imageElement = document.getElementById("blogImage");    

let alertFunction = function() {
    alert('hello flower');
};

imageElement.addEventListener('click', alertFunction);