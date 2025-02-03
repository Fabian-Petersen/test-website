"use client";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import useIsMobile from "@/app/customHooks/useScreenSize";

type ButtonProps = {
  className: string;
};

const CVButton = ({ className }: ButtonProps) => {
  const isMobile = useIsMobile(640);
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const handleDownload = async () => {
    // $ S3 Bucket details
    const bucketURL = process.env.NEXT_PUBLIC_S3_BUCKET_URL as string;
    const file_Name = "fabian_cv_latest.pdf";
    const fileDownloadURL = `${bucketURL}/${file_Name}`;

    // $ Download Data and tim displayed in the toast
    const date = new Date();
    const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;

    try {
      // Fetch the file
      const response = await axios.get(fileDownloadURL, {
        responseType: "blob", // To handle binary data
      });

      // $ Create a blob URL
      const blob = new Blob([response.data], { type: "application/pdf" });
      const blobURL = window.URL.createObjectURL(blob);

      // $ Trigger file download
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        // For mobile: Open in new tab
        window.open(blobURL, "_blank");
      } else {
        // For desktop: Use download attribute
        const link = document.createElement("a");
        link.href = blobURL;
        link.download = file_Name;
        link.click();
      }

      // $ Clean up the blob URL
      setTimeout(() => window.URL.revokeObjectURL(blobURL), 100);

      // $ Show success toast
      toast({
        title: "Success: File Downloaded",
        description: `CV has been downloaded successfully on ${formattedDate}`,
        duration: 3000,
      });
    } catch (error) {
      console.error("Error downloading file:", error);

      // $ Show error toast
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem downloading my CV.",
        duration: 3000,
      });
    }
  };
  return (
    <>
      {isPending ? (
        <Button
          disabled={isPending}
          variant="default"
          className={className}
          size={isMobile ? "sm" : "md"}
        >
          <Loader2 className="animate-spin mr-2" />
          Downloading...
        </Button>
      ) : (
        <Button
          variant="default"
          disabled={isPending}
          className={className}
          onClick={() => startTransition(handleDownload)}
          size={isMobile ? "sm" : "md"}
        >
          <Download className="mr-2" />
          Download CV
        </Button>
      )}
    </>
  );
};

export default CVButton;
