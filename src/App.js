import './App.css';
import Sidebar from './components/Sidebar';
import Form from './components/Form';

function App() {
  return (
    <div className="App h-screen flex justify-center items-center bg-blue-100">
      <main className="bg-white w-full h-full rounded-xl shadow-xl md:p-5
      md:flex md:h-md-height md:w-11/12 xl:w-lg-width">
        <Sidebar />
        <Form />
      </main>
    </div>
  );
}

export default App;
