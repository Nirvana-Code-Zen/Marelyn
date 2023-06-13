import { Route } from 'wouter'

import Home from '../Pages/Home'
import SignUpOptions from '../Pages/SignupOptions'
import Dashboard from '../Pages/Dashboard'
import SignUp from '../Pages/SingupEmail'
import Scope from '../routing/Scope'
import ProductsLayout from '../Components/Layeout/Products'
import Reports from '../Pages/Reports'
import Providers from '../Pages/Providers'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import CategoryProducts from '../Pages/Products/CategoryProducts'
import CreateProducts from '../Pages/Products/CreateProducts'
import ListProduct from '../Pages/Products/ListProducts'

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
          <ProductsLayout>
            <Route path="list" component={ListProduct} />
            <Route path="create" component={CreateProducts}/>
            <Route path="categories" component={CategoryProducts}/>
          </ProductsLayout>
        </Scope>
        <Scope base='/reports/'>
          <Route path="sales" component={Reports} />
          <Route path="purchases" />
          <Route path="incomes" />
        </Scope>
        <Scope base='/resources/'>
          <Route path="providers" componet={Providers}/>
        </Scope>
        <Route path="/orders" />
      </PrivateRoute>
    </>
  )
}

export default Routing
