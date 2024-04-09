function addFamily(family) {
    let storedFamilies = JSON.parse(localStorage.getItem('families')) || [];
    let running_id = parseInt(localStorage.getItem('running_id')) || 0;
    ++running_id; // Increase the running number by 1
    family.family_id = running_id;
    storedFamilies.push(family);
    localStorage.setItem('families', JSON.stringify(storedFamilies));
    localStorage.setItem('running_id', running_id); // Update the running number in localStorage
}


function getAllFamilies() {
    return JSON.parse(localStorage.getItem('families')) || [];
}

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

function deleteFamily(familyName) {
    const storedFamilies = JSON.parse(localStorage.getItem('families')) || [];
    // console.log("Before deletion:", storedFamilies);
    const updatedFamilies = storedFamilies.filter(family => family.familyName !== familyName);
    // console.log("After deletion:", updatedFamilies);
    localStorage.setItem('families', JSON.stringify(updatedFamilies));
}




