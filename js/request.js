// api
const API = 'https://randomuser.me/api/?results=21'

// for leader
const overlay = document.getElementById('overlay')

// toggle loader

const loader = (toggle) =>{
    if(toggle){
        overlay.classList.remove("hidden")
    }else{
        overlay.classList.add("hidden")
    }
}

const getData = (resourse) =>{
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest()

        request.addEventListener("readystatechange", ()=>{
            if(request.readyState < 4){
                loader(true)
            }else if(request.readyState == 4 && request.status == 200){
                const data = JSON.parse(request.responseText)
                resolve(data.results);
                loader(false)
            }else if(request.readyState == 4){
                reject("errror !!!");
                loader(false)
            }
            
        })
        request.open("GET", resourse)
        request.send()
    })
}

// load

const reload = () =>{
    getData(API).then((data)=>{
        upDateUi(data);
    }).catch((err)=>{
        console.log("error"); 
    })
}

document.addEventListener("DOMContentLoaded", reload)