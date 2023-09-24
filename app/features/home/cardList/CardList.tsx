'use client';

import styles from './cardList.module.css';
import { Button, Card, Row } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useAppSelector } from '@/app/GlobalRedux/hooks';
import { stubUrl } from '@/app/GlobalRedux/constants';
import { formatDate } from '@/app/utils';
import { Spinner } from '@/app/uiKit';

const { Meta } = Card;

export function CardList() {
  const { news } = useAppSelector((state) => state.news);

  return (
    <div className={styles.cardList}>
      {news.length ? news.map((item) => (
        <Card
          hoverable
          key={item.id}
          className={styles.card}
          cover={
          <Image
            alt="example"
            width={200}
            height={180}
            src={item.fields ? item.fields.thumbnail : stubUrl} />
          }
        >
          <Meta title={item.webTitle} description={formatDate(item.webPublicationDate)} />
          <Row className={styles.detailsBtn}>
            <Button>Details <RightOutlined rev={undefined} /></Button>
          </Row>
        </Card>
        ))
        :
        <div>
          No results
        </div>
      }
      <Spinner />
    </div>
  );
};
