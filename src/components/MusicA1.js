import { useEffect, useState } from "react"

const MusicA1 =()=> {

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
            <h4 className="sub4">Que veut-il dire 	&laquo;&ecirc;tre chez soi&raquo;?</h4>
            <h5 className="sub5">Niveau:  AP</h5>
            <p className="text lesson-text">Dans cette leçon, on va explorer le thème AP Aliénation et Assimilation.</p>
            <p className="text lesson-text">On va discuter ce qu'il veut dire "être américain" et "être français."</p>

            <h5>Activité 1  Trouvez les définitions</h5>
            

        </>
    )
}

export default MusicA1