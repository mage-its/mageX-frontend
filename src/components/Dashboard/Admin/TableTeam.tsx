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
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  styled,
  TablePagination,
} from "@mui/material";
import { FaArrowUpRightFromSquare, FaMagnifyingGlass } from "react-icons/fa6";
import InputField from "@/components/InputField";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAllTeams, useVerifyTeam } from "@/services/team";
import { useGetAllUsers } from "@/services/users";

interface Team {
  id: string;
  email_anggota: string;
  nama_anggota: string;
  username_ingame: string;
  nama: string;
  ketua: string;
  divisi: string;
  kategori: string;
  bukti_pembayaran: string;
  status: string;
  bukti_twibbon_follow: string;
  link_video: string;
  proposal: string;
  link_karya: string;
}

interface SearchTeam {
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

function getComparator<Key extends keyof Team>(
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
  id: keyof Team;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "nama",
    numeric: false,
    disablePadding: false,
    label: "Nama",
  },
  {
    id: "divisi",
    numeric: false,
    disablePadding: false,
    label: "Divisi",
  },
  {
    id: "ketua",
    numeric: false,
    disablePadding: false,
    label: "Ketua",
  },
  {
    id: "email_anggota",
    numeric: false,
    disablePadding: false,
    label: "Email Anggota",
  },
  {
    id: "nama_anggota",
    numeric: false,
    disablePadding: false,
    label: "Nama Anggota",
  },
  {
    id: "kategori",
    numeric: false,
    disablePadding: false,
    label: "Kategori",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "bukti_pembayaran",
    numeric: false,
    disablePadding: false,
    label: "Bukti Pembayaran",
  },
  {
    id: "bukti_twibbon_follow",
    numeric: false,
    disablePadding: false,
    label: "Bukti Twibbon Follow",
  },
  {
    id: "proposal",
    numeric: false,
    disablePadding: false,
    label: "Proposal",
  },
  {
    id: "link_karya",
    numeric: false,
    disablePadding: false,
    label: "Link Drive",
  },
  {
    id: "username_ingame",
    numeric: false,
    disablePadding: false,
    label: "Username Ingame",
  },
  {
    id: "kategori",
    numeric: false,
    disablePadding: false,
    label: "Kategori",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "bukti_pembayaran",
    numeric: false,
    disablePadding: false,
    label: "Bukti Pembayaran",
  },
  {
    id: "bukti_twibbon_follow",
    numeric: false,
    disablePadding: false,
    label: "Bukti Twibbon Follow",
  },
  {
    id: "proposal",
    numeric: false,
    disablePadding: false,
    label: "Proposal",
  },
  {
    id: "link_karya",
    numeric: false,
    disablePadding: false,
    label: "Link Drive",
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
  onRequestSort: (_event: MouseEvent<unknown>, property: keyof Team) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Team) => (event: MouseEvent<unknown>) => {
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

export default function TeamTable() {
  const [open, setOpen] = useState(false);
  const [verifyTeamId, setVerifyTeamId] = useState<string | null>(null);
  const [verifyTeamStatus, setVerifyTeamStatus] = useState<string | null>(null);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Team>("id");
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [isVerify, setIsVerify] = useState(false);
  const { data: teams } = useAllTeams(search);
  const { data: users } = useGetAllUsers("");
  // console.log(teams);
  const {
    mutateAsync: verifyTeam,
    isPending: pendingVerify,
    data: verifyData,
  } = useVerifyTeam();
  // console.log(verifyData);

  const handleClickOpen = (TeamId: string) => {
    // console.log(TeamId);
    setOpen(true);
    setVerifyTeamId(TeamId);
  };

  const handleClose = () => {
    setIsVerify(false);
    setOpen(false);
  };

  const handleYes = async () => {
    await verifyTeam({
      id: verifyTeamId || "",
      status: verifyTeamStatus || "",
    });
    setIsVerify(true);
    // setOpen(false);
  };

  const handleRequestSort = (
    _event: MouseEvent<unknown>,
    property: keyof Team
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (teams?.length || 0)) : 0;

  const mappedTeams = useMemo(
    () =>
      teams?.map((team) => ({
        ...team,
        ketua: users?.find((user) => user.id === team.ketua)?.email || "",
        username_ingame:
          team.username_ingame
            ?.filter((username) => username !== "undefined")
            .join(", ") || "",
        nama_anggota: team.anggota?.map((anggota) => anggota).join(", ") || "",
        email_anggota: team.anggota
          ? team.anggota
              .map((id) => users?.find((user) => user.id === id)?.email || "")
              .join(", ")
          : "",
      })) || [],
    [teams, users]
  );

  const visibleRows = useMemo(
    () =>
      stableSort(mappedTeams, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, mappedTeams]
  );

  const { control, handleSubmit } = useForm<SearchTeam>({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<SearchTeam> = (data) => {
    // console.log(data);
    setSearch(data.search);
  };

  useEffect(() => {}, [teams, search]);

  const handleChange = (event: SelectChangeEvent<typeof verifyTeamStatus>) => {
    setVerifyTeamStatus(event.target.value as string);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div>
        <h1 className="font-fredoka text-4xl text-white mb-5">Team Data</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-5 flex w-[500px]">
        <div className="grow">
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <InputField {...field} placeholder="Search Team" />
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
              rowCount={teams?.length || 0}
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
                    <StyledTableCell align="right">
                      {row.divisi || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ketua || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.email_anggota || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.username_ingame || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.kategori || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.status || "--"}
                    </StyledTableCell>
                    <StyledTableCell align="right">
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
                      {row.bukti_twibbon_follow ===
                      "000000000000000000000000" ? (
                        "--"
                      ) : (
                        <a
                          href={`https://api.mage-its.id/images/${row.bukti_twibbon_follow}`}
                          className="flex items-center justify-center"
                          target="_blank"
                        >
                          <FaArrowUpRightFromSquare />
                        </a>
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.proposal === "000000000000000000000000" ? (
                        "--"
                      ) : (
                        <a
                          href={`https://api.mage-its.id/images/${row.proposal}`}
                          className="flex items-center justify-center"
                          target="_blank"
                        >
                          <FaArrowUpRightFromSquare />
                        </a>
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {!row.link_karya ? (
                        "--"
                      ) : (
                        <a
                          href={row.link_karya}
                          className="flex items-center justify-center"
                          target="_blank"
                        >
                          <FaArrowUpRightFromSquare />
                        </a>
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button
                        variant="contained"
                        color="info"
                        onClick={() => handleClickOpen(row.id)}
                        className="w-40"
                      >
                        Change Status
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
          count={teams?.length || 0}
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
        <DialogTitle id="alert-dialog-title">{"Team Status"}</DialogTitle>
        <DialogContent>
          {pendingVerify ? (
            <CircularProgress />
          ) : isVerify ? (
            <DialogContentText id="alert-dialog-description">
              {verifyData?.message}
            </DialogContentText>
          ) : (
            <>
              <DialogContentText id="alert-dialog-description">
                Select the status of the team
              </DialogContentText>
              <FormControl sx={{ m: 1, minWidth: 120, marginTop: "16px" }}>
                <InputLabel id="demo-dialog-select-label">Status</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={verifyTeamStatus}
                  onChange={handleChange}
                  input={<OutlinedInput label="Verify Status" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="tahap-1">Tahap 1 Verified</MenuItem>
                  <MenuItem value="tahap-2">Tahap 2 Verified</MenuItem>
                  <MenuItem value="tahap-3">Tahap 3 Verified</MenuItem>
                </Select>
              </FormControl>
            </>
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
