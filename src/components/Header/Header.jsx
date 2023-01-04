import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
const Header = () => {

  const [date,setDate] = useState([
    {
      startDate:new Date(),
      endDate:new Date(),
      key:'selection'
    }
  ]);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
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
        <h1 className="headerTitle">A lifetime of Discounts? Its Genius...</h1>
        <p className="headerDesc">Get rewarded for your travels from Charlie</p>
        <button className="headerBtn">Register / SignIn</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
             <span className="headerSearchText">date to date</span>
             <DateRange
             editableDateInputs={true}
             moveRangeOnFirstSelection={false}
             onChange={item => setDate([item.selection])}
             ranges={date}
             className='date'
              />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">2 Adults 2 Children 1 room</span>
          </div>
          <div className="headerSearchItem">
      <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
