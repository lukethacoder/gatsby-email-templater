import React from 'react'

import Layout from '../components/layout'
import Header from '../components/header'
import TextBlock from '../components/textBlock'

const IndexPage = () => (
  <Layout>
    {/* add components here - use 'tr' as the root container */}
    <Header/>
    <TextBlock sectionText="test content goes here"/>
    <tr>
      <td style={{align:"left"}}>
        <table style={{borderBottom: "2px solid #292d34",borderCollapse:"collapse", width:"100%",backgroundColor:"#7fdbdd",cellspacing:"0", cellpadding:"50", border:"0", align:"center", valign:"top", bgcolor:"#01474F"}}>
          <tr>
            <td>
              <table style={{borderCollapse:"collapse",width:"500px", cellspacing:"0", cellpadding:"0", border:"0", align:"center", valign:"top"}}>
                <tr>
                  <th style={{padding:0, align:"center" }}>
                    <h2 style={{color:"#fff", fontSize:"24px", fontWeight:"600", margin:"0", fontFamily: "sans-serif, Arial", lineHeight:"140%",}}>Thank you for your donation to Donation__c.Fundraising_Initiative__c</h2>
                  </th>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <table style={{borderCollapse:"collapse", width:"100%", cellspacing:"0", cellpadding:"50", border:"0", align:"center", valign:"top"}}>
        <tr>
          <td>
            <table style={{borderCollapse:"collapse",width:"500px", cellspacing:"0", cellpadding:"0", border:"0", align:"center", valign:"top"}}>
              <tr>
                <th style={{padding:0, align:"left" }}>
                  <p style={{color:"#005058", cfontSize:"14px", fontWeight:"400", margin:"0", fontFamily: "sans-serif, Arial", lineHeight:"140%",}}>
                    Hi  Donation__c.Donor_Contact__c

                    <br/><br/>Thank you for your kind donation.
                    <br/><br/>At Karinya House we celebrate every time we receive a donation from our community.
                    <br/><br/>Through your donation you share our purpose of supporting some inspiring women in our community at a critical time in their lives. You are their village. 

                  </p>
                </th>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </tr>

    <tr>
      <table style={{borderCollapse:"collapse", width:"100%", cellspacing:"0", cellpadding:"50", border:"0", align:"center", valign:"top"}}>
        <tr>
          <td>
            <table style={{borderCollapse:"collapse",width:"500px", cellspacing:"0", cellpadding:"0", border:"0", align:"center", valign:"top"}}>
              <tr>
                <td style={{align:"left"}}>
                  <p style={{color:"#005058", cfontSize:"14px", fontWeight:"400", margin:"0", fontFamily: "sans-serif, Arial", lineHeight:"140%",}}>
                    This is your official receipt, please retain it for your records and for substantiation of your taxation claim. 
                    
                  </p><br/>
                  <p style={{color:"#005058", cfontSize:"14px", fontWeight:"400", margin:"0", fontFamily: "sans-serif, Arial", lineHeight:"140%",}}>
                    Please note: This is not a tax receipt. An official tax receipt will be provided once the transaction has been completed.
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{align:"left"}}>
                  <p style={{padding: "48px 0 0 0", color:"#005058", cfontSize:"14px", fontWeight:"400", margin:"0", fontFamily: "sans-serif, Arial", lineHeight:"140%"}}>Thank you again for your support</p>
                </td>
              </tr>
              <tr>
                <td style={{align:"left"}}>
                  <p style={{textAlign: "center", padding: "24px 0 0 0", color:"#005058", fontSize:"8.5px", fontWeight:"400", margin:"0", fontFamily: "sans-serif, Arial", lineHeight:"140%",}}>
                    This donation was made as a gift. Donations over $2 are tax deductible.
                    If you have any queries about your donation please send an email to <a style={{color:"#292d34"}} href="mailto:info@karinyahouse.asn.au">info@karinyahouse.asn.au</a> and quote your name and the receipt number above.
                    This receipt is issued by Karinya House Home For Mothers & Babies Inc, ABN 19 764 870 539
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </tr>                                          
  </Layout>
)

export default IndexPage
