import React from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from "next/link"
import { Button } from "../stories/Button";

const step2 = () => {

    const router = useRouter();

    return (
        <div className="grid grid-cols-2 p-20">


            <div className="">
                <div>Fungerer telefonen normalt?</div>
                <div className="flex ">
                    <Link href={{
                        pathname: "step3",
                        query: {
                            phone: router.query.phone,
                            price: router.query.price,
                            storage: router.query.storage,
                            image: router.query.image
                        },
                    }}>
                        <Button>JA</Button>
                    </Link>
                    <Link href={{
                        pathname: "step3",
                        query: {
                            phone: router.query.phone,
                            price: router.query.price,
                            storage: router.query.storage,
                            image: router.query.image
                        },
                    }}>
                        <Button>NEJ</Button></Link>
                </div>
            </div>


            <div>
                <img src={`${router.query.image}`} alt="" />
                <div>Telefonmodel: {router.query.phone}</div>
                <div>Hukommelse: {router.query.storage || router.query.storage2 || router.query.storage3}</div>
            </div>

        </div>
    )
}

export default step2
