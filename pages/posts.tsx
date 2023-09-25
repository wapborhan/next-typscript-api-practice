import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { IPosts, GetPosts } from '../types';
import { GetServerSideProps } from 'next';
import InfiniteScroll from 'react-infinite-scroll-component';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
    const data: IPosts = await res.json();
    return {
      props: { data }
    };
  } catch (er) {
    console.error(er);
    return {
      notFound: true
    };
  }
};

const Posts: React.FC<GetPosts> = ({ data }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${posts.length}&_limit=15`);
    const newPosts = await res.json();
    setPosts((posts) => [...posts, ...newPosts]);
  };

  useEffect(() => {
    setHasMore(100 > posts.length ? true : false);
  }, [posts]);
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name='title' content='Posts list' />
      </Head>
      <div>
        <h2>Posts list:</h2>
        <div className='reviews'>
          <InfiniteScroll
            dataLength={posts.length}
            next={getMorePosts}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>You have seen it all</b>
              </p>
            }
          >
            {posts &&
              posts.map((item) => {
                return (
                  <div key={item.id}>
                    <p className='rev'>
                      {item.id}. {item.title}
                    </p>
                    {item.body}
                  </div>
                );
              })}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default Posts;
