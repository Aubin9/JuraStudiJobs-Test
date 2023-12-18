import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";
import Search from '../../pages/SearchBar/search';
import {LuSearch} from "react-icons/lu";
import './nav.css';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="" activeStyle>Logo</NavLink>
					<NavLink to="/" activeStyle>Accueil</NavLink>
					<NavLink to="/etude" activeStyle>Exercices & Cours
						<ul class="dropdown">
							<li><NavLink to="/cours&exercice/terminale" activeStyle>Terminale</NavLink></li>
							<li><NavLink to="/cours&exercice/premiere" activeStyle>Premiere</NavLink></li>
							<li><NavLink to="/cours&exercice/seconde" activeStyle>Seconde</NavLink></li>
							<li><NavLink to="/cours&exercice/troisieme" activeStyle>Troisieme</NavLink></li>
						</ul>
					</NavLink>
					<NavLink to="/services" activeStyle>services</NavLink>
					<NavLink to="/results" activeStyle><Search/><LuSearch/></NavLink>
					<NavLink to="/offres" activeStyle>offres</NavLink>
					<NavLink to="/about" activeStyle>A Propos</NavLink>
					<NavLink to="/connexion" activeStyle>Connexion</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;