export const flatCategories = (categories, initial) =>
  categories.reduce((acc, { items }) => acc.concat(items), initial)
