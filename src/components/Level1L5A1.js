import { useEffect, useState } from "react"

const Level1L5A1 =()=> {

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
                <h3 className="sub3">Exercice.  Le verbe aller et les pronoms accentu&eacute;s</h3>
                <h4 className="sub4">The verbe aller and stress pronouns.</h4>
                <p className="text lesson-text">Soon you'll start learning how verbs work in French.</p>
                <p className="text lesson-text">The verbe <span className="bold">aller</span> means <span className="bold">to go</span>.  It's used in all sorts of ways, including the greetings that you have already learned.</p>
                <h4 className="sub4">Heading home!  </h4>
                <p className="text lesson-text">Say that all these people are going home. Write two translations for each French sentence.  Notice all the different forms of the verb <span className="bold">aller</span>.</p>
                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} className="activity-form">
                            <div className="input-group row justify-content-around">
                                <div className="col-md-5">
                                    <p className="text">Mod&egrave;le:  Je vais chez moi.</p>
                                </div>
                                <div className="col-md-7">
                                    <p className="text">I'm going home.  I'm going to my house.</p>
                                </div>
                            </div>
                            <ol className="list-group activity-list l1l5a1">
                                <li className="list-item activity-item" id="l1-l5-a1-i1">
                                    <div className="row justify-content-around">
                                        <div className="col-md-5">
                                            <p className="text activity-text">Tu vas chez toi.</p>
                                        </div>
                                        <div className="col-md-7">
                                            <label htmlFor="l1-l5-a1-i1" className="form-label text">
                                            <input 
                                                    type="text" 
                                                    id="l1-l5-a1-i1"
                                                    name="l1-l5-a1-i1"
                                                    value=""
                                                    size="60"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </li>        
                                <li className="list-item activity-item" id="l1-l5-a1-i2">
                                    <div className="row justify-content-around">
                                        <div className="col-md-5">
                                            <p className="text activity-text">Il va chez lui.</p>
                                        </div>
                                        <div className="col-md-7">
                                            <label htmlFor="l1-l5-a1-i2" className="form-label text">
                                            <input 
                                                    type="text" 
                                                    id="l1-l5-a1-i2"
                                                    name="l1-l5-a1-i2"
                                                    value=""
                                                    size="60"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </li> 
                                <li className="list-item activity-item" id="l1-l5-a1-i3">
                                    <div className="row justify-content-around">
                                        <div className="col-md-5">
                                            <p className="text activity-text">Elle va chez elle.</p>
                                        </div>
                                        <div className="col-md-7">
                                            <label htmlFor="l1-l5-a1-i3" className="form-label text">
                                            <input 
                                                    type="text" 
                                                    id="l1-l5-a1-i3"
                                                    name="l1-l5-a1-i3"
                                                    value=""
                                                    size="60"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </li> 
                                <li className="list-item activity-item" id="l1-l5-a1-i4">
                                    <div className="row justify-content-around">
                                        <div className="col-md-5">
                                            <p className="text activity-text">Nous allons chez nous.</p>
                                        </div>
                                        <div className="col-md-7">
                                            <label htmlFor="l1-l5-a1-i4" className="form-label text">
                                            <input 
                                                    type="text" 
                                                    id="l1-l5-a1-i4"
                                                    name="l1-l5-a1-i4"
                                                    value=""
                                                    size="60"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </li> 
                                <li className="list-item activity-item" id="l1-l5-a1-i5">
                                    <div className="row justify-content-around">
                                        <div className="col-md-5">
                                            <p className="text activity-text">Vous allez chez vous.</p>
                                        </div>
                                        <div className="col-md-7">
                                            <label htmlFor="l1-l5-a1-i5" className="form-label text">
                                            <input 
                                                    type="text" 
                                                    id="l1-l5-a1-i5"
                                                    name="l1-l5-a1-i5"
                                                    value=""
                                                    size="60"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </li> 
                                <li className="list-item activity-item" id="l1-l5-a1-i6">
                                    <div className="row justify-content-around">
                                        <div className="col-md-5">
                                            <p className="text activity-text">Ils vont chez eux.</p>
                                        </div>
                                        <div className="col-md-7">
                                            <label htmlFor="l1-l5-a1-i6" className="form-label text">
                                            <input 
                                                    type="text" 
                                                    id="l1-l5-a1-i6"
                                                    name="l1-l5-a1-i6"
                                                    value=""
                                                    size="60"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </li> 
                                <li className="list-item activity-item" id="l1-l5-a1-i7">
                                    <div className="row justify-content-around">
                                        <div className="col-md-5">
                                            <p className="text activity-text">Elles vont chez elles.</p>
                                        </div>
                                        <div className="col-md-7">
                                            <label htmlFor="l1-l5-a1-i7" className="form-label text">
                                            <input 
                                                    type="text" 
                                                    id="l1-l5-a1-i7"
                                                    name="l1-l5-a1-i7"
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
                    <div className="col-md-4">
                        <img src="../media/maison.jpg" alt="" className="img-fluid mt-3"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Level1L5A1