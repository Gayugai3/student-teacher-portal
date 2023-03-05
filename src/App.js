import logo from "./logo.svg";
import "./sb-admin-2.min.css";
import "./App.css";
import Sidebar from "./pages/Sidebar";
import Topbar from "./pages/Topbar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Portal from "./pages/Portal";
import Studentlist from "./student/Studentlist";
import Teacherlist from "./teacher/Teacherlist";
import Createstudent from "./student/Createstudent";
import Createteacher from "./teacher/Createteacher";
import Studentview from "./student/Studentview";
import Teacherview from "./teacher/Teacherview";
import StudentEdit from "./student/StudentEdit";
import TeacherEdit from "./teacher/TeacherEdit";
import { AdminProvider } from "./context/AdminContext";


function App() {
  return (
    <BrowserRouter>
      <AdminProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="list-student" element={<Studentlist />} />
            <Route path="list-teacher" element={<Teacherlist />} />
            <Route path="create-student" element={<Createstudent />} />
            <Route path="create-teacher" element={<Createteacher />} />
            <Route path="view-student/:id" element={<Studentview />} />
            <Route path="view-teacher/:id" element={<Teacherview />} />
            <Route path="edit-student/:id" element={<StudentEdit />} />
            <Route path="edit-teacher/:id" element={<TeacherEdit />} />
          </Route>
        </Routes>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
