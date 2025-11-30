import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerService";
import { TextField, Table, TableHead, TableRow, TableCell, TableBody, Container } from "@mui/material";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortField, setSortField] = useState("firstname");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    getCustomers().then(setCustomers).catch(console.error);
  }, []);

  const filtered = customers
    .filter(c =>
      `${c.firstname} ${c.lastname}`.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortAsc ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortAsc ? 1 : -1;
      return 0;
    });

  const toggleSort = (field) => {
    if (field === sortField) setSortAsc(!sortAsc);
    else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  return (
    <Container>
      <h2>Customers</h2>

      <TextField
        label="Search customer"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
        onChange={(e) => setFilter(e.target.value)}
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={() => toggleSort("firstname")}>First name</TableCell>
            <TableCell onClick={() => toggleSort("lastname")}>Last name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filtered.map((c) => (
            <TableRow key={c.id}>
              <TableCell>{c.firstname}</TableCell>
              <TableCell>{c.lastname}</TableCell>
              <TableCell>{c.email}</TableCell>
              <TableCell>{c.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
