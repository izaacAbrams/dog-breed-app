'use strict';

function submitForm() {
    $('form').submit(e => {
        e.preventDefault();
        getDogImages();
        $('.dog-group').html('');
    })
}

function getDogImages(){
    let dogBreed = $('#dog-text').val().replace(/ /g,'');
    
    console.log(dogBreed)
     fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
     .then(response => response.json())
     .then(responseJson => {
        if (responseJson.status === 'error'){
            alert(responseJson.message);
        }else { 
            displayTheDog(responseJson, dogBreed);
        }
})
    .catch(error => alert("Unknown error, please try again."));
}
function displayTheDog(responseJson, dogBreed){
    const dogPic = responseJson.message;
    $('.dog-group').append(`<img src="${dogPic}" class="dog-pic" alt="Picture of ${dogBreed}">`)
    $('.dog-display').removeClass('hidden');
}

$(submitForm())