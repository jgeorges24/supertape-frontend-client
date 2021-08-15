
let mixtapesContainer = () => document.getElementById("mixtapes-container")
const clearContainer = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

//as soon as the program loads
const startProgram = () => {
    //grab the form
    let form = document.getElementById("form")
    //add an event listener
    form.addEventListener('submit', Mixtape.createMixtape)
    Mixtape.fetchMixtapes()

}

//don't rush the process wait for DOM to fully load first before running
document.addEventListener("DOMContentLoaded", startProgram)
