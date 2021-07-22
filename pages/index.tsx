import { Box, TextInput } from "grommet";
import React from "react";
import { fetchStudents, Student } from "../services/students";
import { StudentCard } from "../components/studentCard";
import { NextPage, NextPageContext } from "next";
type Props = {
  studentList?: Student[];
};

const Main: NextPage<Props> = ({ studentList = [] }) => {
  const onChangeHandler = () => {};

  return (
    <Box direction="column" pad="medium" height="100%" overflow="auto">
      <TextInput placeholder="type here" onChange={onChangeHandler} />
      <Box direction="row" wrap={true} className="d-flex flex-center">
        {studentList.map((student: Student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </Box>
    </Box>
  );
};

Main.getInitialProps = async (ctx: NextPageContext) => {
  const response = await fetchStudents();
  return { studentList: response };
};

export default Main;
