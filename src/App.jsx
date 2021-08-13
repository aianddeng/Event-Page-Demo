import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Collection from './page/Collection'
import CardList from './page/CardList'
import backgroundImage from './assets/background.png'

const App = () => {
  return (
    <div>
      <div
        className="w-screen h-screen bg-no-repeat bg-center bg-cover fixed top-0 left-0 z-[-100]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className="py-[20vw]">
        <div className="py-[1vw]">
          <div className="px-[5vw]">
            <div className="space-y-[3vw]">
              <Router>
                <Switch>
                  <Route path="/" exact>
                    <ul className="text-white">
                      <li>
                        <Link to="/cardlist">Card List</Link>
                      </li>
                      <li>
                        <Link to="/collection">Collection</Link>
                      </li>
                    </ul>
                  </Route>
                  <Route path="/cardlist" exact component={CardList} />
                  <Route path="/collection" exact component={Collection} />
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
