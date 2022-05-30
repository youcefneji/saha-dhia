import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {

  let users=[
    {name:"Youssef", email:'youssef@gmail.com', phone:123456},
    {name:"Dhia", email:'dhia@gmail.com', phone:1111},
    {name:"Slim", email:'slim@gmail.com', phone:22222},
  ]


  return (
    <div className="App">
     <Header  />
     <Main persons={users} />
     <Footer name={15} />
    </div>
  );
}

export default App;
