"use client";

import React, { useCallback } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSocketContext } from "@/app/contexts/SocketContext";
import { Button } from "@mui/material";
import TextInput from "./TextInput";

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
  const router = useRouter();

  const { onJoinRoom } = useSocketContext();

  // Callbacks
  const submit: SubmitHandler<RoomFormValues> = useCallback(
    async (formData) => {
      onJoinRoom(formData.roomname, session.user?.name!, session.user?.image!);
      router.push(`/chat-dashboard/chat?room=${formData.roomname}`);
    },
    [onJoinRoom, router, session.user?.image, session.user?.name]
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className="flex w-full">
        <TextInput name="roomname" label="Room Name" session={session!} />
        <Button
          type="submit"
          variant="contained"
          sx={{
            whiteSpace: "nowrap",
            borderRadius: "0px 4px 4px 0px", // Removes right border radius
          }}
        >
          Create Room
        </Button>
      </form>
    </FormProvider>
  );
};

export default RoomForm;
