var head;
head=document.getElementById('hadding');
head.textContent="website name";
head.style.backgroundColor="red";
head.style.fontSize="30px";
head.style.border ="1px solid black";
 
 var list=document.querySelectorAll('.listtag');
 for(var i=0; i<list.length; i++){
    list[i].style.backgroundColor="pink";
    list[i].style.border="1px solid black";
    list[i].style.margin="2px";
    list[i].style.listStyle="none";

 }

 function listFunction() {
    var list=document.getElementById("mylist");
    list.style.listStyle="none";
    list.style.fontSize="20px";
    list.style.border="1px solid black";
 }
