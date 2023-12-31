import React from 'react';
import {SvgCss} from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="27.672" height="19.5" viewBox="0 0 27.672 19.5"><defs>
<style>.a,.b{fill:none;stroke-linecap:round;stroke-width:1.5px;}.a{stroke:#4e4e4e;}.b{stroke:#b70000;}
</style>
</defs>
<g transform="translate(0.75 0.75)"><line class="a" y2="18" transform="translate(3.739)"/>
<line class="a" y2="18" transform="translate(6.543)"/><line class="a" y2="18" transform="translate(11.217)"/>
<line class="a" y2="18" transform="translate(14.021)"/><line class="a" y2="18" transform="translate(16.825)"/>
<line class="a" y2="18" transform="translate(21.499)"/><line class="b" x2="26.172" transform="translate(0 8)"/></g>
</svg>

`;

export const BarcodeIcon = () => <SvgCss xml={xml} />;
