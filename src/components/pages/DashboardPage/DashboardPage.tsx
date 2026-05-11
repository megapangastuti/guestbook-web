import { summary } from "../../../data/dashboard/summary";
import Card from "../../organisms/Card/Card";
import DashboardTable from "../../organisms/Table/DashboardTable";

function DashboardPage() {
  return (
    <div className="">
      <div className="space-y-6 ml-6">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        {/* Summary */}
        <div className="flex flex-1 justify-around flex-row gap-4">
          <Card title="Today's Visitor" value={summary.total_visitors_today} color="#FFFFFF" />
          <Card title="Check In" value={summary.checked_in} />
          <Card title="Check Out" value={summary.checked_out} />
          <Card title="Total Monthly Visitor" value={summary.monthly_visitors} />
        </div>
        {/* Recent Visit */}
        <div>
          <h2 className="text-lg font-bold text-white mb-2">Recent Visits</h2>
          <DashboardTable />
        </div>
        {/* Visitor Statistic */}
        {/* Top Companies */}
        {/* Active Visitor */}
        {/* Receptionist */}
      </div>
    </div>
  );
}

export default DashboardPage;
