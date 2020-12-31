const { gql } = require('apollo-server-lambda')

const typeDefs = gql`
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
    aboutParaOne: String,
    aboutParaTwo: String,
    aboutParaThree: String,
    aboutParaFour: String,
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

  type Query {
    check: String,
    header: Header,
    work: [Work],
    about: About,
    skills: [Skill],
    contact: Contact
  }
`

module.exports = { typeDefs }