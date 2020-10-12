//define functions here

function getIt(){
  $("p").on("click", function() {
  alert("Hey!")
});
}

function frameIt(){
  $("img").on("load", function(){
  var minion = document.querySelector('img')
    minion.classList.add("tasty")
  })
}

function pressIt(){
  $(document).on("keydown", function(key){
    if(key.which == 103){
      alert("G was pressed!");
    }
  })
}

$(document).ready(function(){
 getIt();
 frameIt();
 pressIt()
});
