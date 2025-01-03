import Link from 'next/link'
import React from 'react'
// import Theme from './Theme'

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-primaryWhite bg-opacity-55 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href={"/"}>Home</Link></li>
                            <li>
                                <h1>Blog</h1>
                                <ul className="p-2">
                                    <li><Link href={"/blogs"}>Recent</Link></li>
                                    <li><Link href={"/blogs"}>Blogs</Link></li>
                                </ul>
                            </li>
                            <li><Link href={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost font-bold text-xl underline underline-offset-8 hover:no-underline "><span className='text-indigo-600 '>Assignment</span> - 8</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><Link href={"/"}>Home</Link></li>
                        <li>
                            <details>
                                <summary>Blogs</summary>
                                <ul className="p-2">
                                    <li><Link href={"/blogs"}>Recent</Link></li>
                                    <li><Link href={"/blogs"}>Blogs</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    {/* <Theme/> */}
                    <Link href={"/admin"} target='_blank' className="btn bg-primaryYellow hover:text-black text-white">Admin</Link>
                </div>
            </div>
        </>
    )
}
