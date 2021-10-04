var image = document.querySelector('.dog-image')
function fetchDog(){
    console.log("click Registered");
    console.log(image);

    fetch('https://dog.ceo/api/breeds/image/random').then(function(response){
    return response.json();
}).then(jsonRresponse => {
    console.log('before' ,image.src );
    console.log(image.src = jsonRresponse.message);
    console.log('after', image.src);
})
    
}

