const { gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Portfolio {
    header: Header,
    work: [Work],
    about: About,
    skills: [Skill],
    contact: Contact,
    activity: Activity
  }

  type Header {
    name: String,
    avatarImg: String,
    headerTagline: [String],
    headerParagraph: String,
    contactEmail: String
  }

  type Work {
    title: String,
    para: String,
    imageSrc: String,
    url: String
  }

  type About {
    about: [String]
    aboutImage: String
  }

  type Skill {
    img: String,
    para: String,
    references: [Reference]
  }

  type Reference {
    title: String,
    description: String,
    link: String
  }

  type Contact {
    contactSubHeading: String
    social: [Social]
  }

  type Social {
    img: String,
    url: String
  }

  type Activity {
    urls: [String]
  }

  type Query {
    check: String,
    portfolio: Portfolio
  }
`

module.exports = { typeDefs }