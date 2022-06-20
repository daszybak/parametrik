import { Children } from '../../utils/helpers/interfaces/interfaces';

import styles from './firstSection.module.scss'

const FirstSection = ({children}: Children) => {
    return <div className={styles['first-section']}>
        {children}
    </div>
}

export default FirstSection;