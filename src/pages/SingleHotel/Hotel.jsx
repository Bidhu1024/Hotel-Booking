import React from 'react'
import './Hotel.css'
import Navbar from './../../components/Navbar/Navbar';
import Header from './../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import MailList from './../../components/mailList/MailList';
import { useState } from 'react';
const Hotel = () => {

  const [slideNumber,setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false)
const handleOpen = 
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="hotelContainer">
   { open &&  <div className="slider">

      </div>}
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Crown Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Nayapalli Bhubaneswar</span>
          </div>
          <span className="hotelDistance">Excellent Location</span>
          <span className="hotelPriceHighlight">Book a stay over $100 to get free breakfast</span>
          <div className="hotelImages">
              {photos.map((photo,i)=>(
                <div className="hotelImgWrapper">
                  <img src={photo.src} onClick={handleOpen} alt="" className='hotelImg' />
                </div>
              ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the Heart of Bhubaneswar</h1>
              <p className="hotelDesc">Mini desc about Hotel
              </p>
            </div>
            <div className="hotelDetailsPrice"><h1>
              Perfect Stay for long time
            </h1>
            <span>Located in the heart of the city</span>
            <h2>
              <b>$1234</b> (9 Nights)
            </h2>
            <button>Reserve Now</button>
            </div>
          </div>
        </div>
        <MailList />

      </div>
    </div>
  )
}

export default Hotel