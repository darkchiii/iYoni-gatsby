import React from 'react' ;
import './FunctionsSection.css' ;
import fun1 from '../../images/fun1.png' ;
import fun2 from '../../images/fun2.png';
import fun3 from '../../images/fun3.png';
import fun4 from '../../images/fun4.png';
import fun5 from '../../images/fun5.png';
import fun6 from '../../images/fun6.png';
import fun7 from '../../images/fun7.png' ;
import googleStore from '../../images/google-play-store.png'


function FunctionsSection() {
    return (
        <section className='functions-section'>
            <h1>Funkcje aplikacji</h1>
            
<div className='flex-wrapper-a'>
    <div className='flex-container'>
        <div className='flex-col-container-a'>
            <img className='fun-icon' src={fun1} alt='1'/>    
            <p className='fun-description'>Monitoring cyklu i dni płodnych</p>
        </div>
        <div className='flex-col-container-a'>
            <img className='fun-icon' src={fun2} alt='2'/>    
            <p className='fun-description'>Rejestracja codziennych aktywności</p>
        </div>
        <div className='flex-col-container-a'>
            <img className='fun-icon' src={fun3} alt='3'/>    
            <p className='fun-description'>Spersonalizowane raporty i wskazówki</p>
        </div>
        <div className='flex-col-container-a'>
            <img className='fun-icon' src={fun4} alt='4'/>    
            <p className='fun-description'>Prognozy szans na ciążę</p>
        </div>
    </div>
</div>

<div className='flex-wrapper-b'>
    <div className='flex-container'>
        <div className='flex-col-container-b'>
            <img className='fun-icon-a' src={fun5} alt='5'/>    
            <p className='fun-description-d'>Podpowiedzi dla Ciebie, co zrobić, by zajść w ciążę * </p>
            <p className='fun-info-a'>Wkrótce</p>
        </div>
        <div className='flex-col-container-b'>
            <img className='fun-icon' src={fun6} alt='6'/>    
            <p className='fun-description-c'>Powiadomienia dla partnera *</p>
            <p className='fun-info-b'>Wkrótce</p>
        </div>
        <div className='flex-col-container-b'>
            <img className='fun-icon' src={fun7} alt='7'/>    
            <p className='fun-description-b'>Ekspercka baza wiedzy</p>
        </div>

    </div>
</div>


{/* <div className='app-stores-wrapper'>
                <div className='store-row'>
                    <div className='store-column'>
                        <img className='store-img' src='./images/app-store.png' alt='apple-store'/>
                    </div>
                    <div className='store-column'>
                        <img className='store-img' src='./images/google-play-store.png' alt='google-store'/>
                    </div>
                </div>
            </div>  */}

            <div className='google-store-wrapper'>
                <a href='https://play.google.com/store/apps/details?id=pl.lifebite.iyoni'>
            <img className='store-img-2' src={googleStore} alt='google-store'/>
                </a>
            </div>


        </section>
    )
}

export default FunctionsSection