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
        
        $( function() {
            $( ".datepicker" ).datepicker({
              changeMonth: true,
              changeYear: true,
              yearRange: "-100:+0",
              dateFormat: 'dd-mm-yy'
            },
            $.datepicker.regional['fr']
            );
        } );

        $.datepicker.regional['fr'] = {clearText: 'Effacer', clearStatus: '',
        closeText: 'Fermer', closeStatus: 'Fermer sans modifier',
        prevText: '&lt;Préc', prevStatus: 'Voir le mois précédent',
        nextText: 'Suiv&gt;', nextStatus: 'Voir le mois suivant',
        currentText: 'Courant', currentStatus: 'Voir le mois courant',
        monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin',
        'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
        monthNamesShort: ['Jan','Fév','Mar','Avr','Mai','Jun',
        'Jul','Aoû','Sep','Oct','Nov','Déc'],
        monthStatus: 'Voir un autre mois', yearStatus: 'Voir un autre année',
        weekHeader: 'Sm', weekStatus: '',
        dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
        dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
        dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
        dayStatus: 'Utiliser DD comme premier jour de la semaine', dateStatus: 'Choisir le DD, MM d',
        dateFormat: 'dd-mm-yy', firstDay: 0, 
        initStatus: 'Choisir la date', isRTL: false};
        $.datepicker.setDefaults($.datepicker.regional['fr']);
    }
}