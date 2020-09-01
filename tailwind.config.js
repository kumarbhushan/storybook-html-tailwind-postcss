let defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      screens: {
				//one less than all the breakpoints
        mobile: "376px", //375
        tablet: "769px", //768
        desktop: "1033px", //1032
      },
      fontFamily: {
        sans: ["'Karla'", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        lgtitle: "2.125rem",
        title1: "1.75rem",
        title2: "1.375rem",
        title3: "1.25rem",
        headline: "1.125rem",
        base: "1rem",
        callout: "0.9375rem",
        subhead: "0.8125rem",
        footnote: "0.8125rem",
        caption1: "0.75rem",
        caption2: "0.6875rem",
      },
      colors: {
        active: "var(--colors-active)",
        dim: "var(--colors-dim)",
        inert: "var(--colors-inert)",
        key: {
          default: "var(--colors-key-default)",
          highlight: "var(--colors-key-highlight)",
          dim: "var(--colors-key-dim)",
          inert: "var(--colors-key-inert)",
        },
        cell: {
          default: "var(--colors-cell-default)",
          background: "var(--colors-cell-background)",
          highlight: "var(--colors-cell-highlight)",
          separator: "var(--colors-cell-separator)",
        },
        destructive: {
          default: "var(--colors-destructive-default)",
          highlight: "var(--colors-destructive-highlight)",
				},
				materials: {
					fixedfloating: "var(--colors-materials-fixfloating)",
				}
      },
    },
  },
  variants: {
    // Some useful comment
    borderWidth: ["last"],
  },
  plugins: [require("@tailwindcss/ui")],
};
