import React, { useState } from 'react'

const NotesForm = (props) => {
    const [ title, setTitle] = useState('')
    const [ body, setBody] = useState ('')
    const { formSubmit, isSaved, toggleIsSaved } = props

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title : title,
            body : body
        }
        formSubmit(formData)

        setTitle('')
        setBody('')
    }

    return (
        <div>
            <h2>Add Notes</h2>
            <form onSubmit = {handleSubmit}>
                <input 
                    type = "text" 
                    value = {title} 
                    placeholder = "Title" 
                    onChange = {handleTitleChange} /><br /><br />
                <textarea 
                    value = {body} 
                    placeholder = "Body" 
                    onChange = {handleBodyChange} > 
                </textarea><br /><br />
                <input type = "submit" value = "Save" />
            </form>
        </div>
    )
}

export default NotesForm