export function getAllItemsToClean() {
    return JSON.stringify(JSON.parse(localStorage.getItem('itemsToClean')) || []);
}

export function getItemsToCleanByID(family_id){
    const itemsToCleanData = JSON.parse(localStorage.getItem('itemsToClean'));
    const parsedFamilyId = typeof family_id === 'string' ? JSON.parse(family_id) : family_id;

    const filteredItems = itemsToCleanData.filter(item => {
        return item.family_id === parsedFamilyId;
    });

    // Return filtered items as JSON
    return JSON.stringify(filteredItems);
}


export function addItemToClean(item) {
    if (typeof item === 'string') {
        item = JSON.parse(item);
    }
    const storedItemsToClean = JSON.parse(localStorage.getItem('itemsToClean')) || [];
    storedItemsToClean.push(item);
    localStorage.setItem('itemsToClean', JSON.stringify(storedItemsToClean));
}

export function deleteItemToClean(itemToDelete) {
    const storedItemsToClean = JSON.parse(localStorage.getItem('itemsToClean')) || [];
    const updatedItemsToClean = storedItemsToClean.filter(item => {
        return item.family_id !== itemToDelete.family_id || item.itemName !== itemToDelete.itemName;
    });
    localStorage.setItem('itemsToClean', JSON.stringify(updatedItemsToClean));
}


export function updateItemToClean(updatedItem) {
    var parseitemToClean = JSON.parse(updatedItem);
    console.log("parseitemToClean",parseitemToClean);
    // Get the family_id from updatedItem
    const family_id = parseitemToClean.family_id;

    // Retrieve items for the specific family
    const itemsToCleanData = JSON.parse(getItemsToCleanByID(family_id));

    // Update the item with the same itemName as the updatedItem
    const updatedItemsToClean = itemsToCleanData.map(item => {
        if (item.itemName === parseitemToClean.itemName) {
            return parseitemToClean;
        } else {
            return item;
        }
    });

    // Save the updated items back to local storage
    localStorage.setItem('itemsToClean', JSON.stringify(updatedItemsToClean));
}



