export const newOrder = (url: string, orderId: number, totalAmount: number) => {
  const subject = `ЗАКАЗ №${orderId}`;
  const html = `
       <div style="background: #f4f4f4; padding: 40px; font-family: Arial, sans-serif;">
        <div style="max-width: 400px; margin: 0 auto; background: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 20px; text-align: center;">
          <h2 style="margin-top: 0; color: #333;">Спасибо за ваш заказ!</h2>
          <p style="color: #555; line-height: 1.5;">
            Мы уже приготовили для вас отборные свежие блюда. Осталось только завершить оплату.
          </p>
          <p style="color: #333; font-weight: bold;">Сумма вашего заказа: ${totalAmount} руб</p>
          <p>
            <a href="${url}"
              target="_blank"
              style="display: inline-block; padding: 10px 20px; background: #28a745; color: #fff; text-decoration: none; border-radius: 4px; font-weight: bold;">
              Перейти к оплате
            </a>
          </p>
          <p style="color: #555; line-height: 1.5; margin-bottom: 0;">
            После успешной оплаты мы незамедлительно приступим к доставке.  
            Желаем приятного аппетита и отличного настроения!
          </p>
        </div>
      </div>
    `;

  return { subject, html };
};
