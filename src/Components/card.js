import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function Cards({ title, description, year, school, inv, awards }) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
        gap: 2,
        bgcolor: "bg-transparent"
      }}
    >
      <Card variant="soft">
        <CardContent>
          <Typography level="h1">{school}</Typography>
          <Typography level="h3">{title}</Typography>
          <Typography level="h4">{year}</Typography>
          <Typography level="h4">{description}</Typography>
          <Typography level="h5"> {inv}</Typography>
          <Typography level="h5"> {awards}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
