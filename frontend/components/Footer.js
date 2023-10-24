import styles from "../styles/NavFooter.module.css"
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {


  // const currentYear = new Date().getFullYear();

  return (
    <div className={styles.fbackground}>
      <div className={styles.footercontainer}>

        <div className={styles.footergrid}>

          <div className={styles.fgriditem1}>
           <Link href="/"> <Image src='/logo.png' width={150} height={150} alt="wellnessz Logo"/></Link>
            <div className={styles.flogopara}>
              <p>The Best Wellness Crm</p>
              <p>For Wellness Coaches</p>
            </div>
          </div>


          <div className={styles.fgriditem2}>
            <div className={styles.Fgridcontainer}>
              <div className={styles.Fgriditem}>
                <div className={styles.Fgriditem11}>Company</div>
                <div className={styles.Fgriditem22}><Link href='/about'>About Us</Link></div>
              </div>

              <div className={styles.Fgriditem}>
                <div className={styles.Fgriditem11}>Legal</div>
                <div className={styles.Fgriditem22}><Link href='#'>Terms & Conditions</Link></div>
              </div>


              <div className={styles.Fgriditem}>
                <div className={styles.Fgriditem11}>Resources</div>
                <div className={styles.Fgriditem22}><Link href='/blog'>Blog</Link></div>
              </div>
            </div>

            <div className={styles.iconsdiv}>
              <a href="#">   <FontAwesomeIcon icon={faLinkedin}  /></a>
              <a href="#">  <FontAwesomeIcon icon={faInstagram}  /></a>
              <a href="#">  <FontAwesomeIcon icon={faTwitter}  /></a>
              <a href="#">  <FontAwesomeIcon icon={faGithub}  /></a>
              <a href="#">  <FontAwesomeIcon icon={faFacebook}  /></a>
            </div>


          </div>

        </div>
      </div>

    </div>

  )
}

export default Footer