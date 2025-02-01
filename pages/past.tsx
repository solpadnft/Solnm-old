import {
  Image,
  Text,
  Link
} from "@chakra-ui/react";

import styles from "../styles/Home.module.css";
import Past from "../components/mobile/Past";

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
                href={""}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" 
                  style={{borderRadius: "20px", marginBottom: "10px" }} 
                   width="200px" height="200px"  
                  padding="5px 5px 5px 5px" src={"images/rich.jpeg"} />
                <Text className={styles.gradientText}>Choose Rich</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText}>0.69</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} 
                  width="20px" height="20px"
                   src={"/3.png"} />
                <Text className={styles.gradientText4}>Ended</Text>
                
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
                   width="200px" height="200px"  
                  padding="5px 5px 5px 5px" src={"images/3k.jpeg"} />
                <Text className={styles.gradientText}>3ksp</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText}>3</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} 
                  width="20px" height="20px"
                   src={"/3.png"} />
                <Text className={styles.gradientText4}>Ended</Text>
                
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
                   width="200px" height="200px" 
                  padding="5px 5px 5px 5px" src={"images/wl.jpeg"} />
                <Text className={styles.gradientText}> Presale Whitelist</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText}>0.02</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} 
                  width="20px" height="20px"
                   src={"/3.png"} />
                <Text className={styles.gradientText4}>Ended</Text>
                
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
                   width="200px" height="200px" 
                  padding="5px 5px 5px 5px" src={"images/pass.jpeg"} />
                <Text className={styles.gradientText}> Solpad Pass</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText}>1</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} 
                  width="20px" height="20px"
                   src={"/3.png"} />
                <Text className={styles.gradientText4}>Ended</Text>
                
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
                   width="200px" height="200px" 
                  padding="5px 5px 5px 5px" src={"images/4.png"} />
                <Text className={styles.gradientText}>Demo tickets</Text>

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
                   src={"/3.png"} />
                <Text className={styles.gradientText4}>Ended</Text>
                
                  </div>
                  </div>
              </Link>
              
              </div>
      </div>
      <Past />
      </>

        
  );
}
