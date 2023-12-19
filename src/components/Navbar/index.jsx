import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";
import Search from '../../pages/SearchBar/search';
import {LuSearch} from "react-icons/lu";
import './nav.css';
import Dropdown1 from './Dropdown/dropdown1';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
	return (
		<>
			 <Nav>
				<NavMenu>
					<NavLink to="" activeStyle>Logo</NavLink>
					<NavLink to="/" activeStyle>Accueil</NavLink>
					<NavLink id='menu_deroulant1'>
						{/* <a href="/etude">Exercices & Cours</a>
						<ul class="dropdown">
							<li><NavLink to="/cours&exercice/terminale" activeStyle>Terminale</NavLink></li>
							<li><NavLink to="/cours&exercice/premiere" activeStyle>Premiere</NavLink></li>
							<li><NavLink to="/cours&exercice/seconde" activeStyle>Seconde</NavLink></li>
							<li><NavLink to="/cours&exercice/troisieme" activeStyle>Troisieme</NavLink></li>
						</ul> */}
						<Dropdown1 />
					</NavLink>
					<NavLink to="/offres" activeStyle>offres</NavLink>
					<NavLink to="/results" activeStyle><Search/><LuSearch/></NavLink>
					<NavLink to="/ressources" activeStyle>Ressources</NavLink>
					<NavLink to="/about" activeStyle>A Propos</NavLink>
					<NavLink to="/connexion" activeStyle>Connexion</NavLink>
				</NavMenu>
			</Nav> 
		</>
	);
};

export default Navbar;