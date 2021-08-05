import { Controller } from 'stimulus';


export default class extends Controller {
    
    connect() {
        window.onload = () => {
            // Variables
            let stripe = Stripe('pk_live_51IxwOgJZeCpU6SOlMrgAwkHFx8uSWj1ciiMcR4d1GOMApjrLw0RKUWQ8F44W2WivFuDOZpRkQ71HeZOn5ENzfAGB00v50nxnKn')
            let elements = stripe.elements()
            let redirect = "/validation-shopping";

            // Objets de la page
            let cardHolderName = document.getElementById("cardholder-name")
            let cardButton = document.getElementById("card-button")
            let clientSecret = cardButton.dataset.secret;

            // Crée les éléments du formulaire de carte bancaire
            let card = elements.create("card");
            card.mount("#card-elements");

            // On gère la saisie
            card.addEventListener("change", (event) => {
                let displayError = document.getElementById("card-errors")
                if(event.error){
                    displayError.textContent = event.error.message;
                }else{
                    displayError.textContent = "";
                }
            })

            // On gère le paiement
            cardButton.addEventListener("click", () => {
                stripe.handleCardPayment(
                    clientSecret, card, {
                        payment_method_data: {
                            billing_details: {name: cardHolderName.value}
                        }
                    }
                ).then((result) => {
                    if(result.error){
                        document.getElementById("errors").innerText = result.error.message
                    }else{
                        document.location.href = redirect;
                    }
                })
            })
        }
    }
}