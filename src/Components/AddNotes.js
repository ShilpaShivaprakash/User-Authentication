import React, { useState } from 'react'
import NotesForm from './NotesForm'
import axios from 'axios'

const AddNotes = (props) => {
    const { addItem, token } = props
    const [isSaved, setIsSaved ] = useState(false)

    const formSubmit = (note) => {
        // console.log('form submit', task)
        axios.post('http://dct-user-auth.herokuapp.com/api/notes',note,token)
        .then((response) => {
            // console.log(response.data) - to chseck whether we recieve the response from the server.
            const result = response.data
            addItem(result)
            setIsSaved(true)
        }) //success
        .catch((error) => {
            alert(error.message)
        }) //error
    }

    const toggleIsSaved = () => {
        setIsSaved(false)
    }

    return (
        <div>
            <h2>Add Task</h2>
            <NotesForm 
                formSubmit = {formSubmit} 
                isSaved = {isSaved} 
                toggleIsSaved = {toggleIsSaved} />
        </div>
    )
}

export default AddNotes