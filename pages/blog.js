import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "../styles/blog.module.css"
import Image from "next/image"
import Link from "next/link"

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

                    <h1>Blog</h1>
                    <p>Got a question about the WellnessZ App or wish to reach out to Us for Anything Else ?</p>

                    <div className={styles.grid}>

                        <div className={styles.card1}>
                            <div className={styles.link}>
                                <Link href="/">
                                    <Image src="/blog.webp" height={248} width={323} />
                                    <h2>The Wellness Loop</h2>
                                    <div className={styles.readmore}>Readmore <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
                                        <path d="M3.57218 14.3807L8.98268 8.97017C9.79738 8.15546 9.79738 6.83939 8.98268 6.02468L3.57218 0.614189C2.25611 -0.701878 0 0.23817 0 2.09737L0 12.9184C0 14.7776 2.25611 15.6967 3.57218 14.3807Z" fill="#7AC143" />
                                    </svg></div>
                                </Link>
                            </div>
                        </div>


                        <div className={styles.card1}>
                            <div className={styles.link}>
                                <Link href="/">
                                    <Image src="/blog.webp" height={248} width={323} />
                                    <h2>The Wellness Loop</h2>
                                    <div className={styles.readmore}>Readmore <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
                                        <path d="M3.57218 14.3807L8.98268 8.97017C9.79738 8.15546 9.79738 6.83939 8.98268 6.02468L3.57218 0.614189C2.25611 -0.701878 0 0.23817 0 2.09737L0 12.9184C0 14.7776 2.25611 15.6967 3.57218 14.3807Z" fill="#7AC143" />
                                    </svg></div>
                                </Link>
                            </div>
                        </div>



                        <div className={styles.card1}>
                            <div className={styles.link}>
                                <Link href="/">
                                    <Image src="/blog.webp" height={248} width={323} />
                                    <h2>The Wellness Loop</h2>
                                    <div className={styles.readmore}>Readmore <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
                                        <path d="M3.57218 14.3807L8.98268 8.97017C9.79738 8.15546 9.79738 6.83939 8.98268 6.02468L3.57218 0.614189C2.25611 -0.701878 0 0.23817 0 2.09737L0 12.9184C0 14.7776 2.25611 15.6967 3.57218 14.3807Z" fill="#7AC143" />
                                    </svg></div>
                                </Link>
                            </div>
                        </div>



                    </div>

                </div>


                <div className={styles.back5}>
                    <div className={styles.givingmargin}>
                        <div className={styles.lastcontainer}>

                            <div className={styles.lastgrid}>
                                <div className={styles.lastgriditem1}>
                                    <Image src="/iphone.png" height={450} width={600} className={styles.lastImgage} />
                                </div>

                                <div className={styles.lastgriditem2}>
                                    <div className={styles.imgcontainer}>  <Image src="/logo.png" height={100} width={100} /></div>
                                    <div className={styles.lastheading}>Get The Best Wellness CRM</div>
                                    <p>The Best Wellness Crm for Wellness CRM</p>

                                    <br /><br />
                                    <button><a href="#"> Comming Soon </a></button>
                                    <br /><br />

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