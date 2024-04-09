const familiesData = [
    {
        family_id: 1,
        familyName: "קהלני",
        password: "123456",
        familyChildren: ["שי", "רון", "רות", "דניאל", "רועי", "שירה", "אופיר"],
        startTime: null
    },
    {
        family_id: 2,
        familyName: "חג'בי",
        password: "234123",
        familyChildren: ["בן", "מוריה", "אליה", "דניאל"],
        startTime: null
    },
    {
        family_id: 3,
        familyName: "לוי",
        password: "785467",
        familyChildren: ["אמה", "מיכאל", "אוליביה", "סופיה"],
        startTime: null
    },
    {
        family_id: 4,
        familyName: "כהן",
        password: "456311",
        familyChildren: ["יעקב", "אמילי", "ויליאם"],
        startTime: null
    }
];


const itemsToCleanData = [
    { family_id:1, itemName: "קומקום", image: "../client/img/נקה ביתך לפסח (5).png", responsible: "שי", finishTime: null },
    { family_id:1 ,itemName: "מיקרוגל", image: "../client/img/נקה ביתך לפסח (6).png", responsible: "רון", finishTime: null },
    { family_id:1 ,itemName: "תנור", image: "../client/img/נקה ביתך לפסח (7).png", responsible: "רות", finishTime: null },
    { family_id:2, itemName: "קומקום", image: "../client/img/נקה ביתך לפסח (5).png", responsible: "מוריה", finishTime: null },
    { family_id:2 ,itemName: "ספה", image: "../client/img/נקה ביתך לפסח (3).png", responsible: "בן", finishTime: null },
    { family_id:3, itemName: "קומקום", image: "../client/img/נקה ביתך לפסח (5).png", responsible: "אמה", finishTime: null },
    { family_id:3, itemName: "מיקרוגל", image: "../client/img/נקה ביתך לפסח (6).png", responsible: "סופיה", finishTime: null },
    { family_id:4, itemName: "קומקום", image: "../client/img/נקה ביתך לפסח (5).png", responsible: "יעקב", finishTime: null },
    { family_id:4, itemName: "כיור", image: "../client/img/נקה ביתך לפסח (8).png", responsible: "אמילי", finishTime: null }
];


// Store data in local storage
localStorage.setItem('families', JSON.stringify(familiesData));
localStorage.setItem('itemsToClean', JSON.stringify(itemsToCleanData));

