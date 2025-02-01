import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/Mob.module.css";

export const Footer2: FC = () => {
    return (
             <div className={styles.footer}>

                        <div className={styles.footerLeft}>
                        <Image src="/pad.png" alt="token" width={150} height={100} />
                        <p className={styles.yaerText}>© 2025 Solnm</p>
                        </div>
                        
                        <div className={styles.footerMiddle}>
                        <Link href="https://d.solnm.com" target="_blank" rel="noopener noreferrer" 
                        passHref className="text-secondary hover:text-white">
                        <p className={styles.gradientText}>Documents</p>
                        </Link>    
                        <Link href="https://d.solnm.com/terms" target="_blank" rel="noopener noreferrer" 
                        passHref className="text-secondary hover:text-white">
                        <p className={styles.gradientText}>Terms of use </p>
                        </Link>
                        <Link href="https://d.solnm.com/privacy" target="_blank" rel="noopener noreferrer" 
                        passHref className="text-secondary hover:text-white">
                        <p className={styles.gradientText}> Privacy policy </p>
                        </Link>
                        
                    

</div>
<div className={styles.footerRight}>
                       
                        <Link href="https://www.linkedin.com/company/solnm" className={styles.link} target="_blank" rel="noreferrer">
                        <Image src="/in.png" alt="token" width={20} height={20} />
                        </Link>
                        <Link href="https://x.com/Solnmcom" className={styles.link} target="_blank" rel="noreferrer">
                        <Image src="/tw.png" alt="token" width={20} height={20} />
                        </Link>
                        <Link href="https://discord.gg/jmMY8MrQCt" className={styles.link} target="_blank" rel="noreferrer">
                        <Image src="/dis.png" alt="token" width={20} height={20} />
                        </Link>
                        </div>

                        <div className={styles.footerRight}>
                        <Link href="https://github.com/Solnm" className={styles.link} target="_blank" rel="noreferrer">
                        <Image src="/gi.png" alt="token" width={20} height={20} />
                        </Link>
                        <Link href="mailto:info@solnm.com" className={styles.link} target="_blank" rel="noreferrer">
                        <Image src="/em.png" alt="token" width={20} height={20} />
                        </Link>
                        <button className={styles.button3} data-tally-open="wzWDg0" data-tally-width="600" 
                        data-tally-align-left="1" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" 
                        data-tally-auto-close="0">Support</button>
                        </div>


                        
            </div>

      
    );
};
export default Footer2;