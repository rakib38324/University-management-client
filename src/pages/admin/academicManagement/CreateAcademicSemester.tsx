import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { SemesterOptions } from "../../../Constants/semester";
import { MonthsOptions } from "../../../Constants/Global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../Schemas/AcademicManagement.Schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/Admin/AcademicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global.type";
import { TAcademicSemester } from "../../../types/academicManagement.type";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4]?.map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Academic Semester...");
    const name = SemesterOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);

    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse<TAcademicSemester>;
      console.log(res);

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId, duration: 2000 });
      } else {
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
      console.log(error);
      toast.error("Opps! Something went wrong.", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect label="Name" name="name" options={SemesterOptions} />

          <PHSelect label="Year" name="year" options={yearOptions} />

          <PHSelect
            label="Start Month"
            name="startMonth"
            options={MonthsOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={MonthsOptions} />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
