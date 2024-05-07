
var res = document.getElementById("res")
res = []

function put(num){
    document.getElementById("res").innerHTML += num
}
function limpar(){
    var resultado = document.getElementById("res").innerHTML=""
}
function apagar(){
    var resultado = document.getElementById("res").innerHTML
    document.getElementById("res").innerHTML = resultado.substring(0,resultado.length - 1)
}
function resolva(){
    var resultado =document.getElementById("res").innerHTML
    if(resultado){
        document.getElementById("res").innerHTML = eval(resultado)
    }else{
        alert("nao ha nenhuma conta a se fazer")
    }
    
}
  
                
