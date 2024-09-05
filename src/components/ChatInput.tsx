"use client";

import { Button } from "@mui/material";
import React, { useCallback } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "./TextInput";
import { useSocketContext } from "@/app/contexts/SocketContext";
import { Session } from "next-auth";

const MessageFormSchema = z.object({
  message: z.string().min(1, { message: "Message is required" }),
});

type MessageFormValues = z.infer<typeof MessageFormSchema>;

type ChatInputProps = {
  session: Session;
};

const ChatInput = ({ session }: ChatInputProps) => {
  // Hooks
  const methods = useForm<MessageFormValues>({
    resolver: zodResolver(MessageFormSchema),
    defaultValues: {
      message: "",
    },
  });

  const { sendMessage, onActivity } = useSocketContext();

  // Callbacks
  const submit: SubmitHandler<MessageFormValues> = useCallback(
    async (formData) => {
      sendMessage(formData.message, session.user?.image!);
      methods.reset();
    },
    [methods, sendMessage, session.user?.image]
  );

  return (
    <FormProvider {...methods}>
      <form className="flex" onSubmit={methods.handleSubmit(submit)}>
        <TextInput
          name="message"
          activityHandler={onActivity}
          session={session}
        />
      </form>
    </FormProvider>
  );
};

export default ChatInput;
