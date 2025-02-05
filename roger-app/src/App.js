
import './App.css';
import Header from './components/header';
import About from './components/about';
import Card from './components/card';
import Card2 from './components/classcard';
import Experience from './components/propsexperience';
import ExperienceList from './components/ExperienceList';
import ServiceList from './component2/Servicelist';
import ClassComponent from './classComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Card/>
      <Card2/>
      <ExperienceList/>
      <ServiceList/>
      <ClassComponent/>

    {/* <div className='container my-3' style={{ background: "black","color":"white"}}>
      
      <div className='row py-3'>
        <h2 className='text-center'>Experience</h2>
      </div>

      <div className='row px-4'>
      
      <Experience title={"first"} para={"This is the first component"}/>

      <Experience title={"second"} para={"This is the second component"}/>

      <Experience title={"third"} para={"This is the third component"}/>
      </div>
    </div>
    */}
    </div>
  );
}

export default App;
