import Link from 'next/link';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { GetComment, GetComments, IComment } from '../../types';

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=20/');
    const comments = await res.json();

    const paths = comments.map((comment: IComment) => {
      return {
        params: { id: comment.id.toString() }
      };
    });

    return {
      paths,
      fallback: false
    };
  } catch (er) {
    console.error(er);
    return {
      paths: [],
      fallback: false
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params?.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const comments: GetComments = await res.json();

    if (!res.ok) {
      return {
        notFound: true
      };
    }

    return {
      props: { comments }
    };
  } catch (er) {
    console.error(er);
    return {
      props: { comments: null }
    };
  }
};

const Details: React.FC<GetComment> = ({ comments }) => {
  return (
    <>
      <Head>
        <title>Comments Details</title>
        <meta name='title' content='Comments Details' />
      </Head>
      <div>
        <h2>{comments.name}</h2>

        <div>
          <p>{comments.body}</p>
          <Link href='/comments'>Back</Link>
        </div>
      </div>
    </>
  );
};

export default Details;
