import './Footer.css'

import React from 'react'

function Footer() {
  return (
    <div className="Footer-site-footer">
      <div className="container">
        <div className="row">
          <b>react site</b>

          <div className="block1">
            <h1>О нас</h1>
            <ul className="spisok1">
              <li>Какой либо текст</li>
              <li>Второй текст</li>
            </ul>
          </div>
          <div className="block2">
            <div className="spisok2">
              <h1>Что тут?</h1>
              <ul>
                <li>Третий текст</li>
                <li>Четвертый текст</li>
              </ul>
            </div>
          </div>
          <p>роздпрзаорзща</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
