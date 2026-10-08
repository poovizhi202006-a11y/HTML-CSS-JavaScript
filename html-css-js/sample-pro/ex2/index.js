const PI=3.14;
let r;
let cir;

document.getElementById("sub").onclick=function(){
    r=document.getElementById("text").value;
    r=Number(r);
    cir=2*PI*r;
    document.getElementById("myh1").textContent=cir;

}