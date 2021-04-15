import React from 'react'

const step1 = ({updatFormdata}) => {

    const handleNameChange = (event) => {
        updatFormdata({name: event.target.value})
    };

    const handleSurnameChange = (event) => {
        updatFormdata({surname: event.target.value})
    }

    return (
        <div>
            <p>Name: <input type="text" name="name" onChange={handleNameChange}/></p>
            <p>Surname: <input type="text" name="surname" onChange={handleSurnameChange}/></p>
        </div>
    )
}

export default step1
