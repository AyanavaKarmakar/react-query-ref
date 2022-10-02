interface Product {
  id?: string
  name?: string
  price?: number
  image?: string
  colors: string[]
  company: string
  description: string
  category: string
  shipping: boolean
}

interface Props {
  isFetching: boolean
  cartData: Product[]
}

export const Table = (props: Props) => {
  const { isFetching, cartData } = props

  return (
    <div className='overflow-x-auto'>
      <table className='table table-compact w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Company</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{product.name}</td>
            <td>{product.company}</td>
            <td>{product.description.slice(0, 100)}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
