import React from 'react';
import {SvgCss} from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="19.717" height="13.658" viewBox="0 0 19.717 13.658"><defs>
<style>.a{fill:none;stroke:#7ac692;stroke-miterlimit:10;}</style>
</defs><g transform="translate(-3.3 -4.58)"><line class="a" x2="11.942" transform="translate(3.3 11.273)"/><path class="a" d="M9,9.008V5.713s.206-1.03,1.03-.412L16,10.861s1.03.618,0,1.235L10.03,17.656s-.824.412-1.03-.618V13.743" transform="translate(6.036)"/></g>
</svg>
`;

export const ArrowRightIcon = () => <SvgCss xml={xml} />;
