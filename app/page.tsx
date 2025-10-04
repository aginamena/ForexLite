import { Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

import InsightCard from "@/components/InsightCard";
import dbAdmin from "@/config/firebaseAdmin";

export default async function Home() {
  const lessonsDoc = await dbAdmin
    .collection("lessons")
    .orderBy("id", "desc")
    .get();
  const lessons = lessonsDoc.docs.map((doc) => doc.data());

  return (
    <Container>
      <Typography variant="h6" align="center" gutterBottom sx={{ mt: 4 }}>
        {/* We are compiling valuable trading lessons on forex that typically come
        from years of experience, expert guidance, and hard work. We're
        revealing these lessons so you don't have to spend years figuring it out
        on your own. Instead, you can spend just a few minutes reading and
        absorbing wisdom from professionals who have dedicated years to
        mastering these principles and applying them to their own trading */}
        We’re compiling valuable forex trading lessons from industry
        professionals—lessons that could take years to learn, if you ever figure
        them out on your own. Spend just a few minutes reading the lessons below
        and watch your trading improve.
      </Typography>

      <Typography
        variant="h5"
        gutterBottom
        fontWeight="bold"
        sx={{ textAlign: "center" }}
      >
        Latest Lessons
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {lessons.map(({ title, description, url }, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Link href={`lessons/${title.toLowerCase().replaceAll(" ", "-")}`}>
              <InsightCard title={title} description={description} url={url} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
