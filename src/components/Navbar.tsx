export const Navbar = () => {
  return (
    <>
      <div className='navbar bg-primary text-primary-content'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a href='https://tanstack.com/' target='_blank' rel='noreferrer'>
                  React Query
                </a>
              </li>
              <li>
                <a href='https://daisyui.com/' target='_blank' rel='noreferrer'>
                  daisyUI
                </a>
              </li>
              <li>
                <a href='https://heroicons.com/' target='_blank' rel='noreferrer'>
                  HeroIcons
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='navbar-center'>
          <a className='btn btn-ghost normal-case text-xl'>React Query Cart</a>
        </div>
        <div className='navbar-end'>
          <button className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
