import { ICategory, IEvent } from "@/core/types";
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormTrigger,
} from "react-hook-form";

export interface IEventFormProps {
  control: Control<IEvent>;
  trigger: UseFormTrigger<any>;
  handleSubmit: UseFormHandleSubmit<IEvent>;
  onSubmit: (data: IEvent) => Promise<void>;
  errors: FieldErrors<any>;
  getFormErrorMessage: (name: string) => JSX.Element | null;
  categories?: ICategory[];
  getValues: UseFormGetValues<IEvent>;
}

export interface IStepProps {
  control: Control<IEvent>;
  errors: FieldErrors<any>;
  getFormErrorMessage: (name: string) => JSX.Element | null;
  handleNextStep: (fieldName: string) => Promise<void>;
  prevStep: () => void;
  categories?: ICategory[];
}

export interface ILastStepProps {
  prevStep: () => void;
  getValues: UseFormGetValues<IEvent>;
}

export interface IEventsProps {
  events: IEvent[];
}
export interface IEventProps {
  event: IEvent;
}
