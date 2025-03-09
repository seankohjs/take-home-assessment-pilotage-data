import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const PilotageData = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No pilotage data found.</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Vessel Name</TableCell>
            <TableCell>IMO</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Start Time</TableCell>
            <TableCell>End Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((record, index) => (
            <TableRow key={index}>
              <TableCell>{record.pilotage_nm}</TableCell>
              <TableCell>{record.pilotage_imo}</TableCell>
              <TableCell>{record.pilotage_loc_from_code}</TableCell>
              <TableCell>{record.pilotage_loc_to_code}</TableCell>
              <TableCell>{record.pilotage_start_dt_time}</TableCell>
              <TableCell>{record.pilotage_end_dt_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PilotageData;
