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
import Divider from "./Divider";

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
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-96 dark:bg-slate-800 bg-bgformColor border-none shadow-md shadow-white/10">
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
        <BackButton href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
