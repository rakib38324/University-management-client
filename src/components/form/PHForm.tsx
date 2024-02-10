
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, useForm } from "react-hook-form";

type TFromProps ={
    onSubmit: SubmitErrorHandler<FieldValues>;
    children: ReactNode;
} & TFromConfig;

type TFromConfig = {
    defaultValues?: Record<string, any>
}
const PHForm = ({ onSubmit, children , defaultValues}: TFromProps ) => {
    const fromConfig : TFromConfig = {};
    if(defaultValues){
        fromConfig['defaultValues'] = defaultValues
    }
  const methods = useForm(fromConfig);
  return (
    <FormProvider { ...methods } >
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
