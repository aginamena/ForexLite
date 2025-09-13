"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Home() {
  const margin = { right: 24 };
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <Container sx={{ mt: 4, mb: 10 }}>
      {/* <h1>U.S. </h1> */}
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
        U.S. Key Economic Indicators
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Federal Funds Rate (Interest Rates)
      </Typography>
      <Typography variant="body1" gutterBottom>
        The Federal Reserve (the Fed) decided to keep interest rates the same,
        between 4.25% and 4.50%, for the fifth time in a row. However, two
        members wanted to lower the rate, which is unusual and hasn’t happened
        like this since 1993.{" "}
        <Button sx={{ textDecoration: "underline" }}>More...</Button>
        <br />
        {/* They said the U.S. economy seems to be slowing down a bit, even though
        earlier this year it looked like it was growing well. One reason for
        this slowdown is changes in exports (stuff the U.S. sells to other
        countries). Even with the slowdown, the unemployment rate is still low,
        and prices (inflation) are still rising more than they’d like.
        <br />
        The Fed isn’t sure what will happen next, so they’re being cautious.
        They’ll decide whether to raise or lower rates in the future based on
        how the economy performs. They also warned that ongoing trade problems
        with other countries could make it harder to reach their goal of keeping
        inflation around 2%. */}
      </Typography>
      <LineChart
        height={300}
        series={[{ data: pData, label: "pv" }]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        yAxis={[{ width: 50 }]}
        margin={margin}
      />
      <Stack spacing={2} direction="row">
        <Button variant="outlined">Federal Funds Rate (Interest Rates)</Button>
        <Button variant="outlined">Inflation (CPI, Core CPI, PCE)</Button>
        <Button variant="outlined">
          Consumer Price Index (CPI) -Inflation Data
        </Button>
        <Button variant="outlined">Non-Farm Payrolls (NFP)</Button>
        <Button variant="outlined">GDP Growth (Quarterly)</Button>
        <Button variant="outlined">Retail Sales</Button>
        <Button variant="outlined">Unemployment Rate</Button>
        <Button variant="outlined">ISM Manufacturing & Services PMI</Button>
        <Button variant="outlined">Core PCE Price Index</Button>
      </Stack>
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center", mt: 4 }}>
        Today's news to read about the Us economy
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6}>
            <Item>
              <Box>
                <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                  US Consumer Sentiment Falls to 4-Month Low
                </Typography>
                <Typography variant="body1" gutterBottom>
                  The University of Michigan’s consumer sentiment for the U.S.
                  dropped to 55.4 in September 2025, down from 58.2 in August
                  and lower than expected. This was the second month in a row of
                  decline, reaching its lowest point since May, especially among
                  lower- and middle-income households. <Button>More...</Button>
                  <br />
                  {/* While people felt a little better about buying big items, they were
          more worried about things like jobs, business conditions, and
          inflation. Personal finances also worsened, and around 60% of people
          said tariffs were still a big concern. Inflation expectations stayed
          at 4.8% for the next year, but 5-year inflation expectations went up
          from 3.5% to 3.9%. */}
                  <small>96 minutes ago</small>
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid size={6}>
            <Item>
              <Box>
                <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                  US Consumer Sentiment Falls to 4-Month Low
                </Typography>
                <Typography variant="body1" gutterBottom>
                  The University of Michigan’s consumer sentiment for the U.S.
                  dropped to 55.4 in September 2025, down from 58.2 in August
                  and lower than expected. This was the second month in a row of
                  decline, reaching its lowest point since May, especially among
                  lower- and middle-income households. <Button>More...</Button>
                  <br />
                  {/* While people felt a little better about buying big items, they were
          more worried about things like jobs, business conditions, and
          inflation. Personal finances also worsened, and around 60% of people
          said tariffs were still a big concern. Inflation expectations stayed
          at 4.8% for the next year, but 5-year inflation expectations went up
          from 3.5% to 3.9%. */}
                  <small>96 minutes ago</small>
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid size={6}>
            <Item>
              <Box>
                <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                  US Consumer Sentiment Falls to 4-Month Low
                </Typography>
                <Typography variant="body1" gutterBottom>
                  The University of Michigan’s consumer sentiment for the U.S.
                  dropped to 55.4 in September 2025, down from 58.2 in August
                  and lower than expected. This was the second month in a row of
                  decline, reaching its lowest point since May, especially among
                  lower- and middle-income households. <Button>More...</Button>
                  <br />
                  {/* While people felt a little better about buying big items, they were
          more worried about things like jobs, business conditions, and
          inflation. Personal finances also worsened, and around 60% of people
          said tariffs were still a big concern. Inflation expectations stayed
          at 4.8% for the next year, but 5-year inflation expectations went up
          from 3.5% to 3.9%. */}
                  <small>96 minutes ago</small>
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid size={6}>
            <Item>
              <Box>
                <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                  US Consumer Sentiment Falls to 4-Month Low
                </Typography>
                <Typography variant="body1" gutterBottom>
                  The University of Michigan’s consumer sentiment for the U.S.
                  dropped to 55.4 in September 2025, down from 58.2 in August
                  and lower than expected. This was the second month in a row of
                  decline, reaching its lowest point since May, especially among
                  lower- and middle-income households. <Button>More...</Button>
                  <br />
                  {/* While people felt a little better about buying big items, they were
          more worried about things like jobs, business conditions, and
          inflation. Personal finances also worsened, and around 60% of people
          said tariffs were still a big concern. Inflation expectations stayed
          at 4.8% for the next year, but 5-year inflation expectations went up
          from 3.5% to 3.9%. */}
                  <small>96 minutes ago</small>
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid size={6}>
            <Item>
              <Box>
                <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                  US Consumer Sentiment Falls to 4-Month Low
                </Typography>
                <Typography variant="body1" gutterBottom>
                  The University of Michigan’s consumer sentiment for the U.S.
                  dropped to 55.4 in September 2025, down from 58.2 in August
                  and lower than expected. This was the second month in a row of
                  decline, reaching its lowest point since May, especially among
                  lower- and middle-income households. <Button>More...</Button>
                  <br />
                  {/* While people felt a little better about buying big items, they were
          more worried about things like jobs, business conditions, and
          inflation. Personal finances also worsened, and around 60% of people
          said tariffs were still a big concern. Inflation expectations stayed
          at 4.8% for the next year, but 5-year inflation expectations went up
          from 3.5% to 3.9%. */}
                  <small>96 minutes ago</small>
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid size={6}>
            <Item>
              <Box>
                <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                  US Consumer Sentiment Falls to 4-Month Low
                </Typography>
                <Typography variant="body1" gutterBottom>
                  The University of Michigan’s consumer sentiment for the U.S.
                  dropped to 55.4 in September 2025, down from 58.2 in August
                  and lower than expected. This was the second month in a row of
                  decline, reaching its lowest point since May, especially among
                  lower- and middle-income households. <Button>More...</Button>
                  <br />
                  {/* While people felt a little better about buying big items, they were
          more worried about things like jobs, business conditions, and
          inflation. Personal finances also worsened, and around 60% of people
          said tariffs were still a big concern. Inflation expectations stayed
          at 4.8% for the next year, but 5-year inflation expectations went up
          from 3.5% to 3.9%. */}
                  <small>96 minutes ago</small>
                </Typography>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Button variant="outlined">read More news...</Button>
      </Box>
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center", mt: 4 }}>
        Our forcast of the Us economy direction
      </Typography>
      <Typography>
        The Federal Reserve (the Fed) decided to keep interest rates the same,
        between 4.25% and 4.50%, for the fifth time in a row. However, two
        members wanted to lower the rate, which is unusual and hasn’t happened
        like this since 1993.
        <br />
        <br />
        They said the U.S. economy seems to be slowing down a bit, even though
        earlier this year it looked like it was growing well. One reason for
        this slowdown is changes in exports (stuff the U.S. sells to other
        countries). Even with the slowdown, the unemployment rate is still low,
        and prices (inflation) are still rising more than they’d like.
        <br />
        <br />
        The Fed isn’t sure what will happen next, so they’re being cautious.
        They’ll decide whether to raise or lower rates in the future based on
        how the economy performs. They also warned that ongoing trade problems
        with other countries could make it harder to reach their goal of keeping
        inflation around 2%.
      </Typography>
    </Container>
  );
}
