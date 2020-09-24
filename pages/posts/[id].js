import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function IndexPage({ data = {} }) {
  if (!data.id) return <div>Not found</div>

  return (
    <div>
      <Head>
        <title>{`${data.title}-posts detail`}</title>
      </Head>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content || '' }} />
    </div>
  )
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await fetcher(`${process.env.API_URL}/posts`)
  // Get the paths we want to pre-render based on posts

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const data = await fetcher(`${process.env.API_URL}/posts/${params.id}`)
  const content = await markdownToHtml(data.content || '')

  return {
    props: {
      data: {
        ...data,
        content,
      },
    },
    revalidate: 1, //当下次请求时，重新验证生成静态页面
  }
}
