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

