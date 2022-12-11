
const form = document.querySelector('form');
const input = document.querySelector('#search-input');

const GOOGLE_BASE_URL = "https://www.google.com/search?q=";
const GOOGLE_HACKING_SITE = "site%3Atabnews.com.br";

const encodeSearchText = (text) =>
    encodeURIComponent(text)
        .replace(/\-/g, '%2D')
        .replace(/\_/g, '%5F')
        .replace(/\./g, '%2E')
        .replace(/\!/g, '%21')
        .replace(/\~/g, '%7E')
        .replace(/\*/g, '%2A')
        .replace(/\'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        //by default "#" is encoded to %23

form.addEventListener('submit', (event) =>  {
  event.preventDefault();
  
  if(input.value) {
    const url = `${GOOGLE_BASE_URL}${encodeSearchText(input.value)}+${GOOGLE_HACKING_SITE}`;
    window.open(url, "_target");

  } else {
    alert("😬 acho que esqueceu de inserir algo no campo de busca.");
  }

});