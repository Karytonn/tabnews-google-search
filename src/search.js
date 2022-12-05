
const form = document.querySelector('form');
const input = document.querySelector('#search-input');

const GOOGLE_BASE_URL = "https://www.google.com/search?q=";
const GOOGLE_HACKING_SITE = "site%3Atabnews.com.br";

form.addEventListener('submit', (event) =>  {
  event.preventDefault();
  
  if(input.value) {
     
    const textFindSanitized = input.value.replace(/\s/g, '%20')
    const url = `${GOOGLE_BASE_URL}${textFindSanitized}+${GOOGLE_HACKING_SITE}`

    window.open(url, "_target");

  } else {
    alert("😬 acho que esqueceu de inserir algo no campo de busca.")
  }

});