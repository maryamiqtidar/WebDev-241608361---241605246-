import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import StoneProducts from './stoneproduct';
import Granite from './granite'; // Import Granite component
import Marbles from './marbles';
import Mosaics from './mosaics';
import SolidWorks from "./solidworks";
import FirePlace from "./fireplaces";
import TableTops from "./tabletops";
import Bowls from "./bowls";
import FloorBorder from "./floorborder";

export default function Main() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    adaptiveHeight: true,
    appendDots: (dots) => (
      <div>
        <div className="custom-dots-container">
          <ul style={{ margin: "0" }}>{dots}</ul>
        </div>
      </div>
    ),
  };

  return (
    <main>
      <h1 style={{ color: 'green', fontWeight: 'bold', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" , marginTop: '70px' }}>SHARP STONE COMPANY</h1>
        <Slider {...sliderSettings}>
        <div>
          <img src="frontmarble2.jpg" alt="front marble" className="frontimg" />
        </div>
        <div>
          <img src="frontmarble3.jpg" alt="green marble" className="frontimg" />
        </div>
        <div>
          <img src="frontpage.png" alt="green marble" className="frontimg" />
        </div>
      </Slider>

      

      <div className="container" style={{ marginTop: "-250px" }}> 
        <div className="row">
          <div className="col-md-4 mb-4">
            <h1>NATURAL STONE</h1>
            <p>Marble of the World’s accessories have the power to enhance, elevate, empower, and soften your design. Go from the ordinary to the extraordinary, from the average to the sublime with just the right use of accessories and decorative elements from Marble of the World.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h1>MANMADE SURFACES</h1>
            <p>Marble of the World’s accessories have the power to enhance, elevate, empower, and soften your design. Go from the ordinary to the extraordinary, from the average to the sublime with just the right use of accessories and decorative elements from Marble of the World.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h1>ACCESSORIES</h1>
            <p>Marble of the World’s accessories have the power to enhance, elevate, empower, and soften your design. Go from the ordinary to the extraordinary, from the average to the sublime with just the right use of accessories and decorative elements from Marble of the World.</p>
          </div>
        </div>
      </div>
      <h1> STONE PRODUCTS </h1>
      <StoneProducts />
      <div className="container">
        <div className="row">
          {/* Left side: Granite component */}
          <div className="col-md-6">
          <h1> GRANITE </h1>
            <Granite />
          </div>

          {/* Right side: Marbles component */}
          <div className="col-md-6">
          <h1> MARBLES </h1>
            <Marbles />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Left side: Mosaic component */}
          <div className="col-md-6">
          <h1> Mosaics </h1>
            <Mosaics />
          </div>

          {/* Right side: Solid Work component */}
          <div className="col-md-6">
          <h1> Solid Work </h1>
            <SolidWorks />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Left side: Fireplace component */}
          <div className="col-md-6">
          <h1> Fire Places </h1>
            <FirePlace />
          </div>

          {/* Right side: Tavle Tops component */}
          <div className="col-md-6">
          <h1> Table Tops </h1>
            <TableTops />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Left side: Bowls component */}
          <div className="col-md-6">
          <h1> Bowls </h1>
            <Bowls />
          </div>

          {/* Right side: Floor Border component */}
          <div className="col-md-6">
          <h1> Floor Borders </h1>
            <FloorBorder />
          </div>
          
        </div>
      </div>

      <div className="background-container">
  <img src="greenmarble.jpg" alt="green marble" className="greenimg" />
  <div className="overlay-text">
    <h1>THE GIFT OF LUXURY</h1>
    <h1>AMAZONITE QUARTZITE</h1>
    <h1>NATURES LUXURY SURFACES</h1>
    <h1>WELCOME TO SHARP STONE COMPANY</h1>
    <p>
    SHARP STONE COMPANY is the leading Onyx, Marble, Granite, and sandstone processing
      and exporting company from Pakistan. We are a leading supplier of these
      stones from Pakistan to the world market only due to our continued efforts
      for utmost quality achievement.
    </p>
  </div>

  <div className="black-footer">
        <p> Contact: +92 3357408090</p>
        <p>  © 2024 Stone Company. All Rights Reserved.</p>
      </div>
</div>

    </main>
  );
}