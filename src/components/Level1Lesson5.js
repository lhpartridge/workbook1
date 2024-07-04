import { Link } from 'react-router-dom'

const Level1Lesson5 =()=> {

    return(
        <>
            <main className="main" id="l1l5-main">
                <h2 className="sub2">Level1Lesson5</h2>
                <h2 className="sub2 aboutSub text-center text-capitalize">niveau 1</h2>
                                <h2 className="sub2 text-capitalize"><Link to="/level1" >Niveau 1</Link></h2>
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
            </main>

        </>
    )
}

export default Level1Lesson5