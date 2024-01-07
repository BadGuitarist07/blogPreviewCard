import '../css/Card.css'
import '../css/responsive.css'
import imgCard from '../assets/images/imgCard.svg'
import imgProfileCard from '../assets/images/image-avatar.webp'

const Card = () => {
    return (
        <div className='cardAll'>
            <div className='imgCard'>
                <img src={imgCard} alt='ImgCard'/>
            </div>
            <div className='spanCard'>
                <span><h2>Learning</h2></span>
            </div>
            <div className='timeCard'>
                <h3>Published 21 Dec 2023</h3>
            </div>
            <div className='titleCard'>
                <h1>HTML & CSS foundations</h1>
            </div>
            <div className='paragraphCard'>
                <p>
                    These lenguages are the backbone of every website, defining structure, content, and presentation.
                </p>
            </div>
            <div className='profileCard'>
                <img src={imgProfileCard} alt='Profile Card'/>
                <h3>Greg Hooper</h3>
            </div>
        </div>
    )
}

export default Card;