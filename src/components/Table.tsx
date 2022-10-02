/**
 * placeholder object
 * @see https://course-api.com/react-store-products
 */
const product = {
  id: 'recZkNf2kwmdBcqd0',
  name: 'accent chair',
  price: 25999,
  company: 'marcos',
  description:
    'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
  category: 'office',
}

export const Table = () => {
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
