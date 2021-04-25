const API_KEY ='54880d037589849d206b7dac528c9dfd';
const request = 'http://api.mediastack.com/v1/news?languages=it&keywords=videogiochi&limit=10&access_key=' + API_KEY;


function OnJson(json){
    console.log(json);
    let articoli=document.querySelector('#news');


    for (let i = 0; i < 10; i++)
    {
        
        let titolo = document.createElement('h1');
        let link= document.createElement('a');

        titolo.textContent = json.data[i].title;
        link.textContent = 'Visita il sito\n';
        link.addEventListener('click',function(){location.href=json.data[i].url});


        const articolo = document.createElement('div');
        articolo.classList.add('articolo');
        articolo.id=i;

        articoli.appendChild(articolo);
        articolo.appendChild(titolo);
        articolo.appendChild(link);
        
    }



}


function OnResponse(response){

    return response.json();
}

function onJson_img(json) {
    console.log(json);
    const screenshots= document.querySelector('#screen');
    screenshots.innerHTML='';

    
    for(let i=0;i<3;i++){
        const div= document.createElement('div');
        const img= document.createElement('img');
        console.log(json.hits[i].largeImageURL);
        const screen= json.hits[i].largeImageURL;
        img.src=screen;
        console.log(img);
        screenshots.appendChild(div);
        div.appendChild(img);
    }
}


function onResponse_img(response) {
    return response.json();
}


const key_img = '21216462-824474513254c28c13458b741';
const img_api_endpoint = 'https://pixabay.com/api/';
const numResults = 100;

let results;
var i = 0;

function cerca(event){
    event.preventDefault();
    const gioco=document.querySelector('#form')
    const testo=encodeURIComponent(gioco.value);
    fetch(img_api_endpoint + '?key='  + key_img + '&q='+testo+ '&per_page=' + numResults).then(onResponse_img).then(onJson_img);
}

const form = document.querySelector('form');
form.addEventListener('submit',cerca);

fetch(request).then(OnResponse).then(OnJson); 


