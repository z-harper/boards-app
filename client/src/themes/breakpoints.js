// const zIndex = {
//   navbar: '5',
// }

const size = {
  xs: '384px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1500px',
}

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
}

const breakpoints = {size, device}

export default breakpoints