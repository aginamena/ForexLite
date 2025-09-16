import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function CardCmp({
  detail,
}: {
  detail: { url?: string; text: string; title: string };
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {detail.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {detail.text}
        </Typography>
      </CardContent>
      {detail.url && (
        <CardActions>
          <Link href={detail.url}>
            <Button size="small">Read More</Button>
          </Link>
        </CardActions>
      )}
    </Card>
  );
}
