import { Link } from 'react-router-dom'

import Level1SideNav from './Level1SideNav'

const Level1Lesson2 =()=> {

    return(
        <>
            <main className="main" id="l1l5-main">
                {/* <h2 className="sub2">Level1Lesson2</h2> */}
                <h2 className="sub2 aboutSub text-center">La politesse</h2>
                <section className="section" id="l1l2-section">
                    <div className="container">
                        <div className="row l1-l2 mb-3 justify-content-between">
                            <Level1SideNav />
                            {/* <div className="col-md-1">
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
                            </div> */}
                            <div className="col-md-11">
                                <div className="row mb-3">
                                    <div className="col-md-5">
                                        <img src="../media/politesse.jpg" alt="clipart image of French people with their noses in the air" className="img-fluid" id="L1L2Image"/>
                                    </div>
                                    <div className="col-md-7">
                                        <p className="text lesson-text"> 
                                            Have you heard the stereotype that French people are  rude? Like all stereotypes, this perception is based partly on fact. It’s not really that they are rude, but  they are just not very outgoing. 
                                        </p>
                                        <p className="text lesson-text"> 
                                            Actually, courtesy and manners are extremely important  to most French people. They tend to be very formal with people they don’t know well. When you understand where French people are coming from, and  you are polite and courteous to them, they are actually very nice people
                                        </p>
                                    </div>
                                        <p className="text lesson-text mt-3">
                                            Here are some of the most important things for you to learn right away:  
                                        </p>
                                        <div className="row vocab-row mb-3">
                                            <ul className="list-group vocab-list m-md-2">
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Bonjour.</div>
                                                    <div className="col-md-6 english">Hello.</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Comment allez-vous?</div>
                                                    <div className="col-md-6 english">How are you? How do you do?</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Je vais bien, merci.</div>
                                                    <div className="col-md-6 english">I'm fine, thank you</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Et vous?</div>
                                                    <div className="col-md-6 english">And you?</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Moi aussi.</div>
                                                    <div className="col-md-6 english">Me too (also).</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Je m'appelle (Jean).</div>
                                                    <div className="col-md-6 english">My name is (Jean). I'm called (Jean).</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Comment vous vous appelez?</div>
                                                    <div className="col-md-6 english">What's your name? </div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Je suis enchanté de faire votre connaissance!</div>
                                                    <div className="col-md-6 english">I’m delighted to meet you!</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Comment s’appelle-t-il/elle? </div>
                                                    <div className="col-md-6 english">What’s his/her name? </div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Comment s’appellent-ils/elles?</div>
                                                    <div className="col-md-6 english">What are their names?</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Qui est-ce?</div>
                                                    <div className="col-md-6 english">Who is it? Who is this/that?</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">C’est…moi/lui/elle.</div>
                                                    <div className="col-md-6 english">It/this/that is … I, him, her</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Voici / Voilà</div>
                                                    <div className="col-md-6 english">This is, Here comes / That is, There goes</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Pardon. Excusez-moi.</div>
                                                    <div className="col-md-6 english">Excuse me. </div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">S’il vous plait</div>
                                                    <div className="col-md-6 english">Please.</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Merci</div>
                                                    <div className="col-md-6 english">Thank you.</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Je vous en prie.</div>
                                                    <div className="col-md-6 english">You're welcome.</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Au revoir</div>
                                                    <div className="col-md-6 english">Good-bye.</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Monsieur (M.)</div>
                                                    <div className="col-md-6 english">Mister (Mr.), sir</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Madame (Mme)</div>
                                                    <div className="col-md-6 english">Mrs., ma'am, madam</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Mademoiselle (Mlle)</div>
                                                    <div className="col-md-6 english">Miss</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Oui</div>
                                                    <div className="col-md-6 english">Yes</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Non</div>
                                                    <div className="col-md-6 english">No</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french">Asseyez-vous.</div>
                                                    <div className="col-md-6 english">Sit down.</div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french"></div>
                                                    <div className="col-md-6 english"></div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french"></div>
                                                    <div className="col-md-6 english"></div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french"></div>
                                                    <div className="col-md-6 english"></div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french"></div>
                                                    <div className="col-md-6 english"></div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french"></div>
                                                    <div className="col-md-6 english"></div>
                                                </li>
                                                <li className="list-item vocab-list-item d-flex">
                                                    <div className="col-md-6 french"></div>
                                                    <div className="col-md-6 english"></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="row image-row row-cols-3 mb-3">
                                            <img src="../media/expressions_de_politesse.jpg" alt="" className='img-fluid'/>
                                            <img src="../media/noublie_pas_de_dire.jpg" alt="" className='img-fluid'/>
                                            <img src="../media/formules_de_politesse.jpg" alt="" className='img-fluid'/>
                                        </div>
                                        <div className="row conv1-row mt-3 mb-3">
                                            {/* <div className=""> */}
                                                <img src="../media/jpv-conv1.jpg" alt="" className='img-fluid'/>
                                            {/* </div> */}
                                            <div className="vocab">
                                                <div className="col">
                                                    <ul className="vocab-list">
                                                        <li className="list-item vocab-list-item row">
                                                            <div className="col-md-3">
                                                                <p className="text bold">Familier</p>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <p className="text bold">Soutenu</p>
                                                            </div>
                                                            <div className="col-md-6"></div>
                                                        </li>
                                                        <li className="list-item vocab-list-item row">
                                                            <div className="col-md-6">
                                                                <p className="text bold">Saluer</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="text bold">Dire au revoir, prendre cong&eacute;</p>
                                                            </div>
                                                        </li>
                                                        <li className="list-item vocab-list-item row">
                                                            <div className="col-md-3">
                                                                <p className="text">Salut!</p>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <p className="text mb-0">Bonjour.  (06h-18h30)</p>
                                                                <p className="text mb-0">Bonsoir.  (18h30-21h00)</p>
                                                                <p className="text">Bonjour.  (21h+)</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="text mb-0">Au revoir.  Bonne journ&eacute;e!  &Agrave; ce soir!</p>
                                                                <p className="text mb-0">Bonne soir&eacute;e.  &Agrave; demain!</p>
                                                                <p className="text">Bonne nuit!  &Agrave; demain!</p>
                                                            </div>
                                                        </li>
                                                        <li className="list-item vocab-list-item row">
                                                            <p className="text list-text bold">Se pr&eacute;senter</p>
                                                            <div className="col-md-3">
                                                                <p className="text">Je m'appelle (Jean).</p>
                                                            </div>
                                                            <div className="col-md-3">
                                                                {/* <p className="text">Soutenu</p> */}
                                                            </div>
                                                            <div className="col-md-6"></div>
                                                        </li>
                                                        <li className="list-item vocab-list-item row">
                                                            <div className="col-md-6">
                                                                <p className="text">Comment tu t'appelles?</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="text">Comment vous vous appelez?</p>
                                                            </div>
                                                        </li>
                                                        <li className="list-item vocab-list-item row">
                                                            <div className="col-md-6">
                                                                <p className="text">Tu peux &eacute;peler, s'il te pla&icirc;t?</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="text">Vous pouvez &eacute;peler, s'il vous pla&icirc;t?</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
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

export default Level1Lesson2