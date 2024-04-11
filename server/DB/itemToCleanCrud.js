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


// Function to update an item to clean in local storage
export function updateItemToClean(updatedItem) {
    const storedItemsToClean = JSON.parse(localStorage.getItem('itemsToClean')) || [];
    const updatedItemsToClean = storedItemsToClean.map(item => {
        if (item.itemName === updatedItem.itemName) {
            return updatedItem;
        } else {
            return item;
        }
    });
    localStorage.setItem('itemsToClean', JSON.stringify(updatedItemsToClean));
}



