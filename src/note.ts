import { Guid } from "./guid";

export class Note {
    id: Guid;
    title: string;
    content: string;
    createdAt: Date;
    constructor(title: string, content: string) {
       this.id = Guid.newGuid();
       this.title = title;
       this.content = content;
       this.createdAt = new Date();
    }
}