

import Links from './links/Links'
import styles from"./navbar.module.css"
import Link from 'next/link'

function Navbar() {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Noor</Link>
        <div>
           <Links/>
            
        </div>
    </div>
  )
}

export default Navbar