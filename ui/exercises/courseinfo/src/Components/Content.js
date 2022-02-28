import Part from './Part';

const Content = (props) => {
   return (
      <div>
         <Part partName={props.parts[0].name} excersiseCount={props.parts[0].exercises} />
         <Part partName={props.parts[1].name} excersiseCount={props.parts[1].exercises} />
         <Part partName={props.parts[2].name} excersiseCount={props.parts[2].exercises} />
      </div>
   );
}
export default Content;