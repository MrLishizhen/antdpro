import { LoadingOutlined } from '@ant-design/icons';
import styles from './index.less';
const Loading = () => {
  return (
    <div className={styles.loading_box}>
      <LoadingOutlined style={{ fontSize: 30, color: '#1890ff' }} />
    </div>
  );
};
export default Loading;
