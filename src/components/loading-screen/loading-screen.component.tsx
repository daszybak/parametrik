import Image from 'next/image';
import styles from './loadingScreen.module.scss';

interface LoadingScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = () => (
  <div className={`${styles.loadingScreen}`}>
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
