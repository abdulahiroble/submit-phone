import React from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from "next/link"
import { Button } from "../stories/Button";

const step3 = () => {

    const router = useRouter();

    return (
        <div className="grid grid-cols-2 p-20">

            <div className="">
                <div>Er skærmfarven jævn? (ingen mærker eller pletter)</div>
                <div className="flex ">
                    <Link href={{
                        pathname: "priceEstimate",
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
                        pathname: "priceEstimate",
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
                <div>Hukommelse: {router.query.storage}</div>
            </div>

        </div>
    )
}

export default step3
