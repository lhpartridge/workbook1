import { Link } from 'react-router-dom'

const Header =()=> {

    return(
        <>
            <header className="header" id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="heading text-capitalize">cahier</h1>
                            {/* <img src="../media/tourEiffel.jpg" alt="" className="logo img-fluid"/> */}
                        </div>
                        <div className="col-md-4">
                            <nav className="top-nav">
                                <ul className="nav justify-content-center justify-content-md-end">
                                    <li className="nav-item me-2">
                                        <Link 
                                            to="/"
                                            style={{textDecoration: 'none', textTransform: 'capitalize'}}>Accueil</Link>
                                    </li>
                                    <li className="nav-item me-2">
                                        <Link 
                                            to="/level1"
                                            style={{textDecoration: 'none', textTransform: 'capitalize'}}>niveau 1</Link>
                                    </li>
                                    <li className="nav-item me-2">
                                        <Link 
                                            to="/level2"
                                            style={{textDecoration: 'none', textTransform: 'capitalize'}}>niveau 2</Link>
                                    </li>
                                    <li className="nav-item me-2">
                                        <Link 
                                            to="/level3"
                                            style={{textDecoration: 'none', textTransform: 'capitalize'}}>niveau 3</Link>
                                    </li>
                                    <li className="nav-item me-2">
                                        <Link 
                                            to="/resources"
                                            style={{textDecoration: 'none', textTransform: 'capitalize'}}>ressources</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header