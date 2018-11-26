export const withConstructor = (constructor) => (props) => ({
  __proto__: {
    constructor
  },
  ...props
});
