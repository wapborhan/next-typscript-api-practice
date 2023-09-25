import Image from 'next/legacy/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Burgers.module.css';
import { IBurgers } from '../../types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Details: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;
  const [burger, setBurger] = useState<IBurgers | null>(null);

  useEffect(() => {
    const fetchBurger = async () => {
      try {
        const result = await fetch(`/api/burgers/${id}`);
        const data = await result.json();
        setBurger(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBurger();
  }, [id]);

  return (
    <>
      <Head>
        <title>Burger Details</title>
        <meta name='title' content='Burger Details' />
      </Head>
      <>
        {burger && (
          <div className={styles.singleBurger}>
            <h2>{burger.name}</h2>
            <div>
              <Image src={burger.image} alt={burger.name} width={600} height={512} layout='responsive' priority={true} />
            </div>
            <div>
              <p>{burger.desc}</p>
              <p className='font'>Price: {burger.price} Eur</p>
              <Link href='/burgers'>Back</Link>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Details;
