import React from 'react'
import { BUSINESS_PRODUCTS, CHAIN_PRODUCTS } from './items'
import styles from './ProductsNav.module.scss'

const ProductsNavContent = () => (
  <div className={styles.container}>
    <div className={styles.column}>
      <h3 className={styles.title}>SAN chain</h3>
      <ul className={styles.products}>
        {CHAIN_PRODUCTS.map((item, index) => (
          <li key={index}>
            <a href={item.to}>{item.title}</a>
            {item.label && <p className={styles.label}>{item.label}</p>}
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.column}>
      <h3 className={styles.title}>SAN business</h3>
      <ul className={styles.products}>
        {BUSINESS_PRODUCTS.map((item, index) => (
          <li key={index}>
            <a href={item.to}>{item.title}</a>
            {item.label && <p className={styles.label}>{item.label}</p>}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default ProductsNavContent
