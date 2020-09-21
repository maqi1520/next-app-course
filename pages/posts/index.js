import Head from 'next/head'
import Link from 'next/link'

const data = [
  {
    title: '标题1',
    id: '1',
    content: '## 正文',
  },
  {
    title: '标题2',
    id: '2',
    content: '## 正文2',
  },
]

export default function IndexPage() {
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
