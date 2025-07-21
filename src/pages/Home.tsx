import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
} from '@mui/material';
import { CalendarMonth, LocationOn, Schedule } from '@mui/icons-material';

const StyledTableContainer = styled(TableContainer)(() => ({
  margin: '2rem 0',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
}));

const StyledTableHead = styled(TableHead)(() => ({
  background: 'linear-gradient(135deg, #98d4dc, #0366d6)',
  '& th': {
    color: 'white',
    fontWeight: 600,
    padding: '12px 15px',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#f8fbfe',
  },
  '&:hover': {
    backgroundColor: '#f0f7ff',
  },
}));

const EventTag = styled('span')<{ variant: 'A' | 'B' | 'C' | 'D' }>(({ variant }) => {
  const colors = {
    A: '#007bff',
    B: '#28a745',
    C: '#dc3545',
    D: '#6f42c1',
  };
  
  return {
    backgroundColor: colors[variant],
    color: 'white',
    padding: '6px 10px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 600,
    marginRight: '8px',
    minWidth: '65px',
    display: 'inline-block',
    textAlign: 'center',
  };
});

const HeroImage = styled('img')(({ theme }) => ({
  display: 'block',
  width: '100%',
  maxWidth: '770px',
  margin: '0 auto 2rem auto',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

const Home = () => {
  const events = [
    {
      tag: 'A' as const,
      name: 'Academic Conference',
      location: '🇹🇼 Taipei',
      time: 'All day, June 26–27, 2026 (UTC+8)',
    },
    {
      tag: 'B' as const,
      name: 'Business Expo',
      location: '🇹🇼 Taipei',
      time: '10:00–18:00, June 28, 2026 (UTC+8)',
    },
    {
      tag: 'C' as const,
      name: 'Capitol Summit',
      location: '🇺🇸 D.C.',
      time: '08:30–16:30, June 27, 2026 (UTC−4)',
    },
    {
      tag: 'D' as const,
      name: 'Digital Access',
      location: '🌐 Online',
      time: 'All day, June 26–28, 2026',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <HeroImage src="/images/sqai2026.png" alt="SQAI 2026" />
        
        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontSize: { xs: '2rem', md: '2.5rem' },
            textAlign: 'center',
            mb: 3,
          }}
        >
          Welcome from the Chairs of SQAI 2026
        </Typography>
        
        <Typography 
          variant="body1" 
          paragraph
          sx={{ 
            fontSize: '1.1rem',
            lineHeight: 1.7,
            textAlign: 'center',
            mb: 4,
          }}
        >
          It is with great pleasure that we welcome you to the{' '}
          <strong>3rd International Symposium on Quantum Artificial Intelligence (SQAI)</strong>,
          hosted by the <em>Quantum Intelligence Society</em>, on June 26-28, 2026, 
          in two locations: Taipei and Washington, D.C.
        </Typography>

        <StyledTableContainer>
          <Paper>
            <Table>
              <StyledTableHead>
                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CalendarMonth sx={{ mr: 1 }} />
                      Event
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ mr: 1 }} />
                      Location
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Schedule sx={{ mr: 1 }} />
                      Time
                    </Box>
                  </TableCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {events.map((event, index) => (
                  <StyledTableRow key={index}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
                        <EventTag variant={event.tag}>SQAI-{event.tag}</EventTag>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#0366d6' }}>
                          {event.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {event.location}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {event.time}
                      </Typography>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </StyledTableContainer>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
            About SQAI
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            The Symposium on Quantum Artificial Intelligence brings together leading researchers, 
            industry professionals, and government officials to explore the cutting-edge intersection 
            of quantum computing and artificial intelligence. This year's symposium features four 
            distinct components designed to serve different audiences and objectives.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;