import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events, {currentYear}. All Rights Reserved</p>
      <p>
        <Link href='/about'>About This Project</Link>
      </p>
    </footer>
  )
}

export default Footer
