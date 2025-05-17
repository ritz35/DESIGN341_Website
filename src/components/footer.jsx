import '../css/footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} DESIGN341. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/about">About</a>
                    <a href="/cohort">Cohort</a>
                    <a href="/portfolio">Portfolio</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
