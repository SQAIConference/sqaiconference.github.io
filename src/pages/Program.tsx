import {
  Container,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Event, Schedule } from '@mui/icons-material';

const Program = () => {
  const programItems = [
    {
      time: "09:00 - 09:30",
      title: "Registration & Welcome",
      speaker: "",
      day: "Day 1 - June 26"
    },
    {
      time: "09:30 - 10:30",
      title: "Keynote: Quantum Advantage in Machine Learning",
      speaker: "Dr. John Doe, IBM Quantum",
      day: "Day 1 - June 26"
    },
    {
      time: "10:30 - 10:45",
      title: "Coffee Break",
      speaker: "",
      day: "Day 1 - June 26"
    },
    {
      time: "10:45 - 12:00",
      title: "Session 1: Quantum Neural Networks",
      speaker: "Technical Papers",
      day: "Day 1 - June 26"
    },
    {
      time: "14:00 - 15:30",
      title: "Session 2: Quantum Optimization",
      speaker: "Technical Papers",
      day: "Day 2 - June 27"
    },
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
          Program - SQAI 2026
        </Typography>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="body1">
            The SQAI 2026 program features keynote presentations from world-leading experts, 
            technical paper sessions, panel discussions, and networking opportunities. 
            The program is designed to provide comprehensive coverage of the latest advances 
            in quantum artificial intelligence.
          </Typography>
        </Paper>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Conference Schedule
        </Typography>

        <Timeline position="alternate">
          {programItems.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {item.time}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  {item.title.includes('Keynote') ? <Event /> : <Schedule />}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  {item.title}
                </Typography>
                {item.speaker && (
                  <Typography color="text.secondary">
                    {item.speaker}
                  </Typography>
                )}
                <Typography variant="caption" display="block" color="primary">
                  {item.day}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Call for Participation
          </Typography>
          <Paper sx={{ p: 3 }}>
            <Typography variant="body1">
              Join us for three days of cutting-edge research presentations, 
              networking opportunities, and discussions about the future of quantum AI. 
              Registration is now open for all participants.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Program;