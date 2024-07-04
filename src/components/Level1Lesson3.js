import { Link } from 'react-router-dom'

import Level1SideNav from './Level1SideNav'
import Level1L3A1 from './Level1L3A1'
import Level1L3Iframe from './Level1L3Iframe'
import Level1L3IFrame2 from './Level1L3IFrame2'

const Level1Lesson3 =()=> {

    return(
        <>
            <main className="main" id="l1l5-main">
                {/* <h2 className="sub2">Level1Lesson3</h2> */}
                <h2 className="sub2 aboutSub text-center">On se tutoie? Shall we use <span className="bold">tu?</span></h2>
                {/* <h2 className="sub2 text-capitalize"><Link to="/level1" >Niveau 1</Link></h2> */}
                <section className="section" id="l1-l3-section">
                    <div className="container">
                        <div className="row l1-l3 justify-content-between mb-3 lesson-row">
                            <Level1SideNav />
                            <div className="col-md-11">
                                <p className="text lesson-text">
                                    French is like many other languages in that there are different ways to talk to people based on their relationships.  Using these different <span className="bold">registers</span> is called <span className="bold">code-switching</span>.
                                </p>
                                <p className="text lesson-text">When French people don't know someone well, they use the <span className="bold">formal</span> forms of address that use <span className="bold">vous</span> /voo/ for <span className="bold">you</span>.  They continue to use <span className="bold">vous</span> with certain people to show respect.  Always use formal register with adult strangers and anyone in a position of authority.</p>
                                <p className="text lesson-text">  You'll  also always use <span className="bold">vous</span> whenever you speak to more than one person.  This is called <span className="bold">second person plural</span>.  The formal register is called <span className="bold">le registre soutenu</span> is French.</p>
                                <p className="text lesson-text">The <span className="bold">familiar</span> form is used among family members, close friends and children.  They use <span className="bold">vous</span> only when speaking to more than one person.  When speaking to only one person, French people use <span className="bold">tu</span> /tyu/ and its related forms.  There are even special words in French for using <span className="bold">tu</span> and <span className="bold">vous - tutoyer</span> and <span className="bold">vouvoyer</span>.  It's interesting to see how the English language is translated into French in TV shows and movies.  The closest equivalent is being on a first-name basis.  The concept doesn't translate well.</p>
                                <div className="row">
                                    <div className="col-md-3">                                        
                                        <img src="../media/tu_ou_vous.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8">
                                        <p className="text lesson-text">You'll want to start out using vous with any adult you meet.  Use courtesy titles whenever you speak.</p>
                                        <p className="text lesson-text">Young people tend to use <span className="bold">tu</span> right away.  Can you guess what you use with animals?  <span className="bold">Tu!</span>  So when you <span className="bold">tutoyer</span> a person you don't know, it's very insulting.</p>
                                    </div>
                                    <p className="text lesson-text">Sometimes this makes it hard to understand why French people use <span className="bold">tu</span> when they're praying -- until you remember that <span className="bold">tu</span> is like <span className="bold">thou</span> in the English Bible, and many people believe that God is the Father.  That makes Him the head of the family!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row l1-l3 justify-content-between mb-3 vocab-row">
                            <div className="col-md-2 white p-3">
                                <figure className="figure">
                                    <img src="../media/assieds-toi.png" alt="" className="img-fluid" />
                                    <figcaption className="fig-cap bold text-center">Assieds-toi!</figcaption>
                                </figure>
                                <img src="../media/pas_de_panique.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-9">
                                <h3 className="sub3">Here are some expressions that use the familiar address:</h3>
                                <ul className="list-group vocab-list m-md-2 mb-3">
                                    <li className="list-item vocab-list-item d-flex">
                                        <div className="col-md-6 french">Salut!</div>
                                        <div className="col-md-6 english">Hi! Bye!</div>
                                    </li>
                                    <li className="list-item vocab-list-item d-flex">
                                        <div className="col-md-6 french">Comment vas-tu?</div>
                                        <div className="col-md-6 english">How are you?</div>
                                    </li>
                                    <li className="list-item vocab-list-item d-flex">
                                        <div className="col-md-6 french">&Ccedil;a va?</div>
                                        <div className="col-md-6 english">How's it going?  How are things?</div>
                                    </li>
                                    <li className="list-item vocab-list-item d-flex">
                                        <div className="col-md-6 french">&Ccedil;a va (comme ci, comme &ccedil;a).</div>
                                        <div className="col-md-6 english">I'm / It's going okay (so-so).</div>
                                    </li>
                                    <li className="list-item vocab-list-item d-flex">
                                        <div className="col-md-6 french">&Ccedil;a va tr&egrave;s bien / mal.</div>
                                        <div className="col-md-6 english">I'm doing (very) well / badly.</div>
                                    </li>
                                    <li className="list-item vocab-list-item d-flex">
                                        <div className="col-md-6 french">Et toi?</div>
                                        <div className="col-md-6 english">And you?</div>
                                    </li>
                                    <li className="list-item vocab-list-item d-flex">
                                        <div className="col-md-6 french">Comment tu t'appelles?</div>
                                        <div className="col-md-6 english">What's your name? </div>
                                    </li>
                                    <li className="list-item vocab-list-item d-flex">
                                        <div className="col-md-6 french">S'il te pla&icirc;t.</div>
                                        <div className="col-md-6 english">Please.</div>
                                    </li>
                                    <li className="list-item vocab-list-item d-flex">
                                        <div className="col-md-6 french">De rien.</div>
                                        <div className="col-md-6 english">You're welcome.  (It's nothing.)</div>
                                    </li>
                                </ul>
                                <p className="text lesson-text">Did you see how <span className="bold">tu</span> sometimes changes to <span className="bold">toi</span> or <span className="bold">te</span> or just <span className="bold">t'?</span></p>
                                <p className="text lesson-text">Don't panic!  Soon it will come naturally to use the right one.</p>
                            </div>
                        </div>
                        <div className="row l1-l3 mb-3 activity-row">
                            <Level1L3A1 />
                        </div>
                        <div className="row l1-l3 mb-3 iframe-row" id="L1L3Iframe">
                            <Level1L3Iframe />
                        </div>
                        <div className="row l1-l3 mt-5 mb-3 lesson-row alphabet">
                            <div className="col-md-2">
                                <img src="../media/zydeco2.jpg" alt="" className="img-fluid alphabet-img" />
                            </div>
                            <div className="col-md-10">
                                <h3 className="sub3 aside-sub">Les Acadiens et les Cr&eacute;oles - Cajuns and Creoles</h3>
                                <p className="text aside-text">
                                    Most people have learned about the Louisiana Purchase that ceded formerly French territory to the young United States of America. But many people don't know the distinction between the two main francophone cultures of Louisiana.
                                </p>
                                <p className="text aside-text">Creole culture was centered in New Orleans, the cosmopolitan capital of La Nouvelle France.  While it may be commonly held that Creoles are black and Cajuns are white, this oversimplifies the rich and diverse m&eacute;lange of races and cultures that formed the Creole medley.  </p>
                                <p className="text aside-text">After the British took over the francophone regions of Canada, a tragic diaspora ensued that split the Acadian families who returned to France from their kin who migrated to Louisiana, where the appellation gradually softened into <span className="italic bold">Cajun</span> from the French <span className="italic bold">acadien</span>.</p>
                                <p className="text aside-text">The haunting epic <span className="bold underline">Evangeline, A Tale of Acadie</span>, published in 1847 by American poet Henry Wadsworth Longfellow tells the heartbreaking tale of two young lovers, separated on their wedding day and only reunited when Evangeline meets Gabriel on his deathbed.</p>
                                <p className="text aside-text">While there has always been more than a bit of rivalry between the francophone groups in Louisiana, today the French heritage is celebrated.  No longer are children forbidden to speak only English at school, and there are efforts to ensure that the francophone cultures remain vibrant and attractive to the younger generations.</p>
                                <p className="text aside-text">Among the unifying qualities of the francophone cultures in Louisiana is the unique musical genre of <span className="bold">zydeco</span>.  According to <a href="">Explore Louisiana</a>,</p>
                                <aside className="aside p-3"> "Early zydeco was a blend of Louisiana French accordion music and Afro-Caribbean beats. It sat at the crossroads of Creole, Cajun, gospel and the blues, yet has since evolved to include influences from several other genres. Instrumentation almost always includes an accordion and a frottoir ( washboard). Guitar and drums add danceable rhythm and syncopation. The word Zydeco gets its name from a colloquial Creole French expression “Les haricots ne sont pas salés” meaning “the snap beans aren’t salty,” or, in other words, “the times are hard.” Like the blues, early zydeco offered rural, economically marginalized individuals a way to express and to escape the hardships of life."</aside>
                                <p className="text aside-text">While many children learn Cajun songs staying up late for a <span className="bold">fais do-do</span>, a dance party named for French babytalk meaning "go sleep," many will also learn their A, B, C's and numbers in French using this catchy version of a familiar tune.  A phonetic guide to the pronunciation of the letters is there to help you learn the song.  The actual names of the letters in French are spelled very differently.</p>
                            </div>

                            <h3 className="sub3 lesson-sub text-uppercase text-center" id="alphabetSub">                A, B, C et 1, 2, 3 - Michel Doucet et BeauSoleil</h3>
                            <p className="text caption-text">Click the arrow to hear the song.  Scroll the document to read the lyrics.</p>
                            <audio controls>
                                <source src="../media/alphabet.mp3" type="audio/mp3" />
                                <source src="viper.ogg" type="audio/ogg" />
                                <p>
                                    Your browser doesn't support this audio file. Here is a
                                    <a href="viper.mp3">link to the audio</a> instead.
                                </p>
                            </audio>
                            <object type="application/pdf" data="../media/alphabet.pdf" width="250" height="300" title="The lyrics to the French alphabet song in French with a verse for the numbers 1 to 20"></object>
                        </div>
                        <div className="row l1-l3 mt-5 mb-3 justify-content-between lesson-row numbers">
                            <div className="col-md-3">
                                <img src="../media/euro_notes_coins.jpg" alt="stock image of euro notes and coins" className="img-fluid" />
                            </div>
                            <div className="col-md-7">
                                <img src="../media/nombres_durgence.jpg" alt="image of emergency services numbers in French" className="img-fluid"/>
                            </div>
                            <h3 className="sub3 numbers-sub text-center">Les nombres</h3>
                            <p className="text lesson-text">You can't go very far in a conversation before you need to use numbers.  Whether you're counting things, buying them, using the phone, telling time or using dates, numbers are essential.</p>
                            <p className="text lesson-text">French numbers are a bit tricky.  From 0 to 20, you have to learn each word.  Then you use a pattern of tens until you get to 69, when a different pattern starts. The word for seventy means sixty-ten and eighty is four-twenties.</p>
                            <p className="text lesson-text"></p>
                        </div>
                        <div className="row l1-l3 mb-3 iframe-row" id="L1L3Iframe">
                            <Level1L3IFrame2 />
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Level1Lesson3