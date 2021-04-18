import React from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'

const step1 = () => {

    // const handleNameChange = (event) => {
    //     updatFormdata({name: event.target.value})
    // };

    // const handleSurnameChange = (event) => {
    //     updatFormdata({surname: event.target.value})
    // }

    const router = useRouter();

    return (
        <div>
            <div>Vælg hukommelse</div>
            {router.query.storage}

            <Image src={`${router.query.image}`} width={500} height={500} />

        </div>
    )
}

export default step1
