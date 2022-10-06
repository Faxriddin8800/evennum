var num = +prompt("RAQAM KIRITING")
num = Number(num)
if(isNaN(num)){
    alert("bu raqam emas, iltimos raqam kiriting !")
}else if(num % 2 == 0){
    alert("bu juft raqam")
}else{
    alert('bu toq raqam')
}