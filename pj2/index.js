const input = document.getElementById("input")

function reverseString(str){
    return str.split('').reverse().join("")


}

function check(){
    const value= input.value
    const reverse = reverseString(value)

    if(value === reverse){
        alert("It is a palindrom")
    }else{
        alert("not")
    }
    input.value =""
}
