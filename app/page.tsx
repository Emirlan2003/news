'use client';

import styles from './styles/page.module.css';
import { CardList, SortBlock } from './features';

export default function Home() {
  return (
    <main className={styles.main}>
      <SortBlock />
      <CardList />
    </main>
  );
};
