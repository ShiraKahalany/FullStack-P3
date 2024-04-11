export function addFamily(family) {
    // Parse the JSON string into an object if family is a string
    if (typeof family === 'string') {
        family = JSON.parse(family);
    }


    let storedFamilies = JSON.parse(localStorage.getItem('families')) || [];
    let running_id = parseInt(localStorage.getItem('running_id')) || 0;
    ++running_id; // Increase the running number by 1
    family.family_id = running_id;
    storedFamilies.push(family);
    localStorage.setItem('families', JSON.stringify(storedFamilies));
    localStorage.setItem('running_id', running_id); // Update the running number in localStorage
}



export function getAllFamilies() {
    return JSON.stringify(JSON.parse(localStorage.getItem('families')) || []);
}

export function getFamilyByID(family_id){
    const familiesData = JSON.parse(localStorage.getItem('families'));
    const parsedFamilyId = typeof family_id === 'string' ? JSON.parse(family_id) : family_id;

    const my_Family = familiesData.filter(item => {
        return item.family_id === parsedFamilyId;
    });

    return JSON.stringify(my_Family);
}

export function updateFamily(family) {
    if (typeof family === 'string') {
        family = JSON.parse(family);
    }
    const storedFamilies = JSON.parse(localStorage.getItem('families')) || [];
    const updatedFamilies = storedFamilies.map(my_family => {
        if (my_family.familyName === family.familyName) {
            return family;
        } else {
            return my_family; // Return the original family if the names don't match
        }
    });
    localStorage.setItem('families', JSON.stringify(updatedFamilies));
}

export function deleteFamily(family) {

    if (typeof family === 'string') {
        family = JSON.parse(family);
    }
    const familyName = family.familyName;
    const storedFamilies = JSON.parse(localStorage.getItem('families')) || [];
    // console.log("Before deletion:", storedFamilies);
    const updatedFamilies = storedFamilies.filter(family => family.familyName !== familyName);
    // console.log("After deletion:", updatedFamilies);
    localStorage.setItem('families', JSON.stringify(updatedFamilies));
}




