"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// $ Import Components to be used in CardWrapper
import Header from "./Header";
import Social from "./Social";
import BackButton from "./BackButton";

// $ Define the Props for CardWrapper
type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

const CardWrapper = ({
  children,
  headerLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="max-w-[25rem] w-full border border-red-500 dark:bg-slate-800 bg-gray-200 border-none shadow-md shadow-white/10">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
