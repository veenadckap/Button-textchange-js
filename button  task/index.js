
let b = document.getElementById("btn");
b.addEventListener('click',display);



function display() {
  
   if(b.innerText === "Click me")
   {
      b.innerText = "Clicked"
      document.getElementById("btn").style.backgroundColor="blue"     
   }

   else if(b.innerText === "Clicked")
   {
      b.innerText = "Click me"
      document.getElementById("btn").style.backgroundColor="#e453da"  
   }
  

}



// ---------------------------------2 button----------------
let c = document.getElementById("btn1");
c.addEventListener('click',myCode);



function myCode() {

   if(c.innerText === "Click me")
   {
      c.innerText = "Clicked"
      document.getElementById("btn1").style.backgroundColor="blue" 
     
   }

   else if(c.innerText === "Clicked")
   {
      c.innerText = "Click me"
      document.getElementById("btn1").style.backgroundColor="#e453da" 
   }
  


}


// ----------------------------3  button---------------------------------------------
let a = document.getElementById("btn2");
a.addEventListener('click',myFunction);

function myFunction() {

   if(a.innerText === "Click me")
   {
      a.innerText = "Clicked"
      document.getElementById("btn2").style.backgroundColor="blue" 

     
   }

   else if(a.innerText === "Clicked")
   {
      a.innerText = "Click me"
      document.getElementById("btn2").style.backgroundColor="#e453da" 
   }
  

}



