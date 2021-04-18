import React from 'react'
import { useRouter } from "next/router";

const step1 = (props) => {

    // const handleNameChange = (event) => {
    //     updatFormdata({name: event.target.value})
    // };

    // const handleSurnameChange = (event) => {
    //     updatFormdata({surname: event.target.value})
    // }

    const router = useRouter();

    return (
        <div>
            {router.query.phone}
            {/* <p>Name: <input type="text" name="name" onChange={handleNameChange}/></p>
            <p>Surname: <input type="text" name="surname" onChange={handleSurnameChange}/></p> */}
        </div>
    )
}

export default step1
