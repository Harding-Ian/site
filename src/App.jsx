import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar';
import Parallax from './components/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Home from './components/home/Home';

function App() {

  return (
    <>
      <div className='App'>
        <NavBar />
        <Parallax />
        {/* <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div> */}
        <div className="filler-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos officia natus sequi dignissimos ipsum maxime doloribus vitae perspiciatis tempore odit, laborum rem dolorum nesciunt repudiandae. Maxime deserunt nihil molestiae.</p>
        </div>
        <Home id = "home"/>

        <Portfolio id ="projects"/>
        
        
        <div id="connect-section">Connect Section</div>
      </div>
    </>
  )
}

export default App
