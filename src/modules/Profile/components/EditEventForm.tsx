"use client";
import { FC } from "react";

import { IEventFormProps } from "../core/types";
import { Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import classNames from "classnames";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";

type EditEventFormProps = Omit<
  IEventFormProps,
  "getValues" | "trigger" | "categories"
>;

export const EditEventForm: FC<EditEventFormProps> = ({
  control,
  handleSubmit,
  onSubmit,
  errors,
  getFormErrorMessage,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required." }}
          render={({ field, fieldState }) => (
            <>
              <label
                htmlFor={field.name}
                className={classNames({ "p-error": errors.value })}></label>
              <span className="p-float-label">
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                <label htmlFor={field.name}>title</label>
              </span>
              {getFormErrorMessage(field.name)}
            </>
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: "description is required." }}
          render={({ field, fieldState }) => (
            <>
              <label
                htmlFor={field.name}
                className={classNames({ "p-error": errors.value })}></label>
              <span className="p-float-label">
                <InputTextarea
                  id={field.name}
                  {...field}
                  rows={4}
                  cols={30}
                  autoResize
                  className={classNames({ "p-invalid": fieldState.error })}
                />
                <label htmlFor={field.name}>description</label>
              </span>
              {getFormErrorMessage(field.name)}
            </>
          )}
        />
        {/* <Controller
          name="category"
          control={control}
          rules={{
            validate: (value) => value.id !== 0 || "category is required",
          }}
          render={({ field, fieldState }) => (
            <>
              <label
                htmlFor={field.name}
                className={classNames({ "p-error": errors.value })}></label>
              <span className="p-float-label">
                <Dropdown
                  id={field.name}
                  value={field.value}
                  optionLabel="name"
                  defaultChecked={event.category.name}
                  defaultValue={event.category.id}
                  placeholder="Select a category"
                  options={categories}
                  emptyMessage={"Loading..."}
                  focusInputRef={field.ref}
                  onChange={(e) => field.onChange(e.value)}
                  showClear
                  className={classNames({ "p-invalid": fieldState.error })}
                />
                <label htmlFor={field.name}>category</label>
              </span>
              {getFormErrorMessage(field.name)}
            </>
          )}
        /> */}
        <button type="submit">confirm</button>
      </form>
    </>
  );
};
