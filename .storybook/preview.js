import { addDecorator } from '@storybook/html';
import { withHTML } from '@whitespace/storybook-addon-html/html';
import '../assets/css/application.css'
import '../assets/css/main.sass'
addDecorator(withHTML);