import { redirect } from 'next/navigation'

// The blog lives at /posts (Payload's Posts collection); /blog is a friendly alias.
export default function BlogRedirect() {
  redirect('/posts')
}
