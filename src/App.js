// import logo from './logo.svg';
import './App.css';
import './tailwind.css';

/* components */
import TopBar from './components/TopBar'
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

const mainBackGround = {
  background : '#212121'
}

function App() {
  return (<div class="w-screen h-screen flex flex-col flex-shrink-0 relative justify-items-center" style={mainBackGround}>
    
      <TopBar/>

      <div class="flex flex-row w-screen h-full relative mr-80 overflow-hidden">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;