console.log('Hello World!');

alert('Desktop mode में खोले । ')

function myfunction() {
  var showhide = document.getElementById('mylinks');
  if(showhide.style.display === "block"){
    showhide.style.display  = "none";
  } else{
    showhide.style.display = "block";
  }
}
