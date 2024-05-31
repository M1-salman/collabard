import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center my-12">
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Page Not Found
      </h1>
      <Image
        className="my-12 max-sm:w-5/6"
        src={"/confused-man.gif"}
        width={700}
        height={300}
        alt="not-found-img"
        priority
      />
      <Button variant="link">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
