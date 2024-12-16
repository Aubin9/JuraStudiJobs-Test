import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import "./dropdown.css";

const dropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="primary"
        id="dropdown-basic"
        className="primary"
      >
        Jurastudijobs
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item activeStyle as={Link} to="/Jurastudijobs/cs">
          Computer science
        </Dropdown.Item>
        <Dropdown.Item activeStyle as={Link} to="/Jurastudijobs/elec">
          Electrical
        </Dropdown.Item>
        <Dropdown.Item activeStyle as={Link} to="/Jurastudijobs/mechanical">
          Mechanical
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default dropdown;
