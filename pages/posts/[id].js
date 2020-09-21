import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function IndexPage() {
  const router = useRouter()
  const { id } = router.query

  const [data, setData] = useState({})

  useEffect(() => {
    id &&
      fetcher(`/api/posts/${id}`).then((res) => {
        setData(res)
      })
  }, [id])

  if (!data.id) return <div>Loading...</div>

  return (
    <div>
      <Head>
        <title>{`${data.title}-posts detail`}</title>
      </Head>
      <h1>{data.title}</h1>
      <div>{data.content}</div>
    </div>
  )
}
