export default function Title(props) {
    return(
      <p id={props.id} class="font-sans p-3 mb-4 text-7xl text-center
                      hover:animate-wiggle
                      bg-clip-text text-transparent bg-gradient-to-r from-teal to-white-dark">{props.text}</p>
    )
  }