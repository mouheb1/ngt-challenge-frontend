export default {
  name: "my theme",
  rounding: 4,
  spacing: 24,
  defaultMode: "light",
  global: {
    breakpoints: {
      xsmall: {
        value: 500,
      },
      small: {
        value: 900,
      },
      medium: undefined,
      middle: {
        value: 2000,
      },
    },
    colors: {
      brand: {
        dark: "#FFC507",
        light: "#FFC507",
      },
      background: {
        dark: "#0E0E0E",
        light: "#FFFFFF",
      },
      "background-card": {
        dark: "#1C1C1C",
        light: "#d1cdcd",
      },
      "background-icon": {
        dark: "#e0b11c",
        light: "#FFFFFF",
      },
      "background-student": {  
        dark: "#2b2a2a",
        light: "#11111111",
      },
      text: {
        dark: "#b3abab",
        light: "#333333",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "#000000",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "#444444",
      },
      "text-xweak": {
        dark: "#999999",
        light: "#666666",
      },
      border: {
        dark: "#444444",
        light: "#CCCCCC",
      },
      control: "brand",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "graph-0": "brand",
      "graph-1": "status-warning",
    },
    font: {
      family: "Helvetica",
    },
   
    active: {
      background: "active-background",
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
};
