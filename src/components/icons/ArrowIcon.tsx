import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="11.474" height="7.191" viewBox="0 0 11.474 7.191"><defs><style>.a{fill:none;stroke:#4e4e4e;stroke-miterlimit:10;}</style></defs><path class="a" d="M9,8.333V5.608s.17-.852.852-.341l4.939,4.6s.852.511,0,1.022l-4.939,4.6s-.681.341-.852-.511V12.25" transform="translate(-4.58 15.691) rotate(-90)"/></svg>
`;

export const ArrowIcon = () => <SvgCss xml={xml} />;
