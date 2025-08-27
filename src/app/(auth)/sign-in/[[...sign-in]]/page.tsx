import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="gap-10 flex flex-col items-center justify-center w-screen h-screen">
      <div>
        <div className="text-base md:text-4xl">
          Dive Back into Your Insights
        </div>
      </div>
      <SignIn />
    </div>
  );
}
