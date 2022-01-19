import React from 'react'
import NotesItem from './NotesItem'

const NotesList = (props) => {
    const { notes, deleteTitle, token} = props

    return (
        <div>
            { notes.length === 0 ? 
            (
                <div>
                    <h1>My Notes</h1>
                    <p>No notes found add your first note.</p>
                </div>
            ) : (
                <div>
                    <h1>My Notes - {notes.length}</h1>
                    { notes.map((note) => {
                        return <NotesItem key = {note.id} {...note} deleteTitle = {deleteTitle} token = {token} />
                    })}
                </div>
            )}
            
        </div>
    )
}

export default NotesList