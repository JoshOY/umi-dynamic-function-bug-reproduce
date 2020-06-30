import React from 'react';
import styles from './index.less';
import { AsyncDemo } from '@/components/DemoAsync';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {/* type of properties cannot be inferred properly */}
      <AsyncDemo
        propsA="hello"
        propsB={true}
      />
    </div>
  );
}
