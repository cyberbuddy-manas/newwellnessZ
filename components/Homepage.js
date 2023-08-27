import styles from "../styles/Home.module.css";
import Image from "next/image";
import Navbar from "./Navbar";

const Homepage = () => {
  return (

    <>
      <div className={styles.firstbackground}>

        <Navbar />

        <div className={styles.row}>

          <div className={styles.column1}>
            <h1>The Best Wellness CRM For Wellness Coaches</h1>
            <br />
            <br />
            <p>The Best Wellness CRM</p>
            <p>For Wellness Coaches</p>

            <br />
            <br />
            <br />
            <br />

            <button><a href="#">Download Now</a></button>

          </div>

          <div className={styles.column2}>
            <Image className={styles.mainImg} src="/phone.png" width={480} height={500} />
            <Image className={styles.screen1} src="/screen1.png" height={330} width={120} />
            <Image className={styles.screen2} src="/screen2.png" height={330} width={150} />

          </div>

        </div>

        <div className={styles.row2}>

          <div className={styles.column3}>
            <Image src="/greenbag.png" width={600} height={400} />
          </div>


          <div className={styles.column4}>

            <h2>Your Wellness Managed By Our CRM Technology</h2>
            <br />
            <br />
            <p>The Best Wellness CRM</p>
            <p>For Wellness Coaches</p>
            <br />
            <br />

          </div>

        </div>


      </div>



      <div className={styles.back}>
        <div className={styles.gridcontainer}>

          <div className={styles.griditem}><Image src="/Air Balloon 6.png" height={200} width={200} /></div>


          <div className={styles.griditem2}>
            <img className={styles.PhoneIMG} src="/phone000.png" />
          </div>


          <div className={styles.griditem3}><Image src="/Air Balloon 1.png" height={200} width={200} /></div>
        </div>

        <div className={styles.explorebtn}> <button><a href="#">Download Now</a></button></div>
      </div>




      <div className={styles.back2}>
        <div className={styles.rowcontainer}>
          <div className={styles.rowitem1}>
            <img className={styles.circphone} src="/cricphone0.png" />
          </div>
          <div className={styles.rowitem2}>
            <div className={styles.heading}>The Best Wellness CRM </div>
            <div className={styles.heading}>for Wellness Coaches</div>
            <div className={styles.givemargin}>
              <p>The Best Wellness Crm</p>
              <p>For Wellness Coaches</p>
            </div>
          </div>
        </div>
        <br /><br />
      </div>



      <div className={styles.points}>
        <div className={styles.box}><p>Record Daily Order</p></div>
        <div className={styles.box}><p>Create Custom Kits</p></div>
        <div className={styles.box}><p>Manage Your Clients</p></div>
        <div className={styles.box}><p>Create and Share Meal Plans</p> </div>
      </div>



      <div className={styles.back2}>
        <div className={styles.rowcontainer2}>

          <div className={styles.rowitem11}>
            <div className={styles.heading}>The Best Wellness CRM </div>
            <div className={styles.heading}>for Wellness Coaches</div>
            <div className={styles.givemargin}>
              <p>The Best Wellness Crm</p>
              <p>For Wellness Coaches</p>
            </div>
          </div>

          <div className={styles.rowitem22}>
            <img className={styles.circphone2} src="/circlephone2.png" />
          </div>
        </div>
        <br /><br />
      </div>



      <div className={styles.points}>
        <div className={styles.box2}><p>Manage Your Earnings</p></div>
        <div className={styles.box2}><p>Engage With Community</p></div>
        <div className={styles.box2}><p>Get Progress Analytics</p></div>
        <div className={styles.box2}><p>Wellneess Z Team</p> </div>
        
      </div>
      



<div className={styles.back3}>

<div className={styles.circontainer}>
<div className={styles.circle}>
<div className={styles.circle2}>
<div className={styles.circle3}></div>
</div>
</div>
</div>

</div>



    </>
  )
}

export default Homepage