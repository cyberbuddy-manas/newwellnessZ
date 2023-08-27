import Link from 'next/link'
import styles from "../styles/NavFooter.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {


  const currentYear = new Date().getFullYear();

  return (
    <>

      <footer className={styles.footerbackground} >
        <div className={styles.footergrid}>

          <div className={styles.footerbox1} >
            <div className={styles.footerheading00}>WellnessZ</div>
            <div>Coding4U is a blog website where users can publish their articles related to programming or computer science field. It is designed to help individuals learn programming concepts, languages, and best practices. </div>

            <div className={styles.Iconsdiv}>

              <a href="#">   <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
              <a href="#">  <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
              <a href="#">  <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
              <a href="#">  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
              <a href="#">  <FontAwesomeIcon icon={faFacebook} size="2x" /></a>


            </div>
          </div>



          <div className={styles.footerbox}>
            <div className={styles.footerheading}>Company</div>
            <ul>
              <li> <Link href="#">About Us </Link>  </li>
              <li> <Link href="#">Careers </Link>  </li>
              <li> <Link href="#">Contact </Link>  </li>
              <li> <Link href="#">Disclaimer </Link>  </li>
            </ul>
          </div>



          <div className={styles.footerbox}>
            <div className={styles.footerheading}>Legal</div>
            <ul>
              <li> <Link href="#">Return Policy </Link>  </li>
              <li> <Link href="#">Privacy Policy </Link>  </li>
              <li> <Link href="#">Terms & Conditions </Link>  </li>
              <li> <Link href="#">Logistics </Link>  </li>
            </ul>
          </div>





          <div className={styles.footerbox}>

            <div className={styles.footerheading}>Resources</div>
            <ul>
              <li><Link href="#">Blog </Link></li>

            </ul>
          </div>

        </div>


        <div className={styles.footercopyright}>Copyright {currentYear} @ WellnessZ | All Rights Reserved | Made with ❤️</div>

      </footer>
    </>

  )
}

export default Footer