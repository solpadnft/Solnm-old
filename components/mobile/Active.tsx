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
                href={"/lottery2"}
              >
              <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" 
              style={{borderRadius: "20px", marginBottom: "10px" }} 
                  width="200px" height="150px" padding="5px 5px 5px 5px" 
                  src={"images/1.png"} />
                <Text className={styles.gradientText2}>Lottery Gifts</Text>

                <div className={styles.status}>
                <div className={styles.price}>
                
                <Image justifyItems={"center"} style={{ marginLeft: "5px", marginRight: "5px", 
                borderRadius: "50px" }} width="20px" height="20px"
                   src={"/solana.png"} />
                   <Text className={styles.gradientText3}>0.03</Text>
                  </div>
                  <div className={styles.price}>
                  <Image justifyItems={"center"} style={{ borderRadius: "50px" }} width="20px" height="20px"
                   src={"/live.gif"} />
                <Text className={styles.gradientText3}>Live</Text>
                
                  </div>
                  </div>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="10px"
                p="10px"
                boxShadow={"5px 5px 10px #54688763"}
                backgroundColor={"#222325d8"}
                href={"/swapspace2"}
              >
              <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" 
              style={{borderRadius: "20px", marginBottom: "10px" }} 
                  width="200px" height="150px" padding="5px 5px 5px 5px"
                  src={"images/swap.jpeg"} />
                <Text className={styles.gradientText2}>SwapSpace</Text>

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
                   src={"/live.gif"} />
                <Text className={styles.gradientText3}>Live</Text>
                
                  </div>
                  </div>
              </Link>
              </SimpleGrid>
              
              </div>
  );
}
export default Active;
