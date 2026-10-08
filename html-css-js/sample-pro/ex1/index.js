let names;

document.getElementById("but").onclick = function() {
    names = document.getElementById("nam").value;
    document.getElementById("myh1").textContent = `hi ${names}`;
}
