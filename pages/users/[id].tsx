import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  Header,
  ResponsiveContext,
  GridSizeType,
  ResponsiveValue,
} from "grommet";
import { HeightType } from "grommet/utils";
import { GridAreas } from "../../types/grommet";
import React from "react";
import { NextPage, NextPageContext } from "next";
import { fetchStudent, Student } from "../../services/students";
import Link from "next/link";
import {
  Achievement,
  Certificate,
  CodeSandbox,
  Deploy,
  LinkPrevious,
} from "grommet-icons";
import { CustomBox } from "../../components/CustomBox";
type Props = {
  student: Student;
};

const User: NextPage<Props> = ({ student }) => {
  const size = React.useContext<ResponsiveValue>(ResponsiveContext);
  const height: {
    [key: string]: HeightType;
  } = {
    small: "small",
    middle: "medium",
  };

  const columns: {
    [key: string]: GridSizeType[];
  } = {
    small: ["auto"],
    middle: ["small", "auto", "small"],
  };
  const rows: {
    [key: string]: GridSizeType[];
  } = {
    small: ["small", "auto", "small"],
    middle: ["auto"],
  };
  const areas: {
    [key: string]: GridAreas[];
  } = {
    small: [
      { name: "picture", start: [0, 0], end: [1, 1] },
      { name: "informations", start: [0, 0], end: [0, 1] },
      { name: "score", start: [0, 1], end: [1, 1] },
    ],
    middle: [
      { name: "picture", start: [0, 0], end: [1, 0] },
      { name: "informations", start: [0, 1], end: [1, 0] },
      { name: "score", start: [0, 2], end: [1, 0] },
    ],
  };
  return (
    <React.Fragment>
      <Grid
        rows={["xsmall", "large"]}
        columns={["xsmall", "auto"]}
        areas={[
          { name: "header", start: [0, 0], end: [1, 1] },
          { name: "nav", start: [0, 0], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Header pad="medium">
          <Box>
            <div className="w-300px d-flex align-items">
              <Link href={`/`}>
                <LinkPrevious
                  size="18px"
                  color={"#b3abab"}
                  className="cursor-pointer mr-2 border-solid-gray"
                />
              </Link>
              Users {">"} {student.first_name} {student.last_name}
            </div>
            <span>User profile</span>
          </Box>
          <Button
            onClick={() => window.open("mailto:mouheb.bzri@gmail.com")}
            label="Connect To E-mail"
          />
        </Header>
        <Box
          width="63px"
          gridArea="nav"
          background="background-card"
          className="center-children pd-t-1 pd-b-1"
        >
          <Box
            className="border-radius d-flex flex-center"
            background="background-icon"
          >
            <Achievement className="orange" />
          </Box>
          <Box
            className="border-radius d-flex flex-center"
            background="background-icon"
          >
            <Certificate className="orange" />
          </Box>
          <Box
            className="border-radius d-flex flex-center"
            background="background-icon"
          >
            <CodeSandbox className="orange" />
          </Box>
          <Box
            className="border-radius d-flex flex-center"
            background="background-icon"
          >
            <Deploy className="orange" />
          </Box>
        </Box>
        <Grid
          gridArea="main"
          pad="small"
          gap="20px"
          rows={rows[size]}
          columns={columns[size]}
          areas={areas[size]}
        >
          <Box height={height[size]}>
            <span>Picture</span>
            <Card height={height[size]} margin={{ top: "10px" }}>
              <CardBody className="flex-center" background="background-card">
                <Avatar
                  border={{ color: "#E0B11C" }}
                  src={student.avatar}
                  size="120px"
                />
              </CardBody>
            </Card>
          </Box>
          <div>
            <div>
              <span>Personnal informations</span>
              <CustomBox>
                {student.first_name} {student.last_name}
                <span>Name</span>
              </CustomBox>
              <CustomBox>
                18 June, 1995
                <span>Birth date</span>
              </CustomBox>
            </div>
            <div>
              <span>Contact informations</span>
              <CustomBox>
                {student.email}
                <span>E-mail</span>
              </CustomBox>
              <CustomBox>
                <div className="d-flex flex-center">
                  <img src="/tunisia.png" width="25px" height="25px" /> 18 June,
                  1995
                </div>
                <span>Birth date</span>
              </CustomBox>
            </div>
            <div>
              <span>Professional informations</span>
              <CustomBox>
                {student.company}
                <span>Company</span>
              </CustomBox>
              <CustomBox>
                {student.job}
                <span>Job</span>
              </CustomBox>
            </div>
          </div>
          <div>
            <span>Progress</span>
            <Box
              margin={{ top: "10px" }}
              background="background-card"
              height="100px"
              className="d-flex flex-direction-columns br-10"
            >
              <div className="flex-2 pd-t-1 pd-l-1">
                80 points<span> | Success</span>
              </div>
              <div id="progressbar">
                <div></div>
              </div>
            </Box>
            <div>
              <span>Education</span>
              <div>
                <span>degree: Software engineer</span>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Box
        background="background-card"
        border="top"
        pad="15px"
        className="h-100 "
        flex
        direction="row"
      >
        <span className="mr-1">&copy; Made with love By</span>
        <a
          className="contents cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/mouheb-bouazra-7a3665187/")
          }
        >
          Mouheb Bouazra
        </a>
      </Box>
    </React.Fragment>
  );
};

User.getInitialProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  const response = await fetchStudent(id as string);
  return { student: response };
};
export default User;
