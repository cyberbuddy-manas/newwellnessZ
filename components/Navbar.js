import React from 'react';
import Link from 'next/link';
import styles from "../styles/NavFooter.module.css";

const Navbar = () => {


  function disablenavbar2() {
    let x = document.getElementById("disable")
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else { x.style.display = "block" }
  }

  function disablenavbar() { document.getElementById("disable").style.display = "none"; }




  return (
    <nav className={styles.nav}>


        <div className={styles.iconmenucontainer}>
        <Link href="/">  <img className={styles.logo} src="/logo.png" alt="Logo" /></Link>
          <div className={styles.menuicon} onClick={disablenavbar2}>☰</div>
        </div>


      <ul id="disable" className={styles.navLinks} onClick={disablenavbar}>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link className={styles.contactshow} href="/contact">Contact</Link></li>
      </ul>


      <div className={styles.contact}>
        <Link href="/contact">Talk to Us</Link>

      </div>



    </nav>
  );
};

export default Navbar;
