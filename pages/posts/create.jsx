import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

export default function Create() {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({})
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      console.log(values)
      setLoading(true)

      window
        .fetch('/api/v2/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })
        .then((r) => r.json())
        .then(
          (res) => {
            if (res.id) {
              setLoading(true)
              router.push('/posts')
            }
          },
          (error) => {
            setLoading(false)
          }
        )
    },
    [values, router.push]
  )
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="title">title</label>
          <input
            name="title"
            defaultValue={values.title || ''}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="form-item">
          <label htmlFor="">author</label>
          <input
            name="author"
            value={values.author || ''}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="form-item">
          <label htmlFor="">content</label>
          <textarea
            name="content"
            value={values.content || ''}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div style={{ paddingLeft: 220 }} className="form-item">
          <button type="submit">Submit{loading ? '...' : null}</button>
        </div>
      </form>
      <style jsx>{`
        .form-item {
          margin-top: 24px;
          overflow: hidden;
        }
        label {
          font-size: 14px;
          line-height: 30px;
          text-transform: uppercase;
          width: 200px;
          text-align: right;
          display: inline-block;
          margin-right: 10px;
          float: left;
        }
        input,
        textarea {
          width: 500px;
          outline: none;
          border: 1px solid #000;
          padding: 0px 10px;
          line-height: 30px;
          float: left;
        }
      `}</style>
    </div>
  )
}
