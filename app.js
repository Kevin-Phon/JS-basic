//throw error in async function

let getJson =async ()=>{
                        
    let response = await fetch("jsonfiles/kevin.json")
    if(response.status == 404){
        throw new Error("Your link is not availavle!")
    }
    let datas = await response.json();
    return datas;
}

getJson()
.then((datas)=>{
    console.log(datas);
})
.catch((err)=>{
    console.log(err.message)
})