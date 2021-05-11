import React, { useState } from 'react'
import axios from 'axios'

import { Button } from "../stories/Button";
import { useRouter } from "next/router";

const form = () => {
    const router = useRouter();

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    })
    const [inputs, setInputs] = useState({
        email: '',
        fornavn: "",
        efternavn: "",
        telefonnummer: "",
        postnummer: "",
        adresse: "",
        by: "",
        kontonummer: "",
        phone: router.query.phone
    })
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            })
            setInputs({
                email: '',
                fornavn: "",
                efternavn: "",
                telefonnummer: "",
                postnummer: "",
                adresse: "",
                by: "",
                kontonummer: "",
                phone: router.query.phone

            })
        } else {
            setStatus({
                info: { error: true, msg: msg },
            })
        }
    }
    const handleOnChange = (e) => {
        e.persist()
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/xbjqdlbq',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Tak, du vil modtage et svar hurtigst muligt'
                )
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error)
            })
    }
    return (
        <>
            <form onSubmit={handleOnSubmit}>

                <div>
                    <img src={`${router.query.image}`} alt="" />
                    <div>Telefonmodel: {router.query.phone}</div>
                    <div>Hukommelse: {router.query.storage}</div>

                    <div className="">
                        <div>Dit prisoverslag</div>
                        <div>3390 kr</div>
                    </div>

                </div>

                <div className="grid grid-cols-1">

                    <div className=" px-10 pt-6 pb-8 mb-4 flex flex-col my-2">
                        <div className="-mx-3 md:flex mb-2">

                            <div className=" px-3 mb-6 md:mb-0">
                                <label htmlFor="fornavn" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Fornavn</label>
                                <input
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="fornavn"
                                    type="fornavn"
                                    name="_replyto"
                                    onChange={handleOnChange}
                                    required
                                    value={inputs.fornavn}
                                />


                                <label htmlFor="efternavn" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Efternavn</label>
                                <input
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="efternavn"
                                    type="efternavn"
                                    name="_replyto"
                                    onChange={handleOnChange}
                                    required
                                    value={inputs.efternavn}
                                />

                            </div>

                            <div className=" px-3 mb-6 md:mb-0">
                                <label htmlFor="email" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">email</label>
                                <input
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="email"
                                    type="email"
                                    name="_replyto"
                                    onChange={handleOnChange}
                                    required
                                    value={inputs.email}
                                />

                                <label htmlFor="telefonnummer" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">telefonnummer</label>
                                <input
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="telefonnummer"
                                    type="telefonnummer"
                                    name="_replyto"
                                    onChange={handleOnChange}
                                    required
                                    value={inputs.telefonnummer}
                                />

                            </div>

                            <div className=" px-3 mb-6 md:mb-0">
                                <label htmlFor="adresse" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">adresse</label>
                                <input
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="adresse"
                                    type="adresse"
                                    name="_replyto"
                                    onChange={handleOnChange}
                                    required
                                    value={inputs.adresse}
                                />
                                <label htmlFor="postnummer" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">postnummer</label>
                                <input
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="postnummer"
                                    type="postnummer"
                                    name="_replyto"
                                    onChange={handleOnChange}
                                    required
                                    value={inputs.postnummer}
                                />
                            </div>
                            <div className=" px-3 mb-6 md:mb-0">
                                <label htmlFor="by" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">by</label>
                                <input
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="by"
                                    type="by"
                                    name="_replyto"
                                    onChange={handleOnChange}
                                    required
                                    value={inputs.by}
                                />
                                <label htmlFor="phone" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">phone</label>
                                <input
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="phone"
                                    type="text"
                                    name="_replyto"
                                    onChange={handleOnChange}
                                    required
                                    value={router.query.phone}
                                />
                            </div>



                        </div>

                        <div className="mt-5 text-center">
                            <Button variant="orange" type="submit" disabled={status.submitting}>SEND {!status.submitting
                                ? !status.submitted
                                    ? 'Submit'
                                    : 'Submitted'
                                : 'Submitting...'}</Button>
                        </div>


                    </div>



                </div>


            </form>

            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </>
    )
}

export default form
