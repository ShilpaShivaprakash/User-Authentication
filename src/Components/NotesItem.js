import React from 'react'
import axios from 'axios'

const NotesItem = (props) => {
    const { _id , title, body, deleteTitle, token } = props

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are You sure?")
        
        if(confirmDelete) {
            axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,token)
                .then((response) => {
                    const result = response.data
                    deleteTitle(result._id)
                })
                .catch((err) => {
                    alert(err.message)
                })
        } 
    }

    return(
        <div>
            <b>{title}</b><br />
            <button onClick = { () => {
                            handleDelete(_id)
                            //Here handleRemove is in lexical scope as its not available locally and it looks for the value in the outer scope.
                        }}> Delete </button>
        </div>
    )
}

export default NotesItem