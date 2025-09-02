import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import "./dataTable.scss";

const DataTable = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="avatar" />;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <div
            className="action"
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <div
              className="view"
              style={{ cursor: "pointer", color: "#007bff" }}
            >
              View
            </div>
            <div
              className="delete"
              style={{ cursor: "pointer", color: "#dc3545" }}
            >
              Delete
            </div>
          </div>
        );
      },
    },
    { field: "status", headerName: "Status", width: 100, type: "boolean" },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (_, row) => {
        return `${row.firstName || ""} ${row.lastName || ""}`;
      },
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14, status: true },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
      status: true,
    },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        showToolbar
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnSelector
        disableColumnFilter
      />
    </div>
  );
};

export default DataTable;
