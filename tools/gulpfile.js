import { cleanTask } from "./gulp/clean.js";
import {
  localHostTask,
  reloadTask,
  watchTask,
  watchSCSSTask,
  watchJSTask,
} from "./gulp/watch.js";
import {
  // rtlTask,
  // buildBundleTask,
  compileTask,
} from "./gulp/compile.js";

import {
  // rtlTask,
  // buildBundleTask,
  build,
} from "./gulp/build.js";

// Clean tasks:
export { cleanTask as clean };

// Watch tasks:
export { localHostTask as localhost };
export { reloadTask as reload };
export { watchTask as watch };
export { watchSCSSTask as watchSCSS };
export { watchJSTask as watchJS };
export { build as build };

// Main tasks:
// export { rtlTask as rtl };
// export { buildBundleTask as buildBundle };
export { compileTask as compile };

// Entry point:
export default compileTask;
