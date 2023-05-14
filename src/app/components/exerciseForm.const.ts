import * as yup from "yup";

import { ExerciseTypes } from "../../types/exercise.types";
import { ActivityStatus } from "../../types/activityStatus.enum";

export const createFormSchema = yup
  .object({
    type: yup.mixed().oneOf(Object.values(ExerciseTypes)).required(),

    value: yup.number().integer().min(1).required(),

    sets: yup.number().integer().min(1).max(99).required(),

    status: yup.mixed().oneOf(Object.values(ActivityStatus)).required(),
  })
  .required();

export const updateFormSchema = yup
  .object({
    value: yup.number().integer().min(1).required(),

    sets: yup.number().integer().min(1).max(99).required(),

    status: yup.mixed().oneOf(Object.values(ActivityStatus)).required(),
  })
  .required();
