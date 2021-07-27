/* Esercizio: 
Inizializzare Vue e stampare a schermo un messaggio all’interno di un h1, utilizzando le properietà di Vue presenti in data.

BONUS: 

Aggiungere alla pagina un’immagine, la cui sorgente derivi anch'essa dai data di Vue.
*/


// check:
// console.log("Vue is working", Vue);


const app = new Vue({
    el: "#root",
    data: {
        message: "Hello, Vue!",
        src: "./img/imageVue.jpg"
    }
}

);