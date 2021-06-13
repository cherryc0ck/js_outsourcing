'use strict';

const replaceBtn = document.querySelector('.replaceBtn');
const imgs = document.querySelectorAll('.game__img');
const gameContainer = document.querySelector('.game__container');

replaceBtn.addEventListener('click', ()=>{
  replaceCard();
});


gameContainer.addEventListener('click', (event)=>{
  //카드가 하트일 경우
  if(event.target.id === 'heart'){
    alert("성공");
    event.target.src = './img/하트 이미지.png';

    //모든 카드 하트로 바꾸기.
    imgs.forEach((img, idx)=>{
      const secret = document.querySelectorAll('#secret');
      const bomb = document.querySelectorAll('#bomb');
      
      bomb.forEach(card=>{
        card.setAttribute('src', './img/하트 이미지.png');
        card.setAttribute('id', 'notouch');
      });
      secret.forEach(card=>{
        card.setAttribute('src', './img/하트 이미지.png');
        card.setAttribute('id', 'notouch');
      })
    });
    event.target.id = 'notouch';
  }

  //카드가 꽝일경우
  else if(event.target.id === 'secret'){
    alert("실패");
    event.target.src = './img/꽝 이미지.PNG';
    event.target.id = 'bomb';
  }
});


function replaceCard() {
  const arr = new Array();
  const random = Math.floor(Math.random() * 16);
  console.log(`random의 값${random}`);
  let heartCard = 0;
  for(let i=0; i<16; i++){
    if(i === random){
      arr.push(1);
      heartCard = arr.indexOf(arr[i]);
      continue;
    }
    arr.push(0);
  }
  addImg(heartCard);
}

function addImg(heartCard) {
 imgs.forEach((img, idx) =>{
  img.childNodes[0] && img.removeChild(img.childNodes[0]);
  const card = document.createElement('img');
  if(idx === heartCard){
    card.setAttribute('id', 'heart');
  }
  else{
    card.setAttribute('id', 'secret');
  }
  card.setAttribute('src', './img/뒷면이미지.PNG');
  img.append(card);
 });
};

replaceCard();