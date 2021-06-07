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
        let cardCaviarMin = document.querySelectorAll('.card-caviar-min');
        let cardCaviarMax = document.querySelectorAll('.card-caviar-max');
        let cardQuantity = document.querySelectorAll('.card-quantity');


        cardCaviarMin.forEach( (element) => {
            element.addEventListener('click', function(e){
                e.preventDefault();

                
                fetch(this.getAttribute("href")).then(function(response) {
                    response.json().then(function(data) {
                        console.log(data);
                    });
                }) 
                
            });
        });

        cardCaviarMax.forEach( (element) => {
            
            element.addEventListener('click', function(e){
                e.preventDefault();

                fetch(this.getAttribute("href")).then(function(response) {
                    response.json().then(function(data) {
                        console.log(data);
                    });
                }) 

         
            });
        });
    }
}