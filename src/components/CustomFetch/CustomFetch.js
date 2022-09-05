export const CustomFetch = (Products) =>{

return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(Products)
    }, 2000)
})
}