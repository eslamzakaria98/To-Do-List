const form=document.getElementById("todolist");
const button=document.getElementById("button");
const input=document.getElementById("input");
const list= document.getElementById("list")
const content=document.getElementById("buttondel")



function response(){
   
  

    const li=document.createElement('li'); //create li
    li.textContent=input.value;
    list.appendChild(li); //take li and save it in ul "list"

   // Delete button
   const button=document.createElement("button");
   button.textContent="Delete";
   li.appendChild(button);

   button.onclick=function(){
    li.remove();
   }


    input.value=""; //clear input
    
    return false ; //pravent from reload
}