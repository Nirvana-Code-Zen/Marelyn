import { Route, Switch } from 'wouter'

import Home from '../Pages/Home'
import SignUpOptions from '../Pages/SignupOptions'
import Dashboard from '../Pages/Dashboard'
import SignUp from '../Pages/SingupEmail'
import Scope from '../routing/Scope'
import Products from '../Pages/Products/Products'

const Routing = () => {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path="/login" component={Home}/>
      <Route path="/restore-password" component={Home}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Scope base='/sign-up'>
        <Route path="/" component={SignUpOptions} />
        <Route path="/email" component={SignUp} />
      </Scope>
      <Scope base='/products/' component={Products}>
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
