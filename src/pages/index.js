import React from 'react'

import Layout from '../components/Layout'
import MenuRoll from '../components/MenuRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="content">
          <MenuRoll />
        </div>
      </Layout>
    )
  }
}
