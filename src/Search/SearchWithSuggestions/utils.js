export const flatCategories = (categories, initial) =>
  categories.reduce(
    (acc, { title, key = title, items }) =>
      acc.concat(items.map(item => ({ category: key, item }))),
    initial
  )
