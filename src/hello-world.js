import HelloWorldButton from './components/hello-world-button/hello-world-button.js'
import Heading from './components/heading/heading.js';
import 'bootstrap';
import './index.scss';

const heading = new Heading();
heading.render('hello world');

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if(process.env.NODE_ENV === 'production') {
  console.log("You're in production mode");
} else if (process.env.NODE_ENV === 'development') {
  console.log("You're in development mode");
}

console.log('hi');
