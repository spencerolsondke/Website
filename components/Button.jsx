import Link from 'next/link'

export default function Button(props) {
    return <div class="flex mb-5">
            <Link href={props.href}>
                <a class="transition-transform transform-gpu hover:scale-110 border py-2 rounded-md hover:bg-blue-dark flex-grow text-center text-white">{props.text}</a>
            </Link>
        </div>
}