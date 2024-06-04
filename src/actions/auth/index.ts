
'use server'

import { client } from '@/lib/prisma'

export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
) => {
  try {
    const registered = await client.user.create({
      data: {
        fullname,
        clerkId,
      },
      select: {
        fullname: true,
        id: true,
      },
    })

    console.log('successfully registered', registered)
    if (registered) {
      return { status: 200, user: registered }
    }
  } catch (error) {
    return { status: 400 }
  }
}