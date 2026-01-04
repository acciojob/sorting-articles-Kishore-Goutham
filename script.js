//your JS code here. If required.
let ul = document.getElementById("bands")
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let sorted = bands.sort((a,b)=>{
	let bandA = a.toLowerCase().replace(/^(a |an |the )/i,"").trim()
	let bandB = b.toLowerCase().replace(/^(a |an |the )/i,"").trim()
	return bandA.localeCompare(bandB)
})

sorted.forEach((item)=>{
	let li = document.createElement("li");
	li.textContent = item;
	ul.appendChild(li)
})
