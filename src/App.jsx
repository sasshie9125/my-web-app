import Clock from './components/Clock';
import Profile from './components/Profile';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center space-y-12 p-6">
      <Clock />
      <Profile />
    </div>
  );
}

export default App;
