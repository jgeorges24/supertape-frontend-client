class Mixtape {

    constructor(id, title, description,artist, tracks, likes, dislikes, genre, opinions)
    this.id = id
    this.title = title
    this.description = description
    this.artist = artist
    this.tracks = tracks
    this.likes = likes
    this.dislikes = dislikes
    this.genre = genre
    this.opinions = [...opinions]

    static fetchMixtapes() {
        fetch("http://localhost:3000/mixtapes")
        .then(resp => resp.json())
        .then(json => Mixtape.renderMixtapes(json))

    }

    static renderMixtapes(mixtapeInfo){
         mixtapesInfo.forEach(mixtape =>{
             let div = document.createElement("div")
             let h3 = document.createElement("h3")
             let p = document.createElement('p')
             let p2 = document.createElement('p')
             let likeButton = document.createElement('button')
             let ul = document.createElement('ul')
             
             
             let mixtapeOpinions = mixtape.opinions.map(comment => {
                 let li = document.createElement('li')
                 let div - document.createElement('div')
                 let opinionLikes = document.createElement('p')
                 let likesButton = document.createElement('button')
                 let opinionContent = document.createElement('p')
                 opinionContent.innerText = opinion.content
                 opinionLikes.innerText = opinion.likes
                 likeButton.innerText = "♥"
                 div.appendChild(opinionContent)
                 div.appendChild(opinionLikes)
                 div.appendChild(likeButton)
                 li.appendChild(div)
                 return li
             })

             div.id = mixtape.id
             h3.innerText = mixtape.title
             p.innerText = mixtape.artist
             p2.innerText = mixtape.description
             likes.innerText = "♥"
             likeButton.addEventListener('click', Mixtape.likeMixtape.bind(mixtape))

             div.appendChild(h3)
             div.appendChild(p)
             div.appendChild(likeButton)
             mixtapeComments.forEach(li => ul.appendChild(li))
             div.appendChild(ul)
             mixtapesContainer().appendChild(div)


         })
    }


}