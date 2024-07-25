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
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import InputField from "@/components/InputField";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  useAnnouncement,
  useDeleteAnnouncement,
} from "@/services/announcement";
import { Link } from "react-router-dom";

export type Announcement = {
  id: string;
  valid: string;
  pengumuman: string;
  tanggal_awal: string;
  tanggal_akhir: string;
};

interface SearchAnnouncement {
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

function getComparator<Key extends keyof Announcement>(
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
  id: keyof Announcement;
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
    id: "pengumuman",
    numeric: false,
    disablePadding: false,
    label: "Pengumuman",
  },
  {
    id: "tanggal_awal",
    numeric: false,
    disablePadding: false,
    label: "Tanggal Awal",
  },
  {
    id: "tanggal_akhir",
    numeric: false,
    disablePadding: false,
    label: "Tanggal Akhir",
  },
  {
    id: "valid",
    numeric: false,
    disablePadding: false,
    label: "Valid",
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
    property: keyof Announcement
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Announcement) => (event: MouseEvent<unknown>) => {
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

export default function AnnouncementTable() {
  const [open, setOpen] = useState(false);
  const [deleteAnnouncementId, setDeleteAnnouncementId] = useState<
    string | null
  >(null);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Announcement>("id");
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const { data: announcements } = useAnnouncement();
  // console.log(announcements);
  const {
    mutateAsync: deleteAnnouncement,
    isPending: pendingDelete,
    data: DeleteData,
  } = useDeleteAnnouncement();

  const handleClickOpen = (userId: string) => {
    // console.log(userId);
    setOpen(true);
    setDeleteAnnouncementId(userId);
  };

  const handleClose = () => {
    setIsDelete(false);
    setOpen(false);
  };

  const handleYes = async () => {
    await deleteAnnouncement(deleteAnnouncementId || "");
    setIsDelete(true);
    // setOpen(false);
  };

  const handleRequestSort = (
    _event: MouseEvent<unknown>,
    property: keyof Announcement
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
      ? Math.max(0, (1 + page) * rowsPerPage - (announcements?.length || 0))
      : 0;

  const mappedAnnouncement = useMemo(() => {
    return (
      announcements?.map((announcement) => {
        return {
          ...announcement,
          valid: String(announcement.valid),
        };
      }) || []
    );
  }, [announcements]);

  const visibleRows = useMemo(
    () =>
      stableSort(mappedAnnouncement, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, mappedAnnouncement]
  );

  const { control, handleSubmit } = useForm<SearchAnnouncement>({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<SearchAnnouncement> = (data) => {
    // console.log(data);
    setSearch(data.search);
  };

  useEffect(() => {}, [announcements, search]);

  return (
    <Box sx={{ width: "100%" }}>
      <div>
        <h1 className="font-fredoka text-4xl text-white mb-5">
          Announcement Data
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-5 flex w-[700px]">
        <div className="grow">
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <InputField {...field} placeholder="Search user" />
            )}
          />
        </div>
        <button
          type="submit"
          className="flex justify-center items-center ml-4 mr-7"
        >
          <FaMagnifyingGlass className="text-white text-2xl" />
        </button>
        <Button
          variant="contained"
          color="info"
          onClick={() => (window.location.href = "/admin/announcement/add")}
          type="button"
          startIcon={<FaPlus />}
        >
          Add Announcement
        </Button>
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
              rowCount={announcements?.length || 0}
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
                      {row.pengumuman}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.tanggal_awal}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.tanggal_akhir}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.valid || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <div className="flex gap-4">
                        <Link to={`/admin/announcement/edit/${row.id}`}>
                          <Button variant="contained" color="info">
                            Edit
                          </Button>
                        </Link>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleClickOpen(row.id)}
                        >
                          Delete
                        </Button>
                      </div>
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
          count={announcements?.length || 0}
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
          {"Delete Announcement Confirmation"}
        </DialogTitle>
        <DialogContent>
          {pendingDelete ? (
            <CircularProgress />
          ) : isDelete ? (
            <DialogContentText id="alert-dialog-description">
              {DeleteData?.message}
            </DialogContentText>
          ) : (
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this announcement?
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          {isDelete ? (
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
