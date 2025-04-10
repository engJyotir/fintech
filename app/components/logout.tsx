'use client';

import { useClerk } from '@clerk/nextjs';

export default function LogoutButton() {
  const { signOut } = useClerk();

  return (
    <button
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
