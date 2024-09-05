"use client";

import React, { useCallback } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "./TextInput";
import { Session } from "next-auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSocketContext } from "@/app/contexts/SocketContext";
import RoomInput from "./RoomInput";

const RoomFormSchema = z.object({
  roomname: z.string().min(1, { message: "Message is required" }),
});

type RoomFormValues = z.infer<typeof RoomFormSchema>;

type RoomFormProps = {
  session: Session;
};

const RoomForm = ({ session }: RoomFormProps) => {
  // Hooks
  const methods = useForm({
    resolver: zodResolver(RoomFormSchema),
    defaultValues: {
      roomname: "",
    },
  });

  const { onJoinRoom } = useSocketContext();

  // Callbacks
  const submit: SubmitHandler<RoomFormValues> = useCallback(
    async (formData) => {
      onJoinRoom(formData.roomname, session.user?.name!);
    },
    [onJoinRoom, session.user?.name]
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <RoomInput name={"roomname"} session={session} />
      </form>
    </FormProvider>
  );
};

export default RoomForm;
