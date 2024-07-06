import { useEffect, useState } from "react"

const Level1L5A2 =()=> {

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
            <div className="col mt-3">
                <h4 className="sub4">Exercice.  Here are some sentences for you to say in French.  Remember to use <a href="https://translate.google.com/" target="_blank" className="text-link">Google Translate</a> to help you with pronunciation.</h4>
                <h4 className="sub4">Enter the French for each expression.</h4>
                <form onSubmit={handleSubmit} className="activity-form">
                    <ol className="list-group activity-list l1-l5-a2">
                        <li className="list-item activity-item" id="l1-l5-a2-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">There are some notebooks on the desk.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l5-a2-i1" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l5-a2-i1"
                                            name="l1-l5-a2-i1"
                                            value=""
                                            size="60"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>        
                        <li className="list-item activity-item" id="l1-l5-a2-i2">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Here is some paper under the book.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l5-a2-i2" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l5-a2-i2"
                                            name="l1-l5-a2-i2"
                                            value=""
                                            size="60"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l5-a2-i3">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Here is a pen and a pencil in my bookbag .</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l5-a2-i3" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l5-a2-i3"
                                            name="l1-l5-a2-i3"
                                            value=""
                                            size="60"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l5-a2-i4">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">There is my neighbor next to my mother.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l5-a2-i4" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l5-a2-i4"
                                            name="l1-l5-a2-i4"
                                            value=""
                                            size="60"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l5-a2-i5">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Who is that in the classroom?</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l5-a2-i5" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l5-a2-i5"
                                            name="l1-l5-a2-i5"
                                            value=""
                                            size="60"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l5-a2-i6">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">There are the markers under the board.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l5-a2-i6" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l5-a2-i6"
                                            name="l1-l5-a2-i6"
                                            value=""
                                            size="60"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l5-a2-i7">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">There is a computer in front of the screen.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l5-a2-i7" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l5-a2-i7"
                                            name="l1-l5-a2-i7"
                                            value=""
                                            size="60"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l5-a2-i8">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">The (office) desk is next to the window.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l5-a2-i8" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l5-a2-i8"
                                            name="l1-l5-a2-i8"
                                            value=""
                                            size="60"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l5-a2-i9">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">There's a sheet of paper on the (student) desk.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l5-a2-i9" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l5-a2-i9"
                                            name="l1-l5-a2-i9"
                                            value=""
                                            size="60"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l5-a2-i10">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">There are some students behind the door.</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l5-a2-i10" className="form-label text">
                                    <input 
                                            type="text" 
                                            id="l1-l5-a2-i10"
                                            name="l1-l5-a2-i10"
                                            value=""
                                            size="60"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l5-a2-i11">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text activity-text">Now it's your turn to create some sentences.  How many can you invent in 5 minutes?</p>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="l1-l5-a2-i11" className="form-label text">
                                    {/* <input 
                                            type="text" 
                                            id="l1-l5-a2-i11"
                                            name="l1-l5-a2-i11"
                                            value=""
                                            size="60"
                                            className="form-control"
                                            onChange={handleChange}
                                        /> */}
                                        <textarea name="l1-l5-a2-i11" id="l1-l5-a2-i11" cols="60" rows="8"></textarea>
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

export default Level1L5A2