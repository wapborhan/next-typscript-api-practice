import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className='not-found'>
      <h2>There is no such page!</h2>
      <p>
        Back to <Link href='/'>Home page </Link>
        in 3 seconds...
      </p>
    </div>
  );
};

export default NotFoundPage;
