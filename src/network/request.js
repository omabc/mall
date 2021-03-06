import axios from "axios"

// export function request(config, success, defalut){
//     const instance = axios.create({
//         baseURL:"http://152.136.185.210:8000/api/z8",
//         timeout:5000

//     })

//     instance(config)
//     .then(res =>{
//         success(res)
//     })
//     .catch(res =>{
//         defalut(res)
//     })

// }

export function request(config){
    const instance = axios.create({
        baseURL:"http://152.136.185.210:8000/api/z8"
    })

    instance.interceptors.request.use(config => {
        return config
    },err => {

    })

    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err);
        
    })

    return instance(config)
}