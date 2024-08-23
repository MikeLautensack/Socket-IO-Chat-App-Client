"use client";

import { Button } from "@mui/material";
import React, { useCallback } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "./TextInput";
import { useSocketContext } from "@/app/contexts/SocketContext";

const MessageFormSchema = z.object({
  message: z.string().min(1, { message: "Message is required" }),
});

type MessageFormValues = z.infer<typeof MessageFormSchema>;

const ChatInput = () => {
  // Hooks
  const methods = useForm<MessageFormValues>({
    resolver: zodResolver(MessageFormSchema),
    defaultValues: {
      message: "",
    },
  });

  const { sendMessage } = useSocketContext();

  // Callbacks
  const submit: SubmitHandler<MessageFormValues> = useCallback(
    async (formData) => {
      sendMessage(formData.message);
    },
    [sendMessage]
  );
  return (
    <FormProvider {...methods}>
      <form className="flex" onSubmit={methods.handleSubmit(submit)}>
        <TextInput name="message" label="Message" />
        <Button type="submit">Send!</Button>
      </form>
    </FormProvider>
  );
};

export default ChatInput;
