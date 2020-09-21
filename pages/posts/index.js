import Head from 'next/head'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function IndexPage({ data = [] }) {
  return (
    <div>
      <Head>
        <title>posts list</title>
      </Head>
      <h1>posts list</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href="/posts/[id]" as={`/posts/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await fetcher('http://localhost:3000/api/posts')

  return {
    props: {
      data,
    },
  }
}
