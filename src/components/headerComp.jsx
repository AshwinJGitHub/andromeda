import { Image } from 'react'
import logo from '../media/logo.png'
const HeaderComp = () => {
  return <div class="header">
  <a href="#default" >Josh's Cat Cars</a>
  <div class="header-right">
    <img class="logo-img" src={logo} alt="logoooo" />
  </div>
</div>
    
}

export default HeaderComp