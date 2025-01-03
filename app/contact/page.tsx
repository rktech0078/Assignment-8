import Image from 'next/image'
import React from 'react'

export default function Page() {
    return (
        <>
            <div>


                <div className='mb-7'>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <Image
                                alt='RAFAY'
                                height={100}
                                width={100}
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <Image
                                alt='RAFAY'
                                height={100}
                                width={100}
                                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <Image
                                alt='RAFAY'
                                height={100}
                                width={100}
                                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <Image
                                alt='RAFAY'
                                height={100}
                                width={100}
                                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="hero bg-base-200 min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Login now!</h1>
                                <p className="py-6">
                                    Provident your access to exclusive content and features by logging in. Dont miss out on the latest updates and personalized experiences tailored just for you.
                                </p>
                            </div>
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
