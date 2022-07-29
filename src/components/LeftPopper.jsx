// import * as React from "react";
// import Box from "@mui/material/Box";
// import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { footerContent } from "../services/footer-content";

// import { usePageTheme } from "../services/page-theme.hook";
// import { useTranslation } from "react-i18next";

// /**
//  * Private component
//  */
// const CustomPopper = (props) => {
//   const { content } = props;

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [open, setOpen] = React.useState(false);

//   const { colors } = usePageTheme();

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//     setOpen((oldState) => !oldState);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setOpen(false);
//   };

//   const { t } = useTranslation();

//   return (
//     <Box>
//       <Popover
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "center",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "center",
//         }}
//       >
//         <Typography sx={{ p: 2 }}>{content.info}</Typography>
//       </Popover>
//       <Box>
//         <Box
//           sx={{
//             m: "5px",
//           }}
//         >
//           <Button
//             fullWidth
//             variant="contained"
//             onClick={handleClick}
//             sx={{
//               backgroundColor: colors.primary,
//               "&:hover": {
//                 backgroundColor: colors.primaryDark,
//               },
//             }}
//           >
//             <Typography
//               sx={{
//                 color: colors.secondary,
//               }}
//             >
//               {t(content.name)}
//             </Typography>
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// const LeftPopper = () => {
//   return (
//     <Box sx={{ width: { sm: "500px", xs: "100%" } }}>
//       {footerContent.map((content) => {
//         return <CustomPopper key={content.id} content={content} />;
//       })}
//     </Box>
//   );
// };

// export default LeftPopper;
