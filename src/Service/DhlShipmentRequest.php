<?php

namespace App\Service;

use DateTime;


class DhlShipmentRequest
{

    public function callDhlShipmentRequestApi($account, $image_base_64)
    {
          $response = [];

          $date = new DateTime('now');
          $shipTimestamp = $date->format('Y-m-d') . 'T' . $date->format('H:i:s') . ' GMT'.$date->format('P');
     
          $data = $this->constructData($shipTimestamp, $account, $image_base_64);

          dd($data);exit;

          /*
          * Controleur 
          */
          //$data = file_get_contents('data.json');
          $url = 'https://wsbexpress.dhl.com/rest/sndpt/ShipmentRequest';
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


    private function constructData($shipTimestamp, $account, $image_base_64)
    {

        $dataJson = '{
            "ShipmentRequest": {
                "RequestedShipment": {
                    "ShipTimestamp": "' . $shipTimestamp .'",
                    "PaymentInfo": "DDP",
                    "ShipmentInfo": {
                        "Currency": "EUR",
                        "Account": "' . $account .'",
                        "DropOffType": "REGULAR_PICKUP",
                        "UnitOfMeasurement": "SI",
                        "ShipmentReferences": {
                            "ShipmentReference": {
                                "ShipmentReference": "TEST ESI TEAM",
                                "ShipmentReferenceType": "CU"
                            }
                        },
                        "LabelOptions": {
                            "DHLCustomsInvoiceType": "COMMERCIAL_INVOICE",
                            "RequestDHLCustomsInvoice": "Y",
                            "DHLCustomsInvoiceLanguageCode": "dut",
                            "DHLCustomsInvoiceLanguageCountryCode": "LU",
                            "RequestWaybillDocument": "Y",
                            "NumberOfWaybillDocumentCopies": "1"
                        },
                        "SpecialServices": {
                            "Service": [
                                {
                                    "ServiceType": "WY"
                                },
                                {
                                    "ServiceType": "DD"
                                },
                                {
                                    "ServiceType": "II",
                                    "ServiceValue": 100
                                }
                            ]
                        },
                        "ServiceType": "P",
                        "PaperlessTradeEnabled": "true",
                        "PaperlessTradeImage": "' . $image_base_64 .'",
                        "DocumentImages": [
                            {
                                "DocumentImage": {
                                    "DocumentImageType": "DCL",
                                    "DocumentImage": "{{BASE_64}}",
                                    "DocumentImageFormat": "PDF"
                                }
                            }
                        ]
                    },
                    "InternationalDetail": {
                        "ExportDeclaration": {
                            "InvoiceReferences": {
                                "InvoiceReference": {
                                    "InvoiceReferenceType": "MRN",
                                    "InvoiceReferenceNumber": "21BEJD4DCMAM33DOI2"
                                }
                            },
                            "InvoiceNumber": "INV12345",
                            "InvoiceDate": "2021-04-13",
                            "ExportReasonType": "PERMANENT",
                            "PlaceOfIncoterm": "LUX",
                            "RecipientReference": "REF12345",
                            "ExportLineItems": {
                                "ExportLineItem": [
                                    {
                                        "GrossWeight": 1.2,
                                        "ManufacturingCountryCode": "LU",
                                        "QuantityUnitOfMeasurement": "PCS",
                                        "CommodityCode": 49019900,
                                        "Quantity": "2",
                                        "UnitPrice": 62.50,
                                        "ItemDescription": "Item Description",
                                        "ItemNumber": "1",
                                        "NetWeight": 1.2
                                    },
                                    {
                                        "GrossWeight": 1.5,
                                        "ManufacturingCountryCode": "US",
                                        "QuantityUnitOfMeasurement": "PCS",
                                        "CommodityCode": 49019900,
                                        "Quantity": "5",
                                        "UnitPrice": 35.5,
                                        "ItemDescription": "Item Description",
                                        "ItemNumber": "2",
                                        "NetWeight": 1.5
                                    }
                                ]
                            }
                        },
                        "Content": "NON_DOCUMENTS",
                        "Commodities": {
                            "Description": "TEST ESI TEAM"
                        }
                    },
                    "Ship": {
                        "Shipper": {
                            "Contact": {
                                "PersonName": "TEST ESI TEAM",
                                "CompanyName": "TEST ESI TEAM",
                                "PhoneNumber": "+32477123456",
                                "EmailAddress": "info@company.com"
                            },
                            "Address": {
                                "StreetLines": "11a Z.I. Weiergewan",
                                "PostalCode": "5326",
                                "City": "CONTERN",
                                "CountryCode": "LU"
                            },
                            "RegistrationNumbers": {
                                "RegistrationNumber": [{
                                    "NumberTypeCode": "EOR",
                                    "Number": "BE987654312000",
                                    "NumberIssuerCountryCode": "LU"
                                },
                                {
                                    "NumberTypeCode": "FED",
                                    "Number": "BE987654312000",
                                    "NumberIssuerCountryCode": "LU"
                                }]
                            }
                        },
                        "Recipient": {
                            "Contact": {
                                "PersonName": "TEST ESI TEAM",
                                "CompanyName": "TEST ESI TEAM",
                                "PhoneNumber": "+32477123456",
                                "EmailAddress": "info@company.com"
                            },
                            "Address": {
                                "StreetLines": "Street 123",
                                "PostalCode": "W11 AB",
                                "City": "London",
                                "CountryCode": "GB"
                            },
                            "RegistrationNumbers": {
                                "RegistrationNumber": [{
                                    "NumberTypeCode": "EOR",
                                    "Number": "BE987654312000",
                                    "NumberIssuerCountryCode": "LU"
                                },
                                {
                                    "NumberTypeCode": "FED",
                                    "Number": "BE987654312000",
                                    "NumberIssuerCountryCode": "LU"
                                }]
                            }
                        }
                    },
                    "Packages": {
                        "RequestedPackages": [
                            {
                                "@number": "1",
                                "Weight": 2,
                                "Dimensions": {
                                    "Length": 20,
                                    "Width": 20,
                                    "Height": 30
                                },
                                "PackageReferences": {
                                    "PackageReference": {
                                        "PackageReference": "Piece 1",
                                        "PackageReferenceType": "CU"
                                    }
                                }
                            },
                            {
                                "@number": "2",
                                "Weight": 4,
                                "Dimensions": {
                                    "Length": 10,
                                    "Width": 40,
                                    "Height": 50
                                },
                                "PackageReferences": {
                                    "PackageReference": {
                                        "PackageReference": "Piece 2",
                                        "PackageReferenceType": "CU"
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        }';

        return $dataJson;
    }
}