//define functions here

function getIt(){
  $("p").on("click", function() {
  return alert("Hey!")
});
}

function frameIt(){
  $("img").on("load", function(){
  var minion = document.querySelector('img')
    minion.classList.add("tasty")
  })
}

function pressIt(){
  $()
}

$(document).ready(function(){
 getIt();
 frameIt();
});
