import { CardWrapper } from "./CardWrapper";
import { AlertTriangleIcon } from "lucide-react";

export const ErrorCard = () => {
  return (
    <div className="w-full flex justify-center">
      <CardWrapper
        headerLabel="Oops! Something went wrong!"
        backButtonHref="/auth/login"
        backButtonLabel="Back to login"
      >
        <div className="w-full flex justify-center items-center">
          <AlertTriangleIcon className="text-destructive" />
        </div>
      </CardWrapper>
    </div>
  );
};
