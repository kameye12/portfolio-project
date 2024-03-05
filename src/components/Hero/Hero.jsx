import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Greetings, tech enthusiast!</p>
            <h3 className={styles.text_2}>Mr. Wissawa kameye</h3>
            <p className={styles.text_3}>
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "full-stack.",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web developer.",
                  1000,
                  "Pro Player Valorant Team FW Esport.",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
</p>
            <p className={styles.text_4}>
              who crafted this online experience. Take a peek under the hood and
              see what makes it tick.
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com/kameye12">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/pathapol-jomsawan-bh13">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/PzPraptZa/">
                  <FaSquareFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/xtom._.wsxwx/">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              <div className={styles.hero_image}></div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;