const Footer = (props) => {
   let counter = 0;
   props.parts.forEach(r => counter += r.exercises);
   return <p><b>Number of exercises:</b> {counter}</p>
}

export default Footer;