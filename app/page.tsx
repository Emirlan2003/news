'use client';

import styles from './page.module.css'
import { useAppDispatch, useAppSelector } from './GlobalRedux/hooks';
import { getNews } from './GlobalRedux/Features/news/newsSlice';
import { useEffect } from 'react';

export default function Home() {
  const { news } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  console.log("news", news);

  return (
    <main className={styles.main}>
      <div>hello</div>
    </main>
  )
}
