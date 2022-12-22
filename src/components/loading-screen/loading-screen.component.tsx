import Image from 'next/image';
import { CSSProperties } from 'react';
import styles from './loadingScreen.module.scss';

interface LoadingScreenProps {
  style?: CSSProperties;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ style }) => (
  <div className={`${styles.loadingScreen}`} style={style}>
    <div className={styles['video-container']}>
      <Image
        src="/loading-screen.gif"
        alt="Car sheets connecting"
        width={640}
        height={360}
        priority
      />
    </div>
  </div>
);

export default LoadingScreen;
