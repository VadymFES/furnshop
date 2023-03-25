import React from 'react';
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  const redirectToHome = () => {
    window.location.href = '/';
  }

  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <p>Упс! Щось пішло не так.</p>
      <button className={styles.button} onClick={redirectToHome}>Краще повернутися на головну сторінку.</button>
    </div>
  );
}

export default NotFoundPage;
