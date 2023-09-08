import { Route } from 'wouter'
import User from '../Context/User'

import Home from '../Pages/Home'
import SignUp from '../Pages/SingupEmail'
import SignUpOptions from '../Pages/SignupOptions'
import Scope from '../routing/Scope.jsx'
import ProtectedRoute from './PrivateRoute'
import Dashboard from '../Pages/Dashboard'

const Routing = () => (
  <>
    <Route path='/' component={Home} />
    <Route path="/login" component={Home}/>
    <Route path="/restore-password" component={Home}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Scope base='/sign-up'>
      <Route path="/" component={SignUpOptions} />
      <Route path="/email" component={SignUp} />
    </Scope>
    <User>
      <ProtectedRoute>
        <Scope base='/products'>
          <Route path="/" component={() => <h1>Products Home</h1>}/>
          <Route path="/create" component={() => <h1>Products Create</h1>}/>
          <Route path="/list" />
          <Route path="/update" />
          <Route path="/categories" />
          <Route path="/sales" />
          <Route path="/:productid/deteils" />
        </Scope>
        <Scope base='/reports'>
          <Route path="/" component={() => <h1>reports Home</h1>}/>
          <Route path="/sales" />
          <Route path="/purchases" />
          <Route path="/incomes" />
        </Scope>
        <Scope base='/resources'>
          <Route path="/" component={() => <h1>Resources Home</h1>}/>
          <Route path="/clients" />
          <Route path="/providers" />
        </Scope>
        <Scope base='/orders'>
          <Route path="/" component={() => <h1>Orders Home</h1>}/>
        </Scope>
      </ProtectedRoute>
    </User>
  </>
)

export default Routing
