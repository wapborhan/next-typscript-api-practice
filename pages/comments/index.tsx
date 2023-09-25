import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { GetComments, IComments } from '../../types';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=20');
    const data: IComments = await res.json();
    return {
      props: { comments: data }
    };
  } catch (er) {
    console.error(er);
    return {
      notFound: true
    };
  }
};

const Comments: React.FC<GetComments> = ({ comments }) => {
  return (
    <>
      <Head>
        <title>Comments</title>
        <meta name='title' content='Comments list' />
      </Head>
      <h2>Comments list:</h2>
      <ul>
        {comments &&
          comments.map(({ id, email }) => (
            <div key={id}>
              <Link href={`/comments/${id}`}>
                {id}.{email}
              </Link>
            </div>
          ))}
      </ul>
    </>
  );
};

export default Comments;
