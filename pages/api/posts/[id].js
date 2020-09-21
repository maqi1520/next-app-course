import { posts } from '../../../data'

export default function postHandler({ query: { id } }, res) {
  const currentPost = posts.find((p) => p.id === id)

  // id exists
  if (currentPost) {
    res.status(200).json(currentPost)
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}
