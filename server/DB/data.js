const familiesData = [
    {
        familyName: "קהלני",
        password: "123456",
        familyChildren: ["שי", "רון", "רות", "דניאל", "רועי", "שירה", "אופיר"],
        itemsToClean: [
            { itemName: "מקרר", image: "../client/img/נקה ביתך לפסח (9).png", responsible: null, finishTime: null },
            { itemName: "מיטה", image: "../client/img/נקה ביתך לפסח (2).png", responsible: null, finishTime: null },
            { itemName: "ספה", image: "../client/img/נקה ביתך לפסח (3).png", responsible: null, finishTime: null },
            { itemName: "ארון", image: "../client/img/נקה ביתך לפסח (4).png", responsible: null, finishTime: null }
        ],
        startTime: null
    },
    {
        familyName: "חג'בי",
        password: "234123",
        familyChildren: ["בן", "מוריה", "אליה", "דניאל"],
        itemsToClean: [
            { itemName: "קומקום", image: "../client/img/נקה ביתך לפסח (5).png", responsible: null, finishTime: null },
            { itemName: "מיקרוגל", image: "../client/img/נקה ביתך לפסח (6).png", responsible: null, finishTime: null },
            { itemName: "תנור", image: "../client/img/נקה ביתך לפסח (7).png", responsible: null, finishTime: null }
        ],
        startTime: null
    },
    {
        familyName: "לוי",
        password: "785467",
        familyChildren: ["אמה", "מיכאל", "אוליביה", "סופיה"],
        itemsToClean: [
            { itemName: "כיור", image: "../client/img/נקה ביתך לפסח (8).png", responsible: null, finishTime: null }
        ],
        startTime: null
    },
    {
        familyName: "כהן",
        password: "456311",
        familyChildren: ["יעקב", "אמילי", "ויליאם"],
        itemsToClean: [],
        startTime: null
    }
];


const itemsToCleanData = [
    { itemName: "מקרר", image: "../client/img/נקה ביתך לפסח (9).png", responsible: null, finishTime: null },
    { itemName: "מיטה", image: "../client/img/נקה ביתך לפסח (2).png", responsible: null, finishTime: null },
    { itemName: "ספה", image: "../client/img/נקה ביתך לפסח (3).png", responsible: null, finishTime: null },
    { itemName: "ארון", image: "../client/img/נקה ביתך לפסח (4).png", responsible: null, finishTime: null },
    { itemName: "קומקום", image: "../client/img/נקה ביתך לפסח (5).png", responsible: null, finishTime: null },
    { itemName: "מיקרוגל", image: "../client/img/נקה ביתך לפסח (6).png", responsible: null, finishTime: null },
    { itemName: "תנור", image: "../client/img/נקה ביתך לפסח (7).png", responsible: null, finishTime: null },
    { itemName: "כיור", image: "../client/img/נקה ביתך לפסח (8).png", responsible: null, finishTime: null }
];


// Store data in local storage
localStorage.setItem('families', JSON.stringify(familiesData));
localStorage.setItem('itemsToClean', JSON.stringify(itemsToCleanData));

