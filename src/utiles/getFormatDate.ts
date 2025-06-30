import dayjs from "dayjs";

export const getFormatDate = (date: string, format: string) => {
  return dayjs(date).format(format);
};
