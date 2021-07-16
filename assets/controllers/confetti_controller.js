import { Controller } from 'stimulus';
import ConfettiGenerator from "confetti-js";


export default class extends Controller {
    connect() {
        var confettiSettings = { 
            target: 'my-canvas',
            start_from_edge: true,
        };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        
    }
}