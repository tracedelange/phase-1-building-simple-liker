// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// DOM object definitions
const likeListItems = document.getElementsByClassName('like-glyph')
const errorModal = document.getElementById('modal')


const init = () => {
  //funciton to be called on DOM load complete

  likeButtonInit()
}

const likeButtonInit = () => {
  for (let item of likeListItems){
    item.addEventListener('click', function(event){
      likeButtonClicked(event)
    })
  }
}

const successfulCom = (target) => {

  if ( target.innerText === EMPTY_HEART ){
    target.innerText = FULL_HEART
    target.className = 'activated-heart like-glyph'
  } else if ( target.innerText === FULL_HEART ){    
    target.innerText = EMPTY_HEART
    target.className = 'like-glyph'
  }
}

const failedCom = () => {

  errorModal.className = ''
  setTimeout(function(){ errorModal.className = 'hidden' }, 3000);
}

const likeButtonClicked = (event) => {
  let target = event.target

  mimicServerCall()
  .then((response)=> successfulCom(target))
  .catch((error) => failedCom())


}


document.addEventListener('DOMContentLoaded', init)

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
