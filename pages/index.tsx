import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React redux next with typescript</title>
      </Head>
      <div className={styles.content}>
        <h1>Hello React redux next with typescript</h1>
      </div>
    </div>
  );
}
