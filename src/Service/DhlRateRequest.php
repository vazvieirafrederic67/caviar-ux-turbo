<?php

namespace App\Service;

use DateTime;


class DhlRateRequest
{

    public function callDhlRateRequestApi($cityDest, $cityPostalCode, $cityCountryCode)
    {
          $response = [];

          $date = new DateTime('now');
          $shipTimestamp = $date->format('Y-m-d') . 'T' . $date->format('H:i:s') . ' GMT'.$date->format('P');
          $cityExpe = "Clervaux";
          $postalCodeExpe = 9712;
          $countryCodeExpe = "LU";
          $lenght = 20;
          $width = 25;
          $height = 10;
          $weightValue = 1;
          $data = $this->constructData($shipTimestamp, $cityExpe, $postalCodeExpe, $countryCodeExpe, $cityDest, $cityPostalCode, $cityCountryCode, $lenght, $width, $height, $weightValue);


          /*
          * Controleur 
          */
          //$data = file_get_contents('data.json');
          $url = 'https://wsbexpress.dhl.com/rest/sndpt/RateRequest';
          $username = 'opalesLU';
          $password = 'K^0aA@2tF!8k';

          /*********************************************************************************** */


          /**
           * Service
           */
          $curl = curl_init($url);

          curl_setopt_array($curl, [
              CURLOPT_CAPATH          => __dir__ . '/ssl.txt',
              CURLOPT_RETURNTRANSFER  =>  true,
              CURLOPT_TIMEOUT         => 10,
              CURLOPT_USERPWD         => $username . ":" . $password,
              CURLOPT_POSTFIELDS      => $data,
              CURLOPT_POST            => true,
              CURLOPT_HTTPHEADER      => array('Content-Type: application/json'),
          ]);

          $final = curl_exec($curl);

          if($final === false) {
              $response['error'] = curl_error($curl);
          }else{

              $response['code_response'] = curl_getinfo($curl, CURLINFO_HTTP_CODE);
              
              if(curl_getinfo($curl, CURLINFO_HTTP_CODE)  === 200) {

                  $final = json_decode($final, true);

                  if(null!== $response['message'] = $final['RateResponse']["Provider"][0] ){
                    $response['message'] = $final['RateResponse']["Provider"][0];
                  }
                  

                  if(isset($final['RateResponse']["Provider"][0]["Service"])){
                    $services = $final['RateResponse']["Provider"][0]["Service"];

                    foreach($services as $service){
  
                        if("C" === $service["@type"]){
  
                            $amount = $service["TotalNet"]["Amount"];
                            $delivery = $service["DeliveryTime"];
  
                            $response['amount'] = $amount;
                            $response['delivery'] = $delivery;
                        }
                    }
                  }
              }
          }

          curl_close($curl);
          return $response;
    }


    private function constructData($shipTimestamp, $cityExpe, $postalCodeExpe, $countryCodeExpe, $cityDest, $cityPostalCode, $cityCountryCode, $lenght, $width, $height, $weightValue)
    {

        $dataJson = '{

            "RateRequest" : {
          
              "ClientDetails" : null,
          
              "RequestedShipment" : {
          
                "DropOffType" : "REGULAR_PICKUP",
          
                "ShipTimestamp" : "' . $shipTimestamp .'",
          
                "UnitOfMeasurement" : "SI",
          
                "Content" : "DOCUMENTS",
          
                "PaymentInfo" : "DAP",
          
                "NextBusinessDay" : "Y",
          
                "Account" : "367138772",
          
                "Ship" : {
          
                  "Shipper" : {
          
                    "City" : "' . $cityExpe .'",
          
                    "PostalCode" : "' . $postalCodeExpe .'",
          
                    "CountryCode" : "' . $countryCodeExpe .'"
          
                  },
          
                  "Recipient" : {
          
                    "City" : "' . $cityDest . '",
          
                    "PostalCode" : "' . $cityPostalCode . '",
          
                    "CountryCode" : "'. $cityCountryCode .'"
          
                  }
          
                },
          
                "Packages" : {
          
                  "RequestedPackages" : {
          
                    "@number" : "1",
          
                    "Weight" : {
          
                      "Value" : "' . $weightValue . '"
          
                    },
          
                    "Dimensions" : {
          
                      "Length" : "' . $lenght . '",
          
                      "Width" : "' . $width . ' ",
          
                      "Height" : "' . $height . '"
          
                    }
          
                  }
          
                }
          
              }
          
            }
          
          }';

        return $dataJson;
    }
}