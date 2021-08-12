
let mixtapesContainer = () => document.getElementById("mixtapes-container")



const startProgram = () => {
    Mixtape.fetchMixtapes()

}



document.addEventListener("DOMContentLoaded", startProgram)
