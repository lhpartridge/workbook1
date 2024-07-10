import Level1SideNav from "./Level1SideNav"

const Level1Lesson8 =()=> {
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

                                
                                <div className="row l1-l6 mb-3 lesson-row time">
                                    <h3 className="sub3">L'heure, c'est l'heure!</h3>
                                    <h4 className="sub4">Parts of the day, Time on the hour</h4>
                                </div>

                                <div className="row l1-l6 mb-3 lesson-row activity"><h5 className="sub4">Level1L7A1 Listening time on the hour</h5></div>

                                <div className="row l1-l6 mb-3 lesson-row time">
                                    <h4 className="sub3">Parts of the hour</h4>
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
}

export default Level1Lesson8