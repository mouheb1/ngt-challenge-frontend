import { Box } from "grommet";
import React, { memo } from "react";
import { UserCard } from "./userCard";
import Link from "next/link";
import { Student } from "../services/students";

type Props = {
  student: Student;
};

const Card: React.FC<Props> = ({ student }) => (
  <Link href={`users/${student.id}`}>
    <Box margin="10px">
      <UserCard user={student} />
    </Box>
  </Link>
);

export const StudentCard = memo(Card);
