import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
    const {data} = useGetAllSemesterQuery(undefined)
    console.log(data)
    return (
        <div>
            <p>academic semester</p>
        </div>
    );
};

export default AcademicSemester;