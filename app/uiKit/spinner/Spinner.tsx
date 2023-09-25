import { Space, Spin } from 'antd';
import styles from './spinner.module.css'
import { useAppSelector } from '@/app/GlobalRedux/hooks';

export const Spinner: React.FC = () => {
  const { loading } = useAppSelector((state) => state.news);

  return (
    <>
      {loading && 
        <Space direction="vertical" className={styles.spinner}>
          <Space>
            <Spin size="large" />
          </Space>
        </Space>
      }
    </>
  );
};
