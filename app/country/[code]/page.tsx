import dbAdmin from "@/config/firebaseAdmin";
import { Container, Typography, Box, Grid } from "@mui/material";
import CardCmp from "./Card";

export default async function Country({
  params,
}: {
  params: { code: string };
}) {
  const country = (
    await dbAdmin.collection("countries").doc(params.code).get()
  ).data();

  return (
    <Container>
      {country &&
        Object.keys(country).map((insight) => (
          <Box key={insight}>
            <Typography variant="h3" gutterBottom>
              {insight.charAt(0).toUpperCase() + insight.slice(1)}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {country[insight].summary}
            </Typography>
            <Box sx={{ flexGrow: 1, marginBottom: "30px" }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {country[insight].values.map(
                  (
                    detail: { url?: string; text: string; title: string },
                    index: number
                  ) => (
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                      <CardCmp detail={detail} />
                    </Grid>
                  )
                )}
              </Grid>
            </Box>
          </Box>
        ))}
    </Container>
  );
}
