import React from 'react' ;
import './BaseSection.css' ;
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "../Item"
import basev1 from '../../images/base-vector-1.png';
import basev2 from '../../images/base-vector-2.png';
import basev3 from  '../../images/base-vector-3.png';
import base1 from '../../images/base1.png';
import base2 from '../../images/base2.png';
import base3 from '../../images/base3.png';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
  ];

function BaseSection() {
    return (



        <section className='base-section'>
             <div className='base-rectangle'>
            <img className='base-v-1' src={basev1} alt='vector-base-1' />
            <img className='base-v-2' src={basev2} alt='vector-base-1' />
            <img className='base-v-3' src={basev3} alt='vector-base-1' />
                {/* <div className='h1-container'> */}
                <h1>Poznaj naszą bazę<br/> wiedzy</h1>
                {/* </div> */}
                <div className='baseContainer'>
                {/* <div className='base-row-1'>
                    <div className='col-row-1'>
                        <img className='base-img' src='./images/base1.png' alt='base1' />
                        <button className='btn'>Twoja płodność i cykl</button>
                    </div>
                    <div className='col-row-1'>
                        <img className='base-img-2' src='./images/base2.png' alt='base2' />
                        <button className='btn'>Płodność Twojego partnera</button>

                    </div>
                    <div className='col-row-1'>
                        <img className='base-img-3' src='./images/base3.png' alt='base3' />
                        <button className='btn'>Szanse na ciążę – od czego zależą</button>
                    </div>
                </div> */}

<div className="carousel-container">
      <Carousel breakPoints={breakPoints}>
        <Item>
        <div className='overlay-wrapper'>
            <div className='img-container'>
                <img className='base-img-1' src={base1} alt='base1' />
             <div className='img-overlay'>
                 <button className="btn">Twoja płodność i cykl</button>
            </div>
            </div>
       </div>
        </Item>

        <Item>
              <div className='overlay-wrapper'>
              <div className='img-container'>
              <img className='base-img-2' src={base2} alt='base2' />
             <div className='img-overlay'>
             <button className='btn'>Płodność Twojego partnera</button>
            </div>
            </div>
       </div>
        </Item>
        <Item>
        <div className='overlay-wrapper'>
        <div className='img-container'>
        <img className='base-img-3' src={base3} alt='base3' />
             <div className='img-overlay'>
                        <button className='btn'>Szanse na ciążę – od czego zależą</button>
            </div>
            </div>
       </div>
        </Item>
      </Carousel>
    </div>
                </div> 
                </div> 
        </section>
    )
}

export default BaseSection

