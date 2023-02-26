import { GraphQLClient, gql } from 'graphql-request'
import React, { useState } from 'react' 
import { Disclosure } from '@headlessui/react'
import Sidebar from '../../components/partials/Sidebar'
import { Bar } from 'react-chartjs-2';
import LineChart from '../../components/shared/Charts/LineChart/LineChart'
import Card from '../../components/shared/Charts/Card.jsx/Card';
import Detalis from '../../components/shared/Charts/Detalis/Detalis';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


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

const options = {
    scales: {
      x: {
        type: 'category',
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        ticks: {
          beginAtZero: true
        }
      },
      y: {
        ticks: {
          beginAtZero: true
        }
      }
    }
  };
 
  const applications1 = {
    title: "Total Applications",
    count: 7956,
    growth: +3.59,
    data: 70,
    blue: false
  }
  
  const shortlists = {
    title: "Shortlisted Candidates",
    count: 4658,
    growth: 0.6,
    data: 60,
    blue: true
  }
  
  const applications2 = {
    title: "Total Applications",
    count: 1501,
    growth: -0.4,
    data: -40,
    blue: false
  }

const GamesPost = ({post}) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
      <div className='flex bg-dark overflow-hidden app-container gradient'>
          <Sidebar/>
          <div className='p-[30px] overflow-y-auto overflow-x-hidden'>
            <div className="flex gap-5">

              {/* Tab content */}
              <div className="tab-content">
                {/* Statistika */}
                  {activeTab === 1 && 
                    <div className='mb-10 w-[75vw]'>
                      <div className='bg-elem w-[74vw] h-[200px] rounded-2xl mb-5'>
                
                      </div>
                      <div className='flex gap-5 mb-5'>
                        <Card title={applications1.title} count={applications1.count} growth={applications1.growth} data={applications1.data} blue={applications1.blue}/>
                        <Card title={shortlists.title} count={shortlists.count} growth={shortlists.growth} data={shortlists.data} blue={shortlists.blue}/>
                        <Card title={shortlists.title} count={shortlists.count} growth={shortlists.growth} data={shortlists.data} blue={shortlists.blue}/>
                      </div>
                      <div className='flex gap-5'>
                        <LineChart/> 
                        <Detalis/>
                      </div>
                    </div>
                  }
                {/* About */}
                  {activeTab === 2 && 
                    <div className='text-white w-[75vw] flex  gap-10 bg-elem p-5 rounded-2xl'>
                      <img className='rounded-2xl h-[350px]' src={post.coverImage.url} alt={post.title} />
                      <div>
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
                  }
              </div>
              
              {/* Tabs */}
              <div className="bg-elem p-5 h-[84vh] rounded-2xl">
                <div
                  className={`${
                    activeTab === 1 ? 'bg-dark' : ''
                  } hover:bg-dark text-white py-2 px-4 mb-2 rounded`}
                  onClick={() => handleTabClick(1)}
                >
                  Dashboard
                </div>
                <div
                  className={`${
                    activeTab === 2 ? 'bg-dark' : ''
                  } hover:bg-dark text-white py-2 px-4 rounded`}
                  onClick={() => handleTabClick(2)}
                >
                  About
                </div>
              </div>

            </div>
          </div>
      </div>
  )
}

export default GamesPost