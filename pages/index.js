import Head from 'next/head'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>home</title>
      </Head>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <a href="/about">About[a]</a>
          </li>
          <li>
            <Link href="/about">
              <a>About[link]</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
