class DeckEntity {
    image:string;

    constructor(imageSrc:string){
        this.image = imageSrc;
    }

    getImage(){
        console.log(this.image);
        return this.image;
    }
}

export default DeckEntity;