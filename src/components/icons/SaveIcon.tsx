import React from 'react';
import {SvgCss} from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="13.7" height="13.7" viewBox="0 0 13.7 13.7"><defs><style>.a{fill:none;stroke:#4d4e4e;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style></defs><g transform="translate(-0.2 -0.2)"><path class="a" d="M13.4,9.1v3.6a.684.684,0,0,1-.7.7H9.9"/><path class="a" d="M10.5,13.4H1.4a.684.684,0,0,1-.7-.7V1.4A.684.684,0,0,1,1.4.7H12.7a.684.684,0,0,1,.7.7V9.5"/><path class="a" d="M8.9,6.3H5.1A1.216,1.216,0,0,1,3.9,5.1V.7h6.3V5.1A1.309,1.309,0,0,1,8.9,6.3Z"/></g></svg>
`;
export const SaveIcon = () => <SvgCss xml={xml} />;
