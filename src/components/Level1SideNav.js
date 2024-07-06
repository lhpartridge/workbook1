import { Link } from 'react-router-dom'

const Level1SideNav =()=> {

    return(
        <>
            <div className="col-md-1 side-nav-col">
                <h3 className="side-nav-sub text-capitalize"><Link to="/level1"className="side-nav-sub" >Niveau 1</Link></h3>
                <nav className="side-nav level1-nav ms-0">
                    <ul className="nav justify-content-start flex-column ms-0">
                        <li className="nav-item ms-0  l1">
                            <Link 
                                to="/level1lesson1"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 1</Link>
                        </li>
                        <li className="nav-item ms-0  l2">
                            <Link 
                                to="/level1lesson2"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 2</Link>
                        </li>
                        <li className="nav-item ms-0  l3">
                            <Link 
                                to="/level1lesson3"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 3</Link>
                        </li>
                        <li className="nav-item ms-0  l4">
                            <Link 
                                to="/level1lesson4"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 4</Link>
                        </li>
                        <li className="nav-item ms-0  l5">
                            <Link 
                                to="/level1lesson5"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 5</Link>
                        </li>
                        <li className="nav-item ms-0  l6">
                            <Link 
                                to="/level1lesson6"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 6</Link>
                        </li>
                        <li className="nav-item ms-0  l7">
                            <Link 
                                to="/level1lesson7"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 7</Link>
                        </li>
                        <li className="nav-item ms-0  l8">
                            <Link 
                                to="/level1lesson8"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 8</Link>
                        </li>
                        <li className="nav-item ms-0  l9">
                            <Link 
                                to="/level1lesson9"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 9</Link>
                        </li>
                        <li className="nav-item ms-0  l10">
                            <Link 
                                to="/level1lesson10"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Le&ccedil;on 10</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Level1SideNav