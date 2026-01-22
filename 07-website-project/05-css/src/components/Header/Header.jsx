import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.Header}>
      <button className={styles.btn2}>Full Menu</button>
      <button className= {styles.btn3}>Meal plan</button>
       <button className= {styles.btn4}>personalled plan</button>
        <button className= {styles.btn5}>contact</button>
      <h3 className={styles.logo}>helllo this is my page </h3>
      <button className={styles.btn}>login here</button>
    </div>
  )
}

export default Header