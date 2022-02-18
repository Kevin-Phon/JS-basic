let getJson =async ()=>{
                        //promise,so use await key
    let response = await fetch("jsonfiles/kevin.json")//will return a respose (datas),use variable to catch
    let datas = await response.json();
    return datas;
}

getJson().then((datas)=>{
    console.log(datas);
})