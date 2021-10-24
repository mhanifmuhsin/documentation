import Link from 'next/link'

export default function Post({ post }) {
    return (
        <div className='font-lato py-3'>
            {/* <img src={post.frontmatter.cover_image} alt='' /> */}

            <div className='text-base'>Posted on {post.frontmatter.date}
            <h1>{post.frontmatter.title}</h1>
            </div>
            <div className="font-light">
                <p className="text-sm">{post.frontmatter.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                    <a className='flex text-sm'>Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg></a>
                    
                </Link>
            </div>
        </div>
    )
}