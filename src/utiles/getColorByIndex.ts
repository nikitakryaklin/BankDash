export const getColorByIndex = (index: number) => {
  if (index === 0 || index % 3 === 0) {
    return "#16DBCC";
  }

  if (index === 1 || index % 4 === 0) {
    return "#FF82AC";
  }

  if (index === 2 || index % 5 === 0) {
    return "#396AFF";
  }

  return "#FFBB38";
};
