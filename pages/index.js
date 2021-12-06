import Head from 'next/head'
import Image from 'next/image'
import { GalleryCard } from "../components/card";
import styles from '../styles/Home.module.css'
import day1 from "../public/day1-vowels-claire.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <GalleryCard title="Day 1"/> */}
        <h1 className={styles.title}>
          30 Day Chart Challenge
        </h1>

        <p className={styles.description}>
          You can find my code at {' '}  
          <code className={styles.code}>clairebookworm/30daychartchallenge</code>
        </p>

        <div className={styles.grid}>
          <a className={styles.date}>1</a>
          <a className={styles.date}>2</a>
          <a className={styles.date}>3</a>
          <a className={styles.date}>4</a>
          <a className={styles.date}>5</a>
          <a className={styles.date}>6</a>
          <a className={styles.date}>7</a>
          <a className={styles.date}>8</a>
          <a className={styles.date}>9</a>
          <a className={styles.date}>10</a>
          <a className={styles.date}>11</a>
          <a className={styles.date}>12</a>
          <a className={styles.date}>13</a>
        </div>
{/* 
        <div className={styles.grid}>
          <a href="https://github.com/ClaireBookworm/30daychartchallenge/blob/main/day1-vowels-claire.png" className={styles.card}>
            <h2>Day 1: Part to Whole</h2>
            <Image alt="vowels in the English language" src={day1}/>
          </a>

        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  )
}
