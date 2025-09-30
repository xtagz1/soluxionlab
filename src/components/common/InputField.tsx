import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import { Image } from 'lucide-react';

// Keep your styled component, but you can also define styling using the `sx` prop directly.
const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '80px',
  },
});

function InputField() {
  return (
    <CustomTextField
      placeholder='Enter new task here'
      variant="standard" // Change to "standard" for the default underline
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Image />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default InputField;
