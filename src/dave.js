import DaveImage from './components/dave-image/dave-image.js'
import Heading from './components/heading/heading.js';
import 'bootstrap';
import './index.scss';

const heading = new Heading();
heading.render('dave');

const daveImage = new DaveImage();
daveImage.render();
