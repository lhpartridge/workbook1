import Level1SideNav from './Level1SideNav'
import Level1L6A1 from './Level1L6A1'
import Level1L6A2 from './Level1L6A2'
import Level1L6A3 from './Level1L6A3'
import Level1L6Iframe from './Level1L6Iframe'
import Level1L6Iframe2 from './Level1L6Iframe2'
import Level1L6Iframe3 from './Level1L6Iframe3'


const Level1Lesson6 =()=> {
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
                                <div className="row l1-l6 mb-3 lesson-row intro">
                                    <h3 className="sub3">On y va!  We're going!</h3>
                                    <div className="col-md-9">                                        
                                        <p className="text lesson-text">There are places to go and people to see!</p>
                                        <p className="text lesson-text">You’ll want to be able to make and keep dates and appointments. From reading entertainment and transportation schedules to making a lunch date with a friend, you’ll want to know when to go!</p>
                                        <h4 className="sub4">Quelle heure est-il?  What time is it?</h4>
                                        <p className="text lesson-text">You’ll want to be on time for doctor’s appointments and business meetings, even though socially French people tend to be much more relaxed. Learn how to tell time. Then, see how some useful schedules look.</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="../media/gare_st_lazare_sculpture.jpg" alt="photo of the clock sculpture outside the Gare St Lazare train station in Paris" className="img-fluid" />
                                    </div>
                                    <div className="col-md-3">   
                                        <img src="../media/anniversaire.jpg" alt="" className="img-fluid" />                                 
                                    </div>
                                    <div className="col-md-9">
                                        <h4 className="sub4">Faites la f&ecirc;te!  Party!</h4>
                                        <p className="text lesson-text">French people like to celebrate the small things of life, and they do make a tiny fuss over birthdays. Here are some things you’ll want to be able to say:</p>
                                        <p className="text activity-text mb-0 ps-5">C’est quand, ton anniversaire?</p>
                                        <p className="text activity-text mb-0 ps-5">Mon anniversaire est le 19 mai.</p>
                                        <p className="text activity-text mb-0 ps-5">Joyeux anniversaire!</p>
                                    </div>
                                        <div className="col-12 mt-5 mb-5">
                                            <p className="decorative-text1 text-center">Bonne ann&eacute;e!  Bonne f&ecirc;te!  Joyeux anniversaire!  Joyeux No&euml;l!</p>
                                        </div>
                                        <div className="col-md-8">
                                            <p className="text lesson-text">French people love to celebrate. Just as in the United States, people celebrate national and religious holidays. But in addition to celebrating their birthdays, most French people also celebrate
                                            their saint’s day. That’s the day that the Christian calendar of saints celebrates the feast day of the saint who bears their name.</p>
                                            <p className="text lesson-text">To wish someone a happy saint’s day, say <span className="bold">Bonne fête!</span></p>
                                            <p className="text lesson-text">For Happy Birthday, the expression is <span className="bold">Joyeux anniversaire!</span></p>
                                            <p className="text lesson-text">During the winter holiday season, you’ll tell people <span className="bold">Joyeux Noël</span> at Christmas and <span className="bold">Bonne année</span> on New Year’s Day!</p>
                                        </div>
                                        <div className="col-md-4">
                                            <img src="../media/joyeux_anniversaire1.jpg" alt="" className="img-fluid" id="joyeuxAnniversaire"/>
                                        </div>
                                        <p className="text lesson-text">Remember, though, that French people don’t celebrate Thanksgiving or the Fourth of July. Those are American holidays. Instead, on July 14 French people celebrate the birth of their country and the
                                        beginning of the French Revolution. We call it Bastille Day after the prison in Paris that the citizens attacked as a symbol of the oppressive Bourbon kings. That day, there are parades, followed by fireworks and dancing in the streets until dawn! Vive la France!  Vive la R&eacute;volution!</p>
                                </div>
                                <div className="row l1-l6 mb-3 lesson-row calendar">
                                    <h3 className="sub3 mb-3">Le calendrier</h3>
                                    <div className="col-md-6">
                                        <img src="../media/saisons.jpg" alt="image of the months and seasons" className="img-fluid" />
                                    </div>
                                    <div className="col-md-4 offset-2 pt-5">
                                        <p className="text decorative-text2 bold">les jours de la semaine</p>
                                        <p className="text decorative-text2">lundi</p>
                                        <p className="text decorative-text2">mardi</p>
                                        <p className="text decorative-text2">mercredi</p>
                                        <p className="text decorative-text2">jeudi</p>
                                        <p className="text decorative-text2">vendredi</p>
                                        <p className="text decorative-text2">samedi</p>
                                        <p className="text decorative-text2">dimanche</p>
                                    </div>
                                    <p className="text lesson-text mt-3">Did you notice that the names of days and months aren’t capitalized in French?</p>
                                    <div className="col-md-7">
                                        <p className="text lesson-text">Here are some useful expressions for talking about days:</p>
                                        <table className="table ms-5">
                                            <tbody>
                                                <tr>
                                                    <td>Aujourd’hui, c’est...</td>
                                                    <td>Today is ...</td>
                                                </tr>
                                                <tr>
                                                    <td>Demain, c’est ...</td>
                                                    <td>Tomorrow is ...</td>
                                                </tr>
                                                <tr>
                                                    <td>Hier, c’était...</td>
                                                    <td>Yesterday was ...</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className="text lesson-text">To say your birthday, be sure to put the day before the month:  </p>
                                        <p className='text activity-text ms-3'>Mon anniversaire est le <span className="underline italic">jour</span> <span className="underline italic">mois</span>.  (Remember that the 1st = premier!)</p><p className='text lesson-text'>Write down your birthday in words and be able to say it out loud.</p>
                                    </div>
                                    <div className="col-md-4 offset-1">
                                        <img src="../media/joyeux_anniversaire3.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <p className="text lesson-text">To ask someone else’s birthday, use:</p>
                                    <p className="text  activity-text ms-3 mt-0 mb-0">Ton anniversaire, c’est quand? Be sure to change ton to votre for formal.</p>
                                    <p className="text activity-text ms-3 mt-0 mb-0">L’anniversaire de Paul, c’est quand? de is d’ before a, e, i, o, u, y, & h (elision)</p>
                                    <p className="text  activity-text ms-3 mt-0">L’anniversaire d’Amélie est en juin.</p>
                                    <p className="text lesson-text">Saying your date of birth is just like your birthday, but you have to add the year:</p>
                                    <p className="text lesson-text">Ma date de naissance est le <span className="underline italic">jour</span> <span className="underline italic">mois</span>.   , mille neuf cent /deux mille (<span className='underline'>ans</span>).</p>
                                    <p className="text lesson-text">To say your age, say <span className="bold">J’ai (<span className='underline'>#</span>) ans.</span>  That’s like saying <span className="bold">I have _____ years</span>, but that’s just how they say it in France. </p>
                                    <p className="text lesson-text">To ask someone else’s age is a bit more complicated. It’s <span className="bold">Tu as quel âge?</span> for familiar and <span className="bold">Vous avez quel âge?</span> for formal. </p>
                                    <p className="text lesson-text">Write down the expressions for age and practice saying your age out loud.  Give your date of birth and try telling the birthdays of your friends and family.</p>
                                </div>
                                <div className="row l1-l6 mb-3 vocab-row calendar">
                                    <h3 className="sub3 mb-3">Le jour et la date</h3>
                                    <div className="col-md-6">
                                        <table className="table">
                                            <th scope='row' className="text-center">Les jours de la semaine</th>
                                            <tbody>
                                                <tr>
                                                    <td>lundi</td>
                                                    <td>Monday</td>
                                                </tr>
                                                <tr>
                                                    <td>mardi</td>
                                                    <td>Tuesday</td>
                                                </tr>
                                                <tr>
                                                    <td>mercredi</td>
                                                    <td>Wednesday</td>
                                                </tr>
                                                <tr>
                                                    <td>jeudi</td>
                                                    <td>Thursday</td>
                                                </tr>
                                                <tr>
                                                    <td>vendredi</td>
                                                    <td>Friday</td>
                                                </tr>
                                                <tr>
                                                    <td>samedi</td>
                                                    <td>Saturday</td>
                                                </tr>
                                                <tr>
                                                    <td>dimanche</td>
                                                    <td>Sunday</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="text lesson-text">In the following phrases, replace <span className="bold">lundi</span> with any  other day.</p>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>ce lundi</td>
                                                    <td>this Monday</td>
                                                </tr>
                                                <tr>
                                                    <td>lundi dernier</td>
                                                    <td>last Monday</td>
                                                </tr>
                                                <tr>
                                                    <td>lundi prochain</td>
                                                    <td>next Monday</td>
                                                </tr>
                                                <tr>
                                                    <td>le lundi</td>
                                                    <td>on Mondays</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row l1-l6 mb-3 vocab-row calendar">
                                    <div className="col-md-6">
                                        <table className="table">
                                            <th scope='row' className="text-center">Les jours de la semaine</th>
                                            <tbody>
                                                <tr>
                                                    <td>janvier</td>
                                                    <td>January</td>
                                                </tr>
                                                <tr>
                                                    <td>f&eacute;vrier</td>
                                                    <td>February</td>
                                                </tr>
                                                <tr>
                                                    <td>mars</td>
                                                    <td>March</td>
                                                </tr>
                                                <tr>
                                                    <td>avril</td>
                                                    <td>April</td>
                                                </tr>
                                                <tr>
                                                    <td>mai</td>
                                                    <td>May</td>
                                                </tr>
                                                <tr>
                                                    <td>juin</td>
                                                    <td>June</td>
                                                </tr>
                                                <tr>
                                                    <td>juillet</td>
                                                    <td>July</td>
                                                </tr>
                                                <tr>
                                                    <td>ao&ucirc;t</td>
                                                    <td>August</td>
                                                </tr>
                                                <tr>
                                                    <td>septembre</td>
                                                    <td>September</td>
                                                </tr>
                                                <tr>
                                                    <td>octobre</td>
                                                    <td>October</td>
                                                </tr>
                                                <tr>
                                                    <td>novembre</td>
                                                    <td>November</td>
                                                </tr>
                                                <tr>
                                                    <td>d&eacute;cembre</td>
                                                    <td>December</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className="text lesson-text">In the following phrases, replace <span className="bold">avril</span> with any  other month.</p>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>en avril</td>
                                                    <td>in April</td>
                                                </tr>
                                                <tr>
                                                    <td>le mois d'avril</td>
                                                    <td>the month of April</td>
                                                </tr>
                                                <tr>
                                                    <td>au mois d'avril</td>
                                                    <td>in April, in the month of April</td>
                                                </tr>
                                                <tr>
                                                    <td>en avril dernier</td>
                                                    <td>last April</td>
                                                </tr>
                                                <tr>
                                                    <td>en avril prochain</td>
                                                    <td>next April</td>
                                                </tr>
                                                <tr>
                                                    <td>le 11 avril</td>
                                                    <td>April 11th, the 11th of April</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-md-6">
                                        {/* <p className="text lesson-text">In the following phrases, replace <span className="bold">avril</span> with any  other month.</p>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>en avril</td>
                                                    <td>in April</td>
                                                </tr>
                                                <tr>
                                                    <td>le mois d'avril</td>
                                                    <td>the month of April</td>
                                                </tr>
                                                <tr>
                                                    <td>au mois d'avril</td>
                                                    <td>in April, in the month of April</td>
                                                </tr>
                                                <tr>
                                                    <td>en avril dernier</td>
                                                    <td>last April</td>
                                                </tr>
                                                <tr>
                                                    <td>en avril prochain</td>
                                                    <td>next April</td>
                                                </tr>
                                                <tr>
                                                    <td>le 11 avril</td>
                                                    <td>April 11th, the 11th of April</td>
                                                </tr>
                                            </tbody>
                                        </table> */}
                                        <img src="../media/calendrier_scolaire.png" alt="" className="img-fluid" />
                                    </div>
                                        {/* <img src="../media/calendrier_scolaire.jpg" alt="" className="img-fluid" /> */}
                                </div>
                                <div className="row l1-l6 mb-3 iframe-row calendar">
                                    <Level1L6Iframe />
                                </div>
                                <div className="row l1-l6 mb-3 pdf-row calendar">
                                    <h3 className="sub3">Quand vient la nuit - N&acirc;diya</h3>
                                    <h4 className="sub4 mb-3">Here is a catchy pop tune with a nursery rhyme as a chorus.</h4>
                                    <div className="col-md-7">
                                        <Level1L6Iframe2 />
                                    </div>
                                    <div className="col-md-5">
                                        <h4 className="sub4 text-center">N&acirc;diya</h4>
                                        <p className="text aside-text">N&acirc;diya est n&eacute;e Nadia Zighem &agrave; Tours en 1973.  La benjamine  d'une famille d'origine alg&eacute;rienne, la fille s'int&eacute;resse &agrave; l'athl&eacute;tisme.  Au coll&egrave;ge, elle se met dans une section de sports-&eacute;tudes.  En 1990, elle est devenue Championne de France junior du 800 mètres.</p>
                                        <p className="text aside-text">&Agrave; 21 ans, Nadiya commence sa carri&egrave;re de musique &agrave; Paris o&ugrave; elle a apparu dans les emissions de t&eacute;l&eacute; et sur des albums.  Son propre album <span className="bold">16/9 </span>est sortie en 2004 qui a remport&eacute; la Victoire de la musique de l’album de l’année dans la catégorie rap, hip-hop et R’n’B.   Cet album a vendu plus de 500.000 exemplaires, avec ses titres <span className="italic">Parle-moi</span>, <span className="italic">Et c’est parti… </span>et <span className="italic">Si loin de vous</span>. Son fils Yanis, age 5 ans, a chant&eacute; la comptine de la chanson <span className="italic">Quand vient la nuit</span>.</p>
                                        <p className="text aside-text">En 2019, l'organisation Les Enfants de la Terre, fond&eacute;e par Marie-Claire et Yannick Noah, l'a nomm&eacute;e ambassadrice pour servir avec la pr&eacute;sidente Nathalie Noah.</p>
                                    </div>
                                    <object type="application/pdf" data="../media/quand_vient_la_nuit.pdf" width="600" height="300" title="The lyrics to the song Quand vient la nuit by Nadiya with a translation in English"></object>
                                </div>
                                <div className="row l1-l6 mb-3 lesson-row activity">
                                    <h3 className="sub3">Compr&eacute;hension orale:  Les anniversaires</h3>
                                    <Level1L6A1 />
                                    <h3 className="sub3 mt-5">Les f&ecirc;tes</h3>
                                    <div className="col-md-6">
                                        <img src="../media/agenda_culturel.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6">
                                        <Level1L6Iframe3 />
                                        <h4 className="sub4">put listening comprehension for holidays here.</h4>
                                    </div>
                                    {/* <div className="col-md-6">
                                        <Level1L6A3 />
                                    </div> */}

                                    <h3 className="sub3"></h3>
                                </div>
                                <div className="row vocab-row">
                                    <h3 className="sub3 mb-3">Expressions du temps</h3>
                                    <div className="col-md-4 panel">
                                        <h5 className="sub5">Le pass&eacute;</h5>
                                        <p className="text activity-text mt-0 mb-0">hier</p>
                                        <p className="text activity-text mt-0 mb-0">avant-hier</p>
                                        <p className="text activity-text mt-0 mb-0">la semaine derni&egrave;re</p>
                                        <p className="text activity-text mt-0 mb-0">le mois dernier</p>
                                        <p className="text activity-text mt-0 mb-0">l'ann&eacute;e derni&eacute;re</p>
                                    </div>
                                    <div className="col-md-4 panel">
                                        <h5 className="sub5">Le pr&eacute;sent</h5>
                                        <p className="text activity-text mt-0 mb-0">aujourd'hui</p>
                                        <p className="text activity-text mt-0 mb-0">maintenant</p>
                                        <p className="text activity-text mt-0 mb-0">en ce moment</p>
                                        <img src="../media/les_ages.jpg" alt="clipart of the ages of life from infancy to old age" className="img-fluid" id="ages"/>
                                    </div>
                                    <div className="col-md-4 panel">
                                        <h5 className="sub5">Le futur</h5>
                                        <p className="text activity-text mt-0 mb-0">demain</p>
                                        <p className="text activity-text mt-0 mb-0">apr&egrave;s demain</p>
                                        <p className="text activity-text mt-0 mb-0">le lendemain</p>
                                        <p className="text activity-text mt-0 mb-0">la semaine prochaine</p>
                                        <p className="text activity-text mt-0 mb-0">le mois prochain</p>
                                        <p className="text activity-text mt-0 mb-0">l'ann&eacute;e prochaine</p>
                                    </div>
                                </div>
                                <div className="row l1-l6 mb-3 mt-3 vocab-row calendar_time">
                                    <table className="table">
                                        {/* <th rowSpan="4">Expressions du temps</th> */}
                                        <tbody>
                                            <tr>
                                                <td className="bold french">aujourd'hui</td>
                                                <td className="english">today</td>
                                                <td className="bold french">demain</td>
                                                <td className="english">tomorrow</td>
                                            </tr>
                                            <tr>
                                                <td className="bold french">ce matin</td>
                                                <td className="english">this morning</td>
                                                <td className="bold french">demain matin</td>
                                                <td className="english">tomorrow morning</td>
                                            </tr>
                                            <tr>
                                                <td className="bold french">cet apr&egrave;s-midi</td>
                                                <td className="english">this afternoon</td>
                                                <td className="bold french">demain midi</td>
                                                <td className="english">tomorrow lunchtime</td>
                                            </tr>
                                            <tr>
                                                <td className="bold french">ce soir</td>
                                                <td className="english">tonight, this evening</td>
                                                <td className="bold french">demain apr&egrave;s-midi</td>
                                                <td className="english">tomorrow afternoon</td>
                                            </tr>
                                            <tr>
                                                <td className="bold french">cette nuit</td>
                                                <td className="english">tonight, this coming night</td>
                                                <td className="bold french">demain soir</td>
                                                <td className="english">tomorrow evening</td>
                                            </tr>
                                            <tr>
                                                <td className="bold french">hier</td>
                                                <td className="english">yesterday</td>
                                                <td className="bold french">le lendemain</td>
                                                <td className="english">the day after tomorrow; the next day</td>
                                            </tr>
                                            <tr>
                                                <td className="bold french">hier matin</td>
                                                <td className="english">yesterday morning</td>
                                                <td className="bold french">le lendemain soir</td>
                                                <td className="english">the evening after next; the next evening</td>
                                            </tr>
                                            <tr>
                                                <td className="bold french">hier midi</td>
                                                <td className="english">yesterday lunchtime</td>
                                                <td className="bold french">avant-hier</td>
                                                <td className="english">the day before yesterday</td>
                                            </tr>
                                            <tr>
                                                <td className="bold french">hier apr&egrave;s-midi</td>
                                                <td className="english">yesterday afternoon</td>
                                                <td className="bold french">avant-hier soir</td>
                                                <td className="english">the evening before last</td>
                                            </tr>
                                            <tr>
                                                <td className="bold french">hier soir</td>
                                                <td className="english">yesterday evening</td>
                                                <td className="bold french">le soir</td>
                                                <td className="english">in the evenings, every evening</td>
                                            </tr>
                                            <tr>
                                                <td className="bold french">est</td>
                                                <td className="english">is</td>
                                                <td className="bold french">le lundi soir</td>
                                                <td className="english">on Monday evenings</td>
                                            </tr>
                                            <tr>
                                                <td className="bold french">&eacute;tais/&eacute;tait</td>
                                                <td className="english">was</td>
                                                <td className="bold french">sera</td>
                                                <td className="english">will be</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row l1-l6 mb-3 lesson-row activity">
                                    <Level1L6A2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Level1Lesson6