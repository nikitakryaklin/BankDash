const qs = require('qs')

export const getArray = (fild: string, options: string, arr: string[]) => {
  const query = qs.stringify(
    {
      filters: {
        [fild]: {
          [options]: {
            $in: arr, // это массив
          },
        },
      },
    },
    { encodeValuesOnly: true }
  )

  return query
}
