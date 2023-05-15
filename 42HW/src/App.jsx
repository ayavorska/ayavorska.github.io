import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Cards } from './components/cards/Cards'
import { PendingOrders } from './components/pendingOrders/PendingOrders'


function App() {

  return (
    <>
    <Header />
    <main>
      <Sidebar />
      <Cards />
      <PendingOrders />
    </main>
    </>
  )
}

export default App
