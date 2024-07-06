import { Link } from 'react-router-dom'

import Level1SideNav from './Level1SideNav'
import Level1Lesson1Activity1 from "./Level1L1A1"
import Level1L1IFrame from './Level1L1Iframe'

const Level1Lesson1 =()=> {
    return(
        <>
            <main className="main" id="l1l1-main">
                <h2 className="sub2 aboutSub text-center">Expressions de la classe</h2>
                {/* <h2 className="sub2 text-capitalize"><Link to="/level1" >Niveau 1</Link></h2> */}
                {/* <nav className="side-nav level1-nav">
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
                </nav> */}
                <section className="l1-section">
                    <div className="container">
                        <div className="row l1-a1 mb-3">
                            <Level1SideNav />
                            <div className="col-md-11">
                                <h2 className="sub2 l1-a1sub">Activit&eacute; 1  Communiquer en classe</h2>
                                <h3 className="sub3 l1-a1sub3">
                                    LanguageGuide.org is a great resource for learning languages.  Go to this link to practice learning school vocabulary.  Hover over each image to hear the pronunciation.  Write down the expressions and translation as you practice saying each one.
                                </h3>
                                <div className="row l1-l1 mb-3 lesson-row">
                                    <Level1L1IFrame />
                                </div>
                                <div className="row l1-l1 mb-3 lesson-row">
                                    <h4 className="sub3 mt-3">Google Translate is a useful tool for practicing pronunciation.  You have to be careful with the translations, but the app is constantly improving.   <a href="https://translate.google.com/">https://translate.google.com/</a></h4>
                                    <h3 className="sub3 l1-a2sub3">Here are some expressions to help you communicate in class. Write the translations for each numbered expression. Practice the pronunciation of each phrase using Google Translate.</h3>
                                {/* </div>
                                <div className="row"> */}
                                    <div className="col-md-6">
                                        <img src="../media/agir1.jpg" alt="miniposter of classroom expressions" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6">
                                        <img src="../media/agir2.jpg" alt="miniposter of classroom expressions"  className="img-fluid" />
                                    </div>
                                    <h3 className="sub3 l1-a2sub3 mt-3">Here are some more expressions to help you communicate in class. Number them and write their translations. Be sure to pronounce each one several times. Now you're ready to begin learning French! </h3>
                                    <div className="col-md-8">
                                        <img src="../media/parler_miniposter.jpg" alt="miniposter of classroom expressions"  className="img-fluid" />
                                    </div>
                                </div>
                                <div className="row l1-a2 mb-3 vocab-row">
                                    <h3 className="sub3">Exprime-toi! Express yourself with these handy phrases.</h3>
                                    <h3 className="sub3">Write their translations and practice their pronunciation.</h3>
                                    <div className="col-md-6">
                                        <div className="card h-100">                        
                                            <h4 className="sub4 card-title">Je suis... Tu es...</h4>
                                            <div className="card-body">
                                                <img src="../media/expressions6.jpg" alt="miniposter of expressions using &ecirc;tre" className="img-fluid"/>
                                                <div className="card-footer mt-2">
                                                    <h4 className="sub4">les adjectifs et les pr&eacute;positions</h4>
                                                    <p className="text">Je suis grand.</p>
                                                    <p className="text">Je suis blonde.</p>
                                                    <p className="text">Je suis &agrave; l'&eacute;cole.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card h-100">                                
                                            <h4 className="sub4 card-title">J'ai... Tu as...</h4>
                                            <div className="card-body">
                                                <img src="../media/expressions_avoir.jpg" alt="miniposter of expressions using avoir" className="img-fluid d-block mx-auto" id="avoirex"/>
                                                <div className="card-footer mt-2">
                                                    <h4 className="sub4">les noms</h4>
                                                    <p className="text">J'ai les cheveux courts.</p>
                                                    <p className="text">J'ai les yeux bruns.</p>
                                                    <p className="text">J'ai un classeur et du papier.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row l1-a2 mb-3 activity-row">
                                        <Level1Lesson1Activity1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                            

                    </div>
                </section>


            </main>

        </>
    )
}

export default Level1Lesson1