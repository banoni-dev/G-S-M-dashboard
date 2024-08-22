import SignIn from "@/app/auth/signin/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

const isSignedIn = false;

export default function Home() {
  return (
    <>
      <SignIn />
    </>
  );
}
