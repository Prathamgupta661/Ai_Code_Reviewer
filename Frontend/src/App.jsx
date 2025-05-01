import { useState, useEffect } from 'react'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs'
import Editor from 'react-simple-code-editor'
import './App.css'
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'
import Login from './components/Login'
import Signup from './components/Signup' // Import Signup component
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom' // Import Route and Routes
import User from './components/User'
import Logout from './components/Logout'
import Home from './components/Home'

function App() {
  const [code, setCode] = useState(`function sum()
    {return 1+2;}`)

  useEffect(()=>{
    Prism.highlightAll()
  },[])

  const [review,setReview]=useState('')
  const [loading ,setloading]=useState(false)
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false)


  async function GetReview() {
    setloading(true);
    setReview('');
    const response =await axios.post(`${import.meta.env.VITE_BACKEND_URL}/ai/get-review`,{code});

    setReview(response.data)
    setloading(false);
  }
  return (
    <BrowserRouter> 
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn} />} /> 
        <Route path="/user" element={<User loggedIn={loggedIn}/>} >
        
        <Route path="editor" element={
          <main>
            <div className="left">
              <div className="code">
                <Editor
                  value={code}
                  onValueChange={code => setCode(code)}
                  highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                    border: '1px solid #d1d1d1',
                    borderRadius: '5px',
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>
              <div 
              onClick={GetReview}
              className="review"> Get Review </div>
            </div>
            <div className="right">
            

              <Markdown
                rehypePlugins={[rehypeHighlight]}>
                {loading ? "Loading....." : review}
              </Markdown>
            </div>
            {loggedIn && <Link to="/logout">Logout</Link>}

          </main>
        } />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
