"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type BackButtonProps = {
  href: string;
  label?: string;
};

const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button
      variant="link"
      className="font-normal w-full text-white"
      size="sm"
      asChild
    >
      <div className="flex gap-1 hover:no-underline w-1">
        Don't have access?
        <span>Return</span>
        <Link href="/">
          <span className="hover:text-red-500">Home.</span>
        </Link>
      </div>
    </Button>
  );
};

export default BackButton;
