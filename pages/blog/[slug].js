import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content,
}) {
    return (
        <>
            <div className="pt-2 pb-3">
                <Link href='/'>
                    <a className='font-lato font-bold ml-1'>Go Back</a>
                </Link>
            </div>
            <hr className=" border-b-2 border-yellow-300" />
            <div className='py-3 font-light'>
                {/* <img src={cover_image} alt='' /> */}
            <div className='font-semibold'>Posted on {date}</div>
            <h1 className='font-semibold'>{title}</h1>
                <div className='text-base py-2'>
                    <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}

PostPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}