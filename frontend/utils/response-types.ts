
export type Department = {
  id: number;
  name: string;
  description: string;
};

export type DepartmentResponse = {
  departments: Department[];
};


export type Employee = {
  id: number;
  full_name: string;
  email: string;
  department: number | string;
};

export type EmployeeResponse = {
  employees: Employee[];
};

export type AttendanceRecord = {
  id: number;
  date: string;
  status: boolean;
};

export type AttendanceResponse = {
  attendanceRecords: AttendanceRecord[];
};