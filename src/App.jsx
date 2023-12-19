import React from 'react'
import Navbar from "./components/Navbar";
import Footer from "./components/footer/footer";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about/about";
import Etude from "./pages/etude/etude";
import Connexion from "./pages/connexion/connexion";
import Ressources from "./pages/services/services";
import Offres from "./pages/offres/offres";
import Research from "./pages/SearchBar/search"
import Terminale from "./pages/Cours&Execices/Terminale/terminale"
import Premiere from "./pages/Cours&Execices/Premiere/premiere"
import Seconde from "./pages/Cours&Execices/Seconde/seconde"
import Troisieme from "./pages/Cours&Execices/Troisieme/troisieme"


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/ressources" element={<Ressources />}/>
				<Route path="/etude" element={<Etude />} />
				<Route path="/connexion" element={<Connexion />}/>
				<Route path="/offres" element={<Offres />}/>
				<Route path="/results" element={<Research />}/>
				<Route path="/cours&exercice/terminale" element={<Terminale />}/>
				<Route path="/cours&exercice/premiere" element={<Premiere />}/>
				<Route path="/cours&exercice/seconde" element={<Seconde />}/>
				<Route path="/cours&exercice/troisieme" element={<Troisieme />}/>
			</Routes>
			<Footer/>
		</Router>
	);
}

export default App;
