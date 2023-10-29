import { ChangeEvent, FC, useState } from 'react';
import { FileInput } from '@mantine/core';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


  interface FileSelectProps {
    image: string | any;
    setImage: (s: string | any) => void;
  }

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export const FileSelect:FC<FileSelectProps> = ({image, setImage}) =>  {


const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
    if(e.target.files === null) return;
    setImage(URL.createObjectURL(e.target.files[0]));
}

console.log(image);
  return  (<Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{maxWidth: '220px'}}>
  Загрузить фото
  <VisuallyHiddenInput type="file" onChange={(val) => handleChange(val)}/>
</Button>);
}