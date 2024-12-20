import { ProfileForm } from '@features/auth';
import { paths } from '@shared/config';
import { prisma } from '@shared/database';
import { getUserSession } from '@shared/lib';
import { redirect } from 'next/navigation';
import { FC } from 'react';

export const Profile: FC = async () => {
  const session = await getUserSession();

  if (!session) {
    return redirect(paths.notAuth);
  }

  const user = await prisma.user.findFirst({
    where: { id: Number(session?.id) },
  });

  if (!user) {
    return redirect(paths.notAuth);
  }

  return <ProfileForm data={user} />;
};
