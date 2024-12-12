import About from "../components/About"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"

function App() {
    return (
        <main className="bg-gray-800 text-white">
            <Navbar/>
            <Header/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
        </main>
    )
}

export default App