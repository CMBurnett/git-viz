export const interpolateColor = (color1: string, color2: string, factor: number): string => {
  const result = color1.slice(1).match(/.{2}/g)!.map((hex, i) => {
    const color1Int = parseInt(hex, 16);
    const color2Int = parseInt(color2.slice(1).match(/.{2}/g)![i], 16);
    const interpolatedInt = Math.round(color1Int + factor * (color2Int - color1Int));
    return interpolatedInt.toString(16).padStart(2, '0');
  }).join('');
  return `#${result}`;
};

export const generateColorScale = (startColor: string, endColor: string, steps: number): string[] => {
  const scale = [];
  for (let i = 0; i < steps; i++) {
    const factor = i / (steps - 1);
    scale.push(interpolateColor(startColor, endColor, factor));
  }
  return scale;
};

export const getContrastColor = (hexColor: string): string => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? '#000000' : '#FFFFFF';
};
