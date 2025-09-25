"use client";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

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

type News = {
  market: string;
  text: string;
  date: string;
};

export default function News({ news }: { news: News[] }) {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {news.map((report, index) => (
        <Grid size={4} key={index}>
          <Item>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              {report.market}
            </Typography>
            <Typography gutterBottom>{report.text}</Typography>
            <Typography variant="subtitle2">{report.date}</Typography>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}
