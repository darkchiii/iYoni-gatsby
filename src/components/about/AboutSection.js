import React from 'react' ;
import './AboutSection.css' ;
import vector1 from '../../images/vector-b-1.png' ;
import vector2 from '../../images/vector-b-2.png' ;
import vector3 from '../../images/vector-b-3.png' ;



function AboutSection() {
    return (
        <section className='about-section'>
            <div className='about-container'>
            {/* <div className='water-marks-1'>
                        <img className='b-vector-1' src='./images/vector-b-1.png' alt='vector-b-1'/> 
                        <img className='b-vector-2' src='./images/vector-b-2.png' alt='vector-b-2'/> 
                    </div> */}
                <div className='pink-rectangle'>
                    {/* <div className='water-marks-1'> */}
                        <img className='b-vector-1' src={vector1} alt='vector-b-1'/>
                        <img className='b-vector-2' src={vector2} alt='vector-b-2'/>
                    {/* </div> */}
                    <h1>Aplikacja iYoni powstała, by kompleksowo wspierać kobiety w dbaniu o płodność i w czasie starań o ciążę. </h1>
                    <h2>Stworzyliśmy narzędzie, które nie tylko pozwala na szczegółowe monitorowanie cyklu, dni płodnych i codziennych aktywności, ale również dostarcza rzetelnej wiedzy, co możesz zrobić, by zwiększyć szansę na poczęcie dziecka.</h2>
                </div>
            </div>


            {/* <img className='vector-b-3' src={vector3} alt='vector-b-3'/> */}



        </section>
    )
}

export default AboutSection
