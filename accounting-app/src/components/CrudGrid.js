import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import EventIcon from "@mui/icons-material/Event";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { useEffect } from "react";
import { db } from "../index";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth } from "../index";
import { useNavigate } from "react-router-dom";

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        accountName: "",
        accountNumber: "",
        category: "",
        subcategory: "",
        description: "",
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "accountName" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Account
      </Button>
      <Button variant="contained" href="/JournalEntry">
        Create Journal Entry
      </Button>
    </GridToolbarContainer>
  );
}

export default function CrudGrid() {
  const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const accountCollection = await getDocs(collection(db, "accounts"));
        const accountDataArray = accountCollection.docs.map((doc) =>
          doc.data()
        );
        setRows(accountDataArray);
      } catch (error) {
        console.error("Error fetching account data:", error);
      }
    };

    fetchAccountData();
  }, []);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const navigate = useNavigate();
  const viewLedger = (id) => () => {
    const accountId = id;
    navigate("/Ledger/" + accountId);
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => async () => {
    const deletedRow = rows.find((row) => row.id === id);
    await deleteDoc(doc(db, "accounts", deletedRow.id));
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    const user = auth.currentUser;
    let id = 0;
    function uniqueID(id) {
      return id++;
    }
    const currentDate = new Date().toDateString();

    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    await setDoc(doc(db, "accounts", newRow.id), {
      id: newRow.id,
      accountNumber: newRow.accountNumber,
      accountName: newRow.accountName,
      category: newRow.category,
      subcategory: newRow.subcategory,
      balance: newRow.balance,
      description: newRow.description,
    });
    try {
      await setDoc(doc(db, "Events", newRow.id), {
        id: uniqueID(id),
        user: data.get("uid"),
        before: "before",
        after: "after",
        date: currentDate,
      });
      //console.log("New document added with ID:", newDocRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: "accountNumber",
      headerName: "Account Number",
      type: "number",
      flex: 1,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "accountName",
      headerName: "Account Name",
      flex: 1,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      type: "singleSelect",
      valueOptions: ["Asset", "Equity", "Liability"],
      flex: 1,
      editable: true,
    },
    {
      field: "subcategory",
      headerName: "Subcategory",
      flex: 1,
      editable: true,
      type: "singleSelect",
      valueOptions: [
        "Income",
        "Accounts Receivable",
        "Accounts Payable",
        "Retained Earnings",
      ],
    },
    {
      field: "balance",
      headerName: "Balance",
      flex: 1,
      editable: true,
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      flex: 1,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<VisibilitySharpIcon />}
            label="View"
            color="inherit"
            onClick={viewLedger(id)}
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<EventIcon />}
            label="Event Log"
            component="a"
            href="/EventLog"
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}
