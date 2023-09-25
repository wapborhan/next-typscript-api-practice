import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/legacy/image';
import { useEffect, useState } from 'react';
import styles from '../../styles/Burgers.module.css';
import { IBurgers } from '../../types';

const Burgers: React.FC = () => {
  const [burgers, setBurgers] = useState<IBurgers[]>([]);

  const fetchBurgers = async () => {
    const response = await fetch('/api/burgers');
    const data = await response.json();
    setBurgers(data);
  };

  useEffect(() => {
    fetchBurgers();
  }, []);

  return (
    <div>
      <Head>
        <title>Burgers</title>
        <meta name='title' content='Burgers' />
      </Head>
      <h2>Burgers</h2>
      {burgers &&
        burgers.map((item) => (
          <Link href={`/burgers/${item.id}`} key={item.id} className={styles.burgerCard}>
            <div className={styles.imageContainer}>
              <Image src={item.image} alt={item.name} width={150} height={150} layout='responsive' priority={true} />
            </div>
            <div className='cent'>
              <h3>{item.name}</h3>
              <span className={styles.btn}>Details</span>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Burgers;
