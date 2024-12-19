export const mailForm = (url: string, orderId: number, totalAmount: number) => {
  const subject = `ЗАКАЗ №${orderId}`;
  const text =
    'Вы успешно выбрали доставку еды. Для завершения оплаты перейдите по ссылке ниже.';
  const html = `
        <p>Оплатите заказ на сумму ${totalAmount} руб:</p>
        <p><a href="${url}" target="_blank">Перейти к оплате</a></p>
        <p>После успешной оплаты вы получите уведомление о доставке.</p>
    `;

  return { subject, text, html };
};
