
import '../head-Our-coffe/head-Our-coffe.css'
import beans from '../../../icons/c1.png'

const AppHeadOur = ({OnchangePage}) => {
    const OurChangePage = () => {
        OnchangePage('our')
    }
    const FirstChangePage = () => {
        OnchangePage('first')
    }
    const ForChangePage = () => {
        OnchangePage('for')
    }
    return (
        <div className="Our-head">
            <div className="containerr">
                <img className='coffe-our' src={beans} alt="coffe-beans" />
                <div className="navv">
                <span className="navigation-our" onClick={FirstChangePage}>Coffee house</span>
                <span className="navigation-our" onClick={OurChangePage}>Our coffee</span>
                <span className="navigation-our" onClick={ForChangePage}>For your pleasure</span>
                </div>
                <h1 className='h-our'>Our Coffee</h1>
            </div>

        </div>
    )}

export default AppHeadOur