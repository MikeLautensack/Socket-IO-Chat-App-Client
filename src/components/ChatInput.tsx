import { Box, Button, TextField } from "@mui/material";
import { Session } from "next-auth";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

type ChatInputProps = {
  name: string;
  label?: string;
  size?: any;
  readonly?: boolean;
  disabled?: boolean;
  type?: string;
  activityHandler?: (username: string) => void;
  session: Session;
};

const ChatInput = ({
  name,
  label,
  size = "normal",
  readonly,
  disabled,
  type,
  activityHandler,
  session,
}: ChatInputProps) => {
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
            color: "primary.main", // Text color set to primary
            borderRadius: "4px 0px 0px 4px",
          },
          "& .MuiInputLabel-root": {
            color: "primary.main", // Label color set to primary
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
          borderRadius: "0rem 0px 0px 0rem",
          boxSizing: "border-box",
        }}
      >
        Send!
      </Button>
    </Box>
  );
};

export default ChatInput;
