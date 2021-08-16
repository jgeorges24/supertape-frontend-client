class Opinion {

    constructor(id, content, likes, mixtape_id){
    this.id
    this.content = content
    this.likes = likes
    this.mixtape_id = mixtape_id
    }

    static renderOpinions(opinions){

        let mixtapeOpinions = opinions.map(comment => {
            let li = document.createElement('li')
            let div = document.createElement('div')
            let opinionContent = document.createElement('p')
            
        })



    }

    


}