import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
// currently custom css is written in this file. plans to add sass functionality in future updates
import './custom.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* Helmet acts as the <head></head> section of the page - read more at https://github.com/nfl/react-helmet */}
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en"/>
          <meta charset="utf-8"/>
          <link href="https://fonts.googleapis.com/css?family=Oswald:400,700" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet"/>
        </Helmet>
        <table id="mainStructure" style={{borderCollapse: "collapse", width: "100%", backgroundColor: "#f9f9f9", width: "100%", cellspacing: "0", cellpadding: "0", border: "0"}}>
          <tbody>
            <tr>
              <td style={{padding:0, valign: "top", backgroundColor:"#f9f9f9"}}>
                <table style={{align:"center", borderCollapse:"collapse",width:"100%",borderStyle:"none",backgroundColor:"#f9f9f9", bgcolor:"#f9f9f9", cellspacing:"0", cellpadding:"0", border:"0"}}>
                  <tbody>
                    <tr>
                      <td style={{padding:0, valign: "top"}}>
                        <table style={{margin: "16px auto 24px", borderCollapse:"collapse",width:"600px",backgroundcolor:"#fff",boxShadow:"0 4px 12px 0px rgba(0, 0, 0, 0.15)", cellspacing:"0", cellpadding:"0", border:"0"}}>
                          <tbody>
                            <td>
                              <table style={{width:"100%", cellspacing:"0", cellpadding:"0", border:"0", align:"left" }}>
                                <tr>
                                  <td>
                                    <table style={{borderCollapse:"collapse", width:"100%", cellspacing:"0", cellpadding:"0", border:"0", align:"center" }}>
                                      <tr>
                                        <td style={{align:"left"}}>
                                          <table style={{ align:"left", valign:"top", width:"100%", cellspacing:"0", cellpadding:"0", border:"0"}}>
                                            <tr>
                                              <td style={{padding:0, valign:"top"}}>
                                                <table style={{borderCollapse:"collapse", width:"100%", cellspacing:"0", cellpadding:"0", border:"0", align:"left", valign:"top"}}>
                                                  <tbody>
                                                    {/* index.js page is rendered here.
                                                    if you have multiple templates, these will render here and can be view at localhost:8000/template-file-name
                                                    (template files are to be added to the pages folder to render) */}
                                                    {children}
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
