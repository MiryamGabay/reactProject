import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     '& .MuiDialogContent-root': {
//         padding: theme.spacing(2),
//     },
//     '& .MuiDialogActions-root': {
//         padding: theme.spacing(1),
//     },
// }));


export default function AppointmentForm() {

    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };

    const [data, setData] = React.useState({
        dateTime: "",
        clientName: "",
        clientPhone: "",
        clientEmail: "",
    });

    function handelChenge(field, value) {
        let enter = data;
        enter[field] = value;
        setData(enter);
        console.log(data);
    }

    return (
        <Box component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off" >

            <Paper>

                <div>

                    <div>
                        <TextField label="Name" type="search" color="info"
                            onChange={(e) => handelChenge('clientName', e.target.value)} />
                    </div>
                    <div>
                        <TextField label="Phone" type="Phone" color="info"
                            onChange={(e) => handelChenge('clientPhone', e.target.value)} />
                    </div>
                    <div>
                        <TextField label="Email" type="Email" color="info"
                            onChange={(e) => handelChenge('clientEmail', e.target.value)} />
                    </div>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={['DateTimePicker']}>
                                <DateTimePicker label="Choose date and time." name="startDateTime" />
                            </DemoContainer>
                        </LocalizationProvider>

                    </div>

                </div>

                <div style={{ margin: '10px' }}>
                    <Button variant="outlined" size="large" color="info" >
                        Save
                    </Button>
                </div>

            </Paper>
        </Box>
    );

}