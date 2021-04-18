import React from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from "next/link"
import { Button } from "../stories/Button";

const step1 = () => {

    const router = useRouter();

    return (
        <div className="grid grid-cols-2 p-20">


            <div className="">
                <div>Vælg hukommelse</div>

                <Button>
                    {router.query.storage}
                </Button>

                {/* <Image alt="banner" src={`${router.query.image}`} width={500} height={500} /> */}
            </div>


            <div>
                <img src={`${router.query.image}`} alt="" />
                <div>Telefonmodel: {router.query.phone}</div>
            </div>

        </div>
    )
}

export default step1
