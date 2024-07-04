import { useEffect, useState } from "react"

const Level1L3A1 =()=> {

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
            <div className="col">
                <h3 className="sub3">Exercice.  How would you greet each person?</h3>
                <h4 className="sub4">Enter the appropriate greeting in French.  Be sure to use the correct register.  </h4>
                <h4 className="sub4">Remember that <span className="bold">vous</span> is both plural and formal singular.</h4>
                <form onSubmit={handleSubmit} className="activity-form">
                    <div className="input-group row justify-content-around">
                        <div className="col-md-3">
                            <p className="text">Mod&egrave;le 1:  Mme Dati</p>
                        </div>
                        <div className="col-md-9">
                            <p className="text">Bonjour, madame.  Comment allez-vous?</p>
                        </div>
                    </div>
                    <div className="input-group row justify-content-around">
                        <div className="col-md-3">
                            <p className="text">Mod&egrave;le 2:  Amidou</p>
                        </div>
                        <div className="col-md-9">
                            <p className="text">Salut!  &Ccedil;a va?</p>
                        </div>
                    </div>
                    <ol className="list-group activity-list l1l3a1">
                        <li className="list-item activity-item" id="l1-l1-a1-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <p className="text activity-text">M. Poirier</p>
                                </div>
                                <div className="col-md-9">
                                    <label htmlFor="l1-l3-a1-i1" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l3-a1-i1"
                                            name="l1-l3-a1-i1"
                                            value=""
                                            size="40"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>        
                        <li className="list-item activity-item" id="l1-l1-a1-i2">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <p className="text activity-text">Janine</p>
                                </div>
                                <div className="col-md-9">
                                    <label htmlFor="l1-l3-a1-i2" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l3-a1-i2"
                                            name="l1-l3-a1-i2"
                                            value=""
                                            size="40"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li className="list-item activity-item" id="l1-l1-a1-i3">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <p className="text activity-text">Maman</p>
                                </div>
                                <div className="col-md-9">
                                    <label htmlFor="l1-l3-a1-i3" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l3-a1-i3"
                                            name="l1-l3-a1-i3"
                                            value=""
                                            size="40"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li className="list-item activity-item" id="l1-l1-a1-i4">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <p className="text activity-text">Herv&eacute; et Louise</p>
                                </div>
                                <div className="col-md-9">
                                    <label htmlFor="l1-l3-a1-i4" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l3-a1-i4"
                                            name="l1-l3-a1-i4"
                                            value=""
                                            size="40"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li className="list-item activity-item" id="l1-l1-a1-i5">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <p className="text activity-text">Mlle Anglade</p>
                                </div>
                                <div className="col-md-9">
                                    <label htmlFor="l1-l3-a1-i5" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l3-a1-i5"
                                            name="l1-l3-a1-i5"
                                            value=""
                                            size="40"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li className="list-item activity-item" id="l1-l1-a1-i6">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <p className="text activity-text">Maman et Papa</p>
                                </div>
                                <div className="col-md-9">
                                    <label htmlFor="l1-l3-a1-i6" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l3-a1-i6"
                                            name="l1-l3-a1-i6"
                                            value=""
                                            size="40"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li className="list-item activity-item" id="l1-l1-a1-i7">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <p className="text activity-text">Fido</p>
                                </div>
                                <div className="col-md-9">
                                    <label htmlFor="l1-l3-a1-i7" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l3-a1-i7"
                                            name="l1-l3-a1-i7"
                                            value=""
                                            size="40"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <button 
                        type="submit" 
                        className="btn btn-info">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Level1L3A1