"use client"
import React from 'react' ;
import { useState, useEffect } from 'react'
import styles from "../../styles/Mint.module.css";

interface CountdownTimerProps {
    deadline: Date;
    title: string;
}

interface CountdownTimeLeft {
    days?: number;
    hrs?: number;
    mins?: number;
    secs?: number;
}

const INITIAL_TIME_LEFT = { days: 0, hr: 0, mins: 0, secs: 0 }

function CountdownTimer({ deadline }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<CountdownTimeLeft>(INITIAL_TIME_LEFT)

    useEffect(() => {
        setTimeLeft(calculateTimeLeft())

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer);
    }, [])

    function calculateTimeLeft(): CountdownTimeLeft {
        let timeLeft: CountdownTimeLeft = {};
        let currentDate = new Date();
        let difference = deadline.getTime() - currentDate.getTime();

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
                mins: Math.floor((difference / 1000 / 60) % 60),
            }
        }

        return timeLeft;
    }

    return (
        <><div className={styles.timeContainer}>


        </div><div className={styles.countdownWrapper}>

                {Object.entries(timeLeft).map(([unit, value], index, array) => (
                    <>

                        <div className={styles.starttime}>
                            <p className={styles.gradientText}>{Math.floor(value / 10)}</p>
                            <p className={styles.gradientText}>{value % 10}</p>
                            {index !== array.length - 1 && <span>:</span>}
                            <p className={styles.gradientText}>{unit}</p>

                        </div>

                    </>
                ))}



            </div></>
    )
}

export default CountdownTimer