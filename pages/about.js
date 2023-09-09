import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "../styles/about.module.css"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Blog = () => {
    return (
        <>
            <div className={styles.firstbackground}>
                <Navbar />

                <div className={styles.top}>
                    <Image className={styles.mainImg} src="/phone.png" width={480} height={500} />
                    <Image className={styles.screen1} src="/screen1.png" height={330} width={120} />
                    <Image className={styles.screen2} src="/screen2.png" height={330} width={150} />
                </div>

                <div className={styles.blog}>

                    <h1>Our Story</h1>
                    <p>the best wellness crm  for wellness coaches the best wellness crm for wellness coaches the best wellness crm for wellness coaches the best wellness crm  for wellness coaches the best wellness crm for wellness coaches the best wellness crm for wellness coaches the best wellness crm for wellness coaches the best wellness crm for wellness coaches the best wellness crm for wellness coaches the best wellness crm for wellness coaches the best wellness crm for wellness coaches the best wellness crm
                        for wellness coaches</p>
                </div>



                <div className={styles.Gcontainer}>

                    <h1>Team</h1>


                    <div className={styles.owner}>
                        <Image className={styles.ownerImg} src="/pranav.jpeg" width={350} height={350} />
                        <div className={styles.name}>
                            <div className={styles.ownername}>Simarpreet Singh</div>
                            <div className={styles.icons}>
                                <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                            </div>
                        </div>

                    </div>



                    
                        <div className={styles.grid}>


                            <div className={styles.card1}>
                                <Image src="/pranav.jpeg" height={300} width={300} />
                                <div className={styles.name}>
                                    <div className={styles.ownername}>Simarpreet Singh</div>
                                    <div className={styles.icons}>
                                        <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                        <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                        <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.card1}>
                                <Image src="/pranav.jpeg" height={300} width={300} />
                                <div className={styles.name}>
                                    <div className={styles.ownername}>Simarpreet Singh</div>
                                    <div className={styles.icons}>
                                        <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                        <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                        <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.card1}>
                                <Image src="/pranav.jpeg" height={300} width={300} />
                                <div className={styles.name}>
                                    <div className={styles.ownername}>Simarpreet Singh</div>
                                    <div className={styles.icons}>
                                        <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                        <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                        <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                                    </div>
                                </div>
                            </div>



                            <div className={styles.card1}>
                                <Image src="/pranav.jpeg" height={300} width={300} />
                                <div className={styles.name}>
                                    <div className={styles.ownername}>Simarpreet Singh</div>
                                    <div className={styles.icons}>
                                        <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                                        <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                                        <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                







                <div className={styles.back5}>
                    <div className={styles.givingmargin}>
                        <div className={styles.lastcontainer}>

                            <div className={styles.lastgrid}>
                                <div className={styles.lastgriditem1}>
                                    <Image src="/iphone.png" height={430} width={600} className={styles.lastImgage} />
                                </div>

                                <div className={styles.lastgriditem2}>
                                    <div className={styles.imgcontainer}>  <Image src="/logo.png" height={100} width={100} /></div>
                                    <div className={styles.lastheading}>Get The Best Wellness CRM</div>
                                    <p>The Best Wellness Crm for Wellness CRM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <Footer />

        </>
    )
}

export default Blog