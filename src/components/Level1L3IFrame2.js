const Level1L3Iframe2
 =()=> {
    return(
        <>
            <h4 className="sub4">Exercice.  Use LanguageGuide.org to learn the numbers.  Practice counting by 1's, 2's, 5's and 10's.</h4>
            <h4 className="sub4">Then do the speaking and listening challenges on the page.</h4>
            <h5 className="sub4">If the embedded page does not load, use the link to do the activity on the LanguageGuide website.</h5>
            <p className="text mb-3"><a href="https://www.languageguide.org/french/numbers/" target="_blank" className="link lesson-link">https://www.languageguide.org/french/numbers/</a></p>
            <iframe src="https://www.languageguide.org/french/numbers/" frameborder="0" height="300" allow=" popups; scripts; modals"  className="iframe lang-guide-iframe mb-5" id="L1L3Iframe"></iframe>
        </>
    )
}

export default Level1L3Iframe2