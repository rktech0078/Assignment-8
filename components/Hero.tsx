import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <>
            <div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
                            <p className="mb-5">
                                Welcome to our website. We are glad to have you here. Explore our features and get started with us today!
                            </p>
                            <Link href={"/blogs"}><button className="btn btn-primary">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
