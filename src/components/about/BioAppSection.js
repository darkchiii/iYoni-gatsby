import React from 'react' ;
import './BioAppSection.css' ;
import logo from '../../images/logo-footer.png'
import googleStore from '../../images/google-play-store.png'
import bioRec from '../../images/bio-rec.png'
import bioRecMobile from '../../images/bio-rec-mobile.png' 

function BioAppSection() {
    return (
        <section className='bio-store-section'>
            <div className='bio-app-rectangle'>
                <div className='bio-app-container'>
                    <img className='bio-app-logo' src={logo} alt='logo'/>
                    <h3>Technologia i medycyna <br/>
                        w służbie Twoich marzeń.</h3>
                    {/* <div className='bio-store-img-row'>
                            <div className='bio-store-img-col'>
                                <img className='bio-store-img' src='./images/app-store.png' alt='store-img'/>
                            </div>
                            <div className='bio-store-img col'>
                                <img className='bio-store-img' src='./images/google-play-store.png' alt='store-img'/>
                            </div>
                        </div> */}
                        
                     <img className='bio-store-img' src={googleStore} alt='store-img'/>
                        
                     {/* <img className='rec-img' src='./images/bio-rec.png' alt='bio-img'/>
                <img className='rec-img-mobile' src='./images/bio-rec-mobile.png' alt='bio-img-mobile'/> */}
                        </div>

                <img className='rec-img' src={bioRec} alt='bio-img'/>
                <img className='rec-img-mobile' src={bioRecMobile} alt='bio-img-mobile'/>
                {/* </div> */}

            </div>
        </section>
    )
}

export default BioAppSection ;
