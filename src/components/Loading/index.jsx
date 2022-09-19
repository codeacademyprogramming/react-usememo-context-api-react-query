// export const Loading = ({ condition, children }) => {
//   const loadingComponent = () => {
//     return <spinner></spinner>;
//   };
//   return condition && children ? children : loadingComponent();
// };

export const Loading = ({ condition, children }) => {
  return condition ? children : null;
};
