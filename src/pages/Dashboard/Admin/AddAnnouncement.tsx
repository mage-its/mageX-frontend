import {
  alpha,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAddAnnouncement } from "@/services/announcement";
import dayjs, { Dayjs } from "dayjs";

interface AnnouncementForm {
  pengumuman: string;
  tanggal_awal: Dayjs;
  tanggal_akhir: Dayjs;
}

export default function AddAnnouncement() {
  const { control, handleSubmit } = useForm<AnnouncementForm>();
  const [announcementData, setAnnouncementData] = useState<AnnouncementForm>({
    pengumuman: "",
    tanggal_awal: dayjs(),
    tanggal_akhir: dayjs(),
  });
  const onSubmit: SubmitHandler<AnnouncementForm> = (data) => {
    setOpen(true);
    setAnnouncementData({
      pengumuman: data.pengumuman,
      tanggal_awal: data.tanggal_awal,
      tanggal_akhir: data.tanggal_akhir,
    });
  };
  const [open, setOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const {
    mutateAsync: addAnnouncement,
    isPending: pendingAnnouncement,
    data: AnnouncementData,
  } = useAddAnnouncement();

  const handleClose = () => {
    setIsAdd(false);
    setOpen(false);
  };

  const handleYes = async () => {
    await addAnnouncement({
      pengumuman: announcementData.pengumuman,
      tanggal_awal: announcementData.tanggal_awal.format("YYYY-MM-DD"),
      tanggal_akhir: announcementData.tanggal_akhir.format("YYYY-MM-DD"),
    });
    setIsAdd(true);
    // setOpen(false);
  };
  return (
    <div className="p-4 bg-vertical-gta min-h-screen w-screen flex flex-col items-center">
      <h1 className="font-fredoka text-4xl text-white mb-5 mt-10">
        Add Announcement
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-[80%]"
      >
        <Controller
          name="pengumuman"
          control={control}
          render={({ field }) => (
            <TextField
              id="filled-textarea"
              label="Pengumuman"
              placeholder="Isi pengumuman"
              multiline
              variant="filled"
              {...field}
              sx={{
                width: "100%",
                backgroundColor: alpha("#fff", 0.4),
                borderRadius: 4,
                overflow: "hidden",
              }}
            />
          )}
        />
        <Controller
          name="tanggal_awal"
          control={control}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  {...field}
                  label="Tanggal Awal"
                  slotProps={{
                    textField: {
                      variant: "filled",
                      sx: {
                        width: "100%",
                        backgroundColor: alpha("#fff", 0.4),
                        borderRadius: 4,
                        overflow: "hidden",
                      },
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          )}
        />
        <Controller
          name="tanggal_akhir"
          control={control}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  {...field}
                  label="Tanggal Akhir"
                  slotProps={{
                    textField: {
                      variant: "filled",
                      sx: {
                        width: "100%",
                        backgroundColor: alpha("#fff", 0.4),
                        borderRadius: 4,
                        overflow: "hidden",
                      },
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          )}
        />
        <Button color="info" type="submit" variant="contained">
          Submit
        </Button>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Announcement Add Confirmation"}
        </DialogTitle>
        <DialogContent>
          {pendingAnnouncement ? (
            <CircularProgress />
          ) : isAdd ? (
            <DialogContentText id="alert-dialog-description">
              {AnnouncementData?.message}
            </DialogContentText>
          ) : (
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to add announcement?
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          {isAdd ? (
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
    </div>
  );
}
