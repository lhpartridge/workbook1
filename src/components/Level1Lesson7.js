import Level1SideNav from './Level1SideNav'


const Level1Lesson7 =()=> {
    return(
        <>
            <main className="main" id="l1-l6-main">
                <h2 className="sub2 aboutSub text-center text-capitalize">Le temps qui passe</h2>
                {/* <h2 className="sub2 text-capitalize"><Link to="/level1" >Niveau 1</Link></h2> */}
                <section className="section l1-l6">
                    <div className="container">
                        <div className="row l1-l6">
                            <Level1SideNav />
                            <div className="col-md-11">

                                
                                <div className="row l1-l6 mb-3 lesson-row time justify-content-between">
                                    <h3 className="sub3">L'heure, c'est l'heure!</h3>
                                    <div className="col-md-4">
                                        <img src="../media/departs.jpg" alt="airport departures sing" className="img img-fluid"/>
                                    </div>
                                    <div className="col-md-8">
                                        <p className="text lesson-text">This old saying makes a point about business etiquette and common courtesy. You’ll want to be able to ask, understand, and tell time, as well as read a variety of schedules. Do you see the times on the departure sign? You might call it military time, but in France, the 24 schedules. It’s easy when you get used to it!</p>
                                        <p className="text lesson-text">When you ask the time, you'll need to be able to understand the answer, no matter how it is phrased.  Sometimes you'll hear the time given as if it is on a digital clock.  Many people still tell the time using the minutes before or after the hour, as on an analog clock.  Learn both ways so that you'll get it either way.</p>
                                    </div>
                                    <div className="">
                                        <h4 className="sub4">Telling time in French is very easy - you can learn how to do it before noon!</h4>
                                        <h5 className="sub5 bold">Quelle heure est-il?</h5>
                                        <p className="text lesson-text">To say the time on the hour, say <span className="bold">"Il est..."</span> and then the number of the hour in French (e.g., <span className="bold">deux</span>), followed by the word <span className="bold">“heure(s)”.  (It is [#] o’clock.)</span>   The word <span className="bold">heure</span> follows the rules just like other French nouns.  Because the word <span className="bold">heure</span> is feminine, you'll want to use <span className="bold">une</span>, and you'll add the <span className="bold">-s</span>  whenever it is plural.  Remember that the final <span className="bold">-s</span> is silent, but makes a linking <span className="bold">/z/</span> sound when the hour begins with a vowel sound.</p>
                                        <h4 className="sub4">Parts of the day, Time on the hour</h4>
                                        <h5 className="sub5 bold">Il est...</h5>
                                        <div className="row" id="hours">
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">une heure</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">deux heures</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">trois heures</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">quatre heures</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">cinq heures</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">six heures</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">sept heures</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">huit heures</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">neuf heures</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">dix heures</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">onze heures</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">douze heures</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">noon</div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">midi</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            <div className="col-md-3 p-3">midnight</div>
                                            <div className="col-md-3 p-3">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <p className="text activity-text text-center">minuit</p>
                                                <audio controls>
                                                    <source src="../media/sample.mp3" type="audio/mp3" />
                                                    <source src="viper.ogg" type="audio/ogg" />
                                                    <p>
                                                        Your browser doesn't support this audio file. Here is a
                                                        <a href="viper.mp3">link to the audio</a> instead.
                                                    </p>
                                                </audio>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className=" panel">

                                                <h5 className="sub5 bold">Liaison and elision</h5>
                                                <p className="text activity-text">The French language is known for how it flows the words together.  <span className="bold">Liason</span> and <span className="bold">elision</span> are like two sides of the same coin.  Liasion links two words together by adding the sound of the silent consonant that ends the first word with the following vowel sound.  Elision drops a trailing vowel sound, usually <span className="bold">-e</span>, before the following vowel sound.  </p>
                                                <p className="text activity-text">It can be difficult at first to hear the individual words in long French utterances, so be sure to get lots of practice.  Try watching television shows and movies to get used to how French sounds in conversations.</p>
                                </div>
                                <div className="row l1-l6 mb-3 lesson-row activity"><h5 className="sub4">Level1L7A1 Listening time on the hour</h5>
                                    {/* <Level1L7A1 />                             */}
                                </div>
                                <div className="row l1-l6 mb-3 lesson-row time">
                                    <h4 className="sub3">Parts of the hour</h4>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <p className="text lesson-text">To say a quarter past the hour, say <span className="bold">"et quart."</span></p>  
                                            <div className="col-md-6">
                                                <p className="text activity-text mb-0">Il est 9 heures et quart.</p>
                                                <p className="text activity-text mb-0">(9:15)</p>
                                                <p className="text activity-text mb-0">It's (a) quarter past/after nine.</p>
                                            </div>
                                            <div className="col-md-6">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <audio controls>
                                                        <source src="../media/sample.mp3" type="audio/mp3" />
                                                        <source src="viper.ogg" type="audio/ogg" />
                                                        <p>
                                                            Your browser doesn't support this audio file. Here is a
                                                            <a href="viper.mp3">link to the audio</a> instead.
                                                        </p>
                                                    </audio>
                                            </div>
                                        </div>
                                        <p className="text lesson-text">The rest of the time, leave out <span className="bold">et</span> and just say the word for the number of minutes after the hour.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                        <p className="text lesson-text">To say half-past the hour, say <span className="bold">"et demie."</span></p> 
                                            <div className="col-md-6">
                                                <p className="text activity-text mb-0">Il est une heure et demie.</p>
                                                <p className="text activity-text mb-0">(1:30)</p>
                                                <p className="text activity-text mb-0">It’s half past one.</p>
                                            </div>
                                            <div className="col-md-6">
                                                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                                <audio controls>
                                                        <source src="../media/sample.mp3" type="audio/mp3" />
                                                        <source src="viper.ogg" type="audio/ogg" />
                                                        <p>
                                                            Your browser doesn't support this audio file. Here is a
                                                            <a href="viper.mp3">link to the audio</a> instead.
                                                        </p>
                                                    </audio>
                                            </div>
                                        </div>
                                        <p className="text lesson-text">The rest of the time, leave out <span className="bold">et</span> and just say the word for the number of minutes after the hour.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="text activity-text">To say half-past the hour, say <span className="bold">"et demie."</span></p> 
                                        <p className="text activity-text">Il est une heure et demie. It’s half past one. (1:30)</p>
                                        <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid d-block mx-auto" />
                                        <p className="text lesson-text">Be sure to note how gender affects the words <span className="bold">midi</span> and <span className="bold">minuit</span>.</p>
                                        <p className="text lesson-text">Because <span className="bold">minuit</span> is feminine, like <span className="bold">heure</span>  and <span className="bold">nuit</span>, you add an <span className="bold">-e</span> with <span className="bold">demie</span>, but not with <span className="bold">midi</span> because it is masculine.  Crazy!</p>
                                        <p className="text activity-text">Il est minuit et demie.  (but)  Il est midi et demi.</p>
                                    </div>
                                    <p className="text lesson-text"></p>
                                </div>
                                <div className="row l1-l6 mb-3 vocab-row time">
                                    <h4 className="sub4">languageguide.org </h4>
                                    <h5 className="sub4">Level1L7Iframe1</h5>
                                </div>
                                <div className="row l1-l6 mb-3 activity-row">
                                    <h5 className="sub4">Level1L7A2 listening minutes</h5>
                                </div>

                                <div className="row l1-l6 mb-3 lesson-row time">
                                    <h4 className="sub3">24h clock and schedules</h4>
                                </div>

                                <div className="row l1-l6 mb-3 lesson-row activity"><h5 className="sub4">Level1L7A3 schedules 1</h5></div>
                                {/* <div className="row l1-l6 mb-3 lesson-row schedules">horaires</div> */}
                                <div className="row l1-l6 mb-3 lesson-row activity"><h5 className="sub4">Level1L7A4 schedules 2</h5></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

    {/* <div className="row">
                                                    <div className="col-md-4">
                                                        <img src="../media/liaison1.jpg" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <img src="../media/liaison1.jpg" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <img src="../media/liaison1.jpg" alt="" className="img-fluid" />
                                                    </div>
                                                </div> */}
}

export default Level1Lesson7