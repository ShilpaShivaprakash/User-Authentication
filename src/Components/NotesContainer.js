import React, {useState, useEffect} from 'react'
import NotesList from './NotesList'
import AddNotes from './AddNotes'
import axios from'axios'

const NotesContainer = (prps) => {
    const [notes, setNotes] = useState([])

    const token = {
        headers: { 'x-auth' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFmZjRhZDU0NWU1NzAwMTc0YWE3MjAiLCJ1c2VybmFtZSI6InNoaWxwYTEyM0BnbWFpbC5jb20iLCJjcmVhdGVkQXQiOjE2MTI3MDc5Mzg2NDQsImlhdCI6MTYxMjcwNzkzOH0.tvgpNqg98EF6wXC_vUQJcszK60VmhXfA0_2HRPOe1xI'}
    }

       useEffect(() => {
        axios.get('http://dct-user-auth.herokuapp.com/api/notes',token)
            .then((response) => {
                const result = response.data
                setNotes(result)
            })
            .catch((err) => {
                alert(err.message)
            })
        // const result = JSON.parse((localStorage.getItem('notes') || []))
        // setNotes(result) // to add into local storage
       },[])

    //    useEffect(() => {
           
    //    },[notes])
    

    const addItem = (note) => {
        const result = [note, ...notes]
        setNotes(result)
    }

    const deleteTitle = (title) => {
        const result = notes.filter((note) => {
            return note._id != title
        })
        setNotes(result)
    }

    return (
        <div>
            <NotesList notes = {notes} deleteTitle = {deleteTitle} token = {token} />
            <AddNotes addItem = {addItem} token = {token} />
            
        </div>
    )
}

export default NotesContainer