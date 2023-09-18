/* eslint-disable react/no-unescaped-entities */
import { useAuth } from "@/utils/context/AuthContext";
import { Button } from "react-bootstrap";

export default function Home() {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <h1>home</h1>
      <Button type='button' onClick={() => console.log("Stop it mofo!")}>Do not Click Me</Button>
      <p>This is the main page. You can see all pages even if you aren't logged in!</p>
    </>
  )
}
