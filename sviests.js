const vardsInput = document.querySelector('#vards')
const vietaInput = document.querySelector('#vieta')
const laiksInput = document.querySelector('#laiks')
const emocijaInput = document.querySelector('#emocija')
const poga = document.querySelector('#poga')
const vietaTeksts = document.querySelector('p')

poga.addEventListener("click", () => {
    vietaTeksts.textContent = `No autobusa pazuda, mazs bērns vārdā
    ${vardsInput.value}. Visi meklēja bērnu
    ${vietaInput.value}. Beidzot atrodot, bija
    ${laiksInput.value}. Bet māte bija
    ${emocijaInput.value}.
    `
})