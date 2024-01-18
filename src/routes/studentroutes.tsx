import OfferedCourse from "../pages/students/OfferedCourse";
import StudentDashboard from "../pages/students/StudentDashboard";

export const studentPath = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <StudentDashboard />
    },
    {
        name: 'Offered Course',
        path: 'offered-course',
        element: <OfferedCourse />
    },
]