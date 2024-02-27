import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (



    <header className="container__header">
      <Container>
    <nav className="wrapper__header nav__appbar">
        <div className="content__container content__wrapper">
            <div className="section__content section__left">
                <ul className="header__list">
                    <li>
                     <Link to='/' className='tab__link tab__logo'>  
                            <img alt="Codecademy logo" className="image__header" src="https://raw.githubusercontent.com/bannayash11/bannayash11.github.io/master/img/website-logo.png" />
                       </Link>
                    </li>
                </ul>
                <ul className="header__list desktop__view">
               
                </ul>
            </div>
            <div className="section__content section__right">
                <ul className="header__list desktop__view">
                {
                  navItems.map((item) => 
                  item.active ? (
                    <li key={item.name}>
                     
                        <button onClick={() => navigate(item.slug)} className='tab__link' id="catalog">{item.name}</button>
                  
                    </li>
                      ) : null
                      )}
                    <li>
                        <div id="sign-up" className="tab__link register__btn">
                          {authStatus && (<LogoutBtn /> )}   
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </Container>
</header>
  )
}

export default Header








{/* <Link to='/'>  <Logo width='70px'/></Link>
<Container>
  <div className="header-right">
  {navItems.map((item) => 
            item.active ? (
              <span key={item.name}>
                <button onClick={() => navigate(item.slug)} className='page-scroll' >{item.name}</button> </span>
            ) : null
            )}
            {authStatus && (
              <span><LogoutBtn /> </span>
            )}
                  
  </div>
</Container> */}
