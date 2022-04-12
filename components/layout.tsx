import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../components/layout.module.scss'
import About from '../pages/about'

export const siteTitle = 'Shelter Me'
export const dogsAvailable = 8
export const catsAvailable = 6


export default function Layout({
  children,
  home
}:{
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <section className={styles.head}>
          <Link href="/">
            <a>
              <Image 
                priority 
                src="/images/logo.png" 
                height={108}
                width={108}
                alt="logo"
                className="logo"
              />
            </a>
          </Link>
          <div className={styles.ticker}>
            <h4>For Adoption:</h4>
            <div>
              <span className={styles.title}>Dogs:</span> {dogsAvailable}
            </div>
            <div>
              <span className={styles.title}>Cats:</span> {catsAvailable}
            </div>
          </div>
          <div className={styles.ticker}>
            <h4>For Foster:</h4>
            <div>
              <span className={styles.title}>Dogs:</span> {dogsAvailable}
            </div>
            <div>
              <span className={styles.title}>Cats:</span> {catsAvailable}
            </div>
          </div>
        </section>

        <nav className={styles.menu}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <div>
          <section className={styles.footmenu}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </section>
        </div>
      </footer>

    </div>
  )
}