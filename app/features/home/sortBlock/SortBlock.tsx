'use client';

import styles from './sortBlock.module.css';
import { Button, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useAppSelector } from '@/app/GlobalRedux/hooks';
import { byDateSelect, onPageSelect } from '@/app/GlobalRedux/constants';
import { useSort } from '../useSort';
import { useSearch } from '../useSearch';

export function SortBlock() {
  const { filter } = useAppSelector((state) => state.news);
  const { sortByOnPages, sortByDate } = useSort();
  const { searchByQuery, onSearch, value } = useSearch();

  return (
    <div className={styles.sortBlock}>
      <Input
        value={value}
        placeholder="  Поиск"
        className={styles.input}
        prefix={<SearchOutlined rev={undefined} />}
        onChange={(e) => searchByQuery(e.target.value)}
      />
      <Button onClick={onSearch}>Find</Button>
      <Select
        defaultValue={filter.dates}
        className={styles.sortSelect}
        onChange={sortByDate}
        options={byDateSelect}
      />
      <span className={styles.sortText}>
        Items on page:
      </span>
      <Select
        defaultValue={filter.onPage}
        className={styles.itemsSelect}
        onChange={sortByOnPages}
        options={onPageSelect}
      />
    </div>
  )
};
