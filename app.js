//fetch api

fetch("jsonfiles/kevin.json")
.then((response)=>{
    // console.log("resolve",response.json())
    return response.json() //promise,so use return and .then
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
});