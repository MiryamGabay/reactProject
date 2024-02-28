import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function AddNewService() {
    const [data, setData] = useState({
        id: "",
        name: "",
        description:"",
        price: 0,
        duration: 0

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

           
                <div>
                    <div>
                        <TextField label="Name" type="text" color="info"
                            onChange={(e) => handelChenge('name', e.target.value)} />
                    </div>
                    <div>
                        <TextField label="Description" type="text" color="info"
                            onChange={(e) => handelChenge('description', e.target.value)} />
                    </div>
                    <div>
                        <TextField label="Price" type="text" color="info"
                            onChange={(e) => handelChenge('price', e.target.value)} />
                    </div>
                    <div>
                        <TextField label="Duration" type="text" color="info"
                            onChange={(e) => handelChenge('duration', e.target.value)} />
                    </div>
                </div>

                <div style={{ margin: '10px' }}>
                    <Button variant="outlined" size="large" color="info">
                        send
                    </Button>
                </div>

          
        </Box>
    );
}
