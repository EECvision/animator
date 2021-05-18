
export const incView = (view=window.sessionStorage.setProject ? parseInt(window.sessionStorage.setProject) : 0) => {
  let v = view !== 3 ? view + 1 : 0;
  window.sessionStorage.setProject = v;
  return v;
}

export const decView = (view=window.sessionStorage.setProject ? parseInt(window.sessionStorage.setProject) : 0) => {
  let v = view !== 0 ? view - 1 : 3
  window.sessionStorage.setProject =  v;
  return v;
}