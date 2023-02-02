import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class SessionStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        let noteValue = <string>sessionStorage.getItem('notes');
        let notes: Note[];
        notes = <Note[]>JSON.parse(noteValue);
        let newNotes: Note[] = notes.filter((note) => note.id != id);
        sessionStorage.setItem('notes',JSON.stringify(newNotes));
    }
    
    public addNote(note: Note): void {
        let noteValue = <string>sessionStorage.getItem('notes');
        let notes: Note[];
        notes = <Note[]>JSON.parse(noteValue);
        if(!notes)
            notes = [];
        notes.push(note);
        sessionStorage.setItem('notes',JSON.stringify(notes));
    }

    public getNotes(): Note[] {
        let notesValue = <string>sessionStorage.getItem('notes');
        return <Note[]>JSON.parse(notesValue);
    }
   
}