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
            <h3 className="activity-sub">C'est quand, ton anniversaire?</h3>
            <p className="text lesson-text">You are getting the birthdays for the local Alliance Fran&ccedil;aise to put on their calendar.  One of the members has most of the birthdays, but you'll have to ask for others directly.</p>
            <p className="text lesson-text">Complete the list for each member whose birthday you know.  Ask for the birthday of the one's you don't know in order to enter it in the calendar.</p>
            <form onSubmit={handleSubmit} className="activity-form">
                    <div className="input-group row justify-content-around">
                        <div className="col-md-5">
                            <p className="text mb-0">Mod&egrave;le:  Sophie, c'est quand son anniversaire?.</p>
                            <p className="text mb-0">L'anniversaire de Sophie est le premier ao&ucirc;t.</p>
                            <p className="text">R&eacute;ponse:  Sophie: <span className="underline">1/8</span></p>
                        </div>
                        <div className="col-md-7">
                            <p className="text">Voil&agrave; ma voisine Mme Lestrade.</p>
                        </div>
                    </div>

                    <ol className="list-group activity-list l1l4a1">
                        <li className="list-item activity-item" id="l1-l4-a1-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Antoine</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i1" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i1"
                                            name="l1-l4-a1-i1"
                                            value=""
                                            size="5"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>        
                        <li className="list-item activity-item" id="l1-l4-a1-i2">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Vincent</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i2" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i2"
                                            name="l1-l4-a1-i2"
                                            value=""
                                            size="5"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l4-a1-i3">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Th&eacute;o</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i3" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i3"
                                            name="l1-l4-a1-i3"
                                            value=""
                                            size="5"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l4-a1-i4">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">&Eacute;lodie</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i4" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i4"
                                            name="l1-l4-a1-i4"
                                            value=""
                                            size="5"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l4-a1-i5">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Marine</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i5" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i5"
                                            name="l1-l4-a1-i5"
                                            value=""
                                            size="5"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l4-a1-i6">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Alix</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i6" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i6"
                                            name="l1-l4-a1-i6"
                                            value=""
                                            size="5"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l4-a1-i7">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">La&euml;titia</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i7" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i7"
                                            name="l1-l4-a1-i7"
                                            value=""
                                            size="5"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l4-a1-i8">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Jean-Paul</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i8" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i8"
                                            name="l1-l4-a1-i8"
                                            value=""
                                            size="5"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l4-a1-i9">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Isabelle</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i9" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i9"
                                            name="l1-l4-a1-i9"
                                            value=""
                                            size="5"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l4-a1-i10">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Dominique</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i10" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i10"
                                            name="l1-l4-a1-i10"
                                            value=""
                                            size="5"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l4-a1-i11">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Moussa</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i11" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i11"
                                            name="l1-l4-a1-i11"
                                            value=""
                                            size="5"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l4-a1-i12">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Bintou</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i12" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i12"
                                            name="l1-l4-a1-i12"
                                            value=""
                                            size="5"
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


        </>
    )
}

export default LevelL6A1