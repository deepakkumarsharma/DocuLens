import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="border-gray-300 border-b-2 overflow-hidden">
      <div className="h-full flex items-center justify-end mr-5">
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
