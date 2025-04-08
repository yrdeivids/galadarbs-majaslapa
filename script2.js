
const vardsInput = document.querySelector('#vards')
const vietaInput = document.querySelector('#vieta')
const laiksInput = document.querySelector('#laiks')
const ediensInput = document.querySelector('#ediens')
const poga = document.querySelector('#poga')
const vietaTekstam = document.querySelector('p')

poga.addEventListener("click", () => {
    vietaTekstam.textContent = `Pa ceļu ripoja mazs, apaļš
     ${vardsInput.value}. Ripoja, ripoja, līdz nonāca pašā 
     ${vietaInput.value} galā.
     Pulkstenis rādīja ${laiksInput.value} 
     un viņs netika pie ${ediensInput.value}.
     `
})