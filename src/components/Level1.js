import { Routes, Route, Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Level1 =()=> {
    return(
        <>  
            <main className="main" id="lesson1main">
                <h2 className="sub2 text-capitalize"><Link to="/level1" >Le&ccedil;on 1</Link></h2>
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
                <section className="l1-section">
                    <div className="container">
                        <div className="row l1-intro">
                            <h2 className="sub3 l1sub text-center mb-3">Le&ccedil;on 1 Are you hungry?</h2>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="text">
                                        Learning a foreign language is a little bit like eating an elephant. You have to do it one bite at a time, and you have to start somewhere! 
                                    </p>
                                    <p className="text">
                                        In this course, you’ll learn how to put expressions together quickly so that you can start expressing  yourself right away. 
                                    </p>
                                    <p className="text">
                                    Sometimes it can be frustrating when you don’t  understand what people are saying to you when  they speak French. Always remember that just as  you have learned English, you can learn to  understand and speak French. You can do this!  
                                </p>
                                <p className="text">
                                    Your teacher understands how you feel and knows lots of ways to help you learn French. You  have to make the decision to try to learn and then do the activities that will ensure that you  make progress. Your teacher has written this workbook so that you can know exactly what  you need to begin your study of French.
                                </p>
                                </div>
                                <div className="col-md-4">
                                    <img src="../media/elephant.png" alt="elephant" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col">
                                <p className="text">
                                    Learning a language takes a long time and a fair amount of effort. The experts say that  mastery of French begins after several hundreds of hours. The biggest difference that you  can make when you are learning is the amount of time that you dedicate to the process.  When you have only 140 hours for each year of class time, you can really make a difference  when you put in more time outside of class studying and practicing with real life media.
                                </p>
                                <p className="text">
                                    Just as a fine meal is best enjoyed with a sharp appetite, you will enjoy your journey to being  bilingual with a healthy appetite for learning.    
                                </p>
                                <p className="text">
                                    As we get started, I wish you Bon Appétit and Bon Voyage!  
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="../media/bon_appetit2.jpg" alt="" className='img-fluid'/>
                                </div>
                                <div className="col-md-4">
                                    <img src="../media/paris1.jpg" alt="" className='img-fluid mt-3'/>
                                </div>
                                <div className="col-md-4">
                                    <img src="../media/bon_voyage.jpg" alt="" className='img-fluid'/>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Level1