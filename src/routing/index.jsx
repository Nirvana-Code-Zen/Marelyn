import { Route } from 'wouter'

import Home from '../Pages/Home'
import SignUpOptions from '../Pages/SignupOptions'
import Dashboard from '../Pages/Dashboard'
import SignUp from '../Pages/SingupEmail'
import Scope from '../routing/Scope'
import Products from '../Pages/Products/Products'
import Sales from '../Pages/Sales/Sales'
import Reports from '../Pages/Reports/Reports'
import Clients from '../Pages/Clients/Clients'
import Providers from '../Pages/Providers/Providers'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Routing = () => {
  return (
    <>
      <PublicRoute>
        <Route path='/' component={Home} />
        <Route path="/login" component={Home}/>
        <Scope base='/sign-up'>
          <Route path="/" component={SignUpOptions} />
          <Route path="/email" component={SignUp} />
        </Scope>
        <Route path="/restore-password" component={Home}/>
      </PublicRoute>

      <PrivateRoute>
        <Route path="/dashboard" component={Dashboard}/>
        <Scope base='/products/' >
            <Route path="list" component={Products} />
            <Route path="create"/>

            <Route path="update" />
            <Route path="categories" />
            <Route path="sales" component={Sales} />
            <Route path=":productid/deteils" />
        </Scope>
        <Scope base='/reports/'>
            <Route path="sales" component={Reports} />
            <Route path="purchases" />
            <Route path="incomes" />
        </Scope>
          <Scope base='/resources/'>
            <Route path="clients" component={Clients} />
            <Route path="providers" componet={Providers}/>
          </Scope>
          <Route path="/orders" />
      </PrivateRoute>
    </>
  )
}

export default Routing
