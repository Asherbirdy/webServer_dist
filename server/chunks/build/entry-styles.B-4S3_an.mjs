import { a as buildAssetsURL } from '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import 'vue';
import '@unhead/shared';

const main = "@font-face{font-family:v-sans;font-weight:400;src:url(" + buildAssetsURL("LatoLatin-Regular.Dmlz1U0B.woff2") + ")}@font-face{font-family:v-sans;font-weight:600;src:url(" + buildAssetsURL("LatoLatin-Semibold.Dbk81p2D.woff2") + ")}@font-face{font-family:v-mono;font-weight:400;src:url(" + buildAssetsURL("FiraCode-Regular.CRwVj4V2.woff2") + ")}body{overflow:hidden hidden}.container{margin:0 auto;max-width:1200px;padding:0 15px}";

const entryStyles_B4S3_an = [main];

export { entryStyles_B4S3_an as default };
//# sourceMappingURL=entry-styles.B-4S3_an.mjs.map
