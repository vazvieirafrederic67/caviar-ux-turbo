import { Controller } from 'stimulus';

function code_country(item)
{

    const data = {
            "Afghanistan" : "AF",
            "Åland Islands" : "AX",
            "Albania" : "AL",
            "Algeria" : "DZ",
            "American Samoa" : "AS",
            "Andorra" : "AD",
            "Angola" : "AO",
            "Anguilla" : "AI",
            "Antarctica" : "AQ",
            "Antigua & Barbuda" : "AG",
            "Argentina" : "AR",
            "Armenia" : "AM",
            "Aruba" : "AW",
            "Australia" : "AU",
            "Austria" : "AT",
            "Azerbaijan" : "AZ",
            "Bahamas" : "BS",
            "Bahrain" : "BH",
            "Bangladesh" : "BD",
            "Barbados" : "BB",
            "Belarus" : "BY",
            "Belgium" : "BE",
            "Belize" : "BZ",
            "Benin" : "BJ",
            "Bermuda" : "BM",
            "Bhutan" : "BT",
            "Bolivia" : "BO",
            "Bosnia & Herzegovina" : "BA",
            "Botswana" : "BW",
            "Bouvet Island" : "BV",
            "Brazil" : "BR",
            "British Indian Ocean Territory" : "IO",
            "British Virgin Islands" : "VG",
            "Brunei" : "BN",
            "Bulgaria" : "BG",
            "Burkina Faso" : "BF",
            "Burundi" : "BI",
            "Cambodia" : "KH",
            "Cameroon" : "CM",
            "Canada" : "CA",
            "Cape Verde" : "CV",
            "Caribbean Netherlands" : "BQ",
            "Cayman Islands" : "KY",
            "Central African Republic" : "CF",
            "Chad" : "TD",
            "Chile" : "CL",
            "China" : "CN",
            "Christmas Island" : "CX",
            "Cocos (Keeling) Islands" : "CC",
            "Colombia" : "CO",
            "Comoros" : "KM",
            "Congo - Brazzaville" : "CG",
            "Congo - Kinshasa" : "CD",
            "Cook Islands" : "CK",
            "Costa Rica" : "CR",
            "Côte d’Ivoire" : "CI",
            "Croatia" : "HR",
            "Cuba" : "CU",
            "Curaçao" : "CW",
            "Cyprus" : "CY",
            "Czechia" : "CZ",
            "Denmark" : "DK",
            "Djibouti" : "DJ",
            "Dominica" : "DM",
            "Dominican Republic" : "DO",
            "Ecuador" : "EC",
            "Egypt" : "EG",
            "El Salvador" : "SV",
            "Equatorial Guinea" : "GQ",
            "Eritrea" : "ER",
            "Estonia" : "EE",
            "Eswatini" : "SZ",
            "Ethiopia" : "ET",
            "Falkland Islands" : "FK",
            "Faroe Islands" : "FO",
            "Fiji" : "FJ",
            "Finland" : "FI",
            "France" : "FR",
            "French Guiana" : "GF",
            "French Polynesia" : "PF",
            "French Southern Territories" : "TF",
            "Gabon" : "GA",
            "Gambia" : "GM",
            "Georgia" : "GE",
            "Germany" : "DE",
            "Ghana" : "GH",
            "Gibraltar" : "GI",
            "Greece" : "GR",
            "Greenland" : "GL",
            "Grenada" : "GD",
            "Guadeloupe" : "GP",
            "Guam" : "GU",
            "Guatemala" : "GT",
            "Guernsey" : "GG",
            "Guinea" : "GN",
            "Guinea-Bissau" : "GW",
            "Guyana" : "GY",
            "Haiti" : "HT",
            "Heard & McDonald Islands" : "HM",
            "Honduras" : "HN",
            "Hong Kong SAR China" : "HK",
            "Hungary" : "HU",
            "Iceland" : "IS",
            "India" : "IN",
            "Indonesia" : "ID",
            "Iran" : "IR",
            "Iraq" : "IQ",
            "Ireland" : "IE",
            "Isle of Man" : "IM",
            "Israel" : "IL",
            "Italy" : "IT",
            "Jamaica" : "JM",
            "Japan" : "JP",
            "Jersey" : "JE",
            "Jordan" : "JO",
            "Kazakhstan" : "KZ",
            "Kenya" : "KE",
            "Kiribati" : "KI",
            "Kuwait" : "KW",
            "Kyrgyzstan" : "KG",
            "Laos" : "LA",
            "Latvia" : "LV",
            "Lebanon" : "LB",
            "Lesotho" : "LS",
            "Liberia" : "LR",
            "Libya" : "LY",
            "Liechtenstein" : "LI",
            "Lithuania" : "LT",
            "Luxembourg" : "LU",
            "Macao SAR China" : "MO",
            "Madagascar" : "MG",
            "Malawi" : "MW",
            "Malaysia" : "MY",
            "Maldives" : "MV",
            "Mali" : "ML",
            "Malta" : "MT",
            "Marshall Islands" : "MH",
            "Martinique" : "MQ",
            "Mauritania" : "MR",
            "Mauritius" : "MU",
            "Mayotte" : "YT",
            "Mexico" : "MX",
            "Micronesia" : "FM",
            "Moldova" : "MD",
            "Monaco" : "MC",
            "Mongolia" : "MN",
            "Montenegro" : "ME",
            "Montserrat" : "MS",
            "Morocco" : "MA",
            "Mozambique" : "MZ",
            "Myanmar (Burma)" : "MM",
            "Namibia" : "NA",
            "Nauru" : "NR",
            "Nepal" : "NP",
            "Netherlands" : "NL",
            "New Caledonia" : "NC",
            "New Zealand" : "NZ",
            "Nicaragua" : "NI",
            "Niger" : "NE",
            "Nigeria" : "NG",
            "Niue" : "NU",
            "Norfolk Island" : "NF",
            "North Korea" : "KP",
            "North Macedonia" : "MK",
            "Northern Mariana Islands" : "MP",
            "Norway" : "NO",
            "Oman" : "OM",
            "Pakistan" : "PK",
            "Palau" : "PW",
            "Palestinian Territories" : "PS",
            "Panama" : "PA",
            "Papua New Guinea" : "PG",
            "Paraguay" : "PY",
            "Peru" : "PE",
            "Philippines" : "PH",
            "Pitcairn Islands" : "PN",
            "Poland" : "PL",
            "Portugal" : "PT",
            "Puerto Rico" : "PR",
            "Qatar" : "QA",
            "Réunion" : "RE",
            "Romania" : "RO",
            "Russia" : "RU",
            "Rwanda" : "RW",
            "Samoa" : "WS",
            "San Marino" : "SM",
            "São Tomé & Príncipe" : "ST",
            "Saudi Arabia" : "SA",
            "Senegal" : "SN",
            "Serbia" : "RS",
            "Seychelles" : "SC",
            "Sierra Leone" : "SL",
            "Singapore" : "SG",
            "Sint Maarten" : "SX",
            "Slovakia" : "SK",
            "Slovenia" : "SI",
            "Solomon Islands" : "SB",
            "Somalia" : "SO",
            "South Africa" : "ZA",
            "South Georgia & South Sandwich Islands" : "GS",
            "South Korea" : "KR",
            "South Sudan" : "SS",
            "Spain" : "ES",
            "Sri Lanka" : "LK",
            "St. Barthélemy" : "BL",
            "St. Helena" : "SH",
            "St. Kitts & Nevis" : "KN",
            "St. Lucia" : "LC",
            "St. Martin" : "MF",
            "St. Pierre & Miquelon" : "PM",
            "St. Vincent & Grenadines" : "VC",
            "Sudan" : "SD",
            "Suriname" : "SR",
            "Svalbard & Jan Mayen" : "SJ",
            "Sweden" : "SE",
            "Switzerland" : "CH",
            "Syria" : "SY",
            "Taiwan" : "TW",
            "Tajikistan" : "TJ",
            "Tanzania" : "TZ",
            "Thailand" : "TH",
            "Timor-Leste" : "TL",
            "Togo" : "TG",
            "Tokelau" : "TK",
            "Tonga" : "TO",
            "Trinidad & Tobago" : "TT",
            "Tunisia" : "TN",
            "Turkey" : "TR",
            "Turkmenistan" : "TM",
            "Turks & Caicos Islands" : "TC",
            "Tuvalu" : "TV",
            "U.S. Outlying Islands" : "UM",
            "U.S. Virgin Islands" : "VI",
            "Uganda" : "UG",
            "Ukraine" : "UA",
            "United Arab Emirates" : "AE",
            "United Kingdom" : "GB",
            "United States" : "US",
            "Uruguay" : "UY",
            "Uzbekistan" : "UZ",
            "Vanuatu" : "VU",
            "Vatican City" : "VA",
            "Venezuela" : "VE",
            "Vietnam" : "VN",
            "Wallis & Futuna" : "WF",
            "Western Sahara" : "EH",
            "Yemen" : "YE",
            "Zambia" : "ZM",
            "Zimbabwe" : "ZW"
        }

        return data[item];
}


