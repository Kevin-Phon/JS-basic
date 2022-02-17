//promises and promises chain

let getTodos = (resource) =>{

    return new Promise((resolve,reject) => {
        let request = new XMLHttpRequest;

        request.addEventListener("readystatechange",()=>{
            if(request.readyState == 4 && request.status == 200){
                let datas = JSON.parse(request.responseText); //change json to obj
                //callback(datas,undefined)
                resolve(datas);
            }else if(request.status == 404){
                //callback(undefined,"Your link is unavaliable");
                reject("Your link is unavaliable!");
            }
        })

        request.open("GET",resource)
        request.send();
    })

}

getTodos("jsonfiles/kevin.json")
.then((data)=>{
    console.log(data);
    return getTodos("jsonfiles/kayas.json");
})
.then((data)=>{
    console.log(data);
    return getTodos("jsonfiles/kyawswa.json");
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});
    
