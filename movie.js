async function movies(){
    let name=document.getElementById("city");
     let url="https://imdb-api.com/en/API/Top250Movies/k_24vpmvd7"
     const response=await fetch(url);
     var data=await response.json();
     console.log(data);
     let{items}=data;
     items.forEach(ele=>{
     let{title,imDbRating}=ele;
     console.log("movie name is "+title+"\nIMDB rating value "+imDbRating);
    });
 }