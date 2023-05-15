import Head from "next/head";
import { Typography, styled } from "@mui/material";
import { ContextMenuContainer } from "@/components/contextMenuContainer/contextMenuContainer";
import { TooltipContainer } from "@/components/tooltipContainer/tooltipContainer";
import { UploadContainer } from "@/components/uploadContainer/uploadContainer";
import { InputContainer } from "@/components/inputContainer/inputContainer";
import { EventComparisonContainer } from "@/components/eventComparisonContainer/eventComparisonContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Testing library のユーザーイベントサンプル集</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Typography variant="h1" textAlign="center">
          Testing library のユーザーイベントサンプル集
        </Typography>
        <EventComparisonContainer />
        <ContextMenuContainer />
        <TooltipContainer />
        <UploadContainer />
        <InputContainer />
      </Main>
    </>
  );
}

const Main = styled("main")(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
}));
