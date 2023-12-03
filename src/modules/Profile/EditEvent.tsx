"use client";

import { FC } from "react";
import { FieldError, useForm } from "react-hook-form";
import { IEvent } from "@/core/types";

import { useGetCategoriesQuery } from "@/core/redux/api/categoriesApi";
import { IEventProps } from "./core/types";
import { EditEventForm } from "./components/EditEventForm";
import { useRouter } from "next/navigation";
import { useEditEventMutation } from "@/core/redux/api/eventsApi";
import { routes } from "@/core/configs/variables";

export const EditEvent: FC<IEventProps> = ({ event }) => {
  const [editEvent, { isLoading, isError }] = useEditEventMutation();
  const { data: categories } = useGetCategoriesQuery();

  type NewEvent = Omit<IEvent, "id">;
  const defaultValues: NewEvent = {
    title: event.title,
    description: event.description,
    posterUrl: "",
    category: {
      id: 0,
      name: "",
      icon: "",
    },
    photos: [],
    artists: "",
    place: "",
    price: 0,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IEvent>({ defaultValues });

  const getFormErrorMessage = (name: string): JSX.Element | null => {
    const error = (errors as Record<string, FieldError>)[name];
    return error ? (
      <small className="p-error">{error.message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const router = useRouter();

  const onSubmit = async (eventData: IEvent) => {
    try {
      await editEvent(eventData);
      router.replace(`${routes.MY_EVENTS}/${event.id}`);
    } catch (error) {
      throw new Error("Failed to add event");
    }
  };

  return (
    <>
      <EditEventForm
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        getFormErrorMessage={getFormErrorMessage}
      />
    </>
  );
};
