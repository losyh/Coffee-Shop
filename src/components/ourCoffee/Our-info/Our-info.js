import girl from '../../../img/girl-our-body.jpg'
import beans from '../../../icons/c2-black (2).png'
import './Our-info.css'


const OurInfo = () => {

    return (
        <div className="container">
            <div className="d-flex  flex-row mb-3 justify-content-center">
                <div className="img-girl">
                        <img src={girl} className='girl' alt="girl wits coffe" />
                    </div>
                    <div className="our-text">
                        <h2 className='about'>About our beans</h2>
                        <img src={beans} className='beans-black' alt="" />
                        <div className="our-info">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br />
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. <br />
                            As greatly removed calling pleased improve an. Last ask him cold feel <br />
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}

export default OurInfo 