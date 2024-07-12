import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarFormProps() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <DemoItem>
          <div className="h-full w-full text-light rounded-3xl flex items-center justify-center px-2 no-scrollbar">
            <DateCalendar
              defaultValue={dayjs(new Date())}
              readOnly
              showDaysOutsideCurrentMonth
              views={['day']} // Only display days, disabling the year dropdown
              sx={{
                width: '100%', // Set the width of the calendar
                height: '100%', // Set the height of the calendar
                margin: 0, // Remove default margin
                padding: 0, // Remove default padding
                '& .MuiPickersCalendarHeader-root': {
                  color: 'white', // Header text color
                  margin: 0, // Remove margin from header
                  justifyContent: 'center',
                  textAlign: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  width: 'full',
                  paddingX: '8px',
                },
                '& .MuiPickersDay-root': {
                  color: 'white', // Day text color
                  width: '2vw', // Set minimum width for day cells
                  height: '3.25vh', // Set height for day cells
                  margin: '1px', // Adjust margin for day cells
                  fontSize: '10px',
                  lineHeight: '0',
                },
                '& .MuiPickersDay-root.Mui-selected': {
                  color: 'white', // Selected day text color
                },
                '& .MuiPickersDay-root.Mui-disabled': {
                  color: 'rgba(255, 255, 255, 0.5)', // Disabled day text color
                },
                '& .MuiPickersCalendarHeader-label': {
                  color: 'white', // Month and year text color
                  fontSize: '13px', // Adjust header font size
                  justifyContent: 'center',
                  textAlign: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  marginX: 'auto',
                },
                '& .MuiPickersCalendarHeader-labelContainer': {
                  justifyContent: 'center',
                  textAlign: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  marginX: 'auto',
                },
                '& .MuiIconButton-root': {
                  color: 'white', // Arrow buttons
                  padding: '0px', // Reduce padding for arrow buttons
                  display: 'none',
                  width: '0px',
                  height: '0px',
                },
                '& .MuiPickersArrowSwitcher-root': {
                  display: 'none', // Hide the arrow root
                  width: '0px',
                  height: '0px',
                },
                '& .MuiTypography-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  color: 'white', // General typography (day names)
                  width: '2vw',
                  height: '3.25vh',
                  fontSize: '10px',
                },
                '& .MuiPickersDay-root.MuiPickersDay-dayOutsideMonth': {
                  color: 'rgba(255, 255, 255, 0.5)', // Days outside current month
                },
              }}
            />
          </div>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
