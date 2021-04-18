import Head from 'next/head'
import { Computer } from "../stories/Computer"
import { Package } from "../stories/Package"
import { Payment } from "../stories/Payment"
import { CheckMark } from "../stories/CheckMark"
import { Button } from "../stories/Button";
import { Phones } from "../stories/Phones";
import Link from "next/link"
import Image from 'next/image'

export default function Home() {

  const phones = [
    { iphone: "iPhone 12 Pro Max", price: 8060, storage: [{ capacity: [128, 256, 512] }], image: "/iPhone_12_pro_max_graphite.png" },
    { iphone: "iPhone 12 Pro", price: 7790, storage: 128, image: "/iPhone_12_pro_silver.png" },
    { iphone: "iPhone 12", price: 5220, storage: 512, image: "/iPhone_12_white.png" },
    { iphone: "iPhone 12 Mini", price: 4640, storage: 100, image: "/iPhone_12_mini_Blue.png" }
  ]

  return (
    <>
      <Head>
        <title>PhoneSwap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-8/12 sm:w-1/2 mx-auto">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 p-5">
            <div className="text-center"><Computer /><div className="mt-3">Få et prisoverslag på din telefon</div></div>
          </div>
          <div className="flex-1 p-5">
            <div className="text-center"><Package /><div className="mt-3">Send din telefon til PhoneSwap</div>
            </div>
          </div>
          <div className="flex-1 p-5">
            <div className="text-center"><Payment />
              <div className="mt-3">Bankoverførsel foretages til din konto efter vores gennemtjek</div></div>
          </div>
        </div>




        <div className="grid grid-rows-2 grid-flow-row  sm:grid-flow-col gap-4 mt-10">
          <div className="flex"><CheckMark /><div className="pl-3">Fri fragt med DHL Express</div></div>
          <div className="flex"><CheckMark /><div className="pl-3">Vores bud er gyldigt i 2 uger</div></div>
          <div className="flex"><CheckMark /><div className="pl-3">Hurtig betaling til din bankkonto</div></div>
          <div className="flex"><CheckMark /><div className="pl-3">De bedste priser</div></div>
          <div className="flex"><CheckMark /><div className="pl-3">Pålidelig service</div></div>
          <div className="flex"><CheckMark /><div className="pl-3">Fremragende kundeservice</div></div>
        </div>

        <div className="grid grid-rows-2 sm:grid-flow-col gap-4 mt-10">
          <div className="flex text-center flex-col sm:flex-row">
            {phones.map((phone) => {
              return <div>
                <div>
                  <div className="text-lg font-bold">
                    {phone.iphone}
                  </div>
                  <br />
                  <div >Prisoverslag: <span className="font-bold">Op til {phone.price} kr</span></div>
                  <div><Image src={phone.image} width={500} height={500} /></div>
                  <Button variant="orange">
                    <Link href={{
                      pathname: "step1",
                      query: {
                        phone: phone.iphone,
                        price: phone.price,
                        storage: phone.storage.toString(),
                        image: phone.image.toString()
                      },
                    }}>VÆLG</Link>
                  </Button>
                </div>
              </div>
            })}</div>
        </div>


      </div>
    </>
  )
}
