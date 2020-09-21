import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function IndexPage({ data = {} }) {
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

export async function getServerSideProps(res) {
  const { id } = res.query
  const data = await fetcher(`http://localhost:3000/api/posts/${id}`)

  return {
    props: {
      data,
    },
  }
}
