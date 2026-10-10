/** Test-only direct consumer of unmodified upstream exports. Never deployed. */
import React from 'react';import {createRoot} from 'react-dom/client';import * as DS from '../vendor/@interco/inter-toranja/dist/components.js';import '../vendor/@interco/inter-toranja/dist/assets/toranja.css';
window.renderOfficial=(name,props)=>{const root=createRoot(document.querySelector('#reference'));const p={...props};for(const k of ['onClick','onChange','onValueChange','onOptionSelect','onPageChange','onPageSizeChange','close'])p[k]=()=>{};root.render(React.createElement(DS[name],p));};
