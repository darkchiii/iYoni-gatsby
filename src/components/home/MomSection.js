import React from 'react' ;
import './MomSection.css' ;
import mom from '../../images/happy-mom.png'
import vectorMom from '../../images/vector-mom.png'

function MomSection() {
    return (
        <section className='mom-section-container'>
            <div className='happy-mom-container'>
                <div className='happy-mom-row'>
                    <div className='mom-column1'>
                    <img className='happy-mom-pic' src={mom} alt='happy-mom'/>
                    </div>
                    <div className='mom-column2-rectangle'>
                    {/* <div className='quote-icon'>
                        <i className="fas fa-quote-left"/>
                    </div> */}
                        <div className='text-wrapper'>
                        <div className='quote-icon'>
                        <i className="fas fa-quote-left"/>
                        </div>
                        <div className='p2'>To działa! Jestem teraz mamą! <br/> Polecam w 100%</div>
                        <div className='p3'>~Basia, mama Kuby i Kasi.</div>
                        <div className='base-button-wrapper'> 
                        <button className='base-button'>Poznaj historię Basi</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='vector-mom' src={vectorMom} alt='vector-mom'/>
            <div className='text-wrapper2'>
                <h1>Podjęłaś dezycję i<br/>chcesz zostać mamą?</h1> 
                <p className='p1'><span>Zwiększ swoje szanse na zajście ciąże i zadbaj o płodność. </span> <br/>Dowiedz się, co na nią wpływa, prowadź „płodny” styl życia, z <br/> rozsądkiem się badaj. 
                    Jeśli to konieczne – świadomie przejdź<br/> przez proces leczenia.
                </p>
                <p className='p-rec'>
                        iYoni jest po to, żeby Ci pomóc
                    </p>
                <div className='mom-rectangle'>
                </div>
            </div>
        </section>
    )
}

export default MomSection
