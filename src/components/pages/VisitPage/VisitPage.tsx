import VisitTable from "../../organisms/Table/VisitTable";

function VisitPage() {
  return (
    <div className="">
      <div className="space-y-6 ml-6">
        <h1 className="text-2xl font-bold text-white">Visit</h1>

        <div>
          <VisitTable />
        </div>
      </div>
    </div>
  );
}

export default VisitPage;
