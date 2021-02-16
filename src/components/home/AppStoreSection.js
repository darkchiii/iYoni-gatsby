import React from 'react' ;
import './AppStoreSection.css' ;
import storeImg from '../../images/google-play-store.png'
import elipsa from '../../images/elipsa.png'
import phoneMockup from '../../images/phone-mockup.png'

function AppStoreSection() {
    return (
        <section className='app-store-section'>
            <div className='rectangle'>
                <div className='app-store-row'>
                    <div className='app-column-1'>
                        <h3>Zadbaj o swoją płodność z 
                        <b className='pink'> iYoni</b>
                        </h3>
                        {/* <div className='store-img-row'>
                            <div className='store-img-col'>
                                <img className='store-img' src='./images/app-store.png' alt='store-img'/>
                            </div>
                            <div className='store-img col'>
                                <img className='store-img' src='./images/google-play-store.png' alt='store-img'/>
                            </div>
                        </div> */}

                        {/* <div className='google-store-wrap' > */}
                        <a href='https://play.google.com/store/apps/details?id=pl.lifebite.iyoni'>
                        <img className='store-img' src={storeImg} alt='store-img'/>
                        </a>
                   {/* </div> */}
                    </div>
                </div>
                <img className='ellipse' src={elipsa} alt='elipsa'/>
                <img className='phone-img' src={phoneMockup} alt='phone-img'/>
            </div>
        </section>
    )
}

export default AppStoreSection
