export const flatCategories = (categories, initial) =>
  categories.reduce(
    (acc, { title, id = title, items }) =>
      acc.concat(items.map(item => ({ category: id, item }))),
    initial
  )
