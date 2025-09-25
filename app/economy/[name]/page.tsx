import { Box, Container, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

import dbAdmin from "@/config/firebaseAdmin";

import Indicators from "./Indicators";
import News from "./News";
import TradeIdeas from "./TradeIdeas";

export default async function Economy({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const economy = (
    await dbAdmin.collection("economies").doc(name).get()
  ).data();

  if (!economy) {
    return null;
  }

  return (
    <Container>
      <Typography>
        Think of the economy like a car driving on a long road. These two
        indexes below will help you know: Where the car is going next (LEI –
        Leading Economic Index) and Where the car is right now (CEI – Coincident
        Economic Index)
      </Typography>

      <Box sx={{ width: "100%", height: 300 }}>
        <LineChart
          series={[
            { data: economy.lei_values!, label: "Leading Economic Index" },
            {
              data: economy.cei_values,
              label: "Coincident Economic Index",
            },
          ]}
          xAxis={[{ scaleType: "point", data: economy.x_labels }]}
          yAxis={[{ width: 50 }]}
          margin={{ right: 24 }}
        />
      </Box>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ textAlign: "center" }}
        gutterBottom
      >
        Here&apos;s the breakdown
      </Typography>
      <Indicators lei={economy.lei} cei={economy.cei} />

      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ textAlign: "center" }}
        gutterBottom
      >
        Trade ideas you can execute on
      </Typography>
      <TradeIdeas trade_ideas={economy.trade_ideas} />
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ textAlign: "center" }}
        gutterBottom
      >
        Stay upto date with latest news
      </Typography>
      <News news={economy.news} />
    </Container>
  );
}
