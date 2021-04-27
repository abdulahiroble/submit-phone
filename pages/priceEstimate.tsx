import React from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from "next/link"
import { Button } from "../stories/Button";

const priceEstimate = () => {

    const router = useRouter();

    return (
        <div className="grid grid-cols-2 p-20">


            <div className="">
                <ul>
                    <li>Fungerer telefonen normalt?</li>
                    <li>Er skærmfarven jævn? (ingen mærker eller pletter)</li>
                    <li>Er der buler eller ridser på telefonen/skærmen?</li>
                </ul>
            </div>

            <div className="">
                <div>Dit prisoverslag</div>
                <div>3390 kr</div>
                <Button><Link href="/form">SÆLG TELEFON</Link></Button>
            </div>


            <div>
                <img src={`${router.query.image}`} alt="" />
                <div>Telefonmodel: {router.query.phone}</div>
                <div>Hukommelse: {router.query.storage}</div>
            </div>

        </div>
    )
}

export default priceEstimate
