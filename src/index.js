import React from 'react';
import {render} from 'react-dom';

import 'antd/dist/antd.css';
import  './main.css';
import  'highlight.js/styles/default.css';

import Routers from './routes';

render(<Routers />,document.getElementById('root'));
