import { MessageBox } from './components/message-box'
import { useMessages } from './hooks/use-messages'
import './App.css';

function App() {
  const messages = useMessages()
  return (
    <div className="app">
      <div className="window">
        <MessageBox messages={ messages } />
      </div>
    </div>
  );
}

export default App;
