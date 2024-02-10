import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { SemesterOptions } from "../../../Constants/semester";
import { MonthsOptions } from "../../../Constants/Global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../Schemas/AcademicManagement.Schema";




const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4]?.map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));




const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = SemesterOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth
    };
    console.log(semesterData);
  };

 
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
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
