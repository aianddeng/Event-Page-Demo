import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Collection from './page/Collection'
import CardList from './page/CardList'
import Upload from './page/Upload'

import Background from './components/Background'
import Infomation from './page/Infomation'

const App = () => {
  return (
    <div>
      <Background />
      <div className="pt-[77px] w-[375px] m-auto">
        <Router>
          <Switch>
            <Route path="/" exact component={CardList} />
            <Route path="/cardlist" exact component={CardList} />
            <Route path="/collection" exact component={Collection} />
            <Route path="/upload" exact component={Upload} />
            <Route path="/infomation" exact component={Infomation} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