export default class extends Controller {



    connect() {

        let country = document.querySelector('#countryValue');
        let countryChange = document.querySelector('#change_user_info_country');
        let postalCode = document.querySelector('#change_user_info_postalCode');
        let city = document.querySelector('#change_user_info_city');
        let livraison = document.querySelector('#prix-livraison');
        let dateLivraison = document.querySelector('#date-livraison');
        let price = document.querySelector('#price');
        let priceTotal = document.querySelector('#price-total');
        let codeCountry = code_country(country.placeholder);
        let postalCodeSelected = postalCode.value;
        let citySelected = city.value;

        callDhlRateRequestApi(codeCountry, postalCodeSelected, citySelected);


        if(postalCode.value.length > 0 && city.value.length > 0 && country.value.length){
            codeCountry = code_country(country.placeholder);
            postalCodeSelected = postalCode.value;
            citySelected = city.value;
        }

        countryChange.addEventListener('change', (event) => {
            

            codeCountry = code_country(event.target.value);

            console.log(codeCountry);

            

            if(null !== codeCountry && null !== postalCodeSelected && 4 <= postalCodeSelected.length  && null !== citySelected && 3<= citySelected.length){
                callDhlRateRequestApi(codeCountry, postalCodeSelected, citySelected);
            }
        });

        postalCode.addEventListener('keyup', (event) => {

            postalCodeSelected = event.target.value;

            if(null !== codeCountry && null !== postalCodeSelected && 4 <= postalCodeSelected.length  && null !== citySelected && 3<= citySelected.length){
                callDhlRateRequestApi(codeCountry, postalCodeSelected, citySelected);
            }
        });

        city.addEventListener('keyup', (event) => {
            citySelected = event.target.value;

            if(null !== codeCountry && null !== postalCodeSelected && 4 <= postalCodeSelected.length && null !== citySelected && 3<= citySelected.length){
                callDhlRateRequestApi(codeCountry, postalCodeSelected, citySelected);
            }
        })


        function callDhlRateRequestApi(codeCountry, postalCodeSelected, citySelected){

            let url = "/dhl_raterequest/";
            let finalUrl = url + '?codeCountry=' + codeCountry + '&postalCodeSelected=' + postalCodeSelected + '&citySelected=' + citySelected;
            let reduction = 0;

            fetch( finalUrl ).then(function(response) {
                response.json().then(function(data) {

                    console.log(data);

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