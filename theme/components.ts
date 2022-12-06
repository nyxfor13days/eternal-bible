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
      _text: {
        fontSize: "md",
        fontWeight: "bold",
        letterSpacing: "lg",
      },
    },
    defaultProps: {
      colorScheme: "primary",
    },
  },
};
