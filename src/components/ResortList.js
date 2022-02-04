import React from 'react';

import ResortItem from "./ResortItem";
import image1 from "../assets/img/resort1.webp";
import image2 from "../assets/img/resort2.webp";
import image3 from "../assets/img/resort3.webp";
import image4 from "../assets/img/resort4.webp";

const ResortList = () => {
  return (
    <section id="section-resort-list">
      <div className= "container">
      
          <h1>Featured Resort</h1>

          <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
                <ResortItem title="Senca College Room" image = {image1} price="70" />
                <ResortItem title="Paris Hotel" image = {image2}  price="260"/>
                <ResortItem title="Trinidad and Tobago private room" image = {image3}  price="150"/>
                <ResortItem title="Toronto Guest House" image = {image4}  price="65"/>
          </div>

      </div>

    </section>

  );
};

export default ResortList;
