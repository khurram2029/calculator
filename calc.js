// function foo(greet){
//    //var a=2+2;
//    alert(greet)
// }


// function click1(){
//     alert("click")
// }

// function getname(){
//     var name = document.getElementById("name")
//     alert(name.value)
//     name.value=" "
// }


// function setname(){
//     var name=document.getElementById("name")
//     name.value="khurram"
//     var para=document.getElementById("para");
//     para.innerHTML="Hello This is Example"
// }

// setname()

function getnumber(num){
    
    var result = document.getElementById("result");
    //console.log(num)
    result.value += num;
}

function clearresult(){
    var result = document.getElementById("result")
        result.value = ""
}

function getresult(){
    var result = document.getElementById("result")
    result.value = eval(result.value)
}