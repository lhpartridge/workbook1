import { Link } from 'react-router-dom'

import Level1SideNav from './Level1SideNav'
import Level1L5A1 from './Level1L5A1'
import Level1L5A2 from './Level1L5A2'
import Level1L5IFrame from './Level1L5Iframe'

const Level1Lesson5 =()=> {

    return(
        <>
            <main className="main" id="l1l5-main">
                <h2 className="sub2 aboutSub text-center text-capitalize">Les petits mots - Little words</h2>
                {/* <h2 className="sub2 text-capitalize"><Link to="/level1" >Niveau 1</Link></h2> */}
                <section className="section l1-l5">
                    <div className="container">
                        <div className="row l1-l5 mb-3 lesson-row">
                            <Level1SideNav />
                            <div className="col-md-8">
                                <p className="text lesson-text">In this lesson, you will learn about how to name things.  Just as in English, the French language has special rules about <span className="bold">nouns</span>—the words that name
                                things.</p>
                                <p className="text lesson-text">Nouns tell <span className="bold">adjectives</span> and <span className="bold">articles</span> how to act around them.  You might remember that adjectives describe nouns and articles are particles, tiny words that help us speak more precisely.</p>
                                <p className="text lesson-text">When we talk about specific things or people in English, we use the article the before any noun, no matter if it is singular or plural. It doesn’t matter if the noun is a person, place, or thing. We put adjectives between the articles and the nouns in a group. Sometimes we don’t use any articles at all.  We don’t have to think about a lot of rules to use. We grew up speaking English, and it comes naturally to us.</p>
                                <p className="text lesson-text">We can say: <span className="italic">The new math teacher is a nice, tall man who is also Amadou’s uncle.</span></p>
                            </div>
                            <div className="col-md-3">
                                <img src="../media/detective.png" alt="detective pointing" className="img-fluid" />
                            </div>
                            <div className="col-md-2 d-block mx-auto mb-3">
                                <img src="../media/vive_la_difference3.jpg" alt="" className="img-fluid d-block mx-auto" />
                            </div>
                            <p className="text lesson-text">Remember that <span className="bold">gender</span> means <span className="bold">masculine</span> and <span className="bold">feminine</span>. In English, there is a third gender called <span className="bold">neuter</span> for objects that are not male or female.</p>
                            <p className="text lesson-text">In French, there are sets of articles that change to agree with the noun in their group. They follow a rule called <span className="bold">noun-article-adjective agreement</span>. That’s when the noun’s gender and number tell you what form of the article or adjective to use.</p>
                            <p className="text lesson-text">Definite articles are the words that mean <span className="bold">the</span>. The words <span className="bold">a, an, some</span> and <span className="bold">any</span> are called <span className="bold">indefinite articles</span> . You see them all over the place. </p>
                            <p className="text lesson-text">The definite articles (or <span className="bold">the</span>) are <span className="bold">le, la, </span>and <span className="bold">les</span>. Remember to use elision and change le and la to l’ before beginning vowel sounds. Those are the words that begin with <span className="bold">a, e, i, o, u, y,</span> and <span className="bold">h</span>.</p>
                            <p className="text lesson-text">The tricky thing is that the signals for singular and plural are in different places. In English we listen for an /s/ or /z/ sound at the end of the noun. In French, you listen for the differences in vowel sounds at the beginning. Remember that the final <span className="bold">–s</span> is almost always silent, so you have to learn to listen for the article. When the plural article <span className="bold">les</span> comes before a vowel sound, the final <span className="bold">–s</span> is linked as a /z/ sound.</p>    
                            <div className="col-md-8 d-block mx-auto">
                                <table className="table">
                                <tbody>
                                    <tr>
                                        <td><span className="bold">le</span> professeur</td>
                                        <td>the teacher</td>
                                        <td><span className="bold">les</span> professeurs</td>
                                        <td>the teacher<span className="bold">s</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="bold">la</span> maison</td>
                                        <td>the house</td>
                                        <td><span className="bold">les</span> maisons</td>
                                        <td>the house<span className="bold">s</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="bold">l'</span>&eacute;glise</td>
                                        <td>the church</td>
                                        <td><span className="bold">les</span> &eacute;glises</td>
                                        <td>the churches<span className="bold">s</span></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            <p className="text lesson-text">The indefinite articles in French don’t use elision. The two singular forms are used the same way as <span className="bold">a</span> and <span className="bold">an</span> in English. (Surprise! We also have a special particle that we use just before a vowel sound!)  The plural form <span className="bold">des</span> means some, and it is also a contraction of the preposition <span className="bold">de</span> and the article <span className="bold">les</span>.  So you have to decide when it means some and when it means from the or of the. It’s a little weird, but you’ll get used to it. Soon you’ll know which one to say every time!</p>
                            <div className="col-md-5 d-block mx-auto">
                                <img src="../media/les_articles1.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row l1-l5 mb-3 lesson-row">
                            <h3 className="sub3">Les noms, les articles, et les adjectifs</h3>
                            <p className="text lesson-text">You remember that adjectives and articles have to <span className="bold">agree</span> with the noun they describe. That means that adjectives change their shape depending on their partner noun. But did you know that adjectives also jump around their partners? Most adjectives follow their partners, as you’ve seen with nationalities and colors. But a few adjectives jump ahead of their partners as we do in English. These shape-shifter words can be tricky. Some of them follow the rules for shape-shifting, while others have little changes that you’ll soon learn. Three adjectives go all out and have as many as five different shapes!</p>
                            <p className="text lesson-text">Here's a chart to help you know what to do with all these forms:</p>
                            <div className="col-md-3 offset-1">
                                <img src="../media/man_woman.jpg" alt="restroom sign for man and woman" className="img-fluid" id='manWoman'/>
                            </div>
                            <div className="col-md-6 d-block mx-auto">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope='row'></th>
                                            <th scope='row'>masculin</th>
                                            <th scope='row'>f&eacute;minin</th>
                                        </tr>
                                        <tr>
                                            <th scope='col'>singulier</th>
                                            <td>petit</td>
                                            <td>petit<span className="bold">e</span></td>
                                        </tr>
                                        <tr>
                                            <th scope='col'>pluriel</th>
                                            <td>petit<span className="bold">s</span></td>
                                            <td>petit<span className="bold">es</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="text activity-text">Mauricio est un petit garçon. Mauricio et Laure sont petits.</p>
                                <p className="text activity-text">Bintou est une petite fille. Jill et Bintou sont petites.</p>
                                <p className="text lesson-text">Did you see?  The basic form of the adjective is <span className="italic">masculine singular.</span></p>
                                <p className="text lesson-text">Then you add -e to make it feminine and -s to make it plural to agree with its partner noun.</p>
                            </div>
                        </div>
                        <div className="row l1-l5 mb-3 lesson-row">
                            <h3 className="sub3">O&ugrave; vont-ils?  Where do they go?</h3>
                            <p className="text lesson-text">In English adjectives nearly always go before their partner noun. That just sounds normal because it’s what we always do. But in France, it’s trickier. Most adjectives follow their partner, while a small group goes before. There’s even a set of adjectives that change their position depending on whether you mean the word literally or figuratively! Fortunately that’s a lesson for another day. For now, just learn that the BANGS adjectives go before the noun and all others go after!</p>
                            <div className="col-md-8 d-block mx-auto">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><span className="bold">B</span>eauty</td>
                                            <td><span className="bold">A</span>ge</td>
                                            <td><span className="bold">N</span>umber</td>
                                            <td><span className="bold">G</span>oodness</td>
                                            <td><span className="bold">S</span>ize</td>
                                        </tr>
                                        <tr>
                                            <td>beau / belle</td>
                                            <td>jeune</td>
                                            <td>premier/&egrave;re</td>
                                            <td>bon / bonne</td>
                                            <td>grand</td>
                                        </tr>
                                        <tr>
                                            <td>joli</td>
                                            <td>vieux / vieille</td>
                                            <td>s&eacute;conde</td>
                                            <td>mauvais</td>
                                            <td>petit</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>nouveau / nouvelle</td>
                                            <td>deuxi&egrave;me</td>
                                            <td></td>
                                            <td>gros / grosse</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text lesson-text">Notice that the irregular <span className="bold">BANGS</span>   adjectives don’t follow the rules for gender and number.</p>
                            <p className="text lesson-text">There are three crazy adjectives that even have an extra form just for liaison. That adds a consonant sound before masculine singular nouns that begin with a vowel sound.  C'est dingue!</p>
                            <div className="col-md-9 mt-4">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">masculine singular</th>
                                            <th scope="row">feminine singular</th>
                                            <th scope="row">masc. sing. before vowel</th>
                                            <th scope="row">masculine plural</th>
                                            <th scope="row">feminine plural</th>
                                        </tr>
                                        <tr>
                                            <td>beau</td>
                                            <td>belle</td>
                                            <td>bel</td>
                                            <td>beau</td>
                                            <td>beaux</td>
                                        </tr>
                                        <tr>
                                            <td>nouveau</td>
                                            <td>nouvelle</td>
                                            <td>nouvel</td>
                                            <td>nouveaux</td>
                                            <td>nouvelles</td>
                                        </tr>
                                        <tr>
                                            <td>vieux</td>
                                            <td>vieille</td>
                                            <td>vieil</td>
                                            <td>vieux</td>
                                            <td>vieilles</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-3">
                                <img src="../media/dingue.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row l1-l5 mb-3 lesson-row">
                            <h3 className="sub3">La possession avec <span className="bold">&agrave;</span> et <span className="bold">de</span></h3>
                            <h4 className="sub4">There are a lot of ways to show ownership in French.</h4>
                            <p className="text lesson-text">You use <span className="bold">de</span> + noun to show possession where English uses <span className="bold">apostrophe -s ('s)</span>.</p>
                            <div className="col-md-9 d-block mx-auto">
                                <p className="text activity-text">C'est <span className="bold">la m&egrave;re de Philippe.</span> That's <span className="bold">Philippe's mother.</span></p>
                                <p className="text activity-text">Ce ne sont pas <span className="bold">les livres du professeur.</span>  They aren't <span className="bold">the teacher's books.</span></p>
                            </div>
                            <p className="text lesson-text">You can also use the preposition <span className="bold">à</span> to express ownership.</p>
                            <div className="col-md-9 d-block mx-auto">
                                <p className="text activity-text">Le livre est <span className="bold">à Philippe</span>. The book <span className="bold">belongs to Philippe</span>.</p>
                                <p className="text activity-text">Les livres sont <span className="bold">au professeur</span>. The books <span className="bold">belong to the teacher</span>.</p>
                            </div>
                            <h4 className="sub4">Contractions with <span className="bold">&agrave;</span> and <span className="bold">de</span></h4>
                            <p className="text lesson-text">As in other Romance languages like Spanish and Italian, the definite articles contract with the prepositions <span className="bold">&agrave;</span> and <span className="bold">de</span>.</p>
                            <p className="text lesson-text">Note the use of the abbrevations for <span className="bold"></span>masculine, feminine, singular and plural, as well as singular before a vowel sound.  </p>
                            <div className="col-md-8 d-block mx-auto">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>&agrave;</td>
                                            <td>Le chat est <span className="bold">&agrave;</span> Jean.</td>
                                            <td>de</td>
                                            <td>C'est le chat <span className="bold">de</span> Jean.</td>
                                        </tr>
                                        <tr>
                                            <th>ms</th>
                                            <td>au</td>
                                            <td>Le livre est <span className="bold">au</span> p&egrave;re d'Olivier.</td>
                                            <td>du</td>
                                            <td>C'est le livre <span className="bold">du</span> p&egrave;re d'Olivier.</td>
                                        </tr>
                                            <tr>
                                                <th>fs</th>
                                                <td>&agrave; la</td>
                                                <td>Les stylos sont <span className="bold">&agrave; la</span> m&egrave;re d'Anne.</td>
                                                <td>de la</td>
                                                <td>Ce sont les stylos <span className="bold">de la</span> m&egrave;re d'Anne.</td>
                                            </tr>
                                            <tr>
                                                <th>sbv</th>
                                                <td>&agrave; l'</td>
                                                <td>La photo est <span className="bold">&agrave; l'</span>oncle Michel.</td>
                                                <td>de l'</td>
                                                <td>C'est la photo <span className="bold">de l'</span>oncle Michel.</td>
                                            </tr>
                                            <tr>
                                                <th>p</th>
                                                <td>aux</td>
                                                <td>La t&eacute;l&eacute; est <span className="bold">aux</span> parents de Marc.</td>
                                                <td>des</td>
                                                <td>C'est la t&eacute;l&eacute; <span className="bold">des</span> parents de Marc.</td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h4 className="sub4"><span className="bold">Les pronoms accentu&eacute;s</span>  You can use these prepositions with stress pronouns.</h4>
                            <div className="col-md-8 d-block mx-auto">
                                <p className="text activity-text">Les livres sont <span className="bold">à moi</span>. The books <span className="bold"> belong to me</span>. The books are <span className="bold">mine</span>.</p>
                                <p className="text activity-text">La maison est <span className="bold">à nous</span>. The house <span className="bold">belongs to us</span>. The house is <span className="bold">ours</span>.</p>
                            </div>
                            <h4 className="sub4">La pr&eacute;position <span className="bold">chez</span></h4>
                            <div className="col-md-7">
                                <p className="text lesson-text"><span className="bold">Chez</span> is a common preposition that French people use to express of being <span className="bold">at</span> or going <span className="bold">to</span> someone’s home or place of business. It is often used in restaurant names.</p>
                                <div className="ms-4 mt-sm-4">
                                    <p className="text activity-text mb-0">Les parents de Michel sont <span className="bold">chez eux</span>.</p>
                                    <p className="text activity-text mt-0">Michel’s parents are <span className="bold">at home/at their house.</span></p>
                                    <p className="text activity-text mb-0">On va <span className="bold">chez le dentiste</span>.</p>
                                    <p className="text activity-text mt-0">We’re going <span className="bold">to the dentist’s (office)</span>.</p>  
                                </div>
                            </div>
                            <div className="col-md-5">
                                <img src="../media/chez2.png" alt="logo for Chez Olivier restaurant" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row l1-l5 mb-3 activity-row">
                            <Level1L5A1 />
                        </div>
                        <div className="row l1-l5 mb-3 lesson-row">
                            <h3 className="sub3">Les pr&eacute;positions sur, sous, dans, devant, derri&egrave;re, &agrave; c&ocirc;t&eacute; de</h3>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-3">                                        
                                        <img src="../media/london_bridge.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-9">
                                        <p className="text lesson-text">Do you know the tune to <span className="bold">London Bridge is Falling Down?</span></p>
                                        <p className="text lesson-text">You can tell where things are using these words that you can remember using this little song!</p>
                                    </div>
                                </div>
                                <div className="">
                                <p className="text activity-text mb-0 ps-5"><span className="bold">sur</span> = on (top), over</p>
                                <p className="text activity-text mb-0 ps-5"><span className="bold">sous</span> = under, beneath</p>
                                <p className="text activity-text mb-0 ps-5"><span className="bold">dans</span> = in, inside</p>
                                <p className="text activity-text mb-0 ps-5"><span className="bold">devant</span> = in front of, before (space)</p>
                                <p className="text activity-text mb-0 ps-5"><span className="bold">derri&egrave;re</span> = behind, after (space)</p>
                                <p className="text activity-text mb-0 ps-5"><span className="bold">&agrave; c&ocirc;t&eacute; de</span> = next to, beside</p>
                            </div>
                            </div>
                            <div className="col-md-4">
                                <Level1L5IFrame />
                            </div>

                                <Level1L5A2 />
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Level1Lesson5