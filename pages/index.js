import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <h1>home</h1>
      <Button type='button' onClick={() => console.log("Stop it mofo!")}>Do not Click Me</Button>
    </>
  )
}
