"use client";

import { FC } from "react";
import { AddEventForm } from "./components/AddEventForm";
import { FieldError, useForm } from "react-hook-form";
import { IEvent } from "@/core/types";
import { useRouter } from "next/navigation";
import { routes } from "@/core/configs/variables";
import { useAddEventMutation } from "@/core/redux/api/eventsApi";
import { useGetCategoriesQuery } from "@/core/redux/api/categoriesApi";

export const AddEvent: FC = () => {
  const [addEvent, { isLoading, isError }] = useAddEventMutation();
  const { data: categories } = useGetCategoriesQuery();

  type NewEvent = Omit<IEvent, "id">;

  const defaultValues: NewEvent = {
    title: "",
    description: "",
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
    trigger,
    getValues,
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
      const { data } = await addEvent(eventData);
      const eventId = data.data.event.id;
      router.replace(`${routes.MY_EVENTS}/${eventId}/edit`);
    } catch (error) {
      throw new Error("Failed to add event");
    }
  };

  return (
    <>
      <AddEventForm
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        getFormErrorMessage={getFormErrorMessage}
        trigger={trigger}
        categories={categories}
        getValues={getValues}
      />
    </>
  );
};
