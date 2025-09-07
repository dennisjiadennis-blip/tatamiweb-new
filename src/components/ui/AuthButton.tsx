'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./button"

export default function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <span className="mr-4 text-sm">
          {session.user?.name}
        </span>
        <Button onClick={() => signOut()} variant="outline" size="sm">
          Sign Out
        </Button>
      </>
    )
  }
  return (
    <Button onClick={() => signIn('google')} variant="outline" size="sm">
      Sign In with Google
    </Button>
  )
}