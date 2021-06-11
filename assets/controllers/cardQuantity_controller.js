import { Controller } from 'stimulus';

export default class extends Controller {

    connect() {

        let cardAmountElement = document.querySelector('.main-col-card');
        cardAmountElement.innerHTML = 0;
    
        let elementsCard = this.element.querySelectorAll('.flex-align');

        elementsCard.forEach( (element) => {
            let elementCardPrice = element.querySelector('.menu-price').innerHTML;
            let elementCardQuantity = element.querySelector('.cin-input').value;
            let elementAmountFinal = elementCardQuantity * elementCardPrice;
            cardAmountElement.innerHTML = parseFloat(parseInt(cardAmountElement.innerHTML) + parseInt(elementAmountFinal)).toFixed(2);
        });

        let cardCountElement = document.querySelector('.shop-number');
        
        let cardCaviarQuantity = document.querySelectorAll('.card-caviar-quantity');
        let cardBasketQuantity = document.querySelectorAll('.card-basket-quantity');
        let cardAccessoriesQuantity = document.querySelectorAll('.card-accessories-quantity');
        let cardCountQuantity = 0;
        
        if(cardCaviarQuantity) {
            cardCaviarQuantity.forEach( (element) => {
                cardCountQuantity = parseInt(cardCountQuantity) + parseInt(element.value);
            });
        }

        if(cardCaviarQuantity) {
            cardBasketQuantity.forEach( (element) => {
                cardCountQuantity = parseInt(cardCountQuantity) + parseInt(element.value);
            });
        }

        if(cardCaviarQuantity) {
            cardAccessoriesQuantity.forEach( (element) => {
                cardCountQuantity = parseInt(cardCountQuantity) + parseInt(element.value);
            });
        }

        cardCountElement.innerHTML = cardCountQuantity;

        /**
         * Gestion des quantitées du panier pour le caviar
         */
        let cardCaviarMin = document.querySelectorAll('.card-caviar-min');
        let cardCaviarMax = document.querySelectorAll('.card-caviar-max');

        cardCaviarMin.forEach( (element) => {
            element.addEventListener('click', function(e){
                e.preventDefault();

                fetch(this.getAttribute("href")).then(function(response) {
                    response.json().then(function(data) {

                        cardCaviarQuantity.value = data.quantity;
                        cardCountElement.innerHTML = cardCount(cardCaviarQuantity, cardBasketQuantity, cardAccessoriesQuantity);

                        cardPrice();
                    });
                })

                
            });
        });

        cardCaviarMax.forEach( (element) => {
            element.addEventListener('click', function(e){
                e.preventDefault();
                fetch(this.getAttribute("href")).then(function(response) {
                    response.json().then(function(data) {

                        cardCaviarQuantity.value = data.quantity;
                        cardCountElement.innerHTML = cardCount(cardCaviarQuantity, cardBasketQuantity, cardAccessoriesQuantity);

                        cardPrice();
                    });
                }) 
            });
        });

        /**
         * Gestion des quantitées pour le panier pour les coffrets
         */
        let cardBasketMin = document.querySelectorAll('.card-basket-min');
        let cardBasketMax = document.querySelectorAll('.card-basket-max');

        cardBasketMin.forEach( (element) => {
            element.addEventListener('click', function(e){
                e.preventDefault();
                fetch(this.getAttribute("href")).then(function(response) {
                    response.json().then(function(data) {
                        cardBasketQuantity.value = data.quantity;
                        cardCountElement.innerHTML = cardCount(cardCaviarQuantity, cardBasketQuantity, cardAccessoriesQuantity);

                        cardPrice();
                    });
                }) 
            });
        });

        cardBasketMax.forEach( (element) => {
            element.addEventListener('click', function(e){
                e.preventDefault();
                fetch(this.getAttribute("href")).then(function(response) {
                    response.json().then(function(data) {
                        cardBasketQuantity.value = data.quantity;
                        cardCountElement.innerHTML = cardCount(cardCaviarQuantity, cardBasketQuantity, cardAccessoriesQuantity);

                        cardPrice();
                    });
                }) 
            });
        });

        /**
         * Gestion des quantitées pour les accessoires
         */
        let cardAccessoriesMin = document.querySelectorAll('.card-accessories-min');
        let cardAccessoriesMax = document.querySelectorAll('.card-accessories-max');

        cardAccessoriesMin.forEach( (element) => {
            element.addEventListener('click', function(e){
                e.preventDefault();
                fetch(this.getAttribute("href")).then(function(response) {
                    response.json().then(function(data) {
                        cardAccessoriesQuantity.value = data.quantity;
                        cardCountElement.innerHTML = cardCount(cardCaviarQuantity, cardBasketQuantity, cardAccessoriesQuantity);

                        cardPrice();
                    });
                }) 
            });
        });

        cardAccessoriesMax.forEach( (element) => {
            element.addEventListener('click', function(e){
                e.preventDefault();
                fetch(this.getAttribute("href")).then(function(response) {
                    response.json().then(function(data) {
                        cardAccessoriesQuantity.value = data.quantity;
                        cardCountElement.innerHTML = cardCount(cardCaviarQuantity, cardBasketQuantity, cardAccessoriesQuantity);

                        cardPrice();
                    });
                }) 
            });
        });

        /**
         * Gestion de la vue quantité
         */
        function cardCount(cardCaviarQuantity, cardBasketQuantity, cardAccessoriesQuantity) {
            
            let cardCountQuantity = 0;
        
            if(cardCaviarQuantity) {
                cardCaviarQuantity.forEach( (element) => {
                    cardCountQuantity = parseInt(cardCountQuantity) + parseInt(element.value);
                });
            }
    
            if(cardCaviarQuantity) {
                cardBasketQuantity.forEach( (element) => {
                    cardCountQuantity = parseInt(cardCountQuantity) + parseInt(element.value);
                });
            }
    
            if(cardCaviarQuantity) {
                cardAccessoriesQuantity.forEach( (element) => {
                    cardCountQuantity = parseInt(cardCountQuantity) + parseInt(element.value);
                });
            }
    
            return cardCountQuantity;
        }

        let totalCardPrice = document.querySelector('.total-price');
        totalCardPrice.innerHTML = cardAmountElement.innerHTML;



        cardPrice()

        function cardPrice(){

            let final = 0;
            let cardProduct = document.querySelectorAll('.card-product');

            cardProduct.forEach( (element) => {
                let price = element.querySelector('.menu-price').innerHTML;
                let quantity = element.querySelector('.cin-input').value;
                let temp = price * quantity;
                final = final + temp;
                cardAmountElement.innerHTML = parseFloat(final).toFixed(2);
                totalCardPrice.innerHTML = parseFloat(final).toFixed(2);

                console.log(final);

            })
        }
    }
}