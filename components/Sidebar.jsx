import React, { useState } from 'react'
import Button from './Button.jsx'
import Link from 'next/link'

function ProfileComp(props){
    const [shown, setShown] = useState(false);

    return <div class="flex-col mb-5 mx-5"
                onMouseEnter={() => setShown(true)}
                onMouseLeave={() => setShown(false)}>
        <div class="relative flex z-1 mb-2 rounded-lg ring-4 ring-white-dark overflow-hidden shadow-md">
            <img class="flex-grow"
                src="/images/profile-small.jpg"
                alt="Spencer Matei Olson"
                />
        </div>
        <p class="mb-10 text-white text-center text-lg">Spencer Matei Olson</p>
    </div>
}

export default function Sidebar() {
    return (
        <>
            <div class="fixed flex min-w-10 shadow-lg px-5 h-screen w-1/8 bg-gray-700 inset-y-0 left-0">
                <div class="flex-col my-10 mx-auto align-items">
                    <ProfileComp width = "160" height="150"/>
                    <Button text="Home" href="/" />
                    <Button text="About" href="/about" />
                    <Button text="Posts" href="/posts/landing" />
                </div>
            </div>
        </>
    )
}