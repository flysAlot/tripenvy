// GOOGLE FLIGHTS REQUEST

{
  "request": {
    "slice": [
      {
        "origin": "SFO",
        "destination": "DXB",
        "date": "2015-11-25"
      }
    ],
    "passengers": {
      "adultCount": 1,
      "infantInLapCount": 0,
      "infantInSeatCount": 0,
      "childCount": 0,
      "seniorCount": 0
    },
    "solutions": 20,
    "refundable": false
  }
}



//RESPONSE FORMATTED
20 solutions found.

Solution#   1   Sale Price: USD871.70
         Slice 0
             UA 728 SFO 2015-11-25T08:34-08:00 IAD 2015-11-25T16:40-05:00
             UA 976 IAD 2015-11-25T22:15-05:00 DXB 2015-11-26T20:15+04:00

Solution#   2   Sale Price: USD871.70
         Slice 0
             UA 516 SFO 2015-11-25T09:21-08:00 IAD 2015-11-25T17:32-05:00
             UA 976 IAD 2015-11-25T22:15-05:00 DXB 2015-11-26T20:15+04:00

Solution#   3   Sale Price: USD871.70
         Slice 0
             UA 408 SFO 2015-11-25T07:32-08:00 IAD 2015-11-25T15:43-05:00
             UA 976 IAD 2015-11-25T22:15-05:00 DXB 2015-11-26T20:15+04:00

