"use client";

import React, { useCallback } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "./TextInput";
import { useSocketContext } from "@/app/contexts/SocketContext";
import { Session } from "next-auth";
import ChatInput from "./ChatInput";

const MessageFormSchema = z.object({
  message: z.string().min(1, { message: "Message is required" }),
});

type MessageFormValues = z.infer<typeof MessageFormSchema>;

type ChatFormProps = {
  session: Session;
  roomname: string;
};

const ChatForm = ({ session, roomname }: ChatFormProps) => {
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
      sendMessage(
        formData.message,
        session.user?.name!,
        session.user?.image!,
        roomname,
        new Date()
      );
      methods.reset();
    },
    [methods, roomname, sendMessage, session.user?.image, session.user?.name]
  );

  return (
    <FormProvider {...methods}>
      <form className="flex" onSubmit={methods.handleSubmit(submit)}>
        <div className="absoulte left-0 w-full">
          <ChatInput
            name="message"
            activityHandler={() => onActivity(session.user?.name!, roomname)}
            session={session}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default ChatForm;
