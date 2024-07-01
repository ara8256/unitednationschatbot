import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageBox from './component/messagebox';
import Navbar from './component/novbar';
 import ChatInput from './component/inpuutform';
function App() {
  return (
    <div className="App">
      <Navbar />
      <MessageBox />
      <ChatInput />
    </div>
  );
}

export default App;
