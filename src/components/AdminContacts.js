import React, { useEffect, useState } from "react";
import "./AdminContacts.css";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all contacts from backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/contact");
        if (!res.ok) throw new Error("Failed to fetch contacts");

        const data = await res.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p>⏳ Loading contacts...</p>;
  if (error) return <p className="error-msg">❌ {error}</p>;

  return (
    <div className="admin-wrapper">
      <h2>📋 Contact Submissions</h2>

      {contacts.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id}>
                <td>{c.fullName}</td>
                <td>{c.email}</td>
                <td>{c.phone || "-"}</td>
                <td>{c.message}</td>
                <td>{new Date(c.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminContacts;


