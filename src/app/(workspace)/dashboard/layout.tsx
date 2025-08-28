import Header from "./_components/Header";
import SideBar from "./_components/SideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen grid grid-rows-1 grid-cols-[250px_1fr]">
      <SideBar />
      <div className="grid grid-rows-[80px_1fr] grid-cols-1 min-w-[500px]">
        <Header />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
