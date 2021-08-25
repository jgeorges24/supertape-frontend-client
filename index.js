
let mixtapesContainer = () => document.getElementById("mixtapes-container")
const clearContainer = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

//as soon as the program loads
const startProgram = () => {
    //grab the mixtape create form
    let form = document.getElementById("form")
    
    //add an event listener to the submit button
    form.addEventListener('submit', Mixtape.createMixtape)
    Mixtape.fetchMixtapes()

}

//don't rush the process wait for DOM to fully load first before running
document.addEventListener("DOMContentLoaded", startProgram)










// let button = document.getElementById("sort_button")
// sort_button.addEventListener('click', () => {
//     let sortedArray =  Mixtape.all.sort((a,b) => b.id - a.id)
//      Mixtape.renderMixtapes(sortedArray)
//    })