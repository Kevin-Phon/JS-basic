//request http request and get response date
//https://jsonplaceholder.typicode.com/todos/1

let request = new XMLHttpRequest;

request.addEventListener("readystatechange",()=>{
    //console.log(request,request.readyState);//4 readystate
    if(request.readyState == 4){
        console.log(request.responseText);
    }
})

request.open("GET","https://jsonplaceholder.typicode.com/todos")
request.send();