import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright &copy; DJ Events, {new Date().getFullYear()}. All Rights
        Reserved
      </p>
      <p>
        <Link href='/about'>About This Project</Link>
      </p>
    </footer>
  )
}

export default Footer
