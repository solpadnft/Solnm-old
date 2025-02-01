import React, { useEffect } from 'react';
import styles from "../../styles/Mint.module.css";
import { Image, Link } from "@chakra-ui/react";
const Swapspace: React.FC = () => {
  useEffect(() => {
    // Adding script dynamically
    const script1 = document.createElement('script');
    script1.type = 'module';
    script1.src = 'https://storage.googleapis.com/scriptslmt/0.1.4/solana.js';
    script1.defer = true;
    document.body.appendChild(script1);

    // Setting window variables
    (window as any).ownerId = '81QsSTE8zyEx6XQjtJe959WKqGGPfs4x6qTUuQ1EjEWt';
    (window as any).collectionId = 'dUfOoXunv8Mm9k3iFL4M';
    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script1);
    };
  }, []);

  return (
    <>
     
    <div className={styles.container}>
    <div className={styles.mintpage}>
    <div className={styles.social}>
    <p className={styles.projecttitle}> SwapSpace </p>
    </div>
    <div className={styles.mintimage3}>
    <Image justifyItems={"center"} style={{ borderRadius: "10px" }} width="550px" 
    height="400px" src="/images/swap.jpeg" 
    backgroundColor={"#222325d8"} padding={"10px"} 
    shadow= "#54688749 5px 5px 20px 0px"/>
    </div>
    </div>
      
    <div className={styles.mintpage2}>
    <div className={styles.mintbox2}>
    <p className={styles.projectdescription}> About </p>
    <div className={styles.mintbox}>
    <p className={styles.projectdescription}>Get in on the complimentary minting of our limited edition NFT collection,
    <br/>celebrating SwapSpace’s partnership with Solpad.
    <br/>Grab your exclusive digital assets 
    </p>
    </div>
    </div>

    <div className={styles.social}>
    <div className={styles.mintimage}>
    <div>
    <p className={styles.projectdescription}>Price: 0 SOL </p>
    <p className={styles.projectdescription}> Supply: 100 </p>
    <p className={styles.projectdescription}> Royalties: 0 %</p>
    <p className={styles.projectdescription}> Metadata: Compressed </p>
    </div>
    </div>

    <div id="main-container"> </div>
    <div className={styles.mintimage2}>
    <div id="slider-container"> 
    <div className={styles.mintbox4}>
    <span className={styles.slider} id="mint-slider" ></span>
    <span className={styles.slideramount}  id="mint-slider-amount"></span>
    </div>
    <div className={styles.mintbutton} id="mint-button-container"></div>
    </div>
    <div className={styles.mintbox3}>
    <div className={styles.projectdescription} id="mint-counter"> </div>
    <p className={styles.projectdescription}>Minted</p>
    </div>
    </div>
    </div>

    <div className={styles.socialicons}>

    <Link href="https://solscan.io/token/Fhsj7AdgYNXVo3bGnkp15po9XMnbx8Huc27h24ZMQV8F" 
    target="_blank" rel="noreferrer" className={styles.account}>
    <Image src="/sol.png" alt="token" width={30} height={30} />
    <p className={styles.projectdescription}>Fhsj...QV8F</p>
    </Link>

    <Link href="https://swapspace.co/" className={styles.link} target="_blank" rel="noreferrer">
    <Image src="/web.png" alt="token" width={30} height={30} />
    </Link>

    <Link href="https://www.linkedin.com/company/swapspace-co" className={styles.link} target="_blank" rel="noreferrer">
    <Image src="/in.png" alt="token" width={30} height={30} />
    </Link>

    <Link href="https://x.com/SwapSpaceCo" className={styles.link} target="_blank" rel="noreferrer">
    <Image src="/tw.png" alt="token" width={30} height={30} />
    </Link>

    <Link href="https://discord.gg/9aKHSfMd3p" className={styles.link} target="_blank" rel="noreferrer">
    <Image src="/dis.png" alt="token" width={30} height={30} />
    </Link>

    <Link href="https://t.me/SwapSpace" className={styles.link} target="_blank" rel="noreferrer">
    <Image src="/tel.png" alt="token" width={30} height={30} />
    </Link>

    </div>

    </div>
    </div>
    </>
  );
};
export { Swapspace };
