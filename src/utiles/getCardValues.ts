class CardInfo {
  public pediod(period: string) {
    return period.slice(5, period.length).replace("-", "/");
  }

  public balance(balance: string) {
    return Number(balance).toLocaleString("en-US");
  }

  public holder(holder: string) {
    return holder.toUpperCase();
  }

  public number(number: string) {
    return (
      number.slice(0, 4) +
      " **** **** " +
      number.slice(number.length - 4, number.length)
    );
  }
}

export const getCardValues = new CardInfo();
