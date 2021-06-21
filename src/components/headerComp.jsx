import { Image } from 'react'
import logo from '../media/logo.png'
const HeaderComp = () => {
  return <header class="header">
    <h1>Josh's Cat Cars</h1>
    <div class="header-right">
      <img class="logo-img" src={logo} alt="logoooo" />
    </div>
  </header>

}

export default HeaderComp