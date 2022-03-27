const fields = document.querySelectorAll(".field");

fields.forEach(field => 
   field.classList.add("hover_on")
)

fields.forEach(field => field.addEventListener("click", function handle(e) {
   field.removeEventListener("click",handle);
   field.classList.remove("hover_on")
   field.style.backgroundColor = "green";
}))

