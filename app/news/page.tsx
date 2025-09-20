import dbAdmin from "@/config/firebaseAdmin";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export default async function News() {
  const newsCollection = await dbAdmin
    .collection("news")
    .orderBy("date", "desc")
    .get();
  const economies = newsCollection.docs.map((doc) => doc.data());

  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {economies.map((economy, index) => (
          <Grid size={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" sx={{ textAlign: "right" }}>
                  {economy.date}
                </Typography>
                {Object.keys(economy).map((name, index) => (
                  <Box key={index}>
                    {name != "date" && (
                      <>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {name}
                        </Typography>

                        {economy[name].map((news: string, key: string) => (
                          <Typography key={key} gutterBottom variant="body1">
                            {news}
                          </Typography>
                        ))}
                      </>
                    )}
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
