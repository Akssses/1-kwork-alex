import { GraphQLClient, gql } from 'graphql-request'
import React from 'react' 
import { Disclosure } from '@headlessui/react'
import Sidebar from '@/components/partials/Sidebar'



const graphcms = new GraphQLClient('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clebon8ld2usg01uoh3zodojg/master')
const QUERY = gql`
 query Post($slug: String!) {
    post(where: {slug: $slug}) {
        title,
        slug,
        tags,
        content {
            html
        }
        coverImage{
            url
        }
        multiText{
            html
        }
    }
 }
`

const SLUGLIST = gql`
 {
    posts {
        slug
    }
 }
`

export async function getStaticPaths() {
    const {posts} = await graphcms.request(SLUGLIST)
    return {
        paths: posts.map((post) => ({params: {slug: post.slug}})),
        fallback: false
    }
}

export async function getStaticProps({params}){
     const slug = params.slug
     const data = await graphcms.request(QUERY, {slug})
     const post = data.post
     return {
        props: {
            post,
        },
        revalidate: 10,
     }
}

const CasinoPost = ({post}) => {
    return (
        <div className='bg-dark flex app-container'>
            <Sidebar/>
            <div className='p-[30px]'>
                <div className='text-white bg-elem p-5 rounded-2xl'>
                    <div>
                        <title>{post.title}</title>
                        <meta name='description' content={post.title} />
                    </div>
                    <h1 className='text-3xl font-bold mb-5'>{post.title}</h1>
                    <div className='about_game_content' dangerouslySetInnerHTML={{ __html: post.content.html }}>
                        
                    </div>
                    <div className="bg-dark p-5 rounded-2xl mt-5">
                    <Disclosure>
                        <h3>
                        <Disclosure.Button className="flex justify-between w-full">
                            <span>More information</span>
                            <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M6 9l6 6 6-6" />
                            </svg>
                        </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="my-4" dangerouslySetInnerHTML={{ __html: post.multiText.html }} />
                    </Disclosure>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CasinoPost