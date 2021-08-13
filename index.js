
let mixtapesContainer = () => document.getElementById("mixtapes-container")
const clearContainer = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}


const startProgram = () => {
    Mixtape.fetchMixtapes()

}



document.addEventListener("DOMContentLoaded", startProgram)
