import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const ListLink = props =>
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

const Header = () => (
    <div style={{
        // background: 'rgba(199, 0, 43, 0.83)',
        background: 'white',
        marginBottom: '1.45rem',
    }}>
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                                <h3 style={{ display: `inline` }}>Gatsby</h3>
                             </Link>
                         <ul style={{ listStyle: `none`, float: `right` }}>
                             <ListLink to="/">Home</ListLink>
                             <ListLink to="/about/">About</ListLink>
                             <ListLink to="/contact/">Contact</ListLink>
                         </ul>
        </div>
    </div>
)

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet
            title="Gatsby Default Starter"
            meta={[
                {name: 'description', content: 'Sample'},
                {name: 'keywords', content: 'sample, something'},
            ]}
        />
        <Header />
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
            }}
        >
            {children()}
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
//
// import React from "react"
// import g from "glamorous"
// import { css } from "glamor"
// import Link from "gatsby-link"
//
// import { rhythm } from "../utils/typography"
//
// const linkStyle = css({ float: `right` })
//
// export default ({ children, data }) =>
//     <g.Div
//         margin={`0 auto`}
//         maxWidth={700}
//         padding={rhythm(2)}
//         paddingTop={rhythm(1.5)}
//     >
//         <Link to={`/`}>
//             <g.H3 marginBottom={rhythm(2)} display={`inline-block`}>
//                 {data.site.siteMetadata.title}
//             </g.H3>
//         </Link>
//         <Link className={linkStyle} to={`/about/`}>
//             About
//         </Link>
//         {children()}
//     </g.Div>
//
// export const query = graphql`
//   query LayoutQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
