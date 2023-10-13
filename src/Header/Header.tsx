
import React from 'react'
import './Header.css'
function Header()
{
    return(
        <header className='Header-site-header'>
            <div className='container'>
                <div className='row display flex'>
                    <div className='col-4'>
                        <h1>
                            <a href="#">React site</a>
                        </h1>
                    </div>
                    <nav className="col-8">
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Услуги</a></li>
                    </ul>
                    </nav>
            <div className="section_search">

              <form action="/" method="post">
                <input type="text" name="search-term" className="text-input" placeholder="Search..."/>
              </form>
            </div>
                </div>
            </div>
        </header>
    )
}
export default Header