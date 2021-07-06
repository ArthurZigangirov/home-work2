
import Example from '../hw2';
import './App.css';

const MyFunctionComponent=()=>{
  return <div> Some text</div>
};

function App() {
  return (
    <div className="App">
       <div>
     <MyFunctionComponent />
     <Example />
      </div>
      
      <MyFunctionComponent />
      <div>
      </div>
    </div>
  );
}

export default App;
