import React, { useState } from 'react';
import style from './style.module.css'; 

export default function Proverka() {

  const [array, setArray] = useState([{ id: 1, title: 'ttt1', type: 'type1',  url: 'url1', disp: 'none' }, { id: 2, title: 'ttt2', type: 'type2', url: 'url2', disp: 'none' }, { id: 3, title: 'ttt3', type: 'type3', url: 'url3', disp: 'none' }]);
  // const [obj, setObj] = useState({ id: 1, title: 'ttt1', type: 'type1', url: 'url1', disp: 'none' })

  function togleHundler(id) {
    // obj.disp = 'block';
    // setObj({...obj});


    array.map(el => {
      if (el.id === id) {
        el.disp = 'block';
        console.log(id);
      } else {
        el.disp = 'none';
      }
      return el;
    });
    setArray([...array]);
  }

  console.log(array);

  return (
    <div className={style.mainBox}>
      {array.map(obj => {
        return (
          <div>
        <button onClick={() => togleHundler(obj.id)}>{obj.title}</button>
        <div id={obj.id} style={{ display: obj.disp }} >
          <p>{obj.url}</p>
        </div>
      </div >
        )
      })}
    </div >
  )
}


// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function Proverka(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// Proverka.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     'aria-controls': `scrollable-auto-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function ScrollableTabsButtonAuto() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="scrollable"
//           scrollButtons="auto"
//           aria-label="scrollable auto tabs example"
//         >
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//           <Tab label="Item Four" {...a11yProps(3)} />
//           <Tab label="Item Five" {...a11yProps(4)} />
//           <Tab label="Item Six" {...a11yProps(5)} />
//           <Tab label="Item Seven" {...a11yProps(6)} />
//         </Tabs>
//       </AppBar>
//       <Proverka value={value} index={0}>
//         Item One
//       </Proverka>
//       <Proverka value={value} index={1}>
//         Item Two
//       </Proverka>
//       <Proverka value={value} index={2}>
//         Item Three
//       </Proverka>
//       <Proverka value={value} index={3}>
//         Item Four
//       </Proverka>
//       <Proverka value={value} index={4}>
//         Item Five
//       </Proverka>
//       <Proverka value={value} index={5}>
//         Item Six
//       </Proverka>
//       <Proverka value={value} index={6}>
//         Item Seven
//       </Proverka>
//     </div>
//   );
// }
