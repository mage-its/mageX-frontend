import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
// import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useGetAllUsers, useVerifyUser } from "@/services/users";
import { ChangeEvent, MouseEvent, useEffect, useMemo, useState } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  styled,
  TablePagination,
} from "@mui/material";
import { FaArrowUpRightFromSquare, FaMagnifyingGlass } from "react-icons/fa6";
import InputField from "@/components/InputField";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface User {
  id: string;
  nama: string;
  email: string;
  alamat: string;
  asal_provinsi: string;
  image_kartu: string;
  institusi: string;
  no_hp: string;
  tanggal_lahir: string;
  username_ig: string;
  verified: string;
}

interface SearchUser {
  search: string;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof User>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof User;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "Id",
  },
  {
    id: "nama",
    numeric: false,
    disablePadding: false,
    label: "Nama",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "alamat",
    numeric: false,
    disablePadding: false,
    label: "Alamat",
  },
  {
    id: "asal_provinsi",
    numeric: false,
    disablePadding: false,
    label: "Asal Provinsi",
  },
  {
    id: "image_kartu",
    numeric: false,
    disablePadding: true,
    label: "Image Kartu",
  },
  {
    id: "institusi",
    numeric: false,
    disablePadding: false,
    label: "Institusi",
  },
  {
    id: "no_hp",
    numeric: false,
    disablePadding: false,
    label: "No HP",
  },
  {
    id: "tanggal_lahir",
    numeric: false,
    disablePadding: false,
    label: "Tanggal Lahir",
  },
  {
    id: "username_ig",
    numeric: false,
    disablePadding: false,
    label: "Username IG",
  },
  {
    id: "verified",
    numeric: false,
    disablePadding: false,
    label: "Verified",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: alpha("#383838", 1),
    color: theme.palette.common.white,
    fontFamily: "Fredoka",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: alpha("#331F0F", 1),
    color: theme.palette.common.white,
    fontSize: 14,
    fontFamily: "Fredoka",
  },
}));

interface EnhancedTableProps {
  onRequestSort: (_event: MouseEvent<unknown>, property: keyof User) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof User) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
        <StyledTableCell
          key={"action"}
          align="left"
          padding="normal"
          sortDirection={false}
        >
          Action
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
}

export default function UserTable() {
  const [open, setOpen] = useState(false);
  const [verifyUserId, setVerifyUserId] = useState<string | null>(null);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof User>("id");
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [isVerify, setIsVerify] = useState(false);
  const { data: users } = useGetAllUsers(search);
  // console.log(users);
  const {
    mutateAsync: verifyUser,
    isPending: pendingVerify,
    data: verifyData,
  } = useVerifyUser();
  // console.log(verifyData);

  const handleClickOpen = (userId: string) => {
    // console.log(userId);
    setOpen(true);
    setVerifyUserId(userId);
  };

  const handleClose = () => {
    setIsVerify(false);
    setOpen(false);
  };

  const handleYes = async () => {
    await verifyUser(verifyUserId || "");
    setIsVerify(true);
    // setOpen(false);
  };

  const handleRequestSort = (
    _event: MouseEvent<unknown>,
    property: keyof User
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (users?.length || 0)) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(users ? users : [], getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, users]
  );

  const { control, handleSubmit } = useForm<SearchUser>({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<SearchUser> = (data) => {
    // console.log(data);
    setSearch(data.search);
  };

  useEffect(() => {}, [users, search]);

  return (
    <Box sx={{ width: "100%" }}>
      <div>
        <h1 className="font-fredoka text-4xl text-white mb-5">User Data</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-5 flex w-[500px]">
        <div className="grow">
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <InputField {...field} placeholder="Search user" />
            )}
          />
        </div>
        <button type="submit" className="flex justify-center items-center ml-4">
          <FaMagnifyingGlass className="text-white text-2xl" />
        </button>
      </form>
      <Paper
        sx={{ width: "100%", mb: 2, borderRadius: "24px", overflow: "hidden" }}
      >
        <TableContainer>
          <Table
            sx={{ minWidth: 750, backgroundColor: alpha("#331F0F", 1) }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={users?.length || 0}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <StyledTableCell component="th" id={labelId} scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.nama || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.alamat || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.asal_provinsi || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.image_kartu === "000000000000000000000000" ? (
                        "--"
                      ) : (
                        <a
                          href={`https://api.mage-its.id/images/${row.image_kartu}`}
                          className="flex items-center justify-center"
                          target="_blank"
                        >
                          <FaArrowUpRightFromSquare />
                        </a>
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.institusi || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.no_hp}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.tanggal_lahir || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.username_ig || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.verified || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleClickOpen(row.id)}
                        disabled={row.verified === "true"}
                      >
                        Verify
                      </Button>
                    </StyledTableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <StyledTableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ backgroundColor: alpha("#0000", 0.8), color: "white" }}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
        sx={{ color: "white" }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Verify User Confirmation"}
        </DialogTitle>
        <DialogContent>
          {pendingVerify ? (
            <CircularProgress />
          ) : isVerify ? (
            <DialogContentText id="alert-dialog-description">
              {verifyData?.message}
            </DialogContentText>
          ) : (
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to verify this user?
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          {isVerify ? (
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          ) : (
            <>
              <Button onClick={handleYes}>Yes</Button>
              <Button onClick={handleClose} autoFocus>
                No
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}
