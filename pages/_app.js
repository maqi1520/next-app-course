import '../styles/globals.css'
import { useRouter } from 'next/router'

import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <div className="container">
      <nav>
        <ul>
          <li className={router.pathname === '/' ? 'current' : null}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={router.pathname.includes('/posts') ? 'current' : null}>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <a href="/about">About[a]</a>
          </li>
          <li className={router.pathname.includes('/about') ? 'current' : null}>
            <Link href="/about">
              <a>About[link]</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
      <style jsx>{`
        nav {
          height: 50px;
          line-height: 50px;
          background: #2b2b2b;
        }
        nav ul {
          width: 1000px;
          margin: 0 auto;
          list-style: none;
          overflow: hidden;
        }
        nav ul li {
          margin-right: 20px;
          text-align: center;
          float: left;
        }

        nav ul li a {
          display: block;
          height: 50px;
          font-weight: 900;
          font-size: 0.75em;
          padding: 0 2em;
          text-transform: uppercase;
          transition: all 0.25s;
          text-decoration: none;
          background-color: transparent;
          color: #fff;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        nav ul li a:hover,
        nav ul li.current a {
          background-color: rgb(155, 152, 140);
          color: #222;
        }
        main {
          width: 1000px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export default MyApp
