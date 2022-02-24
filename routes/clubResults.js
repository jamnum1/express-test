const { Router } = require('express');

const router = Router();

const clubResults = [
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "05/02/2022",
      "Run Number": 51,
      "Pos": 30,
      "Time": "21:38",
      "AgeGrade": "59.86%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "25/12/2021",
      "Run Number": 659,
      "Pos": 86,
      "Time": "22:18",
      "AgeGrade": "58.07%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "16/10/2021",
      "Run Number": 39,
      "Pos": 6,
      "Time": "21:24",
      "AgeGrade": "60.51%",
      "PB?": "PB"
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "09/10/2021",
      "Run Number": 38,
      "Pos": 19,
      "Time": "21:38",
      "AgeGrade": "59.86%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Hampstead Heath",
      "Date": "02/10/2021",
      "Run Number": 468,
      "Pos": 57,
      "Time": "23:25",
      "AgeGrade": "55.30%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "25/09/2021",
      "Run Number": 647,
      "Pos": 65,
      "Time": "21:26",
      "AgeGrade": "60.42%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "14/03/2020",
      "Run Number": 29,
      "Pos": 27,
      "Time": "21:41",
      "AgeGrade": "60.11%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "07/03/2020",
      "Run Number": 28,
      "Pos": 31,
      "Time": "22:03",
      "AgeGrade": "59.11%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "15/02/2020",
      "Run Number": 25,
      "Pos": 39,
      "Time": "23:04",
      "AgeGrade": "57.15%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "08/02/2020",
      "Run Number": 24,
      "Pos": 26,
      "Time": "21:56",
      "AgeGrade": "60.11%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "18/01/2020",
      "Run Number": 21,
      "Pos": 35,
      "Time": "22:28",
      "AgeGrade": "58.68%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "11/01/2020",
      "Run Number": 20,
      "Pos": 25,
      "Time": "22:01",
      "AgeGrade": "59.88%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Shipley Country",
      "Date": "04/01/2020",
      "Run Number": 144,
      "Pos": 16,
      "Time": "22:44",
      "AgeGrade": "57.99%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "28/12/2019",
      "Run Number": 630,
      "Pos": 83,
      "Time": "21:33",
      "AgeGrade": "61.18%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "25/12/2019",
      "Run Number": 629,
      "Pos": 72,
      "Time": "20:42",
      "AgeGrade": "63.69%",
      "PB?": "PB"
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "07/12/2019",
      "Run Number": 14,
      "Pos": 20,
      "Time": "22:07",
      "AgeGrade": "59.61%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "26/10/2019",
      "Run Number": 9,
      "Pos": 23,
      "Time": "21:37",
      "AgeGrade": "60.99%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "12/10/2019",
      "Run Number": 7,
      "Pos": 29,
      "Time": "21:29",
      "AgeGrade": "61.37%",
      "PB?": "PB"
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "28/09/2019",
      "Run Number": 5,
      "Pos": 28,
      "Time": "22:03",
      "AgeGrade": "59.79%",
      "PB?": "PB"
    },
    {
      "athleteId": 69706,
      "Event": "Leazes",
      "Date": "21/09/2019",
      "Run Number": 4,
      "Pos": 43,
      "Time": "22:27",
      "AgeGrade": "58.72%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "17/08/2019",
      "Run Number": 610,
      "Pos": 150,
      "Time": "23:04",
      "AgeGrade": "57.15%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "10/08/2019",
      "Run Number": 609,
      "Pos": 87,
      "Time": "21:58",
      "AgeGrade": "60.02%",
      "PB?": "PB"
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "03/08/2019",
      "Run Number": 608,
      "Pos": 106,
      "Time": "22:33",
      "AgeGrade": "58.46%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "27/07/2019",
      "Run Number": 607,
      "Pos": 106,
      "Time": "22:04",
      "AgeGrade": "59.74%",
      "PB?": "PB"
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "22/06/2019",
      "Run Number": 602,
      "Pos": 146,
      "Time": "23:10",
      "AgeGrade": "56.91%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "15/06/2019",
      "Run Number": 601,
      "Pos": 205,
      "Time": "23:50",
      "AgeGrade": "55.31%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "08/06/2019",
      "Run Number": 600,
      "Pos": 114,
      "Time": "22:32",
      "AgeGrade": "58.51%",
      "PB?": "PB"
    },
    {
      "athleteId": 69706,
      "Event": "Town Moor",
      "Date": "01/06/2019",
      "Run Number": 467,
      "Pos": 161,
      "Time": "23:14",
      "AgeGrade": "56.74%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Town Moor",
      "Date": "25/05/2019",
      "Run Number": 466,
      "Pos": 126,
      "Time": "23:03",
      "AgeGrade": "57.19%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Town Moor",
      "Date": "18/05/2019",
      "Run Number": 465,
      "Pos": 159,
      "Time": "22:58",
      "AgeGrade": "57.40%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "20/04/2019",
      "Run Number": 593,
      "Pos": 250,
      "Time": "24:34",
      "AgeGrade": "53.66%",
      "PB?": "PB"
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "13/10/2012",
      "Run Number": 242,
      "Pos": 155,
      "Time": "25:38",
      "AgeGrade": "58.00%",
      "PB?": "PB"
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "25/09/2010",
      "Run Number": 135,
      "Pos": 166,
      "Time": "27:30",
      "AgeGrade": "57.39%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "17/07/2010",
      "Run Number": 125,
      "Pos": 156,
      "Time": "26:39",
      "AgeGrade": "59.22%",
      "PB?": "PB"
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "26/06/2010",
      "Run Number": 122,
      "Pos": 163,
      "Time": "28:32",
      "AgeGrade": "55.32%",
      "PB?": ""
    },
    {
      "athleteId": 69706,
      "Event": "Cardiff",
      "Date": "15/05/2010",
      "Run Number": 116,
      "Pos": 164,
      "Time": "28:13",
      "AgeGrade": "55.94%",
      "PB?": ""
    },
    {
      "athleteId": 5238307,
      "Event": "Cardiff",
      "Date": "25/12/2021",
      "Run Number": 659,
      "Pos": 135,
      "Time": "23:57",
      "AgeGrade": "54.07%",
      "PB?": ""
    },
    {
      "athleteId": 5238307,
      "Event": "Hampstead Heath",
      "Date": "23/10/2021",
      "Run Number": 471,
      "Pos": 131,
      "Time": "27:26",
      "AgeGrade": "47.21%",
      "PB?": ""
    },
    {
      "athleteId": 5238307,
      "Event": "Hampstead Heath",
      "Date": "02/10/2021",
      "Run Number": 468,
      "Pos": 109,
      "Time": "25:58",
      "AgeGrade": "49.87%",
      "PB?": ""
    },
    {
      "athleteId": 5238307,
      "Event": "Cardiff",
      "Date": "25/09/2021",
      "Run Number": 647,
      "Pos": 200,
      "Time": "25:22",
      "AgeGrade": "51.05%",
      "PB?": ""
    },
    {
      "athleteId": 5238307,
      "Event": "Cardiff",
      "Date": "18/09/2021",
      "Run Number": 646,
      "Pos": 245,
      "Time": "25:31",
      "AgeGrade": "50.75%",
      "PB?": ""
    },
    {
      "athleteId": 5238307,
      "Event": "Cardiff",
      "Date": "28/12/2019",
      "Run Number": 630,
      "Pos": 189,
      "Time": "24:43",
      "AgeGrade": "53.34%",
      "PB?": ""
    },
    {
      "athleteId": 5238307,
      "Event": "Cardiff",
      "Date": "21/09/2019",
      "Run Number": 615,
      "Pos": 224,
      "Time": "24:21",
      "AgeGrade": "60.99%",
      "PB?": ""
    },
    {
      "athleteId": 5238307,
      "Event": "Cardiff",
      "Date": "10/08/2019",
      "Run Number": 609,
      "Pos": 173,
      "Time": "25:08",
      "AgeGrade": "52.45%",
      "PB?": ""
    },
    {
      "athleteId": 5238307,
      "Event": "Cardiff",
      "Date": "09/03/2019",
      "Run Number": 587,
      "Pos": 180,
      "Time": "23:18",
      "AgeGrade": "57.22%",
      "PB?": "PB"
    },
    {
      "athleteId": 5238307,
      "Event": "Cardiff",
      "Date": "05/01/2019",
      "Run Number": 578,
      "Pos": 232,
      "Time": "24:43",
      "AgeGrade": "53.94%",
      "PB?": ""
    },
    {
      "athleteId": 5238307,
      "Event": "Bushy Park",
      "Date": "29/12/2018",
      "Run Number": 768,
      "Pos": 564,
      "Time": "25:57",
      "AgeGrade": "51.38%",
      "PB?": ""
    },
    {
      "athleteId": 5520154,
      "Event": "Bushy Park",
      "Date": "27/11/2021",
      "Run Number": 853,
      "Pos": 403,
      "Time": "26:12",
      "AgeGrade": "49.43%",
      "PB?": ""
    },
    {
      "athleteId": 5520154,
      "Event": "Cardiff",
      "Date": "20/11/2021",
      "Run Number": 655,
      "Pos": 119,
      "Time": "21:52",
      "AgeGrade": "59.22%",
      "PB?": "PB"
    },
    {
      "athleteId": 5520154,
      "Event": "Cardiff",
      "Date": "06/11/2021",
      "Run Number": 653,
      "Pos": 123,
      "Time": "22:47",
      "AgeGrade": "56.84%",
      "PB?": ""
    },
    {
      "athleteId": 5520154,
      "Event": "Cardiff",
      "Date": "23/10/2021",
      "Run Number": 651,
      "Pos": 149,
      "Time": "23:58",
      "AgeGrade": "54.03%",
      "PB?": ""
    },
    {
      "athleteId": 5520154,
      "Event": "Cardiff",
      "Date": "16/10/2021",
      "Run Number": 650,
      "Pos": 130,
      "Time": "23:23",
      "AgeGrade": "55.38%",
      "PB?": ""
    },
    {
      "athleteId": 5520154,
      "Event": "Cardiff",
      "Date": "25/12/2019",
      "Run Number": 629,
      "Pos": 153,
      "Time": "22:43",
      "AgeGrade": "58.03%",
      "PB?": "PB"
    },
    {
      "athleteId": 5520154,
      "Event": "Cardiff",
      "Date": "03/08/2019",
      "Run Number": 608,
      "Pos": 112,
      "Time": "22:45",
      "AgeGrade": "57.95%",
      "PB?": "PB"
    },
    {
      "athleteId": 5520154,
      "Event": "Cardiff",
      "Date": "27/04/2019",
      "Run Number": 594,
      "Pos": 128,
      "Time": "23:25",
      "AgeGrade": "56.30%",
      "PB?": ""
    },
    {
      "athleteId": 5520154,
      "Event": "Cardiff",
      "Date": "20/04/2019",
      "Run Number": 593,
      "Pos": 190,
      "Time": "23:20",
      "AgeGrade": "56.50%",
      "PB?": "PB"
    },
    {
      "athleteId": 5520154,
      "Event": "Cardiff",
      "Date": "02/03/2019",
      "Run Number": 586,
      "Pos": 276,
      "Time": "25:34",
      "AgeGrade": "51.56%",
      "PB?": ""
    },
    {
      "athleteId": 6055070,
      "Event": "Bushy Park",
      "Date": "27/11/2021",
      "Run Number": 853,
      "Pos": 586,
      "Time": "28:47",
      "AgeGrade": "44.99%",
      "PB?": ""
    },
    {
      "athleteId": 6055070,
      "Event": "Cardiff",
      "Date": "17/08/2019",
      "Run Number": 610,
      "Pos": 443,
      "Time": "28:59",
      "AgeGrade": "45.49%",
      "PB?": ""
    },
    {
      "athleteId": 5724704,
      "Event": "Cardiff",
      "Date": "17/08/2019",
      "Run Number": 610,
      "Pos": 169,
      "Time": "23:43",
      "AgeGrade": "55.59%",
      "PB?": ""
    },
    {
      "athleteId": 5724704,
      "Event": "Cardiff",
      "Date": "08/06/2019",
      "Run Number": 600,
      "Pos": 100,
      "Time": "22:05",
      "AgeGrade": "60.38%",
      "PB?": ""
    },
    {
      "athleteId": 5724704,
      "Event": "Cardiff",
      "Date": "25/05/2019",
      "Run Number": 598,
      "Pos": 125,
      "Time": "21:50",
      "AgeGrade": "61.07%",
      "PB?": "PB"
    },
    {
      "athleteId": 5724704,
      "Event": "Cardiff",
      "Date": "18/05/2019",
      "Run Number": 597,
      "Pos": 98,
      "Time": "21:58",
      "AgeGrade": "60.70%",
      "PB?": "PB"
    },
    {
      "athleteId": 5724704,
      "Event": "Cardiff",
      "Date": "11/05/2019",
      "Run Number": 596,
      "Pos": 141,
      "Time": "22:22",
      "AgeGrade": "59.61%",
      "PB?": "PB"
    },
    {
      "athleteId": 5724704,
      "Event": "Cardiff",
      "Date": "04/05/2019",
      "Run Number": 595,
      "Pos": 140,
      "Time": "22:45",
      "AgeGrade": "58.61%",
      "PB?": ""
    }
  ]

router.get('/', (req, res) => {
    res.status(200).send(clubResults)
})

module.exports = router;