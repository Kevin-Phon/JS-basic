//fetch api

fetch("jsonfiles/kevin.json")
.then((response)=>{

    if(response.status == 404){
        throw new Error("Link is not avaliable!");
    }
    return response.json() //promise,so use return and .then
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
});