import { useEffect, useState } from "react"

const LevelL6A1 =()=> {

    const [formData, setFormData] = useState({
        // l1l1a1i1: "",
        // l1l1a1i2: "",
        // l1l1a1i3: "",
        // l1l1a1i4: "",
        // l1l1a1i5: "",
        // l1l1a1i6: "",
        // l1l1a1i7: "",
        // l1l1a1i8: "",
        // l1l1a1i9: "",
        // l1l1a1i10: ""
    })

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

export default LevelL6A1