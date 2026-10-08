let mynum=document.getElementById("num");
let aig=document.getElementById("aig");
let but=document.getElementById("but");
let ug=document.getElementById("ug");
let res=document.getElementById("res");
let re=document.getElementById("re");

but.onclick=function(){
    let num=Number(mynum.value);
    ug.textContent=num;
    let ai=Math.floor(Math.random() * 11);
    aig.textContent=ai;
    if(num==ai){
        res.textContent="You Won! Both guessed the same number."
    }
    else{
        res.textContent="You Lost! Try again. "
    }
}

re.onclick=function(){
    ug.textContent=0;
    aig.textContent=0;
}