///RESPONSE UNFORMATTED
{
 "kind": "qpxExpress#tripsSearch",
 "trips": {
  "kind": "qpxexpress#tripOptions",
  "requestId": "nSNo46bFTMJ3jy58N0NByL",
  "data": {
   "kind": "qpxexpress#data",
   "airport": [
    {
     "kind": "qpxexpress#airportData",
     "code": "AMM",
     "city": "AMM",
     "name": "Amman Queen Alia International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "AMS",
     "city": "AMS",
     "name": "Amsterdam Schiphol Airport"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "BOS",
     "city": "BOS",
     "name": "Boston Logan International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "CDG",
     "city": "PAR",
     "name": "Paris Charles de Gaulle"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "DXB",
     "city": "DXB",
     "name": "Dubai International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "FRA",
     "city": "FRA",
     "name": "Frankfurt International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "HKG",
     "city": "HKG",
     "name": "Hong Kong International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "IAD",
     "city": "WAS",
     "name": "Washington Dulles International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "IST",
     "city": "IST",
     "name": "Istanbul Ataturk"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "JFK",
     "city": "NYC",
     "name": "New York John F Kennedy International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "MUC",
     "city": "MUC",
     "name": "Munich Franz Joseph Strauss Int'l"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "ORD",
     "city": "CHI",
     "name": "Chicago O'Hare"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "SFO",
     "city": "SFO",
     "name": "San Francisco International"
    }
   ],
   "city": [
    {
     "kind": "qpxexpress#cityData",
     "code": "AMM",
     "name": "Amman"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "AMS",
     "name": "Amsterdam"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "BOS",
     "name": "Boston"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "CHI",
     "name": "Chicago"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "DXB",
     "name": "Dubai"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "FRA",
     "name": "Frankfurt"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "HKG",
     "name": "Hong Kong"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "IST",
     "name": "Istanbul"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "MUC",
     "name": "Munich"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "NYC",
     "name": "New York"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "PAR",
     "name": "Paris"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "SFO",
     "name": "San Francisco"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "WAS",
     "name": "Washington"
    }
   ],
   "aircraft": [
    {
     "kind": "qpxexpress#aircraftData",
     "code": "320",
     "name": "Airbus A320"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "321",
     "name": "Airbus A321"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "32S",
     "name": "Airbus A320"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "332",
     "name": "Airbus A330"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "333",
     "name": "Airbus A330"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "343",
     "name": "Airbus A340"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "346",
     "name": "Airbus A340"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "388",
     "name": "Airbus A380"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "738",
     "name": "Boeing 737"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "739",
     "name": "Boeing 737"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "744",
     "name": "Boeing 747"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "772",
     "name": "Boeing 777"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "777",
     "name": "Boeing 777"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "77W",
     "name": "Boeing 777"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "787",
     "name": "Boeing 787"
    }
   ],
   "tax": [
    {
     "kind": "qpxexpress#taxData",
     "id": "FR_007",
     "name": "French Airport Tax"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "QX",
     "name": "French International Passenger Service Charge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "ZR_001",
     "name": "United Arab Emirates International Advanced Passenger Information Fee"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "YR_F",
     "name": "CX YR surcharge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "RN_001",
     "name": "The Netherlands Passenger Service Charge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "CJ_001",
     "name": "Netherlands Security Service Charge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "YR_I",
     "name": "KL YR surcharge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "YQ_I",
     "name": "UA YQ surcharge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "KJ_001",
     "name": "Jordan Civil Aviation Fee"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "XF",
     "name": "US Passenger Facility Charge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "RA_002",
     "name": "German Passenger Service Charge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "DE_001",
     "name": "Germany Airport Security Charge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "YQ_F",
     "name": "EK YQ surcharge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "TR_001",
     "name": "Turkey Airport Service Charge International"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "AY_001",
     "name": "US September 11th Security Fee"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "US_002",
     "name": "US International Departure Tax"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "VV_001",
     "name": "Netherlands Noise Surcharge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "HK_001",
     "name": "Hong Kong Air Passenger Departure Tax"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "FR_001",
     "name": "France Civil Aviation Tax Domestic And International"
    }
   ],
   "carrier": [
    {
     "kind": "qpxexpress#carrierData",
     "code": "AF",
     "name": "Air France"
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "B6",
     "name": "Jetblue Airways Corporation"
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "CX",
     "name": "Cathay Pacific Airways Ltd."
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "EK",
     "name": "Emirates"
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "KL",
     "name": "KLM Royal Dutch Airlines"
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "LH",
     "name": "Deutsche Lufthansa AG"
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "RJ",
     "name": "Royal Jordanian"
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "TK",
     "name": "Turkish Airlines Inc."
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "UA",
     "name": "United Airlines, Inc."
    }
   ]
  },
  "tripOption": [
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD871.70",
    "id": "CQ5KGq0lB0UTMyZ4rM848J009",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1421,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 306,
        "flight": {
         "carrier": "UA",
         "number": "728"
        },
        "id": "GB-3TiV-jQYofH7m",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LtKFCQjWHPdXtaHz",
          "aircraft": "739",
          "arrivalTime": "2015-11-25T16:40-05:00",
          "departureTime": "2015-11-25T08:34-08:00",
          "origin": "SFO",
          "destination": "IAD",
          "originTerminal": "3",
          "duration": 306,
          "onTimePerformance": 80,
          "mileage": 2412,
          "meal": "Food for Purchase",
          "secure": true
         }
        ],
        "connectionDuration": 335
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 780,
        "flight": {
         "carrier": "UA",
         "number": "976"
        },
        "id": "GS9fIAer4DR1bYtk",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LQ28ErUWViTiqY+m",
          "aircraft": "777",
          "arrivalTime": "2015-11-26T20:15+04:00",
          "departureTime": "2015-11-25T22:15-05:00",
          "origin": "IAD",
          "destination": "DXB",
          "destinationTerminal": "1",
          "duration": 780,
          "mileage": 7052,
          "meal": "Dinner",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "carrier": "UA",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "WLOLRC7N"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "segmentId": "GS9fIAer4DR1bYtk"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "segmentId": "GB-3TiV-jQYofH7m"
       }
      ],
      "baseFareTotal": "USD598.00",
      "saleFareTotal": "USD598.00",
      "saleTaxTotal": "USD273.70",
      "saleTotal": "USD871.70",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "USD240.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       }
      ],
      "fareCalculation": "SFO UA X/WAS UA DXB 598.00WLOLRC7N NUC 598.00 END ROE 1.00 FARE USD 598.00 XT 17.70US 5.60AY 1.40ZR 240.00YQ 9.00XF SFO4.50 IAD4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD871.70",
    "id": "CQ5KGq0lB0UTMyZ4rM848J008",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1374,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 311,
        "flight": {
         "carrier": "UA",
         "number": "516"
        },
        "id": "G9VmvC83+DS6WLAd",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LpofHMX3GntmSpfH",
          "aircraft": "739",
          "arrivalTime": "2015-11-25T17:32-05:00",
          "departureTime": "2015-11-25T09:21-08:00",
          "origin": "SFO",
          "destination": "IAD",
          "originTerminal": "3",
          "duration": 311,
          "onTimePerformance": 90,
          "mileage": 2412,
          "meal": "Food for Purchase",
          "secure": true
         }
        ],
        "connectionDuration": 283
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 780,
        "flight": {
         "carrier": "UA",
         "number": "976"
        },
        "id": "GS9fIAer4DR1bYtk",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LQ28ErUWViTiqY+m",
          "aircraft": "777",
          "arrivalTime": "2015-11-26T20:15+04:00",
          "departureTime": "2015-11-25T22:15-05:00",
          "origin": "IAD",
          "destination": "DXB",
          "destinationTerminal": "1",
          "duration": 780,
          "mileage": 7052,
          "meal": "Dinner",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "carrier": "UA",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "WLOLRC7N"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "segmentId": "GS9fIAer4DR1bYtk"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "segmentId": "G9VmvC83+DS6WLAd"
       }
      ],
      "baseFareTotal": "USD598.00",
      "saleFareTotal": "USD598.00",
      "saleTaxTotal": "USD273.70",
      "saleTotal": "USD871.70",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "USD240.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       }
      ],
      "fareCalculation": "SFO UA X/WAS UA DXB 598.00WLOLRC7N NUC 598.00 END ROE 1.00 FARE USD 598.00 XT 17.70US 5.60AY 1.40ZR 240.00YQ 9.00XF SFO4.50 IAD4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD871.70",
    "id": "CQ5KGq0lB0UTMyZ4rM848J00A",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1483,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 311,
        "flight": {
         "carrier": "UA",
         "number": "408"
        },
        "id": "GzmC8xb2lQkb8CZY",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L+iT2sPL6SQohnuj",
          "aircraft": "739",
          "arrivalTime": "2015-11-25T15:43-05:00",
          "departureTime": "2015-11-25T07:32-08:00",
          "origin": "SFO",
          "destination": "IAD",
          "originTerminal": "3",
          "duration": 311,
          "onTimePerformance": 90,
          "mileage": 2412,
          "meal": "Food for Purchase",
          "secure": true
         }
        ],
        "connectionDuration": 392
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 780,
        "flight": {
         "carrier": "UA",
         "number": "976"
        },
        "id": "GS9fIAer4DR1bYtk",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LQ28ErUWViTiqY+m",
          "aircraft": "777",
          "arrivalTime": "2015-11-26T20:15+04:00",
          "departureTime": "2015-11-25T22:15-05:00",
          "origin": "IAD",
          "destination": "DXB",
          "destinationTerminal": "1",
          "duration": 780,
          "mileage": 7052,
          "meal": "Dinner",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "carrier": "UA",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "WLOLRC7N"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "segmentId": "GS9fIAer4DR1bYtk"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "segmentId": "GzmC8xb2lQkb8CZY"
       }
      ],
      "baseFareTotal": "USD598.00",
      "saleFareTotal": "USD598.00",
      "saleTaxTotal": "USD273.70",
      "saleTotal": "USD871.70",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "USD240.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       }
      ],
      "fareCalculation": "SFO UA X/WAS UA DXB 598.00WLOLRC7N NUC 598.00 END ROE 1.00 FARE USD 598.00 XT 17.70US 5.60AY 1.40ZR 240.00YQ 9.00XF SFO4.50 IAD4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD871.70",
    "id": "CQ5KGq0lB0UTMyZ4rM848J003",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1283,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 308,
        "flight": {
         "carrier": "UA",
         "number": "309"
        },
        "id": "GuRMPwwpPtAVwjZy",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LnBI12Cc6R9gyd54",
          "aircraft": "739",
          "arrivalTime": "2015-11-25T19:00-05:00",
          "departureTime": "2015-11-25T10:52-08:00",
          "origin": "SFO",
          "destination": "IAD",
          "originTerminal": "3",
          "duration": 308,
          "onTimePerformance": 90,
          "mileage": 2412,
          "meal": "Food for Purchase",
          "secure": true
         }
        ],
        "connectionDuration": 195
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 780,
        "flight": {
         "carrier": "UA",
         "number": "976"
        },
        "id": "GS9fIAer4DR1bYtk",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LQ28ErUWViTiqY+m",
          "aircraft": "777",
          "arrivalTime": "2015-11-26T20:15+04:00",
          "departureTime": "2015-11-25T22:15-05:00",
          "origin": "IAD",
          "destination": "DXB",
          "destinationTerminal": "1",
          "duration": 780,
          "mileage": 7052,
          "meal": "Dinner",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "carrier": "UA",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "WLOLRC7N"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "segmentId": "GuRMPwwpPtAVwjZy"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "segmentId": "GS9fIAer4DR1bYtk"
       }
      ],
      "baseFareTotal": "USD598.00",
      "saleFareTotal": "USD598.00",
      "saleTaxTotal": "USD273.70",
      "saleTotal": "USD871.70",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "USD240.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       }
      ],
      "fareCalculation": "SFO UA X/WAS UA DXB 598.00WLOLRC7N NUC 598.00 END ROE 1.00 FARE USD 598.00 XT 17.70US 5.60AY 1.40ZR 240.00YQ 9.00XF SFO4.50 IAD4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD871.70",
    "id": "CQ5KGq0lB0UTMyZ4rM848J002",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1165,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 311,
        "flight": {
         "carrier": "UA",
         "number": "727"
        },
        "id": "GRsK-oC5McW4SXxa",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LIShO72x2cDtVgB6",
          "aircraft": "739",
          "arrivalTime": "2015-11-25T21:01-05:00",
          "departureTime": "2015-11-25T12:50-08:00",
          "origin": "SFO",
          "destination": "IAD",
          "originTerminal": "3",
          "duration": 311,
          "onTimePerformance": 70,
          "mileage": 2412,
          "meal": "Food for Purchase",
          "secure": true
         }
        ],
        "connectionDuration": 74
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 780,
        "flight": {
         "carrier": "UA",
         "number": "976"
        },
        "id": "GS9fIAer4DR1bYtk",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LQ28ErUWViTiqY+m",
          "aircraft": "777",
          "arrivalTime": "2015-11-26T20:15+04:00",
          "departureTime": "2015-11-25T22:15-05:00",
          "origin": "IAD",
          "destination": "DXB",
          "destinationTerminal": "1",
          "duration": 780,
          "mileage": 7052,
          "meal": "Dinner",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "carrier": "UA",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "WLOLRC7N"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "segmentId": "GS9fIAer4DR1bYtk"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "segmentId": "GRsK-oC5McW4SXxa"
       }
      ],
      "baseFareTotal": "USD598.00",
      "saleFareTotal": "USD598.00",
      "saleTaxTotal": "USD273.70",
      "saleTotal": "USD871.70",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "USD240.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       }
      ],
      "fareCalculation": "SFO UA X/WAS UA DXB 598.00WLOLRC7N NUC 598.00 END ROE 1.00 FARE USD 598.00 XT 17.70US 5.60AY 1.40ZR 240.00YQ 9.00XF SFO4.50 IAD4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD884.00",
    "id": "CQ5KGq0lB0UTMyZ4rM848J00K",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 2050,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 895,
        "flight": {
         "carrier": "CX",
         "number": "893"
        },
        "id": "GFpcHHQnbK7nh0ye",
        "cabin": "COACH",
        "bookingCode": "V",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LMgMLs3hN-wrhd0Y",
          "aircraft": "77W",
          "arrivalTime": "2015-11-26T07:05+08:00",
          "departureTime": "2015-11-25T00:10-08:00",
          "origin": "SFO",
          "destination": "HKG",
          "originTerminal": "I",
          "destinationTerminal": "1",
          "duration": 895,
          "mileage": 6911,
          "meal": "Breakfast",
          "secure": true
         }
        ],
        "connectionDuration": 590
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 565,
        "flight": {
         "carrier": "CX",
         "number": "731"
        },
        "id": "GjD95YPiVErK5foL",
        "cabin": "COACH",
        "bookingCode": "V",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LH+MTo4WK26ykA9K",
          "aircraft": "333",
          "arrivalTime": "2015-11-26T22:20+04:00",
          "departureTime": "2015-11-26T16:55+08:00",
          "origin": "HKG",
          "destination": "DXB",
          "originTerminal": "1",
          "destinationTerminal": "1",
          "duration": 565,
          "mileage": 3676,
          "meal": "Cold Meal"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Abp16HhScznfPFpRkclHROW5CxJigRxihUkMR1eGJl+6",
        "carrier": "CX",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "VLSPCLO"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Abp16HhScznfPFpRkclHROW5CxJigRxihUkMR1eGJl+6",
        "segmentId": "GFpcHHQnbK7nh0ye"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Abp16HhScznfPFpRkclHROW5CxJigRxihUkMR1eGJl+6",
        "segmentId": "GjD95YPiVErK5foL"
       }
      ],
      "baseFareTotal": "USD826.00",
      "saleFareTotal": "USD826.00",
      "saleTaxTotal": "USD58.00",
      "saleTotal": "USD884.00",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YR_F",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YR",
        "salePrice": "USD28.80"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       }
      ],
      "fareCalculation": "SFO CX X/HKG CX DXB Q5.80 820.00VLSPCLO NUC 825.80 END ROE 1.00 FARE USD 826.00 XT 17.70US 5.60AY 1.40ZR 28.80YR 4.50XF SFO4.50",
      "latestTicketingTime": "2015-11-25T03:09-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD899.20",
    "id": "CQ5KGq0lB0UTMyZ4rM848J004",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1245,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 655,
        "flight": {
         "carrier": "UA",
         "number": "58"
        },
        "id": "GqRxwXitrN6Qb3yQ",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lleojo83s4C6vvja",
          "aircraft": "744",
          "arrivalTime": "2015-11-26T09:45+01:00",
          "departureTime": "2015-11-25T13:50-08:00",
          "origin": "SFO",
          "destination": "FRA",
          "originTerminal": "I",
          "destinationTerminal": "1",
          "duration": 655,
          "mileage": 5682,
          "meal": "Lunch",
          "secure": true
         }
        ],
        "connectionDuration": 215
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 375,
        "flight": {
         "carrier": "UA",
         "number": "8904"
        },
        "id": "GakfVtSPJhTIF1zJ",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LgEjXKvvVT7T-FXd",
          "aircraft": "744",
          "arrivalTime": "2015-11-26T22:35+04:00",
          "departureTime": "2015-11-26T13:20+01:00",
          "origin": "FRA",
          "destination": "DXB",
          "originTerminal": "1",
          "destinationTerminal": "1",
          "duration": 375,
          "operatingDisclosure": "OPERATED BY LUFTHANSA",
          "mileage": 3008,
          "meal": "Meal"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "carrier": "UA",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "WLOLRC7N"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "segmentId": "GakfVtSPJhTIF1zJ"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Ac9YUBuilAg76G7VBV7+6b6Ft2zp02jgZdyt1ECsvfQY",
        "segmentId": "GqRxwXitrN6Qb3yQ"
       }
      ],
      "baseFareTotal": "USD598.00",
      "saleFareTotal": "USD598.00",
      "saleTaxTotal": "USD301.20",
      "saleTotal": "USD899.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "DE_001",
        "chargeType": "GOVERNMENT",
        "code": "DE",
        "country": "DE",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RA_002",
        "chargeType": "GOVERNMENT",
        "code": "RA",
        "country": "DE",
        "salePrice": "USD23.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "USD240.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       }
      ],
      "fareCalculation": "SFO UA X/FRA UA DXB 598.00WLOLRC7N NUC 598.00 END ROE 1.00 FARE USD 598.00 XT 17.70US 5.60AY 9.00DE 23.00RA 1.40ZR 240.00YQ 4.50XF SFO4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD899.50",
    "id": "CQ5KGq0lB0UTMyZ4rM848J00F",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1850,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 900,
        "flight": {
         "carrier": "CX",
         "number": "879"
        },
        "id": "GjAjlPZGWmTwUK28",
        "cabin": "COACH",
        "bookingCode": "V",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LZ0UE+WduHHj2szv",
          "aircraft": "77W",
          "arrivalTime": "2015-11-26T18:55+08:00",
          "departureTime": "2015-11-25T11:55-08:00",
          "origin": "SFO",
          "destination": "HKG",
          "originTerminal": "I",
          "destinationTerminal": "1",
          "duration": 900,
          "mileage": 6911,
          "meal": "Dinner",
          "secure": true
         }
        ],
        "connectionDuration": 395
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 555,
        "flight": {
         "carrier": "CX",
         "number": "745"
        },
        "id": "GoP62ZyD-6z+sHnC",
        "cabin": "COACH",
        "bookingCode": "V",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L+Y7jt-J3ZtGKAQU",
          "aircraft": "333",
          "arrivalTime": "2015-11-27T06:45+04:00",
          "departureTime": "2015-11-27T01:30+08:00",
          "origin": "HKG",
          "destination": "DXB",
          "originTerminal": "1",
          "destinationTerminal": "1",
          "duration": 555,
          "mileage": 3676,
          "meal": "Continental Breakfast"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "Abp16HhScznfPFpRkclHROW5CxJigRxihUkMR1eGJl+6",
        "carrier": "CX",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "VLSPCLO"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Abp16HhScznfPFpRkclHROW5CxJigRxihUkMR1eGJl+6",
        "segmentId": "GoP62ZyD-6z+sHnC"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "Abp16HhScznfPFpRkclHROW5CxJigRxihUkMR1eGJl+6",
        "segmentId": "GjAjlPZGWmTwUK28"
       }
      ],
      "baseFareTotal": "USD826.00",
      "saleFareTotal": "USD826.00",
      "saleTaxTotal": "USD73.50",
      "saleTotal": "USD899.50",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "HK_001",
        "chargeType": "GOVERNMENT",
        "code": "HK",
        "country": "HK",
        "salePrice": "USD15.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YR_F",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YR",
        "salePrice": "USD28.80"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       }
      ],
      "fareCalculation": "SFO CX X/HKG CX DXB Q5.80 820.00VLSPCLO NUC 825.80 END ROE 1.00 FARE USD 826.00 XT 17.70US 5.60AY 15.50HK 1.40ZR 28.80YR 4.50XF SFO4.50",
      "latestTicketingTime": "2015-11-25T14:54-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD899.90",
    "id": "CQ5KGq0lB0UTMyZ4rM848J006",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1274,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 645,
        "flight": {
         "carrier": "KL",
         "number": "606"
        },
        "id": "GmfuFdkr3OKdMwjz",
        "cabin": "COACH",
        "bookingCode": "N",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Ljrlq9XIyu59zDOL",
          "aircraft": "332",
          "arrivalTime": "2015-11-26T10:30+01:00",
          "departureTime": "2015-11-25T14:45-08:00",
          "origin": "SFO",
          "destination": "AMS",
          "originTerminal": "I",
          "duration": 645,
          "mileage": 5457,
          "meal": "Meal",
          "secure": true
         }
        ],
        "connectionDuration": 235
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 394,
        "flight": {
         "carrier": "KL",
         "number": "427"
        },
        "id": "G-V0TLcHNU1zyAB+",
        "cabin": "COACH",
        "bookingCode": "N",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L3tIEgyya+Cvd3f8",
          "aircraft": "772",
          "arrivalTime": "2015-11-26T23:59+04:00",
          "departureTime": "2015-11-26T14:25+01:00",
          "origin": "AMS",
          "destination": "DXB",
          "destinationTerminal": "1",
          "duration": 394,
          "mileage": 3210,
          "meal": "Meal"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AP9gRWB5jW9g5mM1DNsr+vn3HXxpxBEvb81frZxsJ5jk",
        "carrier": "KL",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "NLB9WUS"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AP9gRWB5jW9g5mM1DNsr+vn3HXxpxBEvb81frZxsJ5jk",
        "segmentId": "GmfuFdkr3OKdMwjz"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AP9gRWB5jW9g5mM1DNsr+vn3HXxpxBEvb81frZxsJ5jk",
        "segmentId": "G-V0TLcHNU1zyAB+"
       }
      ],
      "baseFareTotal": "USD616.00",
      "saleFareTotal": "USD616.00",
      "saleTaxTotal": "USD283.90",
      "saleTotal": "USD899.90",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RN_001",
        "chargeType": "GOVERNMENT",
        "code": "RN",
        "country": "NL",
        "salePrice": "USD6.80"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "VV_001",
        "chargeType": "GOVERNMENT",
        "code": "VV",
        "country": "NL",
        "salePrice": "USD0.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "CJ_001",
        "chargeType": "GOVERNMENT",
        "code": "CJ",
        "country": "NL",
        "salePrice": "USD7.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YR_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YR",
        "salePrice": "USD240.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       }
      ],
      "fareCalculation": "SFO KL X/AMS KL DXB Q SFODXB18.00 598.00NLB9WUS NUC 616.00 END ROE 1.00 FARE USD 616.00 XT 17.70US 5.60AY 7.40CJ 6.80RN 0.50VV 1.40ZR 240.00YR 4.50XF SFO4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD903.30",
    "id": "CQ5KGq0lB0UTMyZ4rM848J00C",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1375,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 675,
        "flight": {
         "carrier": "LH",
         "number": "459"
        },
        "id": "GiIFc0ZX9R491ScQ",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LKML-A4iXaPw-SLc",
          "aircraft": "346",
          "arrivalTime": "2015-11-26T17:10+01:00",
          "departureTime": "2015-11-25T20:55-08:00",
          "origin": "SFO",
          "destination": "MUC",
          "originTerminal": "I",
          "destinationTerminal": "2",
          "duration": 675,
          "mileage": 5861,
          "meal": "Meal",
          "secure": true
         }
        ],
        "connectionDuration": 330
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 370,
        "flight": {
         "carrier": "LH",
         "number": "638"
        },
        "id": "GjIRtUfxV0GolDdn",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LMobkHgSAQxEEyeM",
          "aircraft": "346",
          "arrivalTime": "2015-11-27T07:50+04:00",
          "departureTime": "2015-11-26T22:40+01:00",
          "origin": "MUC",
          "destination": "DXB",
          "originTerminal": "2",
          "destinationTerminal": "1",
          "duration": 370,
          "mileage": 2834,
          "meal": "Meal"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "APE7u4T1vPkxld4jfvTl/TPnwTClzcTqbfRMhinq7Mqk",
        "carrier": "LH",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "WLOLRC7N"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "APE7u4T1vPkxld4jfvTl/TPnwTClzcTqbfRMhinq7Mqk",
        "segmentId": "GiIFc0ZX9R491ScQ"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "APE7u4T1vPkxld4jfvTl/TPnwTClzcTqbfRMhinq7Mqk",
        "segmentId": "GjIRtUfxV0GolDdn"
       }
      ],
      "baseFareTotal": "USD598.00",
      "saleFareTotal": "USD598.00",
      "saleTaxTotal": "USD305.30",
      "saleTotal": "USD903.30",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RA_002",
        "chargeType": "GOVERNMENT",
        "code": "RA",
        "country": "DE",
        "salePrice": "USD18.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "USD240.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YR_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YR",
        "salePrice": "USD17.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       }
      ],
      "fareCalculation": "SFO LH X/MUC LH DXB 598.00WLOLRC7N NUC 598.00 END ROE 1.00 FARE USD 598.00 XT 17.70US 5.60AY 18.60RA 1.40ZR 240.00YQ 17.50YR 4.50XF SFO4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD903.50",
    "id": "CQ5KGq0lB0UTMyZ4rM848J005",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1245,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 635,
        "flight": {
         "carrier": "AF",
         "number": "83"
        },
        "id": "G6oxoBF39HXmJLdV",
        "cabin": "COACH",
        "bookingCode": "N",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LfjERpso4+RfoUUe",
          "aircraft": "772",
          "arrivalTime": "2015-11-26T10:35+01:00",
          "departureTime": "2015-11-25T15:00-08:00",
          "origin": "SFO",
          "destination": "CDG",
          "originTerminal": "I",
          "destinationTerminal": "2E",
          "duration": 635,
          "mileage": 5567,
          "meal": "Meal",
          "secure": true
         }
        ],
        "connectionDuration": 195
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 415,
        "flight": {
         "carrier": "AF",
         "number": "3884"
        },
        "id": "GKCF7X+uaWi7sieA",
        "cabin": "COACH",
        "bookingCode": "N",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L1lbo107Zl03jgcT",
          "aircraft": "77W",
          "arrivalTime": "2015-11-26T23:45+04:00",
          "departureTime": "2015-11-26T13:50+01:00",
          "origin": "CDG",
          "destination": "DXB",
          "originTerminal": "2F",
          "destinationTerminal": "1",
          "duration": 415,
          "mileage": 3253,
          "meal": "Meal"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ApARLbpOmsXH+ExFIRCeVjxVL9Pdu38zk3azp8WgT1Yw",
        "carrier": "AF",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "NLB9WUS"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ApARLbpOmsXH+ExFIRCeVjxVL9Pdu38zk3azp8WgT1Yw",
        "segmentId": "GKCF7X+uaWi7sieA"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ApARLbpOmsXH+ExFIRCeVjxVL9Pdu38zk3azp8WgT1Yw",
        "segmentId": "G6oxoBF39HXmJLdV"
       }
      ],
      "baseFareTotal": "USD604.00",
      "saleFareTotal": "USD604.00",
      "saleTaxTotal": "USD299.50",
      "saleTotal": "USD903.50",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "FR_001",
        "chargeType": "GOVERNMENT",
        "code": "FR",
        "country": "FR",
        "salePrice": "USD4.30"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "QX",
        "chargeType": "GOVERNMENT",
        "code": "QX",
        "country": "FR",
        "salePrice": "USD17.10"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "FR_007",
        "chargeType": "GOVERNMENT",
        "code": "FR",
        "country": "FR",
        "salePrice": "USD8.90"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YR_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YR",
        "salePrice": "USD240.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       }
      ],
      "fareCalculation": "SFO AF X/PAR AF DXB Q SFODXB6.00 M 598.00NLB9WUS NUC 604.00 END ROE 1.00 FARE USD 604.00 XT 17.70US 5.60AY 13.20FR 17.10QX 1.40ZR 240.00YR 4.50XF SFO4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD916.70",
    "id": "CQ5KGq0lB0UTMyZ4rM848J007",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1245,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 655,
        "flight": {
         "carrier": "LH",
         "number": "9053"
        },
        "id": "Gdp3vW67aTTi7Wy6",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LyOZz4AlGihCHND7",
          "aircraft": "744",
          "arrivalTime": "2015-11-26T09:45+01:00",
          "departureTime": "2015-11-25T13:50-08:00",
          "origin": "SFO",
          "destination": "FRA",
          "originTerminal": "I",
          "destinationTerminal": "1",
          "duration": 655,
          "operatingDisclosure": "OPERATED BY UNITED",
          "mileage": 5682,
          "meal": "Meal",
          "secure": true
         }
        ],
        "connectionDuration": 215
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 375,
        "flight": {
         "carrier": "LH",
         "number": "630"
        },
        "id": "Gy0qt45EKPN7XY7+",
        "cabin": "COACH",
        "bookingCode": "W",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L0JGLP+PNXiKa-fi",
          "aircraft": "744",
          "arrivalTime": "2015-11-26T22:35+04:00",
          "departureTime": "2015-11-26T13:20+01:00",
          "origin": "FRA",
          "destination": "DXB",
          "originTerminal": "1",
          "destinationTerminal": "1",
          "duration": 375,
          "mileage": 3008,
          "meal": "Meal"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "APE7u4T1vPkxld4jfvTl/TPnwTClzcTqbfRMhinq7Mqk",
        "carrier": "LH",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "WLOLRC7N"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "APE7u4T1vPkxld4jfvTl/TPnwTClzcTqbfRMhinq7Mqk",
        "segmentId": "Gy0qt45EKPN7XY7+"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "APE7u4T1vPkxld4jfvTl/TPnwTClzcTqbfRMhinq7Mqk",
        "segmentId": "Gdp3vW67aTTi7Wy6"
       }
      ],
      "baseFareTotal": "USD598.00",
      "saleFareTotal": "USD598.00",
      "saleTaxTotal": "USD318.70",
      "saleTotal": "USD916.70",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "DE_001",
        "chargeType": "GOVERNMENT",
        "code": "DE",
        "country": "DE",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RA_002",
        "chargeType": "GOVERNMENT",
        "code": "RA",
        "country": "DE",
        "salePrice": "USD23.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "USD240.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YR_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YR",
        "salePrice": "USD17.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       }
      ],
      "fareCalculation": "SFO LH X/FRA LH DXB 598.00WLOLRC7N NUC 598.00 END ROE 1.00 FARE USD 598.00 XT 17.70US 5.60AY 9.00DE 23.00RA 1.40ZR 240.00YQ 17.50YR 4.50XF SFO4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD941.80",
    "id": "CQ5KGq0lB0UTMyZ4rM848J00G",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1595,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 275,
        "flight": {
         "carrier": "RJ",
         "number": "7240"
        },
        "id": "GZFUcSDFwaKOq7Tw",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 5,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LoXgEccgxFzyxdG5",
          "aircraft": "738",
          "arrivalTime": "2015-11-25T17:40-06:00",
          "departureTime": "2015-11-25T11:05-08:00",
          "origin": "SFO",
          "destination": "ORD",
          "originTerminal": "2",
          "destinationTerminal": "3",
          "duration": 275,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
          "mileage": 1841,
          "secure": true
         }
        ],
        "connectionDuration": 230
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 685,
        "flight": {
         "carrier": "RJ",
         "number": "264"
        },
        "id": "G+GY2mkWAtcOiavN",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 5,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LZnGkZczC1y5mGcR",
          "aircraft": "787",
          "arrivalTime": "2015-11-26T16:55+02:00",
          "departureTime": "2015-11-25T21:30-06:00",
          "origin": "ORD",
          "destination": "AMM",
          "originTerminal": "5",
          "duration": 685,
          "mileage": 6219,
          "meal": "Meal",
          "secure": true
         }
        ],
        "connectionDuration": 225
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 180,
        "flight": {
         "carrier": "RJ",
         "number": "612"
        },
        "id": "Gda0ZAe7NkF2UA06",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "2",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LU6DMzP9SlEpgOPf",
          "aircraft": "321",
          "arrivalTime": "2015-11-27T01:40+04:00",
          "departureTime": "2015-11-26T20:40+02:00",
          "origin": "AMM",
          "destination": "DXB",
          "destinationTerminal": "1",
          "duration": 180,
          "mileage": 1255,
          "meal": "Dinner",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A/vcQVRdwN0KY6n5IuuVyDY3y/XWSpYUYuu0JEFllRVE",
        "carrier": "RJ",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "MLSXUS2"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A/vcQVRdwN0KY6n5IuuVyDY3y/XWSpYUYuu0JEFllRVE",
        "segmentId": "G+GY2mkWAtcOiavN"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A/vcQVRdwN0KY6n5IuuVyDY3y/XWSpYUYuu0JEFllRVE",
        "segmentId": "Gda0ZAe7NkF2UA06"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A/vcQVRdwN0KY6n5IuuVyDY3y/XWSpYUYuu0JEFllRVE",
        "segmentId": "GZFUcSDFwaKOq7Tw"
       }
      ],
      "baseFareTotal": "USD688.00",
      "saleFareTotal": "USD688.00",
      "saleTaxTotal": "USD253.80",
      "saleTotal": "USD941.80",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "KJ_001",
        "chargeType": "GOVERNMENT",
        "code": "KJ",
        "country": "JO",
        "salePrice": "USD6.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YR_F",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YR",
        "salePrice": "USD208.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "USD5.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       }
      ],
      "fareCalculation": "SFO RJ X/CHI RJ X/AMM RJ DXB 688.00MLSXUS2 NUC 688.00 END ROE 1.00 FARE USD 688.00 XT 17.70US 5.60AY 6.40KJ 1.40ZR 5.70YQ 208.00YR 9.00XF SFO4.50 ORD4.50",
      "latestTicketingTime": "2015-11-25T14:04-05:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD941.80",
    "id": "CQ5KGq0lB0UTMyZ4rM848J00I",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1672,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 261,
        "flight": {
         "carrier": "RJ",
         "number": "7131"
        },
        "id": "GxP5vtnlrI631K1e",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 5,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LElrxhzFSuJjHkpR",
          "aircraft": "738",
          "arrivalTime": "2015-11-25T16:09-06:00",
          "departureTime": "2015-11-25T09:48-08:00",
          "origin": "SFO",
          "destination": "ORD",
          "originTerminal": "2",
          "destinationTerminal": "3",
          "duration": 261,
          "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
          "mileage": 1841,
          "secure": true
         }
        ],
        "connectionDuration": 321
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 685,
        "flight": {
         "carrier": "RJ",
         "number": "264"
        },
        "id": "G+GY2mkWAtcOiavN",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 5,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LZnGkZczC1y5mGcR",
          "aircraft": "787",
          "arrivalTime": "2015-11-26T16:55+02:00",
          "departureTime": "2015-11-25T21:30-06:00",
          "origin": "ORD",
          "destination": "AMM",
          "originTerminal": "5",
          "duration": 685,
          "mileage": 6219,
          "meal": "Meal",
          "secure": true
         }
        ],
        "connectionDuration": 225
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 180,
        "flight": {
         "carrier": "RJ",
         "number": "612"
        },
        "id": "Gda0ZAe7NkF2UA06",
        "cabin": "COACH",
        "bookingCode": "M",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "2",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LU6DMzP9SlEpgOPf",
          "aircraft": "321",
          "arrivalTime": "2015-11-27T01:40+04:00",
          "departureTime": "2015-11-26T20:40+02:00",
          "origin": "AMM",
          "destination": "DXB",
          "destinationTerminal": "1",
          "duration": 180,
          "mileage": 1255,
          "meal": "Dinner",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "A/vcQVRdwN0KY6n5IuuVyDY3y/XWSpYUYuu0JEFllRVE",
        "carrier": "RJ",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "MLSXUS2"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A/vcQVRdwN0KY6n5IuuVyDY3y/XWSpYUYuu0JEFllRVE",
        "segmentId": "GxP5vtnlrI631K1e"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A/vcQVRdwN0KY6n5IuuVyDY3y/XWSpYUYuu0JEFllRVE",
        "segmentId": "G+GY2mkWAtcOiavN"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "A/vcQVRdwN0KY6n5IuuVyDY3y/XWSpYUYuu0JEFllRVE",
        "segmentId": "Gda0ZAe7NkF2UA06"
       }
      ],
      "baseFareTotal": "USD688.00",
      "saleFareTotal": "USD688.00",
      "saleTaxTotal": "USD253.80",
      "saleTotal": "USD941.80",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "KJ_001",
        "chargeType": "GOVERNMENT",
        "code": "KJ",
        "country": "JO",
        "salePrice": "USD6.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YR_F",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YR",
        "salePrice": "USD208.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "USD5.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       }
      ],
      "fareCalculation": "SFO RJ X/CHI RJ X/AMM RJ DXB 688.00MLSXUS2 NUC 688.00 END ROE 1.00 FARE USD 688.00 XT 17.70US 5.60AY 6.40KJ 1.40ZR 5.70YQ 208.00YR 9.00XF SFO4.50 ORD4.50",
      "latestTicketingTime": "2015-11-25T12:47-05:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD1017.20",
    "id": "CQ5KGq0lB0UTMyZ4rM848J001",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 945,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 945,
        "flight": {
         "carrier": "EK",
         "number": "226"
        },
        "id": "G70n-ocKfO4grjTx",
        "cabin": "COACH",
        "bookingCode": "U",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LpNPBhzAGQSFTvTT",
          "aircraft": "388",
          "arrivalTime": "2015-11-26T19:25+04:00",
          "departureTime": "2015-11-25T15:40-08:00",
          "origin": "SFO",
          "destination": "DXB",
          "originTerminal": "I",
          "destinationTerminal": "3",
          "duration": 945,
          "mileage": 8086,
          "meal": "Meal",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AANzbTyOeS8+mTu47N2bRKZRBMcM2S1QWqPLyM+Tsp5U",
        "carrier": "EK",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "UKSOSUS1"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AANzbTyOeS8+mTu47N2bRKZRBMcM2S1QWqPLyM+Tsp5U",
        "segmentId": "G70n-ocKfO4grjTx"
       }
      ],
      "baseFareTotal": "USD748.00",
      "saleFareTotal": "USD748.00",
      "saleTaxTotal": "USD269.20",
      "saleTotal": "USD1017.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_F",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "USD240.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       }
      ],
      "fareCalculation": "SFO EK DXB 748.00UKSOSUS1 NUC 748.00 END ROE 1.00 FARE USD 748.00 XT 17.70US 5.60AY 1.40ZR 240.00YQ 4.50XF SFO4.50",
      "latestTicketingTime": "2015-11-25T18:39-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD1064.60",
    "id": "CQ5KGq0lB0UTMyZ4rM848J00J",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1500,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 775,
        "flight": {
         "carrier": "TK",
         "number": "80"
        },
        "id": "G5oDkdTzrSK9wmYa",
        "cabin": "COACH",
        "bookingCode": "S",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lsw4UKae4xnbY4ZK",
          "aircraft": "77W",
          "arrivalTime": "2015-11-26T17:05+02:00",
          "departureTime": "2015-11-25T18:10-08:00",
          "origin": "SFO",
          "destination": "IST",
          "originTerminal": "I",
          "destinationTerminal": "I",
          "duration": 775,
          "mileage": 6706,
          "meal": "Meal",
          "secure": true
         }
        ],
        "connectionDuration": 455
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 270,
        "flight": {
         "carrier": "TK",
         "number": "762"
        },
        "id": "GCJLA1kJqsZUMike",
        "cabin": "COACH",
        "bookingCode": "S",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LftJdIMAe3jhQfQ4",
          "aircraft": "343",
          "arrivalTime": "2015-11-27T07:10+04:00",
          "departureTime": "2015-11-27T00:40+02:00",
          "origin": "IST",
          "destination": "DXB",
          "originTerminal": "I",
          "destinationTerminal": "1",
          "duration": 270,
          "mileage": 1868,
          "meal": "Meal"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ADVlzx1/4H3PKSCE1qrSLkCfGyWqMR0KDpQd4QrZlfK6",
        "carrier": "TK",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "SLV3PXOW"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ADVlzx1/4H3PKSCE1qrSLkCfGyWqMR0KDpQd4QrZlfK6",
        "segmentId": "GCJLA1kJqsZUMike"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ADVlzx1/4H3PKSCE1qrSLkCfGyWqMR0KDpQd4QrZlfK6",
        "segmentId": "G5oDkdTzrSK9wmYa"
       }
      ],
      "baseFareTotal": "USD809.00",
      "saleFareTotal": "USD809.00",
      "saleTaxTotal": "USD255.60",
      "saleTotal": "USD1064.60",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "TR_001",
        "chargeType": "GOVERNMENT",
        "code": "TR",
        "country": "TR",
        "salePrice": "USD5.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YR_F",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YR",
        "salePrice": "USD221.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       }
      ],
      "fareCalculation": "SFO TK X/IST TK DXB 809.00SLV3PXOW NUC 809.00 END ROE 1.00 FARE USD 809.00 XT 17.70US 5.60AY 5.40TR 1.40ZR 221.00YR 4.50XF SFO4.50",
      "latestTicketingTime": "2015-11-10T23:59-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD1064.60",
    "id": "CQ5KGq0lB0UTMyZ4rM848J00D",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1190,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 775,
        "flight": {
         "carrier": "TK",
         "number": "80"
        },
        "id": "G5oDkdTzrSK9wmYa",
        "cabin": "COACH",
        "bookingCode": "S",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lsw4UKae4xnbY4ZK",
          "aircraft": "77W",
          "arrivalTime": "2015-11-26T17:05+02:00",
          "departureTime": "2015-11-25T18:10-08:00",
          "origin": "SFO",
          "destination": "IST",
          "originTerminal": "I",
          "destinationTerminal": "I",
          "duration": 775,
          "mileage": 6706,
          "meal": "Meal",
          "secure": true
         }
        ],
        "connectionDuration": 150
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 265,
        "flight": {
         "carrier": "TK",
         "number": "760"
        },
        "id": "GhF3FhZWPnMKQogi",
        "cabin": "COACH",
        "bookingCode": "S",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LD6i17F1RzU1l3op",
          "aircraft": "77W",
          "arrivalTime": "2015-11-27T02:00+04:00",
          "departureTime": "2015-11-26T19:35+02:00",
          "origin": "IST",
          "destination": "DXB",
          "originTerminal": "I",
          "destinationTerminal": "1",
          "duration": 265,
          "mileage": 1868,
          "meal": "Meal"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ADVlzx1/4H3PKSCE1qrSLkCfGyWqMR0KDpQd4QrZlfK6",
        "carrier": "TK",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "SLV3PXOW"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ADVlzx1/4H3PKSCE1qrSLkCfGyWqMR0KDpQd4QrZlfK6",
        "segmentId": "GhF3FhZWPnMKQogi"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ADVlzx1/4H3PKSCE1qrSLkCfGyWqMR0KDpQd4QrZlfK6",
        "segmentId": "G5oDkdTzrSK9wmYa"
       }
      ],
      "baseFareTotal": "USD809.00",
      "saleFareTotal": "USD809.00",
      "saleTaxTotal": "USD255.60",
      "saleTotal": "USD1064.60",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "TR_001",
        "chargeType": "GOVERNMENT",
        "code": "TR",
        "country": "TR",
        "salePrice": "USD5.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YR_F",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YR",
        "salePrice": "USD221.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       }
      ],
      "fareCalculation": "SFO TK X/IST TK DXB 809.00SLV3PXOW NUC 809.00 END ROE 1.00 FARE USD 809.00 XT 17.70US 5.60AY 5.40TR 1.40ZR 221.00YR 4.50XF SFO4.50",
      "latestTicketingTime": "2015-11-10T23:59-05:00",
      "ptc": "ADT",
      "refundable": true
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD1167.20",
    "id": "CQ5KGq0lB0UTMyZ4rM848J00B",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 945,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 945,
        "flight": {
         "carrier": "B6",
         "number": "5016"
        },
        "id": "Gz1BQW+DPA8AkMG+",
        "cabin": "COACH",
        "bookingCode": "R",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LGLmsYS2ltN5q470",
          "aircraft": "388",
          "arrivalTime": "2015-11-26T19:25+04:00",
          "departureTime": "2015-11-25T15:40-08:00",
          "origin": "SFO",
          "destination": "DXB",
          "originTerminal": "I",
          "destinationTerminal": "3",
          "duration": 945,
          "operatingDisclosure": "OPERATED BY EMIRATES",
          "mileage": 8086,
          "meal": "Meal",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ATEIRQOssmIlmZOhNkWip0dpW8zeGAC5cvdH+jhq3hRM",
        "carrier": "B6",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "RLOWAE1"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ATEIRQOssmIlmZOhNkWip0dpW8zeGAC5cvdH+jhq3hRM",
        "segmentId": "Gz1BQW+DPA8AkMG+"
       }
      ],
      "baseFareTotal": "USD1138.00",
      "saleFareTotal": "USD1138.00",
      "saleTaxTotal": "USD29.20",
      "saleTotal": "USD1167.20",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD4.50"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       }
      ],
      "fareCalculation": "SFO B6 DXB Q344.00 M 794.00RLOWAE1 NUC 1138.00 END ROE 1.00 FARE USD 1138.00 XT 17.70US 5.60AY 1.40ZR 4.50XF SFO4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD1171.70",
    "id": "CQ5KGq0lB0UTMyZ4rM848J00E",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1195,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 331,
        "flight": {
         "carrier": "B6",
         "number": "534"
        },
        "id": "GLWtTaKqxr8bZf5a",
        "cabin": "COACH",
        "bookingCode": "R",
        "bookingCodeCount": 1,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L9k+PG1myuqS6fd4",
          "aircraft": "320",
          "arrivalTime": "2015-11-25T20:11-05:00",
          "departureTime": "2015-11-25T11:40-08:00",
          "origin": "SFO",
          "destination": "BOS",
          "originTerminal": "I",
          "destinationTerminal": "C",
          "duration": 331,
          "mileage": 2697,
          "secure": true
         }
        ],
        "connectionDuration": 129
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 735,
        "flight": {
         "carrier": "B6",
         "number": "5018"
        },
        "id": "Gy-7pVHzXd0TafQg",
        "cabin": "COACH",
        "bookingCode": "R",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lklk8CLfyk+9ZC-S",
          "aircraft": "77W",
          "arrivalTime": "2015-11-26T19:35+04:00",
          "departureTime": "2015-11-25T22:20-05:00",
          "origin": "BOS",
          "destination": "DXB",
          "originTerminal": "C",
          "destinationTerminal": "3",
          "duration": 735,
          "operatingDisclosure": "OPERATED BY EMIRATES",
          "mileage": 6647,
          "meal": "Meal",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ATEIRQOssmIlmZOhNkWip0dpW8zeGAC5cvdH+jhq3hRM",
        "carrier": "B6",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "RLOWAE1"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ATEIRQOssmIlmZOhNkWip0dpW8zeGAC5cvdH+jhq3hRM",
        "segmentId": "GLWtTaKqxr8bZf5a"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ATEIRQOssmIlmZOhNkWip0dpW8zeGAC5cvdH+jhq3hRM",
        "segmentId": "Gy-7pVHzXd0TafQg"
       }
      ],
      "baseFareTotal": "USD1138.00",
      "saleFareTotal": "USD1138.00",
      "saleTaxTotal": "USD33.70",
      "saleTotal": "USD1171.70",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       }
      ],
      "fareCalculation": "SFO B6 X/BOS B6 DXB Q SFODXB344.00 M 794.00RLOWAE1 NUC 1138.00 END ROE 1.00 FARE USD 1138.00 XT 17.70US 5.60AY 1.40ZR 9.00XF SFO4.50 BOS4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "USD1171.70",
    "id": "CQ5KGq0lB0UTMyZ4rM848J00H",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 1225,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 328,
        "flight": {
         "carrier": "B6",
         "number": "416"
        },
        "id": "GAE9iYSY+dyf0+Yv",
        "cabin": "COACH",
        "bookingCode": "R",
        "bookingCodeCount": 4,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lg104JOCSIddIgci",
          "aircraft": "32S",
          "arrivalTime": "2015-11-25T20:18-05:00",
          "departureTime": "2015-11-25T11:50-08:00",
          "origin": "SFO",
          "destination": "JFK",
          "originTerminal": "I",
          "destinationTerminal": "5",
          "duration": 328,
          "onTimePerformance": 70,
          "mileage": 2579,
          "meal": "Meal",
          "secure": true
         }
        ],
        "connectionDuration": 162
       },
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 735,
        "flight": {
         "carrier": "B6",
         "number": "5006"
        },
        "id": "GH+MBSP+AmE7km7I",
        "cabin": "COACH",
        "bookingCode": "R",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LQtqUj0oi6a5W08L",
          "aircraft": "388",
          "arrivalTime": "2015-11-26T20:15+04:00",
          "departureTime": "2015-11-25T23:00-05:00",
          "origin": "JFK",
          "destination": "DXB",
          "originTerminal": "4",
          "destinationTerminal": "3",
          "duration": 735,
          "operatingDisclosure": "OPERATED BY EMIRATES",
          "mileage": 6833,
          "meal": "Meal",
          "secure": true
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "ATEIRQOssmIlmZOhNkWip0dpW8zeGAC5cvdH+jhq3hRM",
        "carrier": "B6",
        "origin": "SFO",
        "destination": "DXB",
        "basisCode": "RLOWAE1"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ATEIRQOssmIlmZOhNkWip0dpW8zeGAC5cvdH+jhq3hRM",
        "segmentId": "GAE9iYSY+dyf0+Yv"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "ATEIRQOssmIlmZOhNkWip0dpW8zeGAC5cvdH+jhq3hRM",
        "segmentId": "GH+MBSP+AmE7km7I"
       }
      ],
      "baseFareTotal": "USD1138.00",
      "saleFareTotal": "USD1138.00",
      "saleTaxTotal": "USD33.70",
      "saleTotal": "USD1171.70",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 1
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "AY_001",
        "chargeType": "GOVERNMENT",
        "code": "AY",
        "country": "US",
        "salePrice": "USD5.60"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "XF",
        "chargeType": "GOVERNMENT",
        "code": "XF",
        "country": "US",
        "salePrice": "USD9.00"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "US_002",
        "chargeType": "GOVERNMENT",
        "code": "US",
        "country": "US",
        "salePrice": "USD17.70"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "ZR_001",
        "chargeType": "GOVERNMENT",
        "code": "ZR",
        "country": "AE",
        "salePrice": "USD1.40"
       }
      ],
      "fareCalculation": "SFO B6 X/NYC B6 DXB Q SFODXB344.00 M 794.00RLOWAE1 NUC 1138.00 END ROE 1.00 FARE USD 1138.00 XT 17.70US 5.60AY 1.40ZR 9.00XF SFO4.50 JFK4.50",
      "latestTicketingTime": "2015-11-10T10:09-05:00",
      "ptc": "ADT"
     }
    ]
   }
  ]
 }
}

