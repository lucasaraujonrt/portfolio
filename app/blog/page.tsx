import { BLOG_POSTS } from '../data'
import { AnimatedBackground } from '../../components/ui/animated-background'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto max-w-screen-sm px-4">
        <div className="flex flex-col space-y-24">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-4">
              <h1 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                Blog
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                My thoughts on software development, startups, and technology.
              </p>
            </div>

            <div className="flex flex-col space-y-0">
              <AnimatedBackground
                enableHover
                className="rounded-xl bg-zinc-100 p-1 dark:bg-zinc-900"
              >
                {BLOG_POSTS.map((post) => (
                  <Link
                    key={post.uid}
                    className="-mx-3 rounded-xl px-3 py-3 no-underline"
                    href={post.link}
                    data-id={post.uid}
                  >
                    <div className="flex flex-col space-y-1">
                      <h4 className="font-normal dark:text-zinc-100">
                        {post.title}
                      </h4>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </AnimatedBackground>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
