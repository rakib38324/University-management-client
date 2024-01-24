import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utiles/sidebarItemsGenerators";
import { adminPath } from "../../routes/adminrouters";
import { facultyPath } from "../../routes/facultyroutes";
import { studentPath } from "../../routes/studentroutes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const  user = useAppSelector(selectCurrentUser)
 
  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerator(adminPath, userRole.ADMIN);
      break;

    case userRole.FACULTY:
      sidebarItems = sidebarItemGenerator(facultyPath, userRole.FACULTY);
      break;

    case userRole.STUDENT:
      sidebarItems = sidebarItemGenerator(studentPath, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>PH-University</p>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
