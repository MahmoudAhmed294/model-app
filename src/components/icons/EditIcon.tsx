import React from 'react';
import {SvgCss} from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="13.245" height="13.168" viewBox="0 0 13.245 13.168"><defs>
<style>.a{fill:none;stroke:#4e4e4e;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>
</defs><g transform="translate(-0.1 -0.2)"><g transform="translate(0.6 0.7)">
<path class="a" d="M12.845,2.948,3.39,12.093.6,12.868l.62-2.79L10.83.7Z" transform="translate(-0.6 -0.7)"/>
</g><line class="a" x2="2.015" y2="2.248" transform="translate(9.28 2.173)"/>
</g></svg>`;

export const EditIcon = () => <SvgCss xml={xml} />;
