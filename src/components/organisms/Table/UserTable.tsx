import { recentVisits } from "../../../data/dashboard/recentVisits";

function UserTable() {
  const data = recentVisits;
  return (
    <div
      className="
    bg-white/10
    backdrop-blur-lg
    border border-white/20
    rounded-md
    shadow-2xl
    overflow-hidden
    text-white
  "
    >
      <table className="w-full text-sm border-collapse">
        <thead className="bg-white/20">
          <tr>
            <th className="p-3 text-left">No.</th>
            <th className="p-3 text-left">Visitor Name</th>
            <th className="p-3 text-left">Company</th>
            <th className="p-3 text-left">Host Name</th>
            <th className="p-3 text-left">Check In Time</th>
            <th className="p-3 text-left">Check Out Time</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Receptionist Name</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="border-t border-white/10 hover:bg-white/10 transition">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{item.visitor_name}</td>
              <td className="p-3">{item.company}</td>
              <td className="p-3">{item.host_name}</td>

              <td className="p-3">
                {new Date(item.check_in_time).toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>

              <td className="p-3">
                {item.check_out_time
                  ? new Date(item.check_out_time).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""}
              </td>

              <td className="p-3">{item.status === "CHECKED_OUT" ? "Checked Out" : "Checked In"}</td>

              <td className="p-3">{item.receptionist_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
