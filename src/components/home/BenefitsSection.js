import React from 'react' ;
import './BenefitsSection.css' ;
import vectorBenefits from '../../images/vector-b-3.png'
import iphoneMockup from '../../images/iphone-mockup.png'
import listVector from '../../images/list-vector.png'

function BenefitsSection() {
    return (
        <section className='benefits-section' >
            <img className='vector-benefits' src={vectorBenefits} alt='vector-b-3'
               />
        <div className='list'>
            <div className='iphone-mockup-box'> 
            <img className='iphone-mockup' src={iphoneMockup} alt='ip-mockup'/>
            </div>
    <ul className='bList'> 
    <li className='bListItem'>
            <div className='bIcon'>
              <img className='benefits-vector-style' src={listVector} alt='vector' />
            </div>
            <div className='bContainer'>
              <div className='bHeading'>
                Poznajesz lepiej swoje ciało i czynniki wpływające na Twoją płodność
              </div>
              <div className='bDescription'>
                Sprawdzone metody stworzone przez lekarzy.
              </div>
            </div>
          </li>
          <li className='bListItem'>
            <div className='bIcon'>
              <img className='benefits-vector-style' src={listVector} alt='vector' />
            </div>
            <div className='bContainer'>
              <div className='bHeading'>
              Możesz precyzyjnie przewidywać dni płodne i przebieg cykli              </div>
              <div className='bDescription'>
              Kalendarz cyklu, historia zdrowia.
              </div>
            </div>
          </li>
          <li className='bListItem'>
            <div className='bIcon'>
              <img className='benefits-vector-style' src={listVector} alt='vector' />
            </div>
            <div className='bContainer'>
              <div className='bHeading'>
              Otrzymujesz raporty i spersonalizowane wskazówki dot. Twojego zdrowia i starań              </div>
              <div className='bDescription'>
              Porady od renomowanych lekarzy ginekologów na każdy etap ciąży.
              </div>
            </div>
          </li>
          <li className='bListItem'>
            <div className='bIcon'>
              <img className='benefits-vector-style' src={listVector} alt='vector' />
            </div>
            <div className='bContainer'>
              <div className='bHeading'>
              Sprawdzasz, jak zwiększyć szansę na poczęcie dziecka              </div>
              <div className='bDescription'>
              Masz dostęp do bazy wiedzy, statystyk i rekomendacji, opracowanych przez ekspertów              </div>
            </div>
          </li>
          <li className='bListItem'>
            <div className='bIcon'>
              <img className='benefits-vector-style' src={listVector} alt='vector' />
            </div>
            <div className='bContainer'>
              <div className='bHeading'>
              Dowiadujesz się, jak diagnozować i leczyć zaburzenia płodności, by zostać mamą.                </div>
              <div className='bDescription'>
              Jeśli zajdzie potrzeba, zostaniesz przekierowana na działania, które zwiększą szanse na ciążę                </div>
            </div>
          </li>
 
        </ul>
     </div> 
        </section>
    )
}

export default BenefitsSection
