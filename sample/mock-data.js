/* jshint esversion: 6 */

/* Define the set of x-ray generators that this service will provide */
const generators = [
    {
        id: 'mock-generator-1',
        name: 'Mock Generator',
        manufacturer: 'Acme, Inc.',
        model: 'Mock IO',
        serialNumber: '123456789'
    }
];

/* Define a set of exposures for each x-ray generator */
const exposures = {
        // Mock Generator 1 Exposures
        'mock-generator-1' : [
            {
                "id": "006906f2-9592-11ec-b909-0242ac120002",
                "recordedTime": "2016-08-29T09:12:33.000-05:00",
                "kiloVolts": 60,
                "milliAmps": 7,
                "exposureTime": 120,
                "doseAreaProduct": 1.15,
                "tubeLength": 20,
                "jawRegion": "mandible",
                "toothRegion": "molar",
                "patientSize": "adult",
                "imageType": "bitewing"
            },
            {
                "id": "ac0a2dfb-c04c-40cd-9342-d4189af41e3c",
                "recordedTime": "2016-08-29T09:12:38.000-05:00",
                "kiloVolts": 60,
                "milliAmps": 7,
                "exposureTime": 120,
                "doseAreaProduct": 1.08,
                "tubeLength": 20,
                "jawRegion": "mandible",
                "toothRegion": "premolar",
                "patientSize": "adult",
                "imageType": "bitewing"
            },
            {
                "id": "452f58ca-5063-47a9-8bbd-7d673bf95fd3",
                "recordedTime": "2016-08-29T09:12:45.000-05:00",
                "kiloVolts": 60,
                "milliAmps": 7,
                "exposureTime": 120,
                "doseAreaProduct": 1.19,
                "tubeLength": 20,
                "jawRegion": "maxilla",
                "toothRegion": "molar",
                "patientSize": "adult",
                "imageType": "bitewing"
            },
            {
                "id": "32478e74-94ba-4e86-a73e-51038b34970a",
                "recordedTime": "2016-08-29T09:12:50.000-05:00",
                "kiloVolts": 60,
                "milliAmps": 7,
                "exposureTime": 120,
                "doseAreaProduct": 1.01,
                "tubeLength": 20,
                "jawRegion": "maxilla",
                "toothRegion": "premolar",
                "patientSize": "adult",
                "imageType": "bitewing"
            },
            {
                "id": "98f49122-2ecc-47e7-bfc4-bc01b7bb2e00",
                "recordedTime": "2016-08-29T09:13:02.000-05:00",
                "kiloVolts": 60,
                "milliAmps": 7,
                "exposureTime": 100,
                "doseAreaProduct": 0.78,
                "tubeLength": 20,
                "jawRegion": "maxilla",
                "toothRegion": "incisor",
                "patientSize": "adult",
                "imageType": "periapical"
            },
        ]
    };


module.exports = {
    generators,
    exposures
};