const fields = document.querySelectorAll(".field");
const start = document.querySelector("button");


// const test = document.querySelector(".field");
// test.addEventListener("click", () => {
//    test.dataset.figure = "siema";
// })


start.addEventListener("click", () => {
   singleGame()
   start.style.display ="none";

})

// FUNCTIONS
function singleGame(){
   let figureSwitch = "circle";
   
   fields.forEach(field => 
      field.classList.add("hover_on")
   )

   fields.forEach(field => field.addEventListener("click", function handle(e) {
      field.removeEventListener("click",handle);
      field.classList.remove("hover_on")
      // field.dataset.figure = figureSwitch;

      console.log("przed: " + figureSwitch)
      switch(figureSwitch) {
         case "circle":
            field.style.backgroundColor = "green";
            field.dataset.figure = figureSwitch;
            figureSwitch = "cross"; 
            break;
         case "cross":
            field.style.backgroundColor = "red";
            field.dataset.figure = figureSwitch;
            figureSwitch = "circle"; 
            break;    
      }

      console.log("po: " + figureSwitch) 
}))}


