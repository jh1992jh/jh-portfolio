import { images } from './images-and-icons';

export const projectData = [
    {
        title: 'SocialFeed',
        description: 'A responsive socialmedia app with a mobile first approach where users can post images, like them, comment, create a profile, edit their profile and follow others and be followed. Built with React, Redux, NodeJS and MongoDB. Authentication via passportJS and JSON webtokens. The app heavily uses conditional rendering based on the data fetched from the backend i built',
        technologies: [ 'React', 'Redux','Styled-components', 'NodeJS', 'Express', 'MongoDB'],
        desktop: images.socialfeedDesktop,
        mobile1: images.socialfeedMobile1,
        mobile2: images.socialfeedMobile2,
        url: 'https://tranquil-taiga-96610.herokuapp.com/',
        githubRepo: 'https://github.com/jh1992jh/social-feed-ui'
    },
    {
        title: 'Piece of Cake',
        description: 'A fullstack React app with a GraphQL backend. The frontend works with React-Apollo and React. Users are able to register, edit their profiles, post recipes, search recipes and like recipes written by other users',
        technologies: ['React', 'React-Apollo', 'GraphQL', 'MongoDB', 'Express', 'NodeJS'],
        desktop: images.pieceofcakeDesktop,
        mobile1: images.pieceofcakeMobile1,
        mobile2: images.pieceofcakeMobile2,
        url: 'https://recipe-graph.herokuapp.com/',
        githubRepo: 'https://github.com/jh1992jh/recipe-graph'
    },
    {
        title: 'Filtermatic',
        description: 'A photo editing app built on Canvas using React, users can upload their pictures and add stickers, filters, text and paint freely over the picture and after they\'re done, save the edited image to their device.',
        technologies: ['React', 'Sass', 'JavaScript', 'Figma'],
        desktop: images.filtermaticDesktop,
        mobile1: images.filtermaticMobile1,
        mobile2: images.filtermaticMobile2,
        url: 'https://jh1992jh.github.io/filtermatic/',
        githubRepo: 'https://github.com/jh1992jh/filtermatic'
    },
    {
        title: 'LandingPage',
        description: 'A responsive landing page built with React. I used flexbox to create the layout. Also built the image-carousel component from scratch which is totally reusable with any picture you want and with as many pictures you want',
        technologies: ['React', 'CSS3', 'JavaScript'],
        desktop: images.reactlandingpageDesktop,
        mobile1: images.reactlandingpageMobile1,
        mobile2: images.reactlandingpageMobile2,
        url: 'https://jh1992jh.github.io/react-landing-page/',
        githubRepo: 'https://github.com/jh1992jh/react-landing-page'
    }
]