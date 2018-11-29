import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <tr>
    <div>
      <h5 class="turnMeGreen" style={{ margin: 0, textAlign: "center" }}>
        <a
          href="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          logo or brand text
        </a>
      </h5>
    </div>
  </tr>
)

export default Header
