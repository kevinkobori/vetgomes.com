// src/store/showcase/mutations.js
export const updateThemeBGColor = (state, newColor) => {
  state.themeBGColor = newColor
}

export const updateThemeColor = (state, newColor) => {
  state.themeColor = newColor
}

// src/store/showcase/state.js
// Always use a function to return state if you use SSR
// export default function () {
//   return {
//     drawerState: true
//   }
// }
