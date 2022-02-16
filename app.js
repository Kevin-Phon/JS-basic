//request http request and get response date
//https://jsonplaceholder.typicode.com/todos/1

let request = new XMLHttpRequest;

request.addEventListener("readystatechange",()=>{
    //console.log(request,request.readyState);//4 readystate
    if(request.readyState == 4 && request.status == 200){
        console.log(request.responseText);
    }else if(request.status == 404){
        console.log("Your link is unavailable!")
    }
})

request.open("GET","https://jsonplaceholder.typicode.com/todos")
request.send();