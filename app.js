//change json format to obj and create own json file

let getTodos = (callback) =>{
    let request = new XMLHttpRequest;

    request.addEventListener("readystatechange",()=>{
    if(request.readyState == 4 && request.status == 200){
        let datas = JSON.parse(request.responseText); //change json to obj
        callback(request.responseText,undefined)
    }else if(request.status == 404){
        callback(undefined,"Your link is unavaliable");
    }
})

    request.open("GET","kevin.json")
    request.send();
}

getTodos((data,err) => {
    if(data){
        console.log(data);
    }else{
        console.log(err);
    }
});