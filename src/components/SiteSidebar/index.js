import React from "react"
import Link from "gatsby-link"
import SiteNav from "../SiteNav"
import SiteLinks from "../SiteLinks"

class SiteSidebar extends React.Component {
  render() {
    const isHome = this.props.location.pathname === `/`
    const { siteMetadata } = this.props.data.site
    let header = (
      <div className="">
        <div className="card-image">
          <Link to={`/`}>
            <figure className="image">
              <img src="https://avatars2.githubusercontent.com/u/10581772?s=400&u=ea5e24326b865709420d32e5e19ec553c115035c&v=4" />
            </figure>
          </Link>
        </div>
        <div className="card-content">
          <p className="title">
            <Link
              style={{
                textDecoration: `none`,
                borderBottom: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {siteMetadata.title}
            </Link>
          </p>
          <p style={{ fontStyle: `italic` }}>{siteMetadata.siteDescr}</p>
        </div>
      </div>
    )

    return (
      <div className="card is-fullwidth">
        {header}
        <div className="card-content">
          <SiteNav {...this.props} />
          <footer>
            <div className="is-hidden-mobile">
              <SiteLinks {...this.props} />
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default SiteSidebar
