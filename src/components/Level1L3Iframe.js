const Level1L3IFrame
 =()=> {
    return(
        <>
            <h4 className="sub4">Exercice.  Use <a href=""></a>LanguageGuide.org to learn the numbers.  Practice counting by 1's, 2's, 5's and 10's.</h4>
            <h4 className="sub4">If the embedded page does not load, use the link to do the activity on the LanguageGuide.</h4>
            <p className="text mb-3"><a href="https://www.languageguide.org/french/alphabet/" target="_blank" className="link lesson-link">https://www.languageguide.org/french/alphabet/</a></p>
            <iframe src="https://www.languageguide.org/french/alphabet/" frameborder="0"  allow=" popups; scripts; modals"  className="iframe lang-guide-iframe mb-5" id="L1L3Iframe"></iframe>
        </>
    )
}

export default Level1L3IFrame
