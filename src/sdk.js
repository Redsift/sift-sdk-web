import SiftController from './lib/sift-controller.js';
import SiftStorage from './lib/sift-storage.js';
import SiftView from './lib/sift-view.js';

export { SiftController };
export { SiftStorage };
export { SiftView };

// FIXXME: using the global namespace to register a Sift is not optimal
export function registerSiftView(siftView) {
  window.Redsift = window.Redsift || {};
  window.Redsift.siftView = siftView;
}
