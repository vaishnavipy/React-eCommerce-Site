

export default function formatPrice(price){
       
    let arr = price.split("")
    console.log(arr.splice(price.length-2,0,".")) 
    return Number(arr.join(""));
}