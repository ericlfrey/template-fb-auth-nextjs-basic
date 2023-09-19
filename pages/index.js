/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>Home Page</h1>
      <Button type='button' onClick={() => console.log("What did I say?")}>Do not Click Me</Button>
      <p>This is the main page. You can see all non-protected routes even if you aren't logged in!</p>
      <p><a href="#" onClick={() => router.push('/dashboard')}>Try to go to the Dashboard Page while You are logged out.</a></p>
    </>
  )
}
