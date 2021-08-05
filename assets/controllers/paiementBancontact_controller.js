import { Controller } from 'stimulus';




export default class extends Controller {

  
    
    connect() {
        window.onload = () => {

            // Variables
            let stripe = Stripe('pk_live_51IxwOgJZeCpU6SOlMrgAwkHFx8uSWj1ciiMcR4d1GOMApjrLw0RKUWQ8F44W2WivFuDOZpRkQ71HeZOn5ENzfAGB00v50nxnKn');
            let redirect = "https://www.vazvieirafrederic.fr/validation-shopping";
            let secret = document.querySelector('#submit-button').getAttribute('data-secret');

            var namePaiement = document.querySelector('#name').nodeValue;
            
            console.log(namePaiement);
            
            // Redirects to Bancontact website or app
            stripe.confirmBancontactPayment(
              secret,
              {
                payment_method: {
                  billing_details: {
                    name: namePaiement
                  }
                },
                return_url: redirect,
              }
            ).then(function(result) {
            
              console.log(result);
            
              if (result.error) {
                // Inform the customer that there was an error.
                console.log(result.error);
              }
            });
        }
    }
}