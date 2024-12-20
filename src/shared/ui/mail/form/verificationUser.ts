export const verificationUser = (code: string) => {
  const subject = `Pizza Delivery | 📝 Подтверждение регистрации`;
  const text = '';
  const html = `
    <div>
      <p>
        Код подтверждения: <h2>${code}</h2>
      </p>
      <p>
        <a href="${process.env.NEXT_BASE_URL}/api/auth/verify?code=${code}">
          Подтвердить регистрацию
        </a>
      </p>
    </div>
  `;

  return { subject, text, html };
};
