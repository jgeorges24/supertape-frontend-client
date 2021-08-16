class Opinion {

    constructor(id, content, likes, mixtape_id){
        this.id = id
        this.content = content
        this.likes = likes
        this.mixtape_id = mixtape_id
    }

    static likeOpinion(e){
        this.likes += 1
        let params = {
            opinion: {
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
        fetch(`http://localhost:3000/mixtapes/${this.mixtape_id}/opinions/${this.id}`, configObj)
        .then(resp => resp.json())
        .then(mixtapesInfo => Mixtape.renderMixtapes(mixtapesInfo))

    }


//whats controlling the opinions side of things.
    static renderOpinions(opinions){
        let mixtapeOpinions = opinions.map(opinion => {
            let li = document.createElement('li')
            let div = document.createElement('div')
            let opinionContent = document.createElement('p')
            let opinionLikes = document.createElement('p')
            let likeButton = document.createElement('button')
       
            div.style.padding = "45px"
            div.style.backgroundColor = "#CCE5FF"
            div.className = "card"
            opinionContent.innerText = opinion.content
            opinionLikes.innerText = opinion.likes
            likeButton.innerText = "♥"
            likeButton.addEventListener("click", Opinion.likeOpinion.bind(opinion))
            div.appendChild(opinionContent)
            div.appendChild(opinionLikes)
            div.appendChild(likeButton)
            li.appendChild(div)
            return li
        })
        return mixtapeOpinions

        //let mixtapeOpinions = Opinion.renderOpinions(mixtape.opinions)

    }

    


}