import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";



export default function Navbar() {
  return (

    <>
        <div className={styles.navContainer}>
          <div className={styles.nav}>
    <div className={styles.navLeft}>
    <Link href="/">
        <Image
          src="/images/lo.png"
          width={150}
          height={50}
          alt=""
           />
      </Link>
    </div>

    <div className={styles.navMiddle}>
    <Link href="/active">
        <Image
          src="/1.png"
          width={20}
          height={20}
          alt="Active"
           />
      </Link>
      <Link href="/ubcoming">
        <Image
          src="/2.png"
          width={20}
          height={20}
          alt="Ubcoming"
           />
      </Link>
      <Link href="/past">
        <Image
          src="/3.png"
          width={20}
          height={20}
          alt="Past"
           />
      </Link>

    </div>

      <div className={styles.navRight}>
      <Link href="/">
        <Image
          src="/home.png"
          width={35}
          height={35}
          alt=""
          style={{ marginTop: "3px"} }
           />
      </Link>

        <Link  className={styles.button} href={"https://market.solnm.com"} >
      <p > Market </p>
      </Link>

      <button className={styles.button} data-tally-open="wdQdQK" data-tally-layout="modal" 
      data-tally-width="1000" data-tally-align-left="1" data-tally-emoji-animation="none" 
      data-tally-auto-close="0">Apply</button>

      </div>
      </div>
      </div>
      
      </>
     
  );
}
export { Navbar };
