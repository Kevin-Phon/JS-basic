//callback functions

let getTodos = (callback) =>{
    let request = new XMLHttpRequest;

    request.addEventListener("readystatechange",()=>{
    if(request.readyState == 4 && request.status == 200){
        callback(request.responseText);
    }else if(request.status == 404){
        callback("Your link is unavaliable");
    }
})

    request.open("GET","https://jsonplaceholder.typicode.com/todos")
    request.send();
}

getTodos((data,err) => {
    if(data){
        console.log(data);
    }else{
        console.log(err);
    }
});