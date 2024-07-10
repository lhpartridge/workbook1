import { useEffect, useState } from "react"

const Music1 =()=> {

    const [formData, setFormData] = useState({})

    const handleChange =(event)=> {
        // console.log("data submitted")
        const {name, value} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    // console.log(formData)
    const handleSubmit =(event)=> {
        event.preventDefault()
        console.log('clicked', formData)
    }


    return(
        <>

        </>
    )
}

export default Music1