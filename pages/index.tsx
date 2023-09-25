import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/legacy/image';
import styles from '../styles/Home.module.css';
import fatburger from '../public/images/fatburger.png';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fat burgers | Home</title>
        <meta name='title' content='Fat burgers' />
      </Head>
      <div className={styles.container}>
        <div className={styles.mainImage}>
          <Image src={fatburger} alt='fat burger' priority={true} />
        </div>
        <p className={styles.text}>
          What is the perfect burger? Fresh lettuce, soft buns, juicy meat. You can argue about other components of the filling, because this is a matter of taste.
        </p>
        <p className={styles.text}>There are a couple of other factors that affect appetite: prices, quality of service, the right atmosphere of the establishment.</p>
        <p className={styles.text}>
          Fat burgers are good old burgers with a classic recipe, the right size and at a reasonable price. They are prepared in the American, Mexican and Italian manners, sparing
          neither the sauce nor the filling.
        </p>
        <p className={styles.text}>For those who are pretty hungry, there is an immense Fattest Burger with five beef patties, corn chips and cheese.</p>
        <Link href='/burgers/' className={styles.btn}>
          All burgers
        </Link>
      </div>
    </>
  );
};

export default Home;
