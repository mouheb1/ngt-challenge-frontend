import { Box, ResponsiveContext } from "grommet";
import React from "react";
import { HeightType } from "grommet/utils";

type Props = {};

const height: {
  [key: string]: HeightType;
} = {
  small: "25px",
  middle: "40px",
};

export const CustomBox: React.FC<Props> = ({ children }) => {
  const size = React.useContext(ResponsiveContext) ?? "middle";
  return (
    <Box
      margin="10px"
      pad="5px"
      flex="grow"
      direction="row"
      justify="between"
      align="center"
      border="all"
      height={height[size]}
    >
      {children}
    </Box>
  );
};
