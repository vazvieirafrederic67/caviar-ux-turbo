import { Controller } from 'stimulus';


export default class extends Controller {

    connect() {
        let country = document.querySelector('#user_anonymous_country');
        let postalCode = document.querySelector('#user_anonymous_postalCode');
        let city = document.querySelector('#user_anonymous_city');
        let livraison = document.querySelector('#prix-livraison');
        let dateLivraison = document.querySelector('#date-livraison');
        let price = document.querySelector('#price');
        let priceTotal = document.querySelector('#price-total');
        let codeCountry = null;
        let postalCodeSelected = null;
        let citySelected = null;

        if(postalCode.value.length > 0 && city.value.length > 0 && country.value.length){
            postalCodeSelected = postalCode.value;
            citySelected = city.value;
            codeCountry = country.value;
        }

        

        country.addEventListener('change', (event) => {
            codeCountry = event.target.value;

            if(null !== codeCountry && null !== postalCodeSelected && 4 <= postalCodeSelected.length  && null !== citySelected && 3<= citySelected.length){
                console.log('1 : ' + codeCountry, postalCodeSelected, citySelected);
                callDhlRateRequestApi(codeCountry, postalCodeSelected, citySelected);
            }
        });

        postalCode.addEventListener('keyup', (event) => {

            postalCodeSelected = event.target.value;

            if(null !== codeCountry && null !== postalCodeSelected && 4 <= postalCodeSelected.length  && null !== citySelected && 3<= citySelected.length){
                console.log('2 : ' + codeCountry, postalCodeSelected, citySelected);
                callDhlRateRequestApi(codeCountry, postalCodeSelected, citySelected);
            }
        });

        city.addEventListener('keyup', (event) => {
            citySelected = event.target.value;

            if(null !== codeCountry && null !== postalCodeSelected && 4 <= postalCodeSelected.length && null !== citySelected && 3<= citySelected.length){
                console.log('3 : ' + codeCountry, postalCodeSelected, citySelected);
                callDhlRateRequestApi(codeCountry, postalCodeSelected, citySelected);
            }
        })


        function callDhlRateRequestApi(codeCountry, postalCodeSelected, citySelected){

            let url = "/dhl_raterequest/";
            let finalUrl = url + '?codeCountry=' + codeCountry + '&postalCodeSelected=' + postalCodeSelected + '&citySelected=' + citySelected;
            let reduction = 0;

            console.log('4 :' + finalUrl);

            fetch( finalUrl ).then(function(response) {
                console.log('5 : ' + response)

                response.json().then(function(data) {

                    console.log('6 : ' + data)
                    
                    if(null !== data.message.Notification[0].Message){
                        livraison.innerHTML = "données invalides!";
                    }else{
                        let tempTotal = parseFloat(price.innerHTML.replace('.', '').replace(',','.'));
                        reduction = data.reduction;

                        dateLivraison.innerHTML = data.response.delivery.replace("T", " à ");;
                        livraison.innerHTML = String(data.response.amount).replace('.',',');
                        priceTotal.innerHTML = String(Number((tempTotal - data.reduction) + data.response.amount).toFixed(2).replace('.',',')) ;
                    }
                });
            }); 
        }
    }
}