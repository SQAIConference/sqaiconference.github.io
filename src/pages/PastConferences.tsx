import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Chip,
  Link,
  Paper,
} from '@mui/material';
import { Event, LocationOn } from '@mui/icons-material';

const PastConferences = () => {
  const pastConferences = [
    {
      year: "2024",
      title: "SQAI 2024 - 2nd International Symposium",
      location: "Tokyo, Japan & Online",
      date: "July 15-17, 2024",
      attendees: "450+",
      papers: "89",
      description: "Focused on quantum machine learning breakthroughs and practical applications.",
      highlights: [
        "First hybrid quantum-classical ML models",
        "Industry partnerships announced",
        "Policy framework discussions"
      ]
    },
    {
      year: "2022",
      title: "SQAI 2022 - 1st International Symposium",
      location: "Boston, USA",
      date: "September 12-14, 2022",
      attendees: "320+",
      papers: "67",
      description: "Inaugural symposium establishing the foundation of quantum AI research.",
      highlights: [
        "Quantum advantage demonstrations",
        "Academic-industry collaboration",
        "Research roadmap development"
      ]
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontSize: { xs: '2rem', md: '2.5rem' },
            textAlign: 'center',
            mb: 4,
          }}
        >
          Past Conferences
        </Typography>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="body1">
            The Symposium on Quantum Artificial Intelligence has been bringing together researchers, 
            practitioners, and visionaries since 2022. Each conference has contributed to advancing 
            the field and building a global community focused on quantum AI.
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          {pastConferences.map((conference, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                    <Typography variant="h4" component="h2" color="primary">
                      {conference.title}
                    </Typography>
                    <Chip 
                      label={conference.year} 
                      color="primary" 
                      variant="outlined"
                    />
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {conference.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Event sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {conference.date}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="body1" paragraph>
                    {conference.description}
                  </Typography>

                  <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={6} sm={4}>
                      <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                        <Typography variant="h6">{conference.attendees}</Typography>
                        <Typography variant="body2">Attendees</Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'secondary.light' }}>
                        <Typography variant="h6">{conference.papers}</Typography>
                        <Typography variant="body2">Papers</Typography>
                      </Paper>
                    </Grid>
                  </Grid>

                  <Typography variant="h6" gutterBottom>
                    Key Highlights:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {conference.highlights.map((highlight, highlightIndex) => (
                      <Chip 
                        key={highlightIndex}
                        label={highlight}
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Join Our Legacy
          </Typography>
          <Typography variant="body1" paragraph>
            Be part of SQAI 2026 and contribute to the next chapter in quantum artificial intelligence research.
          </Typography>
          <Link href="/registration/" variant="h6" color="primary">
            Register for SQAI 2026 →
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default PastConferences;