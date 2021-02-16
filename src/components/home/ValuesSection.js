import React from 'react' ;
import './ValuesSection.css' ;
import valuesIcon1 from '../../images/values1.png'
import valuesIcon2 from '../../images/values2.png' 
import valuesIcon3 from '../../images/values3.png' 

function ValuesSection() {
    return (
        <section className='values-section-container'>
            <div className='values-rectangle'>
                <h1>Poznaj nasze<br/>wartości</h1>
                <div className='values-row'>
                    <div className='values-col-1'>
                        <img className='values-icon' src={valuesIcon1} alt='val1'/>
                    </div>
                    <div className='values-col-2'>
                        <h3>Tylko sprawdzone<br/> informacje i dobre praktyki</h3>
                    </div>
                    <div className='values-col-3'>
                        <p>Dane, z których korzystamy, zostały opracowane przez lekarzy, na co dzień pracujących z parami starającymi się o ciążę. Bazują na <strong className='strong'>aktualnej wiedzy, rekomendacjach polskich i międzynarodowych towarzystw medycznych i wynikach badań naukowych.</strong></p>
                    </div>
                </div>

<hr className='values-hr'/>

                <div className='values-row'>
                    <div className='values-col-1'>
                    <img className='values-icon' src={valuesIcon2} alt='val2'/>
                    </div>
                    <div className='values-col-2'>
                        <h3>Bezpieczeństwo Twoich<br/> danych to nasz<br/> priorytet</h3>
                    </div>
                    <div className='values-col-3'>
                        <p>Zdajemy sobie sprawę, że Twój profil w iYoni może zawierać wrażliwe informacje nt. Twojego zdrowia i płodności. Dlatego dokładamy wszelkich starań, byś miała pewność, że <strong className='strong'> Twoje dane są bezpieczne. Działamy zgodnie z przepisami prawa polskiego i dyrektyw Unii Europejskiej w zakresie ochrony danych.</strong></p>
                    </div>
                </div>

<hr className='values-hr'/>

                <div className='values-row'>
                    <div className='values-col-1'>
                    <img className='values-icon' src={valuesIcon3} alt='val3'/>
                    </div>
                    <div className='values-col-2'>
                        <h3>Transparentność – bez<br/> reklam i nachalnego<br/> marketingu</h3>
                    </div>
                    <div className='values-col-3'>
                        <p>

Korzystamy z wiedzy specjalistów i technologii z zakresu sztucznej inteligencji. Chcemy, by w przyszłości nasze prognozy, przewidywania i rekomendacje były jeszcze dokładniejsze. Ten proces wymaga inwestycji, dlatego część funkcjonalności jest dostępna wyłącznie w ramach <strong className='strong'>opcji Premium – z pozyskanych w ten sposób środków finansujemy nasze badania i udoskonalenia w aplikacji.</strong>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ValuesSection
