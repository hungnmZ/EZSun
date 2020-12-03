export const currencyFormat = (money: number) =>
    `${money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} ₫`;
