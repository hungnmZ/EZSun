export const currencyFormat = (money: number) =>
    !!money &&
    `${money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} ₫`;

export const dateTimeFormat = (date: Date) =>
    !!date && `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
