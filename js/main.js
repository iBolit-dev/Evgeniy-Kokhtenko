const btnAdd = document.querySelector('.btn');
const nftContainer = document.querySelector('.wrapper-content')




let arrNFT = [];

btnAdd.addEventListener('click', () => {
  arrNFT.push(addObjCard());
  cardRender()
});


function getRandomId() {
  return Math.floor(Math.random() * 1000000);
};

function cardRender() {
  let result = '';

  for (let i = 0; i < arrNFT.length; i++) {
    result += `<div class="card">
                <div class = "card__inner">
                  <p class = "card__name">
                    card <br> 
                    name 
                  </p> 
                  <img class = "card__img" src = "https://random.imagecdn.app/500/500" alt = "NFT" style = "width: 165px;height: 195px; border-radius: 10px;">
                  <p class = "card__text">
                    <span> card </span> 
                    description 
                  </p> 
                </div>
                <div class ="card__btn-wrap">
                    <button class ="card__button"
                    onclick ="deleteNFT(${arrNFT[i].id})" >
                    <img src = "img/icons-del.svg" alt = "Удалить NFT" >
                    </button> 
                </div>
              </div>`;
  }

  nftContainer.innerHTML = result;
};

function addObjCard() {
  return {
    id: getRandomId(),
    nft: cardRender()
  }
};

function deleteNFT(nftId) {
  arrNFT = arrNFT.filter(el => el.id !== nftId);
  cardRender();
}