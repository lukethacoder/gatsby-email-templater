import React from 'react'

const TextBlock = ({ sectionText }) => (
  <tr>
    <td style={{align:"left"}}>
      <table style={{borderBottom: "2px solid #292d34",borderCollapse:"collapse", width:"100%",backgroundColor:"#7fdbdd",cellspacing:"0", cellpadding:"50", border:"0", align:"center", valign:"top", bgcolor:"#01474F"}}>
        <tr>
          <td>
            <table style={{borderCollapse:"collapse",width:"500px", cellspacing:"0", cellpadding:"0", border:"0", align:"center", valign:"top"}}>
              <tr>
                <th style={{padding:0, align:"center" }}>
                  <h1 style={{ margin: 0 }}>
                    {sectionText}
                  </h1>
                </th>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
)

export default TextBlock
