export const utils = {
  sleep: (time = 1000) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  },
  zoomWheel: (delta, oldValue, minZoom = 1, maxZoom = 3) => {
    // Adjust the zoom factor based on the wheel delta
    const newZoomLevel = oldValue + (delta / 1000) * -1; // Adjust the division factor as needed
    // Limit the zoom level to a specific range if desired
    const clampedZoomLevel = Math.min(Math.max(newZoomLevel, minZoom), maxZoom);
    return clampedZoomLevel;
  },
};
