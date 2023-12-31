import React from 'react';
import {SvgCss} from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24.25" height="25" viewBox="0 0 24.25 25"><defs><style>.a{fill:none;stroke:#4d4e4e;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style></defs><g transform="translate(-0.3 0.1)"><g transform="translate(0.8 0.4)"><circle class="a" cx="5.062" cy="5.062" r="5.062" transform="translate(3.937)"/><path class="a" d="M9.987,19.062A17.707,17.707,0,0,1,.8,16.25c0-.375.375-7.687,6-9.75a6.053,6.053,0,0,0,6.375,0,8.158,8.158,0,0,1,3.75,2.625" transform="translate(-0.8 4.937)"/></g><g transform="translate(9.425 10.337)"><line class="a" x2="14.625" transform="translate(0 13.875)"/><rect class="a" width="2.625" height="4.687" transform="translate(0.937 9.187)"/><rect class="a" width="2.625" height="6.937" transform="translate(6 6.937)"/><rect class="a" width="2.625" height="8.625" transform="translate(11.062 5.25)"/><path class="a" d="M10.4,5.7h2.25V7.575" transform="translate(-1.025 -5.7)"/><path class="a" d="M5.9,13.012l2.625-2.437h3.187l.75-.75L16.587,5.7" transform="translate(-4.963 -5.7)"/></g></g></svg>
`;
export const VendorIcon = () => <SvgCss xml={xml} />;
