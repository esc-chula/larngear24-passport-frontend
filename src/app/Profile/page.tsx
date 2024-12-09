import { Button } from "@/components/globalComponents/Button";
import Link from "next/link";

export default function Profile() {
  return (
    <main>
      <h1>Hi this is Profile page</h1>

      <Link href="/Profile/dress">
        <Button text={"Go to Dress Page"} />
      </Link>
    </main>
  );
}
