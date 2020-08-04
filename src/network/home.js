import {request} from "./request"

export function gethomemultidata(){
    return request({
        url:"/home/multidata"
    }) 
}

export function homegoods(type,page){
    return request({
        url:"/home/data",
        params:{
            type,
            page
        }
    })
}