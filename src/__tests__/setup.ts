import '@testing-library/jest-dom'

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserver;

window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = IntersectionObserver;
// Mock pointer events for Radix UI
if (typeof window !== 'undefined') {
  window.PointerEvent = class PointerEvent extends Event {} as any;
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.HTMLElement.prototype.hasPointerCapture = () => false;
  window.HTMLElement.prototype.releasePointerCapture = () => {};
}
