import { Link } from 'react-router-dom'

import MusicSideNav from "./MusicSideNav"
import MusicA1 from "./MusicA1"

const Music =()=> {

    return(
        <>
            <main className="main" id="lesson1main">
                <section className="l1-section">
                    <div className="container">
                        <div className="row l1-intro justify-content-between">
                            <MusicSideNav />
                            <div className="col-md-8">
                                <h2 className="sub2">La musique</h2>
                                <h3 className="sub3 mt-3">Les activit&eacute;s de musique</h3>

                                <div className="row-music-row mb-3" id="musicA1">
                                    <MusicA1 />

                                </div>
                                {/* <div className="row-music-row mb-3" id="musicA2">
                                    <MusicA1 />

                                </div>
                                <div className="row-music-row mb-3" id="musicA3">
                                    <MusicA1 />

                                </div>
                                <div className="row-music-row mb-3" id="musicA4">
                                    <MusicA1 />

                                </div>
                                <div className="row-music-row mb-3" id="musicA5">
                                    <MusicA1 />

                                </div> */}
                                <h3 className="sub3 mt-3">Les clips</h3>
                            </div> 
                            <div className="col-md-8">
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        
        </>
    )
}

export default Music