import Head from 'next/head'
import { Computer } from "../stories/Computer"
import { Package } from "../stories/Package"
import { Payment } from "../stories/Payment"
import { CheckMark } from "../stories/CheckMark"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>PhoneSwap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-1/2 mx-auto">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1">
            <div><Computer />Få et prisoverslag på din telefon</div>
          </div>
          <div className="flex-1">
            <div><Package />Send din telefon til Swappie
            </div>
          </div>
          <div className="flex-1">
            <div><Payment />
              Bankoverførsel foretages til din konto efter vores gennemtjek</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-10">
          <div><CheckMark />Fri fragt med DHL Express</div>
          <div><CheckMark />Vores bud er gyldigt i 2 uger</div>
          <div><CheckMark />Hurtig betaling til din bankkonto</div>
          <div><CheckMark />De bedste priser</div>
          <div><CheckMark />
            Pålidelig service</div>
          <div><CheckMark />Fremragende kundeservice</div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-10">
          <div><CheckMark />Fri fragt med DHL Express</div>
          <div><CheckMark />Vores bud er gyldigt i 2 uger</div>
          <div><CheckMark />Hurtig betaling til din bankkonto</div>
          <div><CheckMark />De bedste priser</div>
          <div><CheckMark />
            Pålidelig service</div>
          <div><CheckMark />Fremragende kundeservice</div>
        </div>


        <div className="grid grid-cols-1 mt-10 sm:grid-cols-4 lg:sm:grid-cols-6">
          <div> <Image src={"/iPhone_12_mini_Blue.png"} width={500} height={500}/> </div>
          <div><Image src={"/iPhone_12_mini_Blue.png"} width={500} height={500}/></div>
          <div><Image src={"/iPhone_12_mini_Blue.png"} width={500} height={500}/></div>
          <div><Image src={"/iPhone_12_mini_Blue.png"} width={500} height={500}/></div>
        </div>
      </div>
    </>
  )
}
