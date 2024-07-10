import { useEffect, useState} from "react"
import { Routes, Route, Outlet } from 'react-router-dom'
import axios from 'axios'

// components
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Level1 from "./components/Level1"
import Level1Lesson1 from "./components/Level1Lesson1"
import Level1Lesson2 from "./components/Level1Lesson2"
import Level1Lesson3 from "./components/Level1Lesson3"
import Level1Lesson4 from "./components/Level1Lesson4"
import Level1Lesson5 from "./components/Level1Lesson5"
import Level1Lesson6 from "./components/Level1Lesson6"
import Level1Lesson7 from "./components/Level1Lesson7"
import Level1Lesson8 from "./components/Level1Lesson8"
import Level1Lesson9 from "./components/Level1Lesson9"
import Level1Lesson10 from "./components/Level1Lesson10"
import Level1L1A1 from "./components/Level1L1A1"
import Level2 from "./components/Level2"
import Level3 from "./components/Level3"
import Resources from "./components/Resources"
import Music from "./components/Music"
import Error from "./components/Error"

const App =()=> {

    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/level1" element={ <Level1 /> } />
                <Route path="/level1lesson1" element={<Level1Lesson1 /> } />
                <Route path="/level1L1A1" element={<Level1L1A1 /> } />
                <Route path="/level1lesson2" element={<Level1Lesson2 /> } />
                <Route path="/level1lesson3" element={<Level1Lesson3 /> } />
                <Route path="/level1lesson4" element={<Level1Lesson4 /> } />
                <Route path="/level1lesson5" element={<Level1Lesson5 /> } />
                <Route path="/level1lesson6" element={<Level1Lesson6 /> } />
                <Route path="/level1lesson7" element={<Level1Lesson7 /> } />
                <Route path="/level1lesson8" element={<Level1Lesson8 /> } />
                <Route path="/level1lesson9" element={<Level1Lesson9 /> } />
                <Route path="/level1lesson10" element={<Level1Lesson10 /> } />
                <Route path="/level2" element={ <Level2 /> } />
                <Route path="/level3" element={ <Level3 /> } />
                <Route path="/resources" element={ <Resources /> } />
                <Route path="/music" element={ <Music /> } />
                <Route path="*" element={ <Error /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App