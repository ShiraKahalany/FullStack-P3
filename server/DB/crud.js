// Function to add a family to local storage
function addFamily(family) {
    const storedFamilies = JSON.parse(localStorage.getItem('families')) || [];
    storedFamilies.push(family);
    localStorage.setItem('families', JSON.stringify(storedFamilies));
}

// Function to delete a family from local storage
function deleteFamily(familyName) {
    const storedFamilies = JSON.parse(localStorage.getItem('families')) || [];
    const updatedFamilies = storedFamilies.filter(family => family.familyName !== familyName);
    localStorage.setItem('families', JSON.stringify(updatedFamilies));
}

// Function to update a family in local storage
function updateFamily(updatedFamily) {
    const storedFamilies = JSON.parse(localStorage.getItem('families')) || [];
    const updatedFamilies = storedFamilies.map(family => {
        if (family.familyName === updatedFamily.familyName) {
            return updatedFamily;
        } else {
            return family;
        }
    });
    localStorage.setItem('families', JSON.stringify(updatedFamilies));
}

// Function to read all families from local storage
function getAllFamilies() {
    return JSON.parse(localStorage.getItem('families')) || [];
}

// Function to add an item to clean to local storage
function addItemToClean(item) {
    const storedItemsToClean = JSON.parse(localStorage.getItem('itemsToClean')) || [];
    storedItemsToClean.push(item);
    localStorage.setItem('itemsToClean', JSON.stringify(storedItemsToClean));
}

// Function to delete an item to clean from local storage
function deleteItemToClean(itemName) {
    const storedItemsToClean = JSON.parse(localStorage.getItem('itemsToClean')) || [];
    const updatedItemsToClean = storedItemsToClean.filter(item => item.itemName !== itemName);
    localStorage.setItem('itemsToClean', JSON.stringify(updatedItemsToClean));
}

// Function to update an item to clean in local storage
function updateItemToClean(updatedItem) {
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

// Function to read all items to clean from local storage
function getAllItemsToClean() {
    return JSON.parse(localStorage.getItem('itemsToClean')) || [];
}