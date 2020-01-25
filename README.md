# CodeSupport Website Frontend

## About
This repository contains the frontend for the CodeSupport Website. The project is written in JavaScript using the React user interface library.

## Dependencies

### Production
- [React](https://www.npmjs.com/package/react)
- [React DOM](https://www.npmjs.com/package/react-dom)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [React Scripts](https://www.npmjs.com/package/react-scripts)
- [React FontAwesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome)
- [Font Awesome SVG Core](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core)
- [Free Brands SVG Icons](https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons)

### Development
- [Jest DOM](https://www.npmjs.com/package/@testing-library/jest-dom)
- [React Testing Library](https://www.npmjs.com/package/@testing-library/react)
- [User Event](https://www.npmjs.com/package/@testing-library/user-event)
- [Enzyme](https://www.npmjs.com/package/enzyme)
- [Enzyme Adapter for React 16](https://www.npmjs.com/package/enzyme-adapter-react-16)

## Setup
1. Navigate into the repository on your computer and run `npm i`
2. Start the React app with `npm start`
3. Navigate to [http://localhost:3000](http://localhost:3000) in your browser

## Structure
We're using [Atomic Design](http://atomicdesign.bradfrost.com) to keep our folders organised. There are three main folders:
- Our tests live inside `__tests__/`
- Our components live inside `components/`
- Our styling lives inside `css/`

## Tests
We are using [Jest](https://jestjs.io) with [Enzyme](https://airbnb.io/enzyme/) for our tests. Any code that manipulates the state or fetches data from an API **must** be tested.

## Commands
- To start the React app use `npm start`
- To test the React app use `npm test`

**Any Questions?** Feel free to mention @LamboCreeper#6510 in the [CodeSupport Discord](https://discord.gg/Hn9SETt).