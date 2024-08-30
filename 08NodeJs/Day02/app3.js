const request=require('request')
let url="https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=68efa0885519a6f01d76917c463ada68"
request(url,(error,response)=>{
    if(response){
        const data=JSON.parse(response.body)
        console.log(data)
    }else{
        console.log(error)
    }
})

request({url:url,json:true},(error,response)=>{
    if(response){
        console.log(response.body)
    }else{
        console.log(error)
    }
})