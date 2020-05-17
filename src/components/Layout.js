import React from 'react'
import { Helmet } from 'react-helmet'
import './all.scss'
import useSiteMetadata from './SiteMetadata'
import Footer from '../components/Footer'

// import logo from '../img/logo.svg'
import faviconApple from '../img/favicon/apple-touch-icon.png'
import favicon32 from '../img/favicon/favicon-32x32.png'
import favicon16 from '../img/favicon/favicon-16x16.png'
import faviconManifest from 'raw-loader!../img/favicon/site.webmanifest'
import faviconSafari from '../img/favicon/safari-pinned-tab.svg'
import favicon from '../img/favicon/favicon.ico'
import faviconBrowserconfig from 'raw-loader!../img/favicon/browserconfig.xml'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />




        <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href={faviconManifest} />
        <link rel="mask-icon" href={faviconSafari} color="#51c1b1" />
        <link rel="shortcut icon" href={favicon} />
        <meta name="msapplication-TileColor" content="#51c1b1" />
        <meta name="msapplication-config" content={faviconBrowserconfig} />
        <meta name="theme-color" content="#51c1b1" />

      </Helmet>
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
