async function weather(){
   let name=document.getElementById("city");
    let url="https://api.openweathermap.org/data/2.5/weather?q="+name.value+"&appid=2cc64134696e66e9901448baeae2b5af&unit:metrics;"
    const response=await fetch(url);
    const data=await response.json();
    let{main:{temp,humidity,pressure}}=data;
    console.log("temperature"+temp+"humidity:"+humidity+"pressure:"+pressure);
}