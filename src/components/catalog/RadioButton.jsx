
import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
const RadioButton = ({options, onChange, selectedValue}) => {

        return (
            
            <FormControl  component="fieldset">
                <RadioGroup onChange={onChange} value={selectedValue}>
                    {options.map(({ value, label }) => (
                        <FormControlLabel sx={{marginRight: '200px'}} value={value} control={<Radio />} label={label} key={value} />
                    ))}
                </RadioGroup>
            </FormControl>
          
        )
    
}

export default RadioButton;