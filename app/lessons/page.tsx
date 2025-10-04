import { Container, Grid } from "@mui/material";

// import InsightCard from "@/components/InsightCard";

export default function Lessons() {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(15)).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            {/* <InsightCard /> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
