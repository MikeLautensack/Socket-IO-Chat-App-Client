import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

type TextInputProps = {
  name: string;
  label?: string;
  size?: any;
  readonly?: boolean;
  disabled?: boolean;
  type?: string;
};

const TextInput = ({
  name,
  label,
  size = "normal",
  readonly,
  disabled,
  type,
}: TextInputProps) => {
  // Hooks
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <Box component="div" className="flex w-full">
      <TextField
        sx={{
          "& .MuiInputBase-input": {
            backgroundColor: "surfaceContainerHighest",
            height: "1rem", // Fixed input height
            color: "primary.main", // Text color set to primary
            borderRadius: "12px 0px 0px 12px",
          },
        }}
        label={label}
        fullWidth
        size={size}
        disabled={disabled}
        slotProps={{
          input: {
            readOnly: readonly,
          },
        }}
        type={type}
        error={!!errors[name]}
        helperText={errors[name]?.message as React.ReactNode}
        {...field}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          height: "49px",
          borderRadius: "0rem 12px 12px 0rem",
          boxSizing: "border-box",
        }}
      >
        Send!
      </Button>
    </Box>
  );
};

export default TextInput;
