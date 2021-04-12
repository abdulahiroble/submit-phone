import Head from 'next/head'
import { Computer } from "../stories/Computer"
import { Package } from "../stories/Package"
import { Payment } from "../stories/Payment"
import { CheckMark } from "../stories/CheckMark"

export default function Home() {
  return (
    <>
      <Head>
        <title>PhoneSwap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>


        <div class="flex w-1/2 mx-auto">
          <div class="flex-2">Sådan sælger du din telefon til phoneSwap</div>
          <div class="flex-1">
            <div><Computer />Få et prisoverslag på din telefon</div>
          </div>
          <div class="flex-1">
            <div><Package />Send din telefon til Swappie
            </div>
          </div>
          <div class="flex-1">
            <div><Payment />
              Bankoverførsel foretages til din konto efter vores gennemtjek</div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-10 w-1/2 mx-auto">
          <div><CheckMark /></div>
          <div><CheckMark /></div>
          <div><CheckMark /></div>
          <div><CheckMark /></div>
          <div><CheckMark /></div>
          <div><CheckMark /></div>
        </div>


      </div>
    </>
  )
}
