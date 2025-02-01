import React, { useEffect } from 'react';
import styles from "../../styles/Mob.module.css";
import {Image,Link} from "@chakra-ui/react";
const LotteryMob: React.FC = () => {
  useEffect(() => {
    // Adding script dynamically
    const script1 = document.createElement('script');
    script1.type = 'module';
    script1.src = 'https://storage.googleapis.com/scriptslmt/0.1.4/solana.js';
    
    script1.defer = true;
    document.body.appendChild(script1);

    // Setting window variables
    (window as any).ownerId = 'Ck1w3MFLVMQxHMnyeoAVDowSXmENmU1xxiXyqtwm2hpB';
    (window as any).collectionId = 'KVE8QtPQF60n9l3r5NVz';
    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script1);
    };
  }, []);

  return (
  <>
      <div className={styles.container2}>
      <div className={styles.mintpage}>
      <p className={styles.projecttitle}> Solnm Lottery Gifts </p>
      <div >
      <Image justifyItems={"center"} style={{ borderRadius: "10px" }} width="350px" height="200px" src="/images/1.png" 
      backgroundColor={"#222325d8"} padding={"5px"} shadow= "#54688749 5px 5px 20px 0px"/>
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

      <div className={styles.mintbox}>
      <p className={styles.abouttitle}> About </p>
      <p className={styles.projectdescription}>A lottery collection for two random winners</p>
      <p className={styles.projectdescription}>First winner: 0.3 SOL</p>
      <p className={styles.projectdescription}>Second winner: 0.2 SOL</p>
      <p className={styles.projectdescription}>Try your luck
      </p>
     
      <div className={styles.mintbox2}>

      <p className={styles.projectdescription}>Price: 0.03 SOL </p>
      <p className={styles.projectdescription}> Supply: 100 </p>
      <p className={styles.projectdescription}> Royalties: 2.5 %</p>
      <p className={styles.projectdescription}> Metadata: Mpl Core </p>
      </div>
      </div>
      <div className={styles.socialicons}>


<Link href="https://solscan.io/token/AnTQDcgpqUvyT66jaLVF29GFrBSXbESELNaQBWJ2ynGQ?cluster=mainnet#transactions" target="_blank" rel="noreferrer" className={styles.account}>
  <Image src="/sol.png" alt="token" width={5} height={5} />
  <p className={styles.adressText}>AnTQ....ynGQ</p>
</Link>
<Link href="https://solnm.com" className={styles.link} target="_blank" rel="noreferrer">
  <Image src="/web.png" alt="token" width={5} height={5} />
</Link>
<Link href="https://www.linkedin.com/company/solnm" className={styles.link} target="_blank" rel="noreferrer">
  <Image src="/in.png" alt="token" width={5} height={5} />
</Link>
<Link href="https://x.com/Solnmcom" className={styles.link} target="_blank" rel="noreferrer">
  <Image src="/tw.png" alt="token" width={5} height={5} />
</Link>
<Link href="https://discord.gg/jmMY8MrQCt" className={styles.link} target="_blank" rel="noreferrer">
  <Image src="/dis.png" alt="token" width={5} height={5} />
</Link>

</div>
</div>
</>
  );
};
export { LotteryMob };
