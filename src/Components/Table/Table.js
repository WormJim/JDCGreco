import React from 'react';
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
import MUIDataTable from 'mui-datatables';

const CustomTable = props => {
  const { tableData, tableHead } = props;
  let data = tableData.map(element => {
    return Object.values(element);
  });

  console.log(tableHead);

  let options = {
    filterType: 'dropdown',
    responsive: 'scroll',
    selectableRows: true,
    resizableColumns: true,
    rowHover: true
  };

  return (
    <div>
      <MUIDataTable
        title="Customer Table"
        data={data}
        columns={tableHead}
        options={options}
      />
      {/* <Table>
        <TableHead>
          <TableRow>
            {tableHead.map((prop, idx) => {
              return <TableCell key={idx}>{prop}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((prop, idx) => {
            return (
              <TableRow key={idx}>
                {Object.values(prop).map((value, ix) => {
                  return <TableCell key={ix}>{value}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table> */}
    </div>
  );
};

export default CustomTable;
