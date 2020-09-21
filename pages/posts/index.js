import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function IndexPage() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetcher('/api/posts').then((res) => {
      setData(res)
    })
  }, [])
  return (
    <div>
      <Head>
        <title>posts list</title>
      </Head>
      <h1>posts list</h1>
      <ul>
        {data.map((item) => (
          <li>
            <Link href="/posts/[id]" as={`/posts/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
