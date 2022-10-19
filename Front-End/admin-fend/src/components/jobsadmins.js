// import react from 'react';
// import { MDBDataTable } from "mdbreact";
import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import axios from "axios";
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

function JobsAdmin() {
  const [data, setData] = useState([]);

  const { ExportCSVButton } = CSVExport;

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <center><button className="btn btn-success" onClick={ handleClick }>Export Data</button></center>
      </div>
    );
  };



  useEffect(() => {
    const url = "http://localhost:6005/admin/";
    axios.get(url).then((json) => setData(json.data));
  });

  const columns = [
    { dataField: "adminId", text: "Id" },
    { dataField: "adminName", text: "Name", filter: textFilter() },
    { dataField: "adminEmail", text: "adminEmail" },
    { dataField: "adminContactNumber", text: "adminContactNumber" },
    {
      dataField: "adminCompanyName",
      text: "adminCompany",
      filter: textFilter(),
    },
  ];

  const pagination = paginationFactory({
    page: 1, //first page number
    sizePerPage: 4, //number of records to be displayed per page
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwayShowAllBtns: true,

    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("size", sizePerPage);
    },
    onSizePerChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("size", sizePerPage);
    },
  });

  return (
    <div>

<ToolkitProvider
    keyField="adminId"
    data={data}
    columns={ columns }
    exportCSV
  >
    {
      props => (
          <React.Fragment>
          <MyExportCSV { ...props.csvProps } />
          <ExportCSVButton { ...props.csvProps }>Export Data! </ExportCSVButton>
          <BootstrapTable
        // bootstrap4
        // keyField="adminId"
        // columns={columns}
        // data={data}
        pagination={pagination}
        filter={filterFactory()}
        {...props.baseProps}
      />
        </React.Fragment>
      )
    }
  </ToolkitProvider>
      
      
      

    </div>
  );

  //return <MDBDataTable striped bordered hover data={data} />;
}

export default JobsAdmin;
