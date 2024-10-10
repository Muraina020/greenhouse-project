import React from 'react'
import styles from "./services.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Construct1 from "../assets/construct.jpg"
import Construct2 from "../assets/construct2.jpg"
import Construct3 from "../assets/construct3.jpg"
import Construct4 from "../assets/construct4.jpg"
import Construct5 from "../assets/construct5.jpg"
import Construct6 from "../assets/construct6.jpg"
import SectionHeader from '../components/section-header/SectionHeader'

const page = () => {
  return (
    <section >
       <SectionHeader title="Our Services" subtitle="Who are we and what we do"/>
    <div className={`container ${styles.bigContainer}`}>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Construct1} alt="" />
        </Link>
        <span className={styles.catalogText}>multi span greenhouse</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Construct2} alt="" />
        </Link>
        <span className={styles.catalogText}>multi span greenhouse</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Construct3} alt="" />
        </Link>
        <span className={styles.catalogText}>multi span greenhouse</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Construct4} alt="" />
        </Link>
        <span className={styles.catalogText}>multi span greenhouse</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Construct5} alt="" />
        </Link>
        <span className={styles.catalogText}>multi span greenhouse</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Construct6} alt="" />
        </Link>
        <span className={styles.catalogText}>multi span greenhouse</span>
    </div>
    </div>
    </section>
  )
}

export default page