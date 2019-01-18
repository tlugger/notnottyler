import React from "react"
import * as PropTypes from "prop-types"
import Helmet from "react-helmet"
import "../../static/css/base.scss"

class MasterLayout extends React.Component {
  render() {
    let siteMetadata = this.props.data.site.siteMetadata

    return (
      <div className="MasterLayout">
        <Helmet defaultTitle={siteMetadata.title}>
          <meta name="description" content={siteMetadata.siteDescr} />
          <meta name="keywords" content="articles" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Helmet>
        {this.props.children}
      </div>
    )
  }
}

export default MasterLayout
