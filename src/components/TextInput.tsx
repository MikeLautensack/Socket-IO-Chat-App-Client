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
    <TextField
      sx={{
        "& .MuiInputBase-input": {
          backgroundColor: "surfaceContainerHighest",
          color: "white", // Text color set to primary
          borderRadius: "4px 0px 0px 4px",
        },
        "& .MuiInputLabel-root": {
          color: "white", // Label color set to primary
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "white", // Focused label color set to primary
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
  );
};

export default TextInput;
