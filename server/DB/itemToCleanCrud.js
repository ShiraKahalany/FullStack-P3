export function getAllItemsToClean() {
    return JSON.parse(localStorage.getItem('itemsToClean')) || [];
}

// function getItemsToCleanByID(family_id){
//     return JSON.parse(localStorage.getItem('itemsToClean')) || [];
// }

export function addItemToClean(item) {
    if (typeof item === 'string') {
        family = JSON.parse(family);
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



