import { render } from "react-dom"
import * as Scroll from "react-scroll"
import disableScroll from 'disable-scroll'

let ScrollLink = Scroll.Link;

function ArrowButton(props) {
    if(props.up) return(
        <div class="absolute duration-300 transition-transform transform-gpu hover:scale-110 rounded-lg w-1/8 py-2 mx-auto mt-10 border-2 inset-x-0 top-0">
            <ScrollLink activeClass="" to={props.dest} spy={true} smooth={true}  duration="500">
                <svg class="flex h-5 inset-x-0 mx-auto top-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                </svg>
            </ScrollLink>
        </div>
    )
    if(props.down) return (
        <div class="absolute duration-300 transition-transform transform-gpu hover:scale-110 rounded-lg w-1/8 py-2 mx-auto mb-10 border-2 inset-x-0 bottom-0">
            <ScrollLink activeClass="" to={props.dest} spy={true} smooth={true}  duration="500">
                <svg class="flex h-5 inset-x-0 mx-auto bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </ScrollLink>
        </div>
    )
}

export default function Card(props) {
    return (
        <div id = {props.id} class="relative h-screen max-w-full px-16">
            <div class="flex-col mx-auto h-full w-3/4 pt-72 pb-10 inset-x-0 top-0">
                {props.arrowPrev && <ArrowButton up={true} dest={props.prev} />}
                {props.children}
                {props.arrowNext && <ArrowButton down={true} dest={props.next} />}
            </div>
        </div>
    )
}