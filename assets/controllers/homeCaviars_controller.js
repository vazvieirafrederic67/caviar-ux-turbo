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

        let caviarsElement = this.element.querySelectorAll('.custome-container > .row > div > div > div.image');

        let i = 0;
    
        for (const [key, value] of Object.entries(caviarsElement)) {
           
            if(key == 1 || key == 5){
               value.querySelectorAll('span')[0].classList.replace('page-span-1','page-span-4');
               value.querySelectorAll('span')[1].remove();
            }

            if(key == 2 || key == 6 ){
                value.querySelectorAll('span')[0].remove();
                value.querySelectorAll('span')[0].remove();
            }

            if(key == 3 || key == 7 ){    
                value.querySelectorAll('span')[0].classList.replace('page-span-1','page-span-4');
                value.querySelectorAll('span')[0].className += ' type-2';
                value.querySelectorAll('span')[1].classList.remove('type-2');
                value.querySelectorAll('span')[1].classList.replace('page-span-2','page-span-3');
            }
            
        }
    }
}