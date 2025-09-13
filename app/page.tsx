// HomePage.js

import { Box, Typography, Button, Container, Grid, Paper } from "@mui/material";
import Link from "next/link";

const features = [
  {
    title: "Stay Connected to the Story Behind the Charts",
    description:
      "We keep you updated on what’s happening in the countries behind the currencies you trade, so you’re always one step ahead.",
  },
  {
    title: "See What’s Coming — and Get Ready for It",
    description:
      "With our clear, forward-looking forecasts, you’ll know where the market is likely headed. No more guesswork — just smart planning.",
  },
  {
    title: "Create a Trade Plan That Actually Makes Sense",
    description:
      "Use our fundamental, sentimental, and intermarket analysis to build a plan that works with your technicals, not against them.",
  },
  {
    title: "You’re Not Alone — Join a Community That Gets It",
    description:
      "Trade alongside people who understand what you’re going through. Share ideas, learn faster, and grow with support.",
  },
];

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#0d47a1",
          color: "#fff",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Trade with Confidence — And Feel Good Doing It
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Stop second-guessing. Start trading with clarity, confidence, and a
            community that has your back.
          </Typography>
          <Link href="https://forms.gle/hSAPhPcnfq2V3Vj99">
            <Button
              variant="contained"
              size="large"
              sx={{ bgcolor: "#ffca28", color: "#000" }}
            >
              Join Waiting List Now
            </Button>
          </Link>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          Here&#39;s How You Will Trade with Confidence
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Final CTA Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            You’ve Got This — and We’ve Got Your Back
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Join our waiting list so that when our website is ready, you will be
            notified and invited to try it out.
          </Typography>
          <Link href="https://forms.gle/hSAPhPcnfq2V3Vj99">
            <Button
              variant="contained"
              size="large"
              sx={{ bgcolor: "#0d47a1" }}
            >
              Join Waiting List Now
            </Button>
          </Link>
        </Container>
      </Box>
    </Box>
  );
}
