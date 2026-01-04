const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
               'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 
               'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 
               'An Old Dog'];

function sortBands(bands) {
    return bands.sort((a, b) => {
        // Strip 'a', 'an', and 'the' from the start of the strings
        const stripWords = (band) => {
            return band.replace(/^(a |an |the )/i, '').trim();
        };
        
        return stripWords(a).localeCompare(stripWords(b));
    });
}

const sortedBands = sortBands(bands);

// Append sorted bands to the unordered list
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});

