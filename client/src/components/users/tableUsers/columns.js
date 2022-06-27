export const columnInfo = [ 
  {
    Header: "#",
    accessor: "id"
  },
  {
    Header: "First name",
    accessor: "first_name"
  },
  {
    Header: "Last name",
    accessor: "last_name"
  },
  {
    Header: "Email",
    accessor: "email"
  },
  {
    Header: "Gender",
    accessor: "gender"
  }
]

// Dfines the columns for the table. Header will be the column name and accessor needs to have
// the same column name from the json file that we'll recive from API