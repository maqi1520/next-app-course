import Head from 'next/head'
import { useRouter } from 'next/router'

export default function IndexPage() {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <Head>
        <title>posts detail</title>
      </Head>
      <h1>{`标题${id}`}</h1>
      <div>正文</div>
    </div>
  )
}
