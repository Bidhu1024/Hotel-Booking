import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
    <div className="headerContainer">
      <div className="headerList">
        <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flight</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faCar} />
          <span>Car</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} />
          <span>Attraction</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Airport Taxi</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;