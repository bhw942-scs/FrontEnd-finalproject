import { useEffect, useState } from "react";
import { getTrainings } from "../services/trainingService";
import { TextField, Table, TableHead, TableRow, TableCell, TableBody, Container } from "@mui/material";
import { format } from "date-fns";

export default function TrainingList() {
  const [trainings, setTrainings] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getTrainings().then(setTrainings).catch(console.error);
  }, []);

  const filtered = trainings.filter(t =>
    t.activity.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h2>Trainings</h2>

      <TextField
        label="Search activity"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
        onChange={(e) => setFilter(e.target.value)}
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Activity</TableCell>
            <TableCell>Duration (min)</TableCell>
            <TableCell>Customer</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filtered.map((t) => (
            <TableRow key={t.id}>
              <TableCell>{format(new Date(t.date), "dd.MM.yyyy HH:mm")}</TableCell>
              <TableCell>{t.activity}</TableCell>
              <TableCell>{t.duration}</TableCell>
              <TableCell>
                {t.customer?.firstname} {t.customer?.lastname}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
