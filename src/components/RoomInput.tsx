import { Box, Button, TextField } from "@mui/material";
import { Session } from "next-auth";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

type TextInputProps = {
  name: string;
  label?: string;
  size?: any;
  readonly?: boolean;
  disabled?: boolean;
  type?: string;
  activityHandler?: (username: string) => void;
  session: Session;
};

const TextInput = ({
  name,
  label,
  size = "normal",
  readonly,
  disabled,
  type,
  activityHandler,
  session,
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          field.onChange(e);
          if (activityHandler) {
            activityHandler(session.user?.name!);
          }
        }}
        value={field.value}
        ref={field.ref}
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
        Create Room
      </Button>
    </Box>
  );
};

export default TextInput;
