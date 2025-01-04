'use client';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type Data = {
    title: string,
    body: string,
    category: string,
    image: string,
};

export default function Page(props: { params: { details: string } }) {
    const [data, setData] = useState<Data[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // Track loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: Data[] = await client.fetch(`*[_type == 'blogs']{title, body, category, 'image': image.asset->url}`);
                setData(result);
                setLoading(false); // Set loading to false after data is fetched
            } catch {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const blogTitle = decodeURIComponent(props.params.details);
    const result = data?.find((val: Data) => val.title === blogTitle);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {result ? (
                        <>
                            <Image
                                src={result.image || '/default-image.jpg'} // fallback image
                                alt={result.title || 'Default Title'}
                                width={100}
                                height={100}
                                layout="responsive"
                                className="max-w-sm rounded-lg shadow-2xl"
                            />
                            <div>
                                <h1 className="text-5xl font-bold">{result.title}</h1>
                                <p className="py-6">{result.body}</p>
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </>
                    ) : (
                        <div role="alert" className="alert alert-warning">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                            <span>Warning: Invalid blog page!</span> <br />
                            <span>Please try again a while</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
