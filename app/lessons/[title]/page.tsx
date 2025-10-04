import dbAdmin from "@/config/firebaseAdmin";
import { Container, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

export default async function Lesson({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;

  const docData = (await dbAdmin.collection("lessons").doc(title).get()).data();

  if (!docData) return;
  return (
    <Container>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        {docData.title}
      </Typography>
      <ReactMarkdown>{docData.text}</ReactMarkdown>
    </Container>
  );
}
