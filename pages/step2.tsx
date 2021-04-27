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
                    <Button>                    <Link href={{
                        pathname: "step3",
                        query: {
                            phone: router.query.phone,
                            price: router.query.price,
                            storage: router.query.storage,
                            image: router.query.image
                        },
                    }}>JA</Link></Button>
                    <Button>                    <Link href={{
                        pathname: "step3",
                        query: {
                            phone: router.query.phone,
                            price: router.query.price,
                            storage: router.query.storage,
                            image: router.query.image
                        },
                    }}>NEJ</Link></Button></div>

                {/* <Image alt="banner" src={`${router.query.image}`} width={500} height={500} /> */}
            </div>


            <div>
                <img src={`${router.query.image}`} alt="" />
                <div>Telefonmodel: {router.query.phone}</div>
                <div>Hukommelse: {router.query.storage}</div>
            </div>

        </div>
    )
}

export default step2
