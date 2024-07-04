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
import Level1L1A1 from "./components/Level1L1A1"
import Level2 from "./components/Level2"
import Level3 from "./components/Level3"
import Resources from "./components/Resources"
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
                <Route path="/level2" element={ <Level2 /> } />
                <Route path="/level3" element={ <Level3 /> } />
                <Route path="/resources" element={ <Resources /> } />
                <Route path="*" element={ <Error /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App