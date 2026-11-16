import {CSS} from './styles.js';
import {DESIGN_CSS} from './styles-v2.js';

// Keep the exact cascade while allowing browsers to reuse it across pages/locales.
export const STYLESHEET = CSS + DESIGN_CSS;
// FNV-1a is only a cache fingerprint, not a security or integrity check.
let fingerprint = 0xcbf29ce484222325n;
for (const byte of new TextEncoder().encode(STYLESHEET)) {
 fingerprint = BigInt.asUintN(64, (fingerprint ^ BigInt(byte)) * 0x100000001b3n);
}
export const STYLESHEET_PATH = '/assets/site-' + fingerprint.toString(16).padStart(16, '0') + '.css';
export const STYLESHEET_ETAG = '"' + fingerprint.toString(16) + '"';
