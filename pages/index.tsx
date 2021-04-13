import Head from 'next/head'
import { Computer } from "../stories/Computer"
import { Package } from "../stories/Package"
import { Payment } from "../stories/Payment"
import { CheckMark } from "../stories/CheckMark"
import { Button } from "../stories/Button";
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>PhoneSwap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-8/12 sm:max-w-lg mx-auto">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 p-5">
            <div className="text-center"><Computer />Få et prisoverslag på din telefon</div>
          </div>
          <div className="flex-1 p-5">
            <div className="text-center"><Package />Send din telefon til Swappie
            </div>
          </div>
          <div className="flex-1 p-5">
            <div className="text-center"><Payment />
              Bankoverførsel foretages til din konto efter vores gennemtjek</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          <div className="flex"><CheckMark /><div className="pl-3">Fri fragt med DHL Express</div></div>
          <div className="flex"><CheckMark /><div className="pl-3">Vores bud er gyldigt i 2 uger</div></div>
          <div className="flex"><CheckMark /><div className="pl-3">Hurtig betaling til din bankkonto</div></div>
          <div className="flex"><CheckMark /><div className="pl-3">De bedste priser</div></div>
          <div className="flex"><CheckMark />
            <div className="pl-3">Pålidelig service</div></div>
          <div className="flex"><CheckMark /><div className="pl-3">Fremragende kundeservice</div></div>
        </div>

        <div className="grid grid-cols-1 text-center mt-10 sm:grid-cols-6 lg:grid-cols-4 md:grid-cols-2">
          <div><div className="text-lg font-bold">iPhone 12 Pro Max</div><br/><div >Prisoverslag: <span className="font-bold">Op til 8060 kr</span></div> <Image src={"/iPhone_12_mini_Blue.png"} width={500} height={500}/><Button variant="orange">VÆLG</Button> </div>
             <div><div className="text-lg font-bold">iPhone 12 Pro Max</div><br/><div >Prisoverslag: <span className="font-bold">Op til 8060 kr</span></div> <Image src={"/iPhone_12_mini_Blue.png"} width={500} height={500}/><Button variant="orange">VÆLG</Button> </div>
             <div><div className="text-lg font-bold">iPhone 12 Pro Max</div><br/><div >Prisoverslag: <span className="font-bold">Op til 8060 kr</span></div> <Image src={"/iPhone_12_mini_Blue.png"} width={500} height={500}/><Button variant="orange">VÆLG</Button> </div>
             <div><div className="text-lg font-bold">iPhone 12 Pro Max</div><br/><div >Prisoverslag: <span className="font-bold">Op til 8060 kr</span></div> <Image src={"/iPhone_12_mini_Blue.png"} width={500} height={500}/><Button variant="orange">VÆLG</Button> </div>
        </div>
      </div>
    </>
  )
}
