'use strict'

const Header = () => {
  const view = `
    <ul>
      <li>
        <button data-path=''>Home</button>
      </li>
      <li>
        <button data-path='contact'>Contact</button>
      </li>
      <li>
        <button data-path='about'>About me</button>
      </li>
    </ul>
  `

  return view
}

export default Header
