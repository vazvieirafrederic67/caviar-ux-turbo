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

        let caviarsElement = this.element.querySelectorAll('.container > .row');

        /*caviarsElement.forEach(element => console.log(element));*/

        for (const [key, value] of Object.entries(caviarsElement)) {

            if(isOdd(key)){
                let colMdPush = `${value.firstElementChild.classList.remove("col-md-push-6")}`;
                let colMdPuull = `${value.lastElementChild.classList.remove("col-md-pull-6")}`;
            }
        }

        function isOdd(value) {
            if (value%2 == 0)
                return false;
            else
                return true;
        }
    }
}
