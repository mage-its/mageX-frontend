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
import {
  useGetAllWorkshops,
  useVerifyWorkshop,
} from "@/services/workshop-regist";
import { useGetAllUsers } from "@/services/users";

interface Workshop {
  bukti_follow: string;
  bukti_pembayaran: string;
  id: string;
  sumber_informasi: string;
  user_id: string;
  verified: string;
  "workshop-registration": string;
}

interface SearchWorkshop {
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

function getComparator<Key extends keyof Workshop>(
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
  id: keyof Workshop;
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
    id: "workshop-registration",
    numeric: false,
    disablePadding: false,
    label: "Workshop",
  },
  {
    id: "user_id",
    numeric: false,
    disablePadding: false,
    label: "User",
  },
  {
    id: "sumber_informasi",
    numeric: false,
    disablePadding: false,
    label: "Sumber Informasi",
  },
  {
    id: "bukti_follow",
    numeric: false,
    disablePadding: false,
    label: "Bukti Follow",
  },
  {
    id: "bukti_pembayaran",
    numeric: false,
    disablePadding: false,
    label: "Bukti Pembayaran",
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
  onRequestSort: (
    _event: MouseEvent<unknown>,
    property: keyof Workshop
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Workshop) => (event: MouseEvent<unknown>) => {
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

export default function WorkshopTable() {
  const [open, setOpen] = useState(false);
  const [verifyWorkshopId, setVerifyWorkshopId] = useState<string | null>(null);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Workshop>("id");
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [isVerify, setIsVerify] = useState(false);
  const { data: workshops } = useGetAllWorkshops(search);
  const { data: users } = useGetAllUsers("");
  // console.log(workshops);
  const {
    mutateAsync: verifyWorkshop,
    isPending: pendingVerify,
    data: verifyData,
  } = useVerifyWorkshop();
  // console.log(verifyData);

  const handleClickOpen = (userId: string) => {
    // console.log(userId);
    setOpen(true);
    setVerifyWorkshopId(userId);
  };

  const handleClose = () => {
    setIsVerify(false);
    setOpen(false);
  };

  const handleYes = async () => {
    await verifyWorkshop(verifyWorkshopId || "");
    setIsVerify(true);
    // setOpen(false);
  };

  const handleRequestSort = (
    _event: MouseEvent<unknown>,
    property: keyof Workshop
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
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - (workshops?.length || 0))
      : 0;

  const mappedWorkshop = useMemo(() => {
    return (
      workshops?.map((workshop) => {
        return {
          ...workshop,
          user_id:
            users?.find((user) => user.id === workshop.user_id)?.email || "",
        };
      }) || []
    );
  }, [workshops, users]);

  const visibleRows = useMemo(
    () =>
      stableSort(mappedWorkshop, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [mappedWorkshop, order, orderBy, page, rowsPerPage]
  );

  const { control, handleSubmit } = useForm<SearchWorkshop>({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<SearchWorkshop> = (data) => {
    // console.log(data);
    setSearch(data.search);
  };

  useEffect(() => {}, [workshops, search]);

  return (
    <Box sx={{ width: "100%" }}>
      <div>
        <h1 className="font-fredoka text-4xl text-white mb-5">Workshop Data</h1>
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
              rowCount={workshops?.length || 0}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <StyledTableCell component="th" id={labelId} scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row["workshop-registration"]}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.user_id}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.sumber_informasi}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.bukti_follow === "000000000000000000000000" ? (
                        "--"
                      ) : (
                        <a
                          href={`https://api.mage-its.id/images/${row.bukti_follow}`}
                          className="flex items-center justify-center"
                          target="_blank"
                        >
                          <FaArrowUpRightFromSquare />
                        </a>
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.bukti_pembayaran === "000000000000000000000000" ? (
                        "--"
                      ) : (
                        <a
                          href={`https://api.mage-its.id/images/${row.bukti_pembayaran}`}
                          className="flex items-center justify-center"
                          target="_blank"
                        >
                          <FaArrowUpRightFromSquare />
                        </a>
                      )}
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
          count={workshops?.length || 0}
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
          {"Verify Workshop Confirmation"}
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
              Are you sure you want to verify this workshop registration?
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
