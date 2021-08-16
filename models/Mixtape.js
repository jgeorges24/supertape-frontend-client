class Mixtape {

    static all = []

    constructor(id, title, description, artist, likes, opinions){
        this.id = id
        this.title = title
        this.description = description
        this.artist = artist
        this.likes = likes
        this.opinions = [...opinions]
    }

    save(){
        Mixtape.all.push(this)

    }

    // my index fetch request
    static fetchMixtapes(){
        fetch("http://localhost:3000/mixtapes")
        .then(resp => resp.json())
        .then(json => {
            Mixtape.renderMixtapes(json)
        })

    }

//creationg a new mixtape handler
    static createMixtape(e){
        e.preventDefault();
        let title = e.target.children[0].value
        let description = e.target.children[1].value
        let artist = e.target.children[2].value

        let params = {
            mixtape: {
                title: title,
                description: description,
                artist: artist
            }
        }
        
        let configObj = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(params)

        }

        fetch("http://localhost:3000/mixtapes", configObj)
        .then(resp => resp.json())
        .then(json => {
            e.target.children[0].value = ""
            e.target.children[1].value = ""
            e.target.children[2].value = ""
            Mixtape.renderMixtapes(json)
        })

    }
    static createOpinion(e){
        e.preventDefault();
        let params = {
            opinion: {
                content: e.target.children[0].value,
                mixtape_id: this.id
            }
        }
        let configObj = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(params)

        }
        fetch(`http://localhost:3000/mixtapes/${this.id}/opinions`, configObj)
        .then(resp => resp.json())
        .then(mixtapesInfo => Mixtape.renderMixtapes(mixtapesInfo))

    }

    static renderMixtapes(mixtapesInfo){
        clearContainer(mixtapesContainer())
        //Mixtape.all = []
         mixtapesInfo.forEach(mixtape => {
             //new_mixtape = new Mixtape(mixtape.id, mixtape.title, mixtape.description, mixtape.artist, mixtape.likes, mixtape.opinions)
             //Mixtape.all.push(new_mixtape)
            //  let mixtape = new Mixtape(mixtapeInfo.id, mixtapeInfo.title, mixtapeInfo.description, mixtapeInfo.artist, mixtapeInfo.likes, mixtapeInfo.opinions,)
            //  mixtape.save
             let div = document.createElement("div")
             let h3 = document.createElement("h3")
             let p = document.createElement('p')
             let p2 = document.createElement('p')
             let likeButton = document.createElement('button')
             let ul = document.createElement('ul')
             let tapeLikes = document.createElement('p')
             let deleteButton = document.createElement('button')
             let form = document.createElement("form")
             let input = document.createElement("input")
             let submitOpinion = document.createElement("button")

             let mixtapeOpinions = Opinion.renderOpinions(mixtape.opinions)           
            //filling in that imaginary box with that inforamtion 
             div.id = mixtape.id
             div.style.padding = "40px"
             div.style.backgroundColor = "#FADCF3"
             div.className = 'card'
             h3.innerText = mixtape.title
             p.innerText = mixtape.artist
             p2.innerText = mixtape.description
             tapeLikes.innerText = mixtape.likes
             likeButton.innerText = "♥"
             likeButton.addEventListener('click', Mixtape.likeMixtape.bind(mixtape))
             deleteButton.innerText = "x"
             deleteButton.addEventListener("click", Mixtape.deleteMixtape.bind(mixtape))

             input.type = "text"
             input.placeholder = "type your opinion here..."
             submitOpinion.type = "submit"
             submitOpinion.innerText = "Submit"
             form.addEventListener("submit", Mixtape.createOpinion.bind(mixtape))
             form.appendChild(input)
             form.appendChild(submitOpinion)

             //appending to child bringing that imagainary box to life on the browser to see
             div.appendChild(h3)
             div.appendChild(p)
             div.appendChild(tapeLikes)
             div.appendChild(p2)
             div.appendChild(likeButton)
             div.appendChild(deleteButton)
             mixtapeOpinions.forEach(li => ul.appendChild(li))
             div.appendChild(ul)
             div.appendChild(form)
             mixtapesContainer().appendChild(div)


         })
    }

    //delete method callback
    static deleteMixtape(e){
        let configObj = {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            }
        }
        fetch(`http://localhost:3000/mixtapes/${this.id}`, configObj)
        .then(resp => resp.json())
        .then(json => Mixtape.renderMixtapes(json))    
    }

//when liking a mixtape
    static likeMixtape(e){

        this.likes += 1
        let params = {
            mixtape: {
                likes: this.likes
            }
        }
        let configObj = {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(params)

        }
        fetch(`http://localhost:3000/mixtapes/${this.id}`, configObj)
        .then(resp => resp.json())
        .then(mixtapesInfo => Mixtape.renderMixtapes(mixtapesInfo))

    }


}