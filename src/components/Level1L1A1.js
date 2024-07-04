import { useEffect, useState } from "react"

const LevelL1A1 =()=> {

    const [formData, setFormData] = useState({
        l1l1a1i1: "",
        l1l1a1i2: "",
        l1l1a1i3: "",
        l1l1a1i4: "",
        l1l1a1i5: "",
        l1l1a1i6: "",
        l1l1a1i7: "",
        l1l1a1i8: "",
        l1l1a1i9: "",
        l1l1a1i10: ""
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
            <div className="row l1-12 mb-3">
                {/* <h2 className="sub2">Le&ccedil;on1 Exercice 1</h2> */}
                <h3 className="sub3">Exercice 1</h3>
                <h4 className="sub4">Demandez les questions avec <span className="bold">Tu es…?</span> ou <span className="bold">Tu as…? </span>Puis complétez la r&eacute;ponse avec <span className="bold">je suis</span> ou<span className="bold"> j’ai</span>.  </h4>
                {/* <p className="text">Mod&egrave;le:  <span className="italic underline">_____</span> froid?  <span className="italic underline">Tu as</span> froid?  Oui, <span className="italic underline">j'ai</span> froid.</p> */}
            </div>
            <div className="col">
                <form onSubmit={handleSubmit} className="activity-form">
                    <div className="input-group row">
                        <div className="col-auto d-block mx-auto">
                            <p className="text">Mod&egrave;le:  <span className="italic underline">_____</span> froid?  <span className="italic underline">Tu as</span> froid?  Oui, <span className="italic underline">j'ai</span> froid.</p>
                            <ol className="list-group activity-list l1l1a1">
                                <li className="list-item activity-item" id="l1-l1-a1-i1">
                                    <div className="row">
                                        <div className="col-auto">
                                            <label htmlFor="l1-l1-a1-i1-a1" className="form-label text">Tu es
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i1-a1"
                                                    name="l1-l1-a1-i1-a"
                                                    value="true"
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto form-check">
                                            <label htmlFor="l1-l1-a1-i1-a2" className="form-label text">Tu as
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i1-a2"
                                                    name="l1-l1-a1-i1-a"
                                                    value="false"
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">en classe?</p>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">Oui,</p>
                                        </div>

                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i1-b1" className="form-label text">je suis
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i1-b1"
                                                    name="l1-l1-a1-i1-b"
                                                    value="true"
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i1-b2" className="form-label text me-2">j'ai
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i1-b2"
                                                    name="l1-l1-a1-i1-b"
                                                    value="false"
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">en classe.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item activity-item" id="l1-l1-a1-i2">
                                    <div className="row">
                                        <div className="col-auto">
                                            <label htmlFor="l1-l1-a1-i2-a1" className="form-label text">Tu es
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i2-a1"
                                                    name="l1-l1-a1-i2-a"
                                                    value="es"
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i2-a2" className="form-label text">Tu as
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i2-a2"
                                                    name="l1-l1-a1-i2-a"
                                                    value="as"
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">petit?</p>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">Oui,</p>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i2-b1" className="form-label text">je suis
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i2-b1"
                                                    name="l1-l1-a1-i2-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i2-b2" className="form-label text me-2">j'ai
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i2-b2"
                                                    name="l1-l1-a1-i2-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">petit.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item activity-item" id="l1-l1-a1-i3">
                                    <div className="row">
                                        <div className="col-auto">
                                            <label htmlFor="l1-l1-a1-i3-a1" className="form-label text">Tu es
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i3-a1"
                                                    name="l1-l1-a1-i3-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i3-a2" className="form-label text">Tu as
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i3-a2"
                                                    name="l1-l1-a1-i3-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">les cheveux bruns?</p>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">Oui,</p>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i3-b1" className="form-label text">je suis
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i3-b1"
                                                    name="l1-l1-a1-i3-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i3-b2" className="form-label text me-2">j'ai
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i3-b2"
                                                    name="l1-l1-a1-i3-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">les cheveux bruns.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item activity-item" id="l1-l1-a1-i4">
                                    <div className="row">
                                        <div className="col-auto">
                                            <label htmlFor="l1-l1-a1-i4-a1" className="form-label text">Tu es
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i4-a1"
                                                    name="l1-l1-a1-i4-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i4-a2" className="form-label text">Tu as
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i4-a2"
                                                    name="l1-l1-a1-i4-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">blonde?</p>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">Oui,</p>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i4-b1" className="form-label text">je suis
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i4-b1"
                                                    name="l1-l1-a1-i4-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i4-b2" className="form-label text me-2">j'ai
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i4-b2"
                                                    name="l1-l1-a1-i4-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">blonde.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item activity-item"  id="l1-l1-a1-i5">
                                    <div className="row">
                                        <div className="col-auto">
                                            <label htmlFor="l1-l1-a1-i5-a1" className="form-label text">Tu es
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i5-a1"
                                                    name="l1-l1-a1-i5-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i5-a2" className="form-label text">Tu as
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i5-a2"
                                                    name="l1-l1-a1-i5-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">au courant?</p>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">Oui,</p>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i5-b1" className="form-label text">je suis
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i5-b1"
                                                    name="l1-l1-a1-i5-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i5-b2" className="form-label text me-2">j'ai
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i5-b2"
                                                    name="l1-l1-a1-i5-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">au courant.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item activity-item"  id="l1-l1-a1-i6">
                                    <div className="row">
                                        <div className="col-auto">
                                            <label htmlFor="l1-l1-a1-i6-a1" className="form-label text">Tu es
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i6-a1"
                                                    name="l1-l1-a1-i6-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i6-a2" className="form-label text">Tu as
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i6-a2"
                                                    name="l1-l1-a1-i6-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">tort?</p>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">Oui,</p>
                                        </div>
                                        <div className="col-auto chooseForm">
                                            <label htmlFor="l1-l1-a1-i6-b1" className="form-label text">je suis
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i6-b1"
                                                    name="l1-l1-a1-i6-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i6-b2" className="form-label text me-2">j'ai
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i6-b2"
                                                    name="l1-l1-a1-i6-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">tort.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item activity-item" id="l1-l1-a1-i7">
                                    <div className="row">
                                        <div className="col-auto">
                                            <label htmlFor="l1-l1-a1-i7-a1" className="form-label text">Tu es
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i7-a1"
                                                    name="l1-l1-a1-i7-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i7-a2" className="form-label text">Tu as
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i7-a2"
                                                    name="l1-l1-a1-i7-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">besoin d'un stylo?</p>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">Oui,</p>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i7-b1" className="form-label text">je suis
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i7-b1"
                                                    name="l1-l1-a1-i7-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i7-b21" className="form-label text me-2">j'ai
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i7-b21"
                                                    name="l1-l1-a1-i7-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}          
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">besoin d'un stylo.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item activity-item" id="l1-l1-a1-i8">
                                    <div className="row">
                                        <div className="col-auto">
                                            <label htmlFor="l1-l1-a1-i8-a1" className="form-label text">Tu es
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i8-a1"
                                                    name="l1-l1-a1-i8-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i8-a2" className="form-label text">Tu as
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i8-a2"
                                                    name="l1-l1-a1-i8-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">&agrave; l'heure?</p>
                                        </div>                                        <div className="col-auto">
                                            <p className="text activity-text">Oui,</p>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i8-b1" className="form-label text">je suis
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i8-b1"
                                                    name="l1-l1-a1-i8-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i8-b2" className="form-label text me-2">j'ai
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i8-b2"
                                                    name="l1-l1-a1-i8-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">&agrave; l'heure.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item activity-item" id="l1-l1-a1-i9">
                                    <div className="row">
                                        <div className="col-auto">
                                            <label htmlFor="l1-l1-a1-i9-a1" className="form-label text">Tu es
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i9-a1"
                                                    name="l1-l1-a1-i9-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i9-a2" className="form-label text">Tu as
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i9-a2"
                                                    name="l1-l1-a1-i9-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">envie de parler fran&ccedil;ais?</p>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">Oui,</p>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i9-b1" className="form-label text">je suis
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i9-b1"
                                                    name="l1-l1-a1-i9-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i9-b2" className="form-label text me-2">j'ai
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i9-b2"
                                                    name="l1-l1-a1-i9-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">envie de parler fran&ccedil;ais.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item activity-item" id="l1-l1-a1-i10">
                                    <div className="row">
                                        <div className="col-auto">
                                            <label htmlFor="l1-l1-a1-i10-a1" className="form-label text">Tu es
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i10-a1"
                                                    name="l1-l1-a1-i10-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i10-a2" className="form-label text">Tu as
                                            <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i10-a2"
                                                    name="l1-l1-a1-i10-a"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">en r&eacute;gime?</p>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">Oui,</p>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i10-b1" className="form-label text">je suis
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i10-b1"
                                                    name="l1-l1-a1-i10-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto chooseForm ">
                                            <label htmlFor="l1-l1-a1-i10-b2" className="form-label text me-2">j'ai
                                                <input 
                                                    type="radio" 
                                                    id="l1-l1-a1-i10-b2"
                                                    name="l1-l1-i10-b"
                                                    value=""
                                                    className="form-control"
                                                    // checked={true}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text activity-text">en r&eacute;gime.</p>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                            <button 
                                type="submit" 
                                className="btn btn-info">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default LevelL1A1