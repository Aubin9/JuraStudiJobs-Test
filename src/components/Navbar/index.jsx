import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="" activeStyle>Logo</NavLink>
					<NavLink to="/" activeStyle>Accueil</NavLink>
					<NavLink to="/etudes" activeStyle>Exercices & Cours</NavLink>
					<NavLink to="/services" activeStyle>services</NavLink>
					<NavLink to="" activeStyle>search bar</NavLink>
					<NavLink to="/offres" activeStyle>offres</NavLink>
					<NavLink to="/about" activeStyle>A Propos</NavLink>
					<NavLink to="/connexion" activeStyle>Connexion</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;