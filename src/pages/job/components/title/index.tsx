import styles from './index.less';

interface textTitle {
  text?: string;
}

const TextTitle = (props: textTitle) => {
  const { text = '' } = props;
  return <div className={styles.text_title}>{text}</div>;
};

export default TextTitle;
