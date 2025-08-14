var a=document.getElementById('one')
var b=document.getElementById('two')
var c=document.getElementById('ans')

function add(){
    var t=Number(a.value)+Number(b.value)
    c.textContent=t

}
function sub(){
    var t=Number(a.value)-Number(b.value)
    c.textContent=t

}
function mul(){
    var t=Number(a.value)*Number(b.value)
    c.textContent=t

}
function div(){
    var t=Number(a.value)/Number(b.value)
    c.textContent=t
    if (Number(b.value) === 0) {
        c.textContent = "Cannot divide by 0!";
    } 

}
