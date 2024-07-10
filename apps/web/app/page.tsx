import { Button } from "@/components/ui/button"
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="flex max-w-[80%] mx-auto justify-between">
        <div className="text-white w-1/3">
          <h1 className="text-3xl p-4">
            CryptoExchange
          </h1>
        </div>
        <div className="flex gap-20 p-4">
          <Link href={"/signup"}>
            <Button variant="outline">Sign up</Button>
          </Link>
          <Link href="/signin">
            <Button variant="default">Sign in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
