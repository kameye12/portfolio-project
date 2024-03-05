import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            This jobs amazing.
          </p>
          <img
            src="src/components/Testimonials/job.jpg"
            alt=""
          />
          <h4>Job</h4>
          <p className={styles.bio}>Mobile Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Very Good.
          </p>
          <img
            src="src/components/Testimonials/top.jpg"
            alt=""
          />
          <h4>Top</h4>
          <p className={styles.bio}>DevOps</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Nice for Webdevelopment.
          </p>
          <img
            src="src/components/Testimonials/atom.jpg"
            alt=""
          />
          <h4>Atom</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;