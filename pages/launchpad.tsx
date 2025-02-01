import {
  Image,
  Text,
  Link
} from "@chakra-ui/react";
import CountdownTimer from "../components/tools/Contdownlunch";
import styles from "../styles/Home.module.css";
import Launchpad from "../components/mobile/Launchpad";

const newyear = new Date('2024-12-25T12:00:00')
const famous = new Date('2024-12-30T12:00:00')
export default function Home() {
  return (
    <>
         <div className={styles.container}>

         <div className={styles.maink}>
              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="10px"
                p="10px"
                m="10px"
                boxShadow={"5px 5px 10px #54688763"}
                backgroundColor={"#222325d8"}
                href={"/lottery"}
              >
              <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" 
              style={{borderRadius: "20px", marginBottom: "10px" }} 
                  width="200px" height="240px" padding="5px 5px 5px 5px" src={"images/1.png"} />
                <Text className={styles.gradientText}>Lottery Gifts</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText}>0.03</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} width="20px" height="20px"
                   src={"/live.gif"} />
                <Text className={styles.gradientText2}>Live</Text>
                
                  </div>
                  </div>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="10px"
                p="10px"
                m="10px"
                boxShadow={"5px 5px 10px #54688763"}
                backgroundColor={"#222325d8"}
                href={"/swapspace"}
              >
              <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" 
              style={{borderRadius: "20px", marginBottom: "10px" }} 
                  width="200px" height="240px"  padding="5px 5px 5px 5px" src={"images/swap.jpeg"} />
                <Text className={styles.gradientText}>SwapSpace</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText}>Free</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} 
                  width="20px" height="20px"
                   src={"/live.gif"} />
                <Text className={styles.gradientText2}>Live</Text>
                
                  </div>
                  </div>
              </Link>

              

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="10px"
                p="10px"
                m="10px"
                boxShadow={"5px 5px 10px #54688763"}
                backgroundColor={"#222325d8"}
                href={""}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" 
                  style={{borderRadius: "20px", marginBottom: "10px" }} 
                  width="200px" height="240px" 
                  padding="5px 5px 5px 5px" src={"images/fam.jpg"} />
                <Text className={styles.gradientText}>Famous</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText}>?</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} 
                  width="20px" height="20px"
                   src={"/upc.gif"} />
                <Text className={styles.gradientText3}>Ubcoming</Text>
                
                  </div>
                  </div>
                  <div className={styles.social}>{ <CountdownTimer deadline={famous} title={''}/> }</div>

              </Link>
              
              
              </div>
      </div>
      <Launchpad />
      </>

        
  );
}
