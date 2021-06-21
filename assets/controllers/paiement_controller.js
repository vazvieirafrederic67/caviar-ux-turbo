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
        window.onload = () => {
            // Variables
            let stripe = Stripe('pk_test_51Ir3u4JS3NsLYofkwsv3Fd8Y5KLvNcra0lB5Xbe9uzBonxkpeG1Vt0Js6VdM0SG1vQWNoRH31HlmYsGJ3wNQiVsK00CTsTFI3R')
            let elements = stripe.elements()
            let redirect = "/validation-shopping";

            // Objets de la page
            let cardHolderName = document.getElementById("cardholder-name")
            let cardButton = document.getElementById("card-button")
            let clientSecret = cardButton.dataset.secret;

            // Crée les éléments du formulaire de carte bancaire
            let card = elements.create("card")
            card.mount("#card-elements")

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

