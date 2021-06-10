import { Controller } from 'stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
    connect() {

        // Gestion des boutons "Supprimer Images"
        let linksProduct = document.querySelectorAll('a.page-button.open-popup-product');

        let modalActive = document.getElementsByClassName('index-popup-gallery');
        let modalTitle = document.getElementById('modal-title');
        let modalDescription = document.getElementById('modal-description');
        let modalDiameter = document.getElementById('modal-diameter');
        let modalColor = document.getElementById('modal-color');
        let modalPrice = document.getElementById('modal-price');
        let modalImage = document.getElementById('modal-image');
        let modalLink = document.getElementById('modal-link');
        let url = modalLink.href;
       
        // On boucle sur links
        linksProduct.forEach(elementProduct => {
            // On écoute le clic
            
            elementProduct.addEventListener("click", function(e){
                // On empêche la navigation
                e.preventDefault();
    
                fetch(this.getAttribute("href")).then(function(response) {
                    response.json().then(function(data) {
                        modalLink.href = url.replace(/\/[^\/]*$/, '/' + data.id);
                        modalTitle.innerHTML = data.name;
                        modalDescription.innerHTML = data.description;
                        modalDiameter.innerHTML = data.diameter;
                        modalColor.innerHTML = data.color;
                        modalPrice.innerHTML = data.price;
                        modalImage.src = 'uploads/images/caviars/' + data.image;

                        modalActive[0].className += " active";
                        // faire quelque chose avec les données
                    });
                })  
            })     
        });
    }
}