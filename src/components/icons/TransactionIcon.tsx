import React from 'react';
import {SvgCss} from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27"><defs><style>.a{fill:#f4faf5;stroke:#7ac692;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style></defs><g transform="translate(0.5 0.482)"><g transform="translate(0 0.018)"><circle class="a" cx="13" cy="13" r="13" transform="translate(0 0)"/></g><g transform="translate(8.836 9.062)"><path class="a" d="M3,8.27l3.163,2.937L11.7,3.3" transform="translate(-3 -3.3)"/></g></g></svg>
`;
export const TransactionIcon = () => <SvgCss xml={xml} />;
