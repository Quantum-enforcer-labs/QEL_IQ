import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </div>
  );
}
