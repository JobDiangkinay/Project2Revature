import { Person } from "../userinfo/person";

export class Article{
    id: Number;
    title: string;
    articleContent: string;
    date: string;
    category: string;
    articleStatus: string;
    person: Person;

    constructor(id:Number,title:string,articleContent:string,date:string,category:string,articleStatus:string,person:Person){
        this.id = id;
        this.title = title;
        this.articleContent = articleContent;
        this.date = date;
        this.category = category;
        this.articleStatus = articleStatus;
        this.person = person;
    }
}