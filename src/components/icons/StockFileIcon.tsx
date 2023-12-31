import React from 'react';
import {SvgCss} from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="27.044" height="23.839" viewBox="0 0 27.044 23.839"><defs><style>.a{fill:none;stroke:#4d4e4e;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style></defs><g transform="translate(0.2 -1.3)"><g transform="translate(3.105 1.8)"><path class="a" d="M13.119,3.6h8.414V20.028H1.7V3.6H9.914" transform="translate(-1.7 0.006)"/><path class="a" d="M9.914,5.406H1.7L3.1,1.8H19.73l1.8,3.606H13.119" transform="translate(-1.7 -1.8)"/><rect class="a" width="3.205" height="9.015" transform="translate(8.214)"/></g><path class="a" d="M.3,12.4V14H26.344V12.4" transform="translate(0 10.636)"/></g></svg>
`;
export const StockFileIcon = () => <SvgCss xml={xml} />;
