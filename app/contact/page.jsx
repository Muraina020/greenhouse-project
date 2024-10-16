import React from 'react'
import styles from "./contact.module.css"
import Social from './Social'
import SectionHeader from '../components/section-header/SectionHeader'
import FormContact from './FormContact'

const page = () => {
  return (
    <section>
      <SectionHeader title="Our Contact" subtitle="You can reach out to us by filling the form or through our social media platforms. We are available 27/4"/>
      <div className={`container ${styles.container}`}>
        <article className={styles.sociaForm}>
    <Social/>
    <FormContact/>
    </article>
    </div>
    </section>
  )
}

export default page