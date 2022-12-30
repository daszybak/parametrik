import { useViewportSize } from '@mantine/hooks';
import Image from 'next/image';
import { CSSProperties } from 'react';
import styles from './loadingScreen.module.scss';

interface LoadingScreenProps {
  style?: CSSProperties;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ style }) => {
  const { width } = useViewportSize();

  return (
    <div className={`${styles.loadingScreen}`} style={style}>
      <div className={styles['video-container']}>
        <Image
          src="/loading-screen.gif"
          alt="Car sheets connecting"
          width={width < 768 ? 400 : 640}
          height={width < 768 ? 225 : 360}
          priority
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
