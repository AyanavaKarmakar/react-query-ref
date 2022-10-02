import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Navbar, Table } from './components'

export const App = () => {
  const { isLoading, error, data, isFetching } = useQuery(['productData'], () =>
    axios.get('https://course-api.com/react-store-products').then((res) => res.data),
  )

  if (isLoading === true)
    return (
      <header>
        <Navbar />
      </header>
    )

  if (error === true)
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <h2>An error has occurred! Please try again!</h2>
        </main>
      </>
    )

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Table />
      </main>
    </>
  )
}
