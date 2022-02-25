import React, { useState,useEffect } from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import { useParams } from 'react-router-dom';


const ResortDescriptionPage = () => {


  return (
    <div className="grid grid-row-3" id="main-container">

    <Header/>
    <main>
        <section id="resort-description-section">
            <div className="container grid grid-col-4 grid-gap-2">

                <img src="" alt=""/>
            
                <div className="resort-description-content-area">
                    <h2>Title</h2>
                    <p>$70 per night</p>
                    <h3>Details</h3>
                    <p>blah</p>
                </div>
            </div>
        </section>
    </main>
    <Footer/>

</div>
  )
}

export default ResortDescriptionPage