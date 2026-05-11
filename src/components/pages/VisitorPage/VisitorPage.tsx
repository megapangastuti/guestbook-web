import VisitorTable from "../../organisms/Table/VisitorTable";

function VisitorPage() {
  return (
    <div className="">
      <div className="space-y-6 ml-6">
        <h1 className="text-2xl font-bold text-white">Visitor</h1>

        <div>
          <VisitorTable />
        </div>
      </div>
    </div>
  );
}

export default VisitorPage;
