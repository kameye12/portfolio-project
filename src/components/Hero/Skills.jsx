import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs,FaPython , FaReact, FaCss3 , FaGitAlt, FaNode} from 'react-icons/fa6'
import { SiFlask } from "react-icons/si";

function Skills() {
  return (
    <div id="skills" className={styles.skills_container}>
        <h3 className={styles.skills_title}>My Skills Set</h3>
        <ul className={styles.skills_list}>
            <li><FaPython/></li>
            <li><FaSquareJs/></li>
            <li><FaReact/></li>
            <li><FaCss3 /></li>
            <li><FaGitAlt/></li>
            <li><FaNode/></li>
            <li><SiFlask/></li>
        
        </ul>
      
    </div>
  )
}

export default Skills