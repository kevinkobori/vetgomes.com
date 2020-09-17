// src/store/showcase/mutations.js
export const updateWindowWidth = (state, newSize) => {
  state.windowWidth = newSize
}

export const updateWindowHeight = (state, newSize) => {
  state.windowHeight = newSize
}

// src/store/showcase/state.js
// Always use a function to return state if you use SSR
// export default function () {
//   return {
//     drawerState: true
//   }
// }
