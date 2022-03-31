function PutApi(url,endpoint,data,cb){

    fetch(`${url}/${endpoint}.json`,{method:"PUT", body:JSON.stringify(data)})
        .then(response=>{
            return response.json()
        })
        .then(json=>cb(json))
}

function GetApi(url,endpoint,cb){
    fetch(`${url}/${endpoint}.json`,{method:"GET"})
    .then(response=>response.json())
    .then(json=>cb(json))
}
export  {PutApi,GetApi}