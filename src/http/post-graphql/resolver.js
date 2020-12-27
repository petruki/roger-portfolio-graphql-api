const resolvers = {
    Query: {
        check: () => 'All good',
        header() {
            return resolveHeader()
        },
        work() {
            return resolveWork()
        },
        about() {
            return resolveAbout()
        },
        skills() {
            return resolveSkill()
        },
        contact() {
            return resolveContact()
        }
    }
}

const resolveHeader = () => {
    return {
        name: "Roger",
        avatarImg: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/avatar.png",
        headerTagline: [
          "Founder,",
          "Full-stack Developer",
          "and Music Producer"
        ],
        headerParagraph:
          "Friendly, enthusiastic, and upbeat Full-stack Developer with more than 10 years of experience in the field, " +
          "a Project Founder, and self-taught Music Composer & Producer.",
        contactEmail: "roger.petruki@gmail.com"
    }
}

const resolveWork = () => {
    return [
        {
            id: 1,
            title: "Switcher API",
            para:
                "Not only an API that has a goal of providing a toggling mechanism, but a platform which can offer a wide range of " +
                "customization and control regarding software behavior.",
            imageSrc: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/work/switcherapi.png",
            url: "https://switcherapi.github.io/switcher-management/"
        },
        {
            id: 2,
            title: "Trackerforce",
            para:
                "A CXM platform that componentize your business processes. Trackerforce is aimed to provide tracking capabilities for both business and customers.",
            imageSrc: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/work/trackerforce.png",
            url: "https://github.com/trackerforce"
        },
        {
            id: 3,
            title: "SplitMATE",
            para:
                "Split whatever you want with SplitMATE, create voting polls, check items & tasks, estimate individual costs, everything in real-time, and of course, do not let the fun goes away.",
            imageSrc: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/work/splitmate.png",
            url: "https://github.com/trackerforce/splitmate-android-app"
        },
        {
            id: 4,
            title: "Skimming Deno Library",
            para:
                "Skimming is a data fetcher based on Deno runtime for JavaScript and TypeScript. The idea is to provide a simple and efficient search engine module.",
            imageSrc: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/work/skimming.png",
            url: "https://deno.land/x/skimming@v1.0.7"
        },
        {
            id: 5,
            title: "EMPTY EP",
            para:
                "2018 – Released an EP called “Empty” under my label ℗ Rogerio Petruki. Available on all mainstream music platforms.",
            imageSrc: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/work/empty.png",
            url: "https://rogeriopetruki.bandcamp.com/album/empty-revisited"
        },
        {
            id: 6,
            title: "Other Projects",
            para:
                "From granular APIs to Full-stack applications. Find out more about my recent projects and experiments on my GitHub page.",
            imageSrc: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/work/github.png",
            url: "https://github.com/petruki?tab=repositories"
        }
    ]
}

const resolveAbout = () => {
    return {
        aboutParaOne:
            "I dived into the coding world just before I entered the College. " + 
            "My first contact with programming was customizing and developing game mods which stimulated my sense of curiosity to learn more.",
        aboutParaTwo:
            "Fast-forwarding to my first job as a Java Developer, I was challenged to write a compiler using Java CC. " +
            "The funny thing is that in terms of coding complexity, my first hands-on project is still in my top 5 challenging projects that I have ever worked with.",
        aboutParaThree:
            "After gaining enough experience, I've assumed more complex projects on which programming was not the only variable. " + 
            "As a Senior Architect, I was able to use and learn several other skills to deliver the best solution through a concise roadmap that would lead to results.",
        aboutParaFour:
            "Throughout this exciting journey as a Software Engineer, I also have other interests that unconsciously go hand in hand, such as Music Production. " +
            "Being able to produce such materials has to do with translating tons of information into analog sound waves. " + 
            "And to be honest, I would have to create a new portfolio to just talk about this. =D",
        aboutImage: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/roger.png"
    }
}

const resolveSkill = () => {
    return [
        {
            id: 1,
            img: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/skills/java.png",
            para:
                "Started using Java from the beginning of my career. I have developed software of all kind, " +
                "from desktop, web, mobile and webservices, to compiler, APIs, libraries and much more."
        },
        {
            id: 2,
            img: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/skills/javascript.png",
            para:
                "JavaScript is present on my stack since I started working as Full-stack developer. " +
                "Never alone, JS is the very cornerstone of almost every recent framework I've learned so far."
        },
        {
            id: 3,
            img: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/skills/deno.png",
            para:
                "Skimming Module was my first contribution to Deno project. " +
                "It allowed me to taste developing backend applications written in TypeScript and tons of out-of-the-box features " +
                "that would not be trivial while using other technologies."
        },
        {
            id: 4,
            img: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/skills/spring.png",
            para:
                "Started using Spring framework since v3 and still incorporating it to my recent projects. " +
                "Switcher AC is project that uses Spring Boot v2.3.7 and Spring Security v5.3 for handling all account profiler over the Switcher API platform. " +
                "Spring framework was also chosen to orchestrate a multi-tenancy implementation on Trackerforce project."
        },
        {
            id: 5,
            img: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/skills/angular.png",
            para:
                "For my front-end development framework of choice, Angular 2 was used to build Switcher Management, " +
                "a project that interfaces with Switcher API and provides a simple yet robust UI. " +
                "Recently, I have been using React as well as part of my front-end stack."
        },
        {
            id: 6,
            img: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/skills/nodejs.png",
            para:
                "Nodejs has been the chosen runtime for some of my recent open-source projects. " +
                "I have written APIs, web crawlers and libraries in conjunction with several different frameworks. " +
                "Just to mention a few, express, express-graphql, socket.io, cheerio, supertest, jest, sinon, mocha, and much more."
        },
        {
            id: 7,
            img: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/skills/oracle.png",
            para:
                "Hands-on experience working for 8 years with Oracle solutions. " +
                "Developed an enterprise solution using Oracle 11g as DBMS, Oracle Coherence for in-memory data caching and Oracle RTD as our machine learning component."
        },
        {
            id: 8,
            img: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/skills/mongodb.png",
            para:
                "When the goal is to develop a concise and granular APIs which scales horizontally, " +
                "MongoDB is my NoSQL DB of choice. Using it to produce aggregation analysis or " +
                "even using multi-tenancy approach to create independent data store mechanism over the same platform were the reason MongoDB shined."
        },
        {
            id: 9,
            img: "https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/skills/git.png",
            para:
                "Not only a version controller, but part of the process of creating software which each one of them might have different approaches. " +
                "As we have worked mostly with open-source projects, it requires a high level of code verification and " +
                "quality gates over the version control that led us to use Git Fork workflow."
        }
    ]
}

const resolveContact = () => {
    return {
        contactSubHeading: "Let's connect!",
        social: [
            {
                img: "https://raw.githubusercontent.com/petruki/rogerportfolio/65b303bb15d08f3f43c0d5433e8d51a51fa603a7/src/images/linkedin.svg",
                url: "https://www.linkedin.com/in/rogerit"
            },
            {
                img: "https://raw.githubusercontent.com/petruki/rogerportfolio/65b303bb15d08f3f43c0d5433e8d51a51fa603a7/src/images/github.svg",
                url: "https://github.com/petruki",
            }
        ]
    }
}

module.exports = { resolvers }