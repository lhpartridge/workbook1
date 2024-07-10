import { Link } from 'react-router-dom'

const MusicSideNav =()=> {

    return(
        <>
            <div className="col-md-3 side-nav-col">
                <h3 className="side-nav-sub"><Link to="/music" className={"music-link side-nav-sub"}>Les activit&eacute;s de musique</Link></h3>
                <nav className="side-nav music-side-nav level1-nav ms-0">
                    <ul className="nav justify-content-start flex-column ms-0">
                        <li className="nav-item ms-0 music-link">
                            <a href="#musicA1" className="music-link">Que veut-il dire &laquo;&ecirc;tre chez soi&raquo;?</a>
                            {/* <Link 
                                to="musicA1"
                                style={{textDecoration: 'none'}}
                                className={"music-link"}>Que veut-il dire &laquo;&ecirc;tre chez soi&raquo;?</Link> */}
                        </li>
                        {/* <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music2"
                                style={{textDecoration: 'none'}}
                                className={"music-link"}>Ma&icirc;tre Gims et Vianney - La m&ecirc;me</Link>
                        </li> */}
                        {/* <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music3"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music4"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music5"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music6"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music7"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music8"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0  music-link">
                            <Link 
                                to="/music9"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music10"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li> */}
                    </ul>
                </nav>
                <h3 className="side-nav-sub mt-md-3"><Link to="/music"className="side-nav-sub music-link" >Les clips</Link></h3>
                <nav className="side-nav music-side-nav level1-nav ms-0">
                    <ul className="nav justify-content-start flex-column ms-0">
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music1"
                                className={"music-link"}
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Black M - Je suis chez moi</Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music2"
                                className={"music-link"}
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}>Ma&icirc;tre Gims et Vianney - La m&ecirc;me</Link>
                        </li>
                        {/* <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music3"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music4"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music5"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music6"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music7"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music8"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0  music-link">
                            <Link 
                                to="/music9"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li>
                        <li className="nav-item ms-0 music-link">
                            <Link 
                                to="/music10"
                                style={{textDecoration: 'none', textTransform: 'capitalize'}}></Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MusicSideNav