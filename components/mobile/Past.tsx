import {
  Image,
  Text,
  Link,
  SimpleGrid
} from "@chakra-ui/react";
import CountdownTimer from "../../components/tools/Contdownlunch";
import styles from "../../styles/Mob.module.css";
import { FC } from 'react';

const newyear = new Date('2024-12-25T12:00:00')
const famous = new Date('2024-12-30T12:00:00')
export const Active: FC = () => {
  return (
    
         <div className={styles.container2}>

        
          <SimpleGrid columns={2} spacing={5} m={5}>


          <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="10px"
                p="10px"
                boxShadow={"5px 5px 10px #54688763"}
                backgroundColor={"#222325d8"} 
                href={""}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" 
                  style={{borderRadius: "20px", marginBottom: "10px" }} 
                  width="200px" height="150px" padding="5px 5px 5px 5px"  
                  src={"images/rich.jpeg"} />
                <Text className={styles.gradientText2}>Choose Rich</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText3}>0.69</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} 
                  width="20px" height="20px"
                   src={"/3.png"} />
                <Text className={styles.gradientText3}>Ended</Text>
                
                  </div>
                  </div>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="10px"
                p="10px"
                boxShadow={"5px 5px 10px #54688763"}
                backgroundColor={"#222325d8"}
                href={""}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" 
                  style={{borderRadius: "20px", marginBottom: "10px" }} 
                  width="200px" height="150px"  
                  padding="5px 5px 5px 5px" src={"images/3k.jpeg"} />
                <Text className={styles.gradientText2}>3ksp</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText3}>3</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} 
                  width="20px" height="20px"
                   src={"/3.png"} />
                <Text className={styles.gradientText3}>Ended</Text>
                
                  </div>
                  </div>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="10px"
                p="10px"
                boxShadow={"5px 5px 10px #54688763"}
                backgroundColor={"#222325d8"}
                href={""}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" 
                  style={{borderRadius: "20px", marginBottom: "10px" }} 
                   width="200px" height="150px" 
                  padding="5px 5px 5px 5px" src={"images/wl.jpeg"} />
                <Text className={styles.gradientText2}> Presale Whitelist</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText3}>0.02</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} 
                  width="20px" height="20px"
                   src={"/3.png"} />
                <Text className={styles.gradientText3}>Ended</Text>
                
                  </div>
                  </div>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="10px"
                p="10px"
                boxShadow={"5px 5px 10px #54688763"}
                backgroundColor={"#222325d8"}
                href={""}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" 
                  style={{borderRadius: "20px", marginBottom: "10px" }} 
                   width="200px" height="150px" 
                  padding="5px 5px 5px 5px" src={"images/pass.jpeg"} />
                <Text className={styles.gradientText2}> Solpad Pass</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText3}>1</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} 
                  width="20px" height="20px"
                   src={"/3.png"} />
                <Text className={styles.gradientText3}>Ended</Text>
                
                  </div>
                  </div>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="10px"
                p="10px"
                boxShadow={"5px 5px 10px #54688763"}
                backgroundColor={"#222325d8"}
                href={""}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" 
                  style={{borderRadius: "20px", marginBottom: "10px" }} 
                   width="200px" height="150px" 
                  padding="5px 5px 5px 5px" src={"images/4.png"} />
                <Text className={styles.gradientText2}>Demo tickets</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText3}>Free</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} 
                  width="20px" height="20px"
                   src={"/3.png"} />
                <Text className={styles.gradientText3}>Ended</Text>
                
                  </div>
                  </div>
              </Link>
              
              </SimpleGrid>
              
              </div>
      
      

        
  );
}
export default Active;
