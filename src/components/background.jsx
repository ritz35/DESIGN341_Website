import '../css/background.css'
import bg_vid from '/video/bg.mp4'
import fallback_image from '../assets/bg_white.webp'

function Background(){
    return(
        <div className='bg_wrapper'>
            <video autoPlay loop muted playsInline poster={fallback_image} className='bg_video'>
                <source src={bg_vid} type='video/mp4' />
                    Browser does not support video tag
            </video>

            <div className='bg_content'>
                {/*can put heaps of assets here yayyaa */}
            </div>
        </div>
    )
}

export default Background