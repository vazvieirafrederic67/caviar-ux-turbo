import { Controller } from 'stimulus';


export default class extends Controller {

    connect() {

        /**
         * Accordion
         */
        let panels =  document.querySelectorAll('.panel');

        panels.forEach(function(element) {
            element.style.display = "none";
        })

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                panel.style.display = "none";
                } else {
                panel.style.display = "block";
                }
            });
        }
            
        /**
         * Check Code
         */
        let code = document.querySelector('#check_code');
        let clickCkeck = document.querySelector('#click_check_code');
        let infoPriceTotal = document.querySelector('#info-price-total');
        
        // Create our number formatter.
        var formatter = new Intl.NumberFormat('fr-FR', {});

        clickCkeck.addEventListener('click', function(e){
            e.preventDefault();

            let url = this.getAttribute("href");
            let finalUrl = url + '?name=' + code.value;
           
            fetch( finalUrl ).then(function(response) {
                response.json().then(function(data) {

                    if (isNaN(data.total)) {
                        return 0;
                    }else{
                        infoPriceTotal.innerHTML = 'reduction de ' + data.reduction + '% | ' + formatter.format(data.total);
                    }
                });
            }) 
        })

        
    }
}