import { fetchLeads, deleteLeads } from "@/redux/features/lead-slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Leads = () => {
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.lead.leads);

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);

  const deleteLead = (id) => {
    dispatch(deleteLeads(id));
  };

  return (
    <div>
      <h2>Leads</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button
                  onClick={() => deleteLead(lead.id)}
                  className="btn btn-danger btn-sm"
                >
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leads;
