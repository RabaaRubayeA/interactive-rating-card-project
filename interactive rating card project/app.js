

// Add an eventlistener to the container of the buttons and 
// get the value of the button
let clickedButtonValue= null;
const ratingPageContainer= document.querySelector('.rating-page-container');
const ratingContainer= document.getElementById("rating-container");
const ratingResult= document.querySelector('.rating-result');
const thankUPageContainer= document.querySelector('.thank-u-content-container');
const title= document.querySelector('.title');
const message= document.querySelector('.message');
const allButtons= document.querySelectorAll('#rating-container .rating')

ratingContainer.addEventListener('click',(event) =>{
    //first remove the active class from all buttons
    //to prevent having tow active classes in case the user decided to change
    //his or her rating and clicked another button
    
    const button= event.target.closest('button');
    if (!button) return;

    allButtons.forEach(aButton =>{
        aButton.classList.remove('active');
    })
    button.classList.add('active');
    const buttonValue= button.textContent;
    clickedButtonValue= buttonValue;
    ratingResult.textContent= `You selected ${buttonValue} out of 5`
})

//add an eventlistener to the submit button and toggle the hidden
//class of the containers
let submit= document.getElementById('submit');
submit.addEventListener('click',()=>{
    //if the user rated the app the class hidden will be added
    // to the rating page  to make it dissappear
    //the class hidden will be removed from the thank-u-page-container
    //so it will be visible to the user
    if (clickedButtonValue) {
       
        ratingPageContainer.classList.add('hidden');
        thankUPageContainer.classList.remove('hidden');
       
    }else {
        //if the user did not make a rating a message
        //will prompt him/er to make a rating
        title.classList.add('hidden');
        message.classList.remove('hidden');
    }
})