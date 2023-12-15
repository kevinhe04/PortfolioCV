import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function MenuKevin() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: 'pointer' }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
          }}
        >
            <ListItemButton className ="text-black" sx={{ fontWeight: 'lg'}}>
              <Link to = "/" style={{ color: 'black', textDecoration: "none"}}> About </Link>
            </ListItemButton>
            <ListItemButton>
              <Link to = "/IntroductionLetter" style={{ color: 'black',  textDecoration: "none" }}> Introduction Letter </Link>
            </ListItemButton>
            <ListItemButton>
              <Link to = "/CV" style={{ color: 'black',  textDecoration: "none" }}> Curriculum Vitae </Link>
            </ListItemButton>
            <ListItemButton>
              <Link to = "/Projects" style={{ color: 'black',  textDecoration: "none" }}> Projects </Link>
            </ListItemButton>
            <ListItemButton>
              <Link to = "/Leadership" style={{ color: 'black',  textDecoration: "none" }}> Leadership and ECA </Link>
            </ListItemButton>
            <ListItemButton>
              <Link to = "/Miscellaneous" style={{ color: 'black',  textDecoration: "none" }}> Miscellaneous </Link>
            </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}