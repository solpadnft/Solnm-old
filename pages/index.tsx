import {
  Link
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Slider from "../components/tools/Carousel";
import MobileHome from "../components/mobile/Home";

export default function Home() {
  return (
  
         <><div className={styles.container}>

      <div>
        <div className={styles.maink2}>


          <div className={styles.maink3}>

            <div className={styles.maink2}>
              <h1 className={styles.h1}> Turn your artwork into jewelry</h1>
              <h1 className={styles.h2}>No-code solution designed for artists</h1>



              <div className={styles.maink3}>
                <Link className={styles.button} href={"/launchpad"}>
                  <p className={styles.gradientText}> Launchpad </p>
                </Link>

                <Link className={styles.button2} href={"https://market.solnm.com"}>
                  <p> Marketplace </p>
                </Link>
              </div>
            </div>

            <div className={styles.slider}><Slider autoPlay={true} /> </div>


          </div>
        </div>
      </div>


    </div>
    <MobileHome />
    </>

        
  );
}