import { useEffect, useState } from "react"

const Level1L4A2 =()=> {

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
                <h3 className="sub3 activity-sub">Mes camarades de classe</h3>
                <h4 className="sub4">On va &eacute;peler les noms et les &acirc;ges.</h4>
                <ul className="list-group">
                    <li className="ms-5">
                        <p className="text activity-text">Demandez le nom &agrave; chaque de vos camarades.</p>
                    </li>
                    <li className="ms-5">
                    <p className="text activity-text">&Eacute;crivez les lettre quand les camarades &eacute;p&egrave;llent leurs noms.</p>
                    </li>
                </ul>
                <p className="text ">Plus tard, on va &eacute;crire les anniversaires!</p>
                <form onSubmit={handleSubmit} className="activity-form">
                    <ol className="list-group activity-list l1l4a2">
                    {/* Add a click event to the image that plays an audio file that spells a name and gives an age in French. */}
                        <li className="list-item activity-item" id="l1-l4-a2-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <img src="https://via.placeholder.com/50x50" alt="placeholder img" class="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">Pr&eacute;nom
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>   
                                </div>
                                {/* <div className="col-md-3">
                                <label htmlFor="l1-l4-a2-i1" className="form-label text">Nom de famille
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div> */}
                                <div className="col-md-2">
                                    {/* <p className="text activity-text">There is a boy in my school</p> */}
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">&Acirc;ge
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="3"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="col-md-5">
                                    <p className="text solution-text"  id="L1L4A2I1"><span className="align-text-bottom">Solution</span></p>
                                    <p className="text solution-text d-none" hidden id="L1L4A2I1s">Amidou, 25 ans.</p>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l4-a2-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <img src="https://via.placeholder.com/50x50" alt="placeholder img" class="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">Pr&eacute;nom
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>   
                                </div>
                                {/* <div className="col-md-3">
                                <label htmlFor="l1-l4-a2-i1" className="form-label text">Nom de famille
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div> */}
                                <div className="col-md-2">
                                    {/* <p className="text activity-text">There is a boy in my school</p> */}
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">&Acirc;ge
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="3"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="col-md-5">
                                    <p className="text solution-text"  id="L1L4A2I1"><span className="align-text-bottom">Solution</span></p>
                                    <p className="text solution-text d-none" hidden id="L1L4A2I1s">Amidou, 25 ans.</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item activity-item" id="l1-l4-a2-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <img src="https://via.placeholder.com/50x50" alt="placeholder img" class="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">Pr&eacute;nom
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>   
                                </div>
                                {/* <div className="col-md-3">
                                <label htmlFor="l1-l4-a2-i1" className="form-label text">Nom de famille
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div> */}
                                <div className="col-md-2">
                                    {/* <p className="text activity-text">There is a boy in my school</p> */}
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">&Acirc;ge
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="3"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="col-md-5">
                                    <p className="text solution-text"  id="L1L4A2I1"><span className="align-text-bottom">Solution</span></p>
                                    <p className="text solution-text d-none" hidden id="L1L4A2I1s">Amidou, 25 ans.</p>
                                </div>
                            </div>
                        </li> 
                        <li className="list-item activity-item" id="l1-l4-a2-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <img src="https://via.placeholder.com/50x50" alt="placeholder img" class="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">Pr&eacute;nom
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>   
                                </div>
                                {/* <div className="col-md-3">
                                <label htmlFor="l1-l4-a2-i1" className="form-label text">Nom de famille
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div> */}
                                <div className="col-md-2">
                                    {/* <p className="text activity-text">There is a boy in my school</p> */}
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">&Acirc;ge
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="3"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="col-md-5">
                                    <p className="text solution-text"  id="L1L4A2I1"><span className="align-text-bottom">Solution</span></p>
                                    <p className="text solution-text d-none" hidden id="L1L4A2I1s">Amidou, 25 ans.</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item activity-item" id="l1-l4-a2-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <img src="https://via.placeholder.com/50x50" alt="placeholder img" class="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">Pr&eacute;nom
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>   
                                </div>
                                {/* <div className="col-md-3">
                                <label htmlFor="l1-l4-a2-i1" className="form-label text">Nom de famille
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div> */}
                                <div className="col-md-2">
                                    {/* <p className="text activity-text">There is a boy in my school</p> */}
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">&Acirc;ge
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="3"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="col-md-5">
                                    <p className="text solution-text"  id="L1L4A2I1"><span className="align-text-bottom">Solution</span></p>
                                    <p className="text solution-text d-none" hidden id="L1L4A2I1s">Amidou, 25 ans.</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item activity-item" id="l1-l4-a2-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <img src="https://via.placeholder.com/50x50" alt="placeholder img" class="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">Pr&eacute;nom
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>   
                                </div>
                                {/* <div className="col-md-3">
                                <label htmlFor="l1-l4-a2-i1" className="form-label text">Nom de famille
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div> */}
                                <div className="col-md-2">
                                    {/* <p className="text activity-text">There is a boy in my school</p> */}
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">&Acirc;ge
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="3"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="col-md-5">
                                    <p className="text solution-text"  id="L1L4A2I1"><span className="align-text-bottom">Solution</span></p>
                                    <p className="text solution-text d-none" hidden id="L1L4A2I1s">Amidou, 25 ans.</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item activity-item" id="l1-l4-a2-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <img src="https://via.placeholder.com/50x50" alt="placeholder img" class="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">Pr&eacute;nom
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>   
                                </div>
                                {/* <div className="col-md-3">
                                <label htmlFor="l1-l4-a2-i1" className="form-label text">Nom de famille
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div> */}
                                <div className="col-md-2">
                                    {/* <p className="text activity-text">There is a boy in my school</p> */}
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">&Acirc;ge
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="3"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="col-md-5">
                                    <p className="text solution-text"  id="L1L4A2I1"><span className="align-text-bottom">Solution</span></p>
                                    <p className="text solution-text d-none" hidden id="L1L4A2I1s">Amidou, 25 ans.</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item activity-item" id="l1-l4-a2-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <img src="https://via.placeholder.com/50x50" alt="placeholder img" class="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">Pr&eacute;nom
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>   
                                </div>
                                {/* <div className="col-md-3">
                                <label htmlFor="l1-l4-a2-i1" className="form-label text">Nom de famille
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div> */}
                                <div className="col-md-2">
                                    {/* <p className="text activity-text">There is a boy in my school</p> */}
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">&Acirc;ge
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="3"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="col-md-5">
                                    <p className="text solution-text"  id="L1L4A2I1"><span className="align-text-bottom">Solution</span></p>
                                    <p className="text solution-text d-none" hidden id="L1L4A2I1s">Amidou, 25 ans.</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item activity-item" id="l1-l4-a2-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <img src="https://via.placeholder.com/50x50" alt="placeholder img" class="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">Pr&eacute;nom
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>   
                                </div>
                                {/* <div className="col-md-3">
                                <label htmlFor="l1-l4-a2-i1" className="form-label text">Nom de famille
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div> */}
                                <div className="col-md-2">
                                    {/* <p className="text activity-text">There is a boy in my school</p> */}
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">&Acirc;ge
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="3"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="col-md-5">
                                    <p className="text solution-text"  id="L1L4A2I1"><span className="align-text-bottom">Solution</span></p>
                                    <p className="text solution-text d-none" hidden id="L1L4A2I1s">Amidou, 25 ans.</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item activity-item" id="l1-l4-a2-i1">
                            <div className="row justify-content-around">
                                <div className="col-md-2">
                                    <img src="https://via.placeholder.com/50x50" alt="placeholder img" class="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">Pr&eacute;nom
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>   
                                </div>
                                {/* <div className="col-md-3">
                                <label htmlFor="l1-l4-a2-i1" className="form-label text">Nom de famille
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="30"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div> */}
                                <div className="col-md-2">
                                    {/* <p className="text activity-text">There is a boy in my school</p> */}
                                    <label htmlFor="l1-l4-a2-i1" className="form-label text">&Acirc;ge
                                    <input 
                                            type="text" 
                                            id="l1-l4-a2-i1"
                                            name="l1-l4-a2-i1"
                                            value=""
                                            size="3"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className="col-md-5">
                                    <p className="text solution-text"  id="L1L4A2I1"><span className="align-text-bottom">Solution</span></p>
                                    <p className="text solution-text d-none" hidden id="L1L4A2I1s">Amidou, 25 ans.</p>
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

export default Level1L4A2