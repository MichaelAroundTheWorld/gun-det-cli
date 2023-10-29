import { Box, Button, Stack } from "@mui/material";
import { Auth } from "./components/Auth";
import { FileSelect } from "./components/FileSelect/FileSelect";
import { Header } from "./components/Header/Header";
import { useState } from "react";

function App() {
const [image, setImage] = useState();

  return (
    <div className="App">
      <Stack alignItems={"center"} spacing={2} mt={2}>
      <Box sx={{maxWidth: '450px', height: '320px', width: '320px'}}>
       <img
        width={'100%'}
            style={{objectFit: 'contain'}}
            src={image}
          />
        </Box>
      <FileSelect image={image} setImage={setImage}/>
      </Stack>
    </div>
  );
}

export default App;
