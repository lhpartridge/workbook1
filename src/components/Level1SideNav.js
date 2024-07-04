import { Link } from 'react-router-dom'

const Level1SideNav =()=> {

    return(
        <>
            <div className="col-md-1 side-nav-col">
                <h3 className="side-nav-sub text-capitalize"><Link to="/level1"className="side-nav-sub" >Niveau 1</Link></h3>
                <nav className="side-nav level1-nav">
                    <ul className="nav justify-content-start flex-column">
                        <li className="nav-item me-2">
                            <Link 
                                to="/level1lesson1"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 1</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link 
                                to="/level1lesson2"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 2</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link 
                                to="/level1lesson3"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 3</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link 
                                to="/level1lesson4"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 4</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link 
                                to="/level1lesson5"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 5</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Level1SideNav