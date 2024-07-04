import { useEffect, useState } from "react"

const Level1L4A1 =()=> {

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
                <h3 className="sub3">Exercice.  Can you say these things?</h3>
                <h4 className="sub4">Enter the French for each expression.</h4>
                <h4 className="sub4">Remember that <span className="bold">voici</span> and <span className="bold">voil&agrave;</span> are used for pointing.  <span className="bold">Il y a</span> is used to tell how much or how many.</h4>
                <form onSubmit={handleSubmit} className="activity-form">
                    <div className="input-group row justify-content-around">
                        <div className="col-md-5">
                            <p className="text">Mod&egrave;le 1:  There is my neighbor Mrs. Lestrade.</p>
                        </div>
                        <div className="col-md-7">
                            <p className="text">Voil&agrave; ma voisine Mme Lestrade.</p>
                        </div>
                    </div>
                    <div className="input-group row justify-content-around">
                        <div className="col-md-5">
                            <p className="text">Mod&egrave;le 2:  There is a man in my neighborhood.</p>
                        </div>
                        <div className="col-md-7">
                            <p className="text">Il y a un homme dans mon quartier.</p>
                        </div>
                    </div>
                    <ol className="list-group activity-list l1l4a1">
                        <li className="list-item activity-item" id="l1-l4-a1-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">There is a boy in my school</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i1" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i1"
                                            name="l1-l4-a1-i1"
                                            value=""
                                            size="60"
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
                                    <p className="text activity-text">That is my teacher.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i2" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i2"
                                            name="l1-l4-a1-i2"
                                            value=""
                                            size="60"
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
                                    <p className="text activity-text">Here are my parents.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i3" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i3"
                                            name="l1-l4-a1-i3"
                                            value=""
                                            size="60"
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
                                    <p className="text activity-text">There is my neighbor.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i4" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i4"
                                            name="l1-l4-a1-i4"
                                            value=""
                                            size="60"
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
                                    <p className="text activity-text">Who is this?</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i5" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i5"
                                            name="l1-l4-a1-i5"
                                            value=""
                                            size="60"
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
                                    <p className="text activity-text">Who is the principal?</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i6" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i6"
                                            name="l1-l4-a1-i6"
                                            value=""
                                            size="60"
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
                                    <p className="text activity-text">The teacher is a lady</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i7" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i7"
                                            name="l1-l4-a1-i7"
                                            value=""
                                            size="60"
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
                                    <p className="text activity-text">The girl is a student.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i8" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i8"
                                            name="l1-l4-a1-i8"
                                            value=""
                                            size="60"
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
                                    <p className="text activity-text">The boys are students.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i9" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i9"
                                            name="l1-l4-a1-i9"
                                            value=""
                                            size="60"
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
                                    <p className="text activity-text">My neighbor is a teacher.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l4-a1-i10" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l4-a1-i10"
                                            name="l1-l4-a1-i10"
                                            value=""
                                            size="60"
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

export default Level1L4A1