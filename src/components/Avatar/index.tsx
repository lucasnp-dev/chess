import {
  Avatar as AvatarUI,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

import { getCurrentUser } from '@/lib/session'
import { ComponentProps } from 'react'

function fallbackName(name: string | null | undefined) {
  let fallback = 'Error'

  if (!name) return fallback

  const nameArray = name.split(' ')

  if (nameArray.length > 0) {
    fallback = nameArray[0][0].toUpperCase()

    if (nameArray.length > 1) {
      fallback += nameArray[1][0].toUpperCase()
    } else {
      fallback += nameArray[0][0].toUpperCase()
    }
  }

  return fallback
}

type AvatarType = ComponentProps<'div'>

export default async function Avatar({ ...props }: AvatarType) {
  const user = await getCurrentUser()

  return (
    <div {...props}>
      {user?.image && (
        <AvatarUI>
          <AvatarImage src={user.image} />
          <AvatarFallback>{fallbackName(user?.name)}</AvatarFallback>
        </AvatarUI>
      )}
    </div>
  )
}
