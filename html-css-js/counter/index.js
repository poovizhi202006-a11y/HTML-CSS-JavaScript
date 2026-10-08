const dec=document.getElementById("d");
const res=document.getElementById("r");
const inc=document.getElementById("i");
const h1=document.getElementById("myh1");
let count=0;

inc.onclick=function(){
    count++;
    h1.textContent=count;
}

dec.onclick=function(){
    count--;
    h1.textContent=count;
}

res.onclick=function(){
    count=0;
    h1.textContent=count;
}