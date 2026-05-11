import UserTable from "../../organisms/Table/UserTable";

function UserPage() {
  return (
    <div className="">
      <div className="space-y-6 ml-6">
        <h1 className="text-2xl font-bold text-white">Users</h1>

        <div>
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
