class DeckEntity {
    image:string;

    constructor(imageSrc:string){
        this.image = imageSrc;
    }

    getImage(){
        return this.image;
    }
}