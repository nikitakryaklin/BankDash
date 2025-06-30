import { getFormatDate } from "./getFormatDate";

export const downloadReport = (
  title: string,
  date: Date,
  id: number,
  category: string,
  cardNumber: string,
  amount: string,
  type: string,
) => {
  const blob = new Blob(
    [
      `
            Transaction: ${title},
            Id: #${id},
            Category: ${category},
            Card: ${cardNumber}
            Amount: ${amount}
            Type: ${type}
        `,
    ],
    { type: "text/plain" },
  );
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${title}-${getFormatDate(date.toString(), "D MMMM HH:mm")}.txt`;
  link.click();

  URL.revokeObjectURL(url);
};
