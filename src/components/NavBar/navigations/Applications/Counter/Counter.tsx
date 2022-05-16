import React, { useEffect, useState } from 'react'

import styles from './counter.module.scss'

const Counter = () => {

  const [count, setCount] = useState(0);

  function handleDecrement(){
    setCount(count => count - 1)
  }

  function handleIncrement(){
    setCount(count => count + 1)
  }

  function handleDouble(){
    setCount(count => count * 2)
  }

  function handleRandom(){
    let number = Math.random() * 100
    number = Math.ceil(number)
    setCount(count => number)
  }

  function handleReset(){
    setCount(count => 0)
  }

  const [limit, setLimit] = useState(false)

  useEffect(() => {
    if(count < 10000){
      setLimit(true)
    } else {
      setLimit(false)
    }
  }, [count])

  return (
    <>
      <div className={styles.counter}>
        <div className={styles.counter__wrapper}>
          <div className={styles.counter__title}>counter</div>

          <div className={styles.counter__item}>

            <div className={styles.item__main}>
              <button className={styles.decrement__btn} onClick={handleDecrement}>-</button>
              <div className={styles.item__board}>{limit ? count : 'limit'}</div>
              <button className={styles.increment__btn} onClick={handleIncrement}>+</button>
            </div>

            <div className={styles.item__addition}>
              <button className={styles.double__btn} onClick={handleDouble}>x2</button>
              <button className={styles.random__btn} onClick={handleRandom}>Random</button>
              <button className={styles.reset__btn} onClick={handleReset}>Reset</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Counter