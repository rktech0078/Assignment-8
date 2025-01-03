import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Data = {
  title: string,
  body: string,
  category: string,
  image: string,
}


export default async function Page() {
  const data: Data[] = await client.fetch(`*[_type == 'blogs']{title, body, category, 'image': image.asset->url}`)

  return (
    <div>
    {
      data.map((blog, index) => (

        <div key={index}>
          <div className='p-7 '>
            <div className="card card-side bg-base-100 shadow-xl transition p-5 border hover:shadow-2xl ">
              <figure>
                <Image
                  src={blog.image}
                  alt="Movie"
                  width={100}
                  height={100}
                />
              </figure>
              <div className="card-body">
                <h1 className='font-semibold text-indigo-500 font-serif'>{blog.category}</h1>
                <h2 className="card-title">{blog.title}</h2>
                <p className='line-clamp-1'>{blog.body}</p>
                <div className="card-actions justify-end">
                  <Link href={`/blogs/${blog.title}`}><button className="btn btn-primary">See more</button></Link>
                </div>
              </div>
            </div>


          </div>
        </div>

      ))
    }
    </div>
  )
}


