// import Iframe from 'react-iframe'

const Level1L1IFrame
 =()=> {
    return(
        <>  <h4 className="sub4">If the embedded page does not load, use the link to do the activity on the LanguageGuide.org website.</h4>
            <p className="text"><a href="https://www.languageguide.org/french/vocabulary/school/" target="_blank" className="link lesson-link">https://www.languageguide.org/french/vocabulary/school/</a></p>
            <iframe src="https://www.languageguide.org/french/vocabulary/school/" allow="autoplay; popups; scripts; modals" frameborder="0" className="iframe lang-guide-iframe" id="L1L1Iframe"></iframe>
        </>
    )
}

export default Level1L1IFrame