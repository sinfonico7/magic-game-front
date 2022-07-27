class DeckEntity {
    image:string;
    name:string;

    constructor(imageSrc:string,name:string){
        this.image = imageSrc;
        this.name = name;
    }

    getImage(){
        return this.image;
    }

    getName(){
        return this.name;
    }

    setName(newName:string){
        this.name = newName;
    }
}

export default DeckEntity;