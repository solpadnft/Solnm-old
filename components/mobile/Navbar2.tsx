import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Mob.module.css";



export default function Navbar2() {
  return (

    <>
       
          <div className={styles.nav}>
   

    <div className={styles.navLeft}>
    <Link href="/">
        <Image
          src="/images/lo.png"
          width={70}
          height={30}
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
   

        <Link  className={styles.button} href={"https://market.solnm.com"} >
      <p > Market </p>
      </Link>

      <button className={styles.novbutton} data-tally-open="wdQdQK" data-tally-layout="modal" 
      data-tally-width="1000" data-tally-align-left="1" data-tally-emoji-animation="none" 
      data-tally-auto-close="0">Apply</button>

      </div>
      </div>
    
      
      </>
     
  );
}
export { Navbar2 };
