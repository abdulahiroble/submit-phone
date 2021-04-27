import React from 'react'
import { Button } from "../stories/Button";
import { useRouter } from "next/router";



const form = () => {

    const router = useRouter();
    return (
        <>
            {/* <form name="contact" method="POST" data-netlify="true">
                <div className="grid grid-cols-2 p-10">

                    <div className=" px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                    First Name
                                </label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" name="firstname" type="text" />

                                <input type="hidden" name="form-name" value="contact" />

                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                    Last name
                                </label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" name="lastname" type="text" />

                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                    Email
                                </label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" name="email" type="email" />

                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                    Phone
                                </label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" name="phone" type="phone" />
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                    Adress
                                </label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" name="address" type="text" />
                            </div>
                        </div>


                        <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                    City
                                </label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" name="city" />
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                    Postal
                                </label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" name="postal" type="text" />
                            </div>
                        </div>

                        <div className="mt-5 text-center">
                            <Button variant="orange" type="submit">SEND</Button>
                        </div>

                    </div>

                    <div>
                        <img src={`${router.query.image}`} alt="" />
                        <div>Telefonmodel: {router.query.phone}</div>
                        <div>Hukommelse: {router.query.storage}</div>

                        <div className="">
                            <div>Dit prisoverslag</div>
                            <div>3390 kr</div>
                        </div>

                    </div>

                </div>
            </form> */}


            {/* <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </p>
                <input type="hidden" name="form-name" value="name_of_my_form" />
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form> */}

            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="contact" value="contact" />
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>

        </>
    )
}

export default form
