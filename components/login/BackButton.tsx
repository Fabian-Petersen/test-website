"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BackButton = () => {
  return (
    <Button
      variant="link"
      className="font-normal w-full text-gray-500"
      size="sm"
      asChild
    >
      <div className="flex gap-1 hover:no-underline w-1">
        Dont have access?
        <span>Return</span>
        <Link href="/">
          <span className="hover:text-red-500">Home.</span>
        </Link>
      </div>
    </Button>
  );
};

export default BackButton;
