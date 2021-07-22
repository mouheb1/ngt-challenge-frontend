import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, Button, Grommet, Header, ResponsiveContext } from "grommet";
import { Moon, Sun } from "grommet-icons";
import NGTTheme from "../styles/theme";
import { useState } from "react";
import Link from "next/link";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mood, setMood] = useState<"light" | "dark" | undefined>("light");

  return (
    <Grommet theme={NGTTheme} themeMode={mood}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box height="100vh" width="100vw">
            <Header background="background-card" border="bottom">
              <div className="home-nav">
                <img
                  style={{ maxWidth: "150px", padding: "10px" }}
                  src="https://www.ngt.academy/wp-content/uploads/2021/06/ngtacademy-white.png"
                />
                <Link href={`/`}>
                  <span className="cursor-pointer">
                    <img src="/home.svg" className="filter-invert" />
                  </span>
                </Link>
              </div>

              <Button
                icon={mood === "light" ? <Moon /> : <Sun />}
                onClick={() => setMood(mood === "light" ? "dark" : "light")}
              />
            </Header>
            <Component {...pageProps} />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default MyApp;
