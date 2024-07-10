import { useEffect, useState } from "react"

const LevelL6A2 =()=> {

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
            <h3 className="activity-sub">Here are some tricky questions.  Can you answer them?</h3>
            <form onSubmit={handleSubmit} className="activity-form">
                <ol className="list-group activity-list l1l6a2">
                    <li className="list-item activity-item" id="l1-l6-a2-i1">
                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <p className="text activity-text">Aujourd'hui, c'est samedi.  Demain, ce sera </p>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="l1-l6-a2-i1" className="form-label text">
                                <input 
                                        type="text" 
                                        id="l1-l6-a2-i1"
                                        name="l1-l6-a2-i1"
                                        value=""
                                        size="50"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>                            
                        </div>
                    </li> 
                    <li className="list-item activity-item" id="l1-l6-a2-i2">
                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <p className="text activity-text">Ce soir, c'est le dix-sept ao&ucirc;t.  Hier soir, c'&eacute; le </p>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="l1-l6-a2-i2" className="form-label text">
                                <input 
                                        type="text" 
                                        id="l1-l6-a2-i2"
                                        name="l1-l6-a2-i2"
                                        value=""
                                        size="50"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </li>
                    <li className="list-item activity-item" id="l1-l6-a2-i3">
                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <p className="text activity-text">Demain, c'est mardi.  Le lendemain sera  </p>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="l1-l6-a2-i3" className="form-label text">
                                <input 
                                    type="text" 
                                    id="l1-l6-a2-i3"
                                    name="l1-l6-a2-i3"
                                    value=""
                                    size="50"
                                    className="form-control"
                                    onChange={handleChange}
                                    />
                                </label>
                            </div>

                        </div>
                    </li>
                    <li className="list-item activity-item" id="l1-l6-a2-i4">
                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <p className="text activity-text">L'avant-hier, c'&eacute;tait le vingt-neuf juin.  Aujourd'hui, c'est le  </p>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="l1-l6-a2-i4" className="form-label text">
                                <input 
                                    type="text" 
                                    id="l1-l6-a2-i4"
                                    name="l1-l6-a2-i4"
                                    value=""
                                    size="50"
                                    className="form-control"
                                    onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </li>
                    <li className="list-item activity-item" id="l1-l6-a2-i5">
                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <p className="text activity-text">Demain, c'est mercredi.  Hier, c'&eacute;tait </p>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="l1-l6-a2-i5" className="form-label text">
                                <input 
                                    type="text" 
                                    id="l1-l6-a2-i5"
                                    name="l1-l6-a2-i5"
                                    value=""
                                    size="50"
                                    className="form-control"
                                    onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </li>
                    <li className="list-item activity-item" id="l1-l6-a2-i6">
                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <p className="text activity-text">Lundi sera le treize mai.  Le jour apr&egrave;s,  ce sera le  </p>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="l1-l6-a2-i6" className="form-label text">
                                <input 
                                    type="text" 
                                    id="l1-l6-a2-i6"
                                    name="l1-l6-a2-i6"
                                    value=""
                                    size="50"
                                    className="form-control"
                                    onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="col-md-6">
                                <p className="text activity-text">Those were tough, but I knew you could do them!</p>
                                <p className="text activity-text">Now make up some of your own.  Write them here.</p>
                            </div>
                            <div className="col-md-6">
                                <textarea name="l1-l6-a2-i7" rows="5" cols="50" className="mb-3" id="l1L6A2i7" placeholder="Inventez des phrases ici"></textarea>
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

export default LevelL6A2