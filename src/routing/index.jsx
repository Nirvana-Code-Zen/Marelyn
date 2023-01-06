import { Route, Switch } from 'wouter'

import Home from '../Pages/Home'
import SignUp from '../Pages/Singup'
import Scope from '../routing/Scope.jsx'

const Routing = () => {
  return (
    <Switch>
      <Scope base='/'>
        <Route path='/' component={Home} />
        <Route path="sign-up" component={SignUp} />
        <Route path="login" />
        <Route path="restore-password" />
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
