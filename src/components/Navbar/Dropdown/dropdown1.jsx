import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import './dropdown1.css';

const dropdown1 = () => {
  return (
    <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic" className='primary'>
                Exercices & Cours
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item activeStyle as={Link} to="/cours&exercice/terminale">Terminale</Dropdown.Item>
            <Dropdown.Item activeStyle as={Link} to="/cours&exercice/premiere">Premiere</Dropdown.Item>
            <Dropdown.Item activeStyle as={Link} to="/cours&exercice/seconde">Seconde</Dropdown.Item>
            <Dropdown.Item activeStyle as={Link} to="/cours&exercice/troisieme">Troisiemme</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default dropdown1