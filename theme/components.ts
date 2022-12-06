export default {
  Headers: {
    color: "gray.900",
    _dark: { color: "gray.200" },
  },
  Text: {
    color: "gray.900",
    _dark: { color: "gray.200" },
    fontSize: "md",
  },
  Button: {
    baseStyle: {
      borderRadius: "full",
      height: 12,
      size: "lg",
      _text: {
        fontWeight: "bold",
        letterSpacing: "lg",
      },
      _stack: {
        space: "2",
      },
    },
    defaultProps: {
      colorScheme: "primary",
    },
  },
};
