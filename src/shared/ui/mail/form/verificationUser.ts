export const verificationUser = (code: string) => {
  const subject = `Pizza Delivery | 📝 Подтверждение регистрации`;
  const html = `
      <div style="background: #f4f4f4; padding: 40px; font-family: Arial, sans-serif;">
        <div style="max-width: 400px; margin: 0 auto; background: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 20px; text-align: center;">
          <h2 style="margin-top: 0; color: #333;">Подтверждение регистрации</h2>
          <p style="color: #555; line-height: 1.5;">Ваш код подтверждения:</p>
          <h2 style="color: #333; margin: 0; font-size: 24px;">${code}</h2>
          <p style="margin: 20px 0; color: #555; line-height: 1.5;">
            Для завершения процесса регистрации, пожалуйста, перейдите по ссылке ниже:
          </p>
          <p>
            <a href="${process.env.NEXT_BASE_URL}/api/auth/verify?code=${code}" target="_blank"
              style="display: inline-block; padding: 10px 20px; background: #28a745; color: #fff; text-decoration: none; border-radius: 4px; font-weight: bold;">
              Подтвердить регистрацию
            </a>
          </p>
          <p style="color: #555; line-height: 1.5; margin-bottom: 0;">
            Если вы не запрашивали регистрацию, просто проигнорируйте это письмо.
          </p>
        </div>
      </div>
  `;

  return { subject, html };
};
