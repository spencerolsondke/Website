import { render } from "react-dom"
import * as Scroll from "react-scroll"
import disableScroll from 'disable-scroll'

let ScrollLink = Scroll.Link;

export default function Card(props) {
    return (
        <div id = {props.id} class="relative h-screen max-w-full px-16">
            <div class="flex-col mx-auto h-full w-3/4 pt-72 pb-10 inset-x-0 top-0">
                {props.children}
                {props.arrow &&
                    (                        
                        <div class="absolute w-1/4 mx-auto mb-10 border-2 inset-x-0 bottom-0">
                            <ScrollLink activeClass="" to="About" spy={true} smooth={true}  duration="500">
                                <svg class="flex h-5 inset-x-0 mx-auto bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </ScrollLink>
                        </div>
                    )}
            </div>
        </div>
    )
}