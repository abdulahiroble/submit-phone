import 'tailwindcss/tailwind.css'
import "../styles/global.css";

import { useState } from "react"

function MyApp({ Component, pageProps }) {

    const [formData, setFormData] = useState({});

    const updateFormData = (newData) => {
        setFormData({ ...formData, ...newData })
    }

    return <Component {...pageProps} updateFormData={updateFormData} />
}

export default MyApp