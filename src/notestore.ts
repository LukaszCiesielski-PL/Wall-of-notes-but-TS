import { Guid } from './guid';
import { Note } from './note';

export interface NoteStore {
    addNote(note: Note): void;
    getNotes(): Note[];
    deleteNote(id: Guid): void;

}