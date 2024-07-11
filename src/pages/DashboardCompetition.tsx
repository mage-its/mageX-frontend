import DashboardSideBar from "@/components/DashboardSideBar";

export default function DashboardCompetition() {
  return (
    <div className="flex bg-vertical-gta">
      <DashboardSideBar />
      <div className="w-full h-screen">
        {/* kodemu disini */}
        <h1>Competition</h1>
      </div>
    </div>
  );
}
