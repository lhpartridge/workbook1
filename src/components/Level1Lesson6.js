import Level1SideNav from './Level1SideNav'
import Level1L6A1 from './Level1L6A1'
import Level1L6Iframe from './Level1L6Iframe'

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
                                <div className="row l1-l6 lesson-row intro">intro</div>
                                <div className="row l1-l6 lesson-row calendar">calendrier</div>
                                <div className="row l1-l6 lesson-row activity">activites</div>
                                <div className="row l1-l6 lesson-row time">temps</div>
                                <div className="row l1-l6 lesson-row activity">activites</div>
                                <div className="row l1-l6 lesson-row schedules">horaires</div>
                                <div className="row l1-l6 lesson-row activity">activites</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Level1Lesson6