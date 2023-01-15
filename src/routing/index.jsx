import { Route, Switch } from 'wouter'

import Home from '../Pages/Home'
import SignUpOptions from '../Pages/SignupOptions'
import SignUp from '../Pages/SingupEmail'
import Scope from '../routing/Scope'

const Routing = () => {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path="/login" component={Home}/>
      <Route path="/restore-password" component={Home}/>
      <Route path="/dashboard" component={() => <h1>Dashboard</h1>}/>
      <Scope base='/sign-up'>
        <Route path="/" component={SignUpOptions} />
        <Route path="/email" component={SignUp} />
      </Scope>
      <Scope base='/products/'>
        <Route path="create" />
        <Route path="list" />
        <Route path="update" />
        <Route path="categories" />
        <Route path="sales" />
        <Route path=":productid/deteils" />
      </Scope>
      <Scope base='/reports/'>
        <Route path="sales" />
        <Route path="purchases" />
        <Route path="incomes" />
      </Scope>
      <Scope base='resources'>
        <Route path="clients" />
        <Route path="providers" />
      </Scope>
      <Route path="/orders" />
    </Switch>
  )
}

export default Routing
