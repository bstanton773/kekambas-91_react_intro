import Button from './components/Button';
import Nav from './components/Nav';


function App(props) {
  console.log('Hello this function is running!')
  return (
    <div id="fromApp">
        <Nav brand="Kekambas React"/>
        <div className='container'>
          <h1>Hello World</h1>
          <Button step={1} />
          <Button step={10} />
          <Button step={100} />
          <Button step={1000} />
        </div>
    </div>
    );
}


export default App;
