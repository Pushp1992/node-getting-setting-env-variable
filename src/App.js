import React from 'react';
import logo from './logo.svg';
import Cookies from 'js-cookie';
import './App.css';

function App() {
  // console.log("env var", process.env.REACT_APP_STAGE);

  const [cookie, setCookie] = React.useState({});
  const [varValue, setVarValue] = React.useState('');

  React.useEffect(() => {
    const browserCookie = Cookies.get('env_var');
    setCookie(JSON.parse(browserCookie))
  }, []);

  // const browserCookie = Cookies.get('env_var');
  // console.log(JSON.parse(browserCookie));

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='key'>
          <h3>Available Enviroment variables:</h3><br/><br/>
          {
            Object.keys(cookie).map((item,index) => {
              return(
                <div key={index}>{item}</div>
              )
            })
          }
        </div>
        <div className='value'>
          <h3>Copy paste to see the values</h3>
          <div>
            <input type="text" className="inputStyle" placeholder="Enter variable Name" onChange={e => setVarValue(e.target.value)} />
            <div>
              {
                varValue !== "" ? <span>{cookie[varValue]}</span> : null
              }
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
