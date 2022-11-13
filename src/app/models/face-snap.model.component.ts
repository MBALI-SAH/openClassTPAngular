export class FaceSnap{

    title:string;
    description:string;
    createDate:Date;
    snap:number;
    imageUrl :string;

    constructor(title:string,description:string,createDate:Date,snap:number,imageUrl:string) {

        this.title = title;
        this.description = description;
        this.createDate = createDate;
        this.snap = snap;
        this.imageUrl = imageUrl;

    }
}