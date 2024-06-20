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
          <div className="bg-black opacity-[80%] w-[22vw] min-w-[21rem] h-[22vw] min-h-[21rem] max-h-[21rem] text-light rounded-[3rem] flex items-center justify-center">
            <DateCalendar
              defaultValue={dayjs(new Date())}
              readOnly
              showDaysOutsideCurrentMonth
              sx={{
                color: 'white', // General text color
                width: '100%',
                height: '100%',
                '& .MuiPickersCalendarHeader-root': {
                  color: 'white', // Header text color
                },
                '& .MuiPickersDay-root': {
                  color: 'white', // Day text color
                },
                '& .MuiPickersDay-root.Mui-selected': {
                  backgroundColor: '#1976d2', // Selected day background color
                  color: 'white', // Selected day text color
                },
                '& .MuiPickersDay-root.Mui-disabled': {
                  color: 'rgba(255, 255, 255, 0.5)', // Disabled day text color
                },
                '& .MuiPickersCalendarHeader-label': {
                  color: 'white', // Month and year text color
                },
                '& .MuiIconButton-root': {
                  color: 'white', // Arrow buttons
                },
                '& .MuiTypography-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Selected day background color
                  borderRadius: '50%',
                  color: 'white', // General typography (day names)
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
