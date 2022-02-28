import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts} />
      <Footer parts={parts} />
    </div>
  )
}

export default App;
