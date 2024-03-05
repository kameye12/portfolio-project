import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div id='portfolio' className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/k0.jpg" alt="" />
            <p>WebApp DooDee</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/unnamed.png" alt="" />
            <p>Premier Champion Valorant</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/animal-kingdom_27c5571306.jpg" alt="" />
            <p>Classification Animal Type</p>
        </div>
        
      </div>
    </div>
  )
}

export default Portfolio
