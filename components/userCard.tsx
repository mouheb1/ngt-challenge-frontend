import { Avatar, Card, CardBody, CardFooter, Text } from "grommet";
import React from "react";
import { Student } from "../services/students";

type Props = {
  user: Student;
};

export const UserCard: React.FC<Props> = ({ user }) => (
  <Card height="small" width="small" background='background-student'>
    <CardBody align="center" pad="medium"  >
      <Avatar border="all" src={user.avatar} />
    </CardBody>
    <CardFooter align="start" justify="center" pad="medium">
      <Text textAlign="center">{`${user["first_name"]} ${user["last_name"]}`}</Text>
    </CardFooter>
  </Card>
);
