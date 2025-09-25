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

export default function Indicators({
  lei,
  cei,
}: {
  lei: string[];
  cei: string[];
}) {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid size={6}>
        <Item>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            LEI – Leading Economic Index (Future Direction)
          </Typography>
          <Typography variant="subtitle2">
            This is like a GPS predicting what’s up ahead — hills, turns, or
            traffic.
          </Typography>
          <List>
            {lei.map((news, index) => (
              <ListItem key={index}>
                <ListItemText primary={news} />
              </ListItem>
            ))}
          </List>
        </Item>
      </Grid>
      <Grid size={6}>
        <Item>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            CEI – Coincident Economic Index (Current Snapshot)
          </Typography>
          <Typography variant="subtitle2">
            This shows how the economy is doing right now — like checking the
            speedometer to see how fast the car is going
          </Typography>
          <List>
            {cei.map((news, index) => (
              <ListItem key={index}>
                <ListItemText primary={news} />
              </ListItem>
            ))}
          </List>
        </Item>
      </Grid>
    </Grid>
  );
}
