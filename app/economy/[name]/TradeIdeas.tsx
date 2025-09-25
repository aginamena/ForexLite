"use client";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
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

type TradeIdeas = {
  title: string;
  thesis: string;
  trades: string[];
};

export default function TradeIdeas({
  trade_ideas,
}: {
  trade_ideas: TradeIdeas[];
}) {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {trade_ideas.map((ideas, index) => (
        <Grid size={6} key={index}>
          <Item>
            <Typography variant="h6" gutterBottom>
              {ideas.title}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Thesis: {ideas.thesis}
            </Typography>
            <List>
              <Typography>Trade(s):</Typography>
              {ideas.trades.map((trade, key) => (
                <ListItem key={key}>
                  <ListItemText primary={trade} />
                </ListItem>
              ))}
            </List>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}
