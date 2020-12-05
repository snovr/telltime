function $(id) {
return  document.getElementbyid(id);
}



//We wantto wait to do anything until our page loads
//so we use the onload() function to contain all of our code
Window.onload = function(){

  //create two variables that will
  //represent the current date and time
  var d = new Date();
  
 //Now we will use that variable to get the time
 var t = d.localetimestring();

 //Reference out HTML element by using its ID
 var timetext = $("timetext");

 //se time in our HTML element
 timetext.innerHTML = t;
};