import { Link } from 'react-router-dom'

import Level1SideNav from './Level1SideNav'
import Level1L4A1 from './Level1L4A1'
import Level1L4A2 from './Level1L4A2'


const Level1Lesson4 =()=> {

    return(
        <>
            <main className="main" id="l1l5-main">
                <h2 className="sub2 text-center">Qui est-ce?  Who is that?</h2>
                <section className="section" id="l1-l4-section">
                    <div className="container">
                        <div className="row l1-l4 mb-3 lesson-row">
                            <Level1SideNav />
                            <div className="col-md-11">
                                <p className="text lesson-text">You see lots of people every day, at home, in your neighborhood, at school or work and elsewhere.  You'll want to be able to name and describe them to others.</p>
                                <p className="text lesson-text">The words that French people use to mean my change depending on the word that it describes. The two words have to match, or <span className="bold">agree</span>, or you’ll be saying things all wrong!</p>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">&Agrave; la maison:  </th>
                                            <td>mes parents</td>
                                            <td>mon p&egrave;re</td>
                                            <td>ma m&egrave;re</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td>les enfants</td>
                                            <td>mon fr&egrave;re</td>
                                            <td>ma s&oelig;ur</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td>mes animaux</td>
                                            <td>mon chien</td>
                                            <td>ma chatte</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dans mon quartier:  </th>
                                            <td>mes voisins</td>
                                            <td>mon voisin</td>
                                            <td>ma voisine</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td>mes amis</td>
                                            <td>mon ami</td>
                                            <td>mon amie</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&Agrave; l'&eacute;cole:  </th>
                                            <td>mes professeurs</td>
                                            <td>mon professeur</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td></td>
                                            <td>mon directeur</td>
                                            <td>ma directrice</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td>mes camarades</td>
                                            <td>mon camarade</td>
                                            <td>ma camarade</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Au travail:  </th>
                                            <td></td>
                                            <td>mon patron</td>
                                            <td>ma patronne</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td>mes coll&egrave;gues</td>
                                            <td>mon coll&egrave;gue</td>
                                            <td>ma coll&egrave;gue</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="text lesson-text">The words for <span className="bold">my, a, </span>and<span className="bold"> the</span> change because the words that come after them follow different rules.  </p>
                                <p className="text lesson-text">Always learn a Fun Phrase to help you learn the right one.</p>
                                <table className="table">
                                    <tbody>
                                        <th ></th>
                                        <tr>
                                            <td><span className="bold">Il y a</span> = there is, there are (exists)</td>
                                            <td><span className="bold">Voici...</span> = This is, Here is, Here comes, </td>
                                            <td><span className="bold">Voil&agrave;...</span> = That is, There is, There goes</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><span className="bold">Qui est-ce?</span> = <span className="italic">Who is it?  Who is that?</span></td>
                                            <td><span className="bold">C'est...</span> = <span className="italic">this / that is, he / she / it is...</span></td>
                                            <td><span className="bold">Ce sont...</span> = <span className="italic">they are, these/those are</span></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><span className="bold">mon / ma / mes </span>= <span className="italic">my</span></td>
                                            <td><span className="bold">un / une </span>= <span className="italic">a</span></td>
                                            <td><span className="bold">le / la / les </span>= <span className="italic">the</span></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><span className="bold">un / une </span>= <span className="italic">a</span></td>
                                            <td><span className="bold">des </span>= <span className="italic">some</span></td>
                                            <td colSpan="2"><span className="bold">le</span> and <span className="bold">la</span> change to <span className="bold">l'</span>before <span className="italic">a, e, i, o, u, y, and h</span></td>
                                            {/* <td rowSpan="2">before <span className="italic">a, e, i, o, u, y, and h</span></td> */}
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th rowSpan="7">
                                                <img src="../media/J'aime_mon_quartier.jpg" alt="street sign showing person picking up dog waste" className="img-fluid" id="jaimeMonQuartier"/>
                                            </th>
                                            <td>man / woman</td>
                                            <td>un homme</td>
                                            <td>une femme</td>
                                        </tr>
                                        <tr>
                                            <td>gentleman / lady</td>
                                            <td>un monsieur</td>
                                            <td>une dame</td>
                                        </tr>
                                        <tr>
                                            <td>boy / girl</td>
                                            <td>un gar&ccedil;on</td>
                                            <td>une fille</td>
                                        </tr>
                                        <tr>
                                            <td>friend (pal)</td>
                                            <td>un copain</td>
                                            <td>une copine</td>
                                        </tr>
                                        <tr>
                                            <td>teacher / professor</td>
                                            <td>un prof</td>
                                            <td>une prof</td>
                                        </tr>
                                        <tr>
                                            <td>student (grade school)</td>
                                            <td>un &eacute;l&egrave;ve</td>
                                            <td>une &eacute;l&egrave;ve</td>
                                        </tr>
                                        <tr>
                                            <td>student (university)</td>
                                            <td>un &eacute;tudiant</td>
                                            <td>une &eacute;tudiante</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row l1-l4 mb-3 activity-row">
                            <Level1L4A1 />
                        </div>
                        <div className="row l1-l4 mb-3 lesson-row">
                            <h3 className="sub3">Les pr&eacute;sentations</h3>
                            <p className="text lesson-text">You’ll want to be able to introduce yourself to other people and you’ll want to be polite as you do. Did you know that there is a right way and a wrong way to introduce people in a formal setting? You show respect to older people when you tell them the younger person’s name first. You do the same thing with other types of respect. For example, you tell the boss the employee’s name before you introduce your boss to your new co-worker. It’s not so important in informal settings. Just remember that the formal register is about actions and not just words!</p>
                            <table className="table">
                                    <tbody>
                                        <th ></th>
                                        <tr>
                                            <th rowSpan="9">
                                                <img src="../media/je_vous_presente.jpg" alt="clipart saying je vous presente Gaston" className="img-fluid" id="jeVousPresente"/>
                                            </th>
                                            <td>Je te / vous pr&eacute;sente...</td>
                                            <td>Let me introduce...</td>
                                        </tr>
                                        <tr>
                                            <td>Comment s'appelle-t-il?</td>
                                            <td>What is his name?</td>
                                        </tr>
                                        <tr>
                                            <td>Il s'appelle...</td>
                                            <td>His name is...</td>
                                        </tr>
                                        <tr>
                                            <td>Comment s'appelle-t-elle?</td>
                                            <td>What is her name?</td>
                                        </tr>
                                        <tr>
                                            <td>Elle s'appelle...</td>
                                            <td>Her name is...</td>
                                        </tr>
                                        <tr>
                                            <td>On s'appelle...</td>
                                            <td>Our name is..., Their name is...</td>
                                        </tr>
                                        <tr>
                                            <td>Comment s'appellent-ils?</td>
                                            <td>What are they named?</td>
                                        </tr>
                                        <tr>
                                            <td>Ils s'appellent...</td>
                                            <td>They are named...</td>
                                        </tr>
                                        <tr>
                                            <td>Elles s'appellent...</td>
                                            <td>(Use this form when <span className="bold">they</span> are all girls!)</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="text lesson-text">You can use little words, called pronouns, instead of names. Can you figure out what these mean?</p>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>C'est toi?</td>
                                            <td>Oui, c'est moi.</td>
                                            <td rowSpan="4"><img src="../media/coucou.png" alt="clip art of cat holding a heart" className="img-fluid" id="coucou"/></td>
                                            <td>C'est vous?</td>
                                            <td>Oui, c'est nous.</td>
                                        </tr>
                                        <tr>
                                            <td>C'est vous?</td>
                                            <td>Oui, c'est moi.</td>
                                            <td>C'est vous?</td>
                                            <td>Oui, c'est nous.</td>
                                        </tr>
                                        <tr>
                                            <td>C'est Paul?</td>
                                            <td>Oui, c'est lui.</td>
                                            <td>C'est Paul et H&eacute;l&egrave;ne?</td>
                                            <td>Oui, c'est eux.</td>
                                        </tr>
                                        <tr>
                                            <td>C'est H&eacute;l&egrave;ne?</td>
                                            <td>Oui, c'est elle.</td>
                                            <td>C'est H&eacute;l&egrave;ne et Tamiko?</td>
                                            <td>Oui, c'est elles.</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                        <div className="row l1-l4 mb-3 activity-row">
                            <Level1L4A2 />
                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}

export default Level1Lesson4