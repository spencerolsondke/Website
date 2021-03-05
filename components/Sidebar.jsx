import Link from 'next/link'
import Image from 'next/image'

function ProfileComp(props){
    return <div class="flex-col mb-5 mx-5">
        <div class="flexmb-1 mb-2 rounded-full ring-4 ring-white-dark overflow-hidden shadow-md">
            <img class="flex-grow"
                src="/images/profile-small.jpg"
                alt="Spencer Matei Olson"
                />
        </div>
        <p class="mb-10 text-white text-center text-lg">Spencer Matei Olson</p>
    </div>
}

function Button(props) {
    return <div class="flex mb-3">
            <Link href={props.href}>
                <a class="border rounded-md hover:bg-blue-dark flex-grow text-center text-white">{props.text}</a>
            </Link>
        </div>
}

export const Sidebar = () => {
    return (
        <>
            <div class="flex min-w-10 shadow-lg px-5 h-screen w-1/8 bg-gray-700">
                <div class="flex-col my-10 mx-auto align-items">
                    <ProfileComp width = "160" height="150"/>
                    <Button text="Home" href="/posts/first-post" />
                    <Button text="About" href="/about" />
                    <Button text="Posts" href="/posts/landing" />
                </div>
            </div>
        </>
    )
}