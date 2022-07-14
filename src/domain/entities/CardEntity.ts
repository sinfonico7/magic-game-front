class CardEntity{
    img:string;

    constructor(imageSource:string){
        this.img = imageSource;
    }

    getImage(){
        return this.img;
    }
}