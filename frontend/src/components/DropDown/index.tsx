import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styles } from './styles';
import { useState } from 'react';


type DropDownProps = {
    anchor: null | HTMLElement,
    open: boolean,
    handleClose: (year:number) => void
}

const DropDown = ({anchor,open,handleClose}:DropDownProps) => {
    const [year,setYear] = useState<number>(0)
    
    const renderYears = () =>{
        let years : number[] = []
        for(let i = 0; i < 25; i++){
            years.push(2000 + i)
        }
        return years.map((y: number) => (
            <MenuItem 
                sx={styles.item} 
                key={y} 
                onClick={() => handleClose(y)}
            >
                {y}
            </MenuItem>
        ));
    }


    return (
        <Menu
            id="basic-menu"
            anchorEl={anchor}
            open={open}
            onClose={() => {handleClose(year)}}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem disabled sx={{pb:"18px"}}>
                Select Year
            </MenuItem>
            {renderYears()}
        </Menu>
    );
}

export default DropDown;