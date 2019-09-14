import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';


// class Collection extends react.Component {
//   constructor() {
//     super();
//     const page = "0";
//     const limit = "70";
//     const AVGLE_COLLECTION_API = `https://api.avgle.com/v1/collections/${page}?limit=${limit}`;
// 
//     this.state = {
//       collection: []
//     }
// 
//     fetch(AVGLE_COLLECTION_API)
//       .then((resp) => resp.json())
//       .then((json) => {
//         this.setState(
//           {
//             collection: json.response.collections.map((resp) => resp.title)
//           }
//         );
//       })
//       .catch((err) => {
//       });
//   }
// 
//   buildCollection() {
//     let key = 0;
//     return (
//       this.state.collection.map((collection) => (
//         <a key={key++} href={`/?name=${collection}`}>{collection}</a>
//       ))
//     );
//   }
// 
//   render() {
//     return (
//       <div>
//         <form>
//           <Select
//             value={yeah}
//             onChange={}
//           >
//             <MenuItem value={"yeah"}>yeah</MenuItem>
//           </Select>
//         </form>
//       </div>
//     );
//   }
// }
// 

export default function Collection () {
  const [anchorEl, setAnchorEl] = React.useState(null);


  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu>
        <MenuItem>
          <ListItemText primary="Sent mail" />
        </MenuItem>
      </Menu>
    </div>
  );
}
