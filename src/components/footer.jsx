import '../css/footer.css';
import unilogo from '../assets/unilogowhite.svg'
import unilogoblack from '../assets/unilogoblack.svg'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p className='l1'>A showcase of projects created by final-year Bachelor of Design students</p>
                <p className='l2'>&copy; {new Date().getFullYear()} www.designshow.waikato.ac.nz</p>
                                <div className='footer-image'>
                    <img src={unilogoblack} />
                </div>
                
                <div className="footer-links">
                    <a href="/DESIGN341_Website/cohort">Cohort</a>
                    <a href="/DESIGN341_Website/portfolio">Portfolio</a>
                    <a href="/DESIGN341_Website/contacts">Contacts</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
