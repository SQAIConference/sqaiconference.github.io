import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
  Paper,
} from '@mui/material';
import { Business, Language } from '@mui/icons-material';

const Sponsors = () => {
  const sponsors = [
    {
      name: "Quantum Corp",
      tier: "Platinum",
      logo: "/images/profile.png",
      description: "Leading quantum computing hardware manufacturer"
    },
    {
      name: "AI Innovations",
      tier: "Gold",
      logo: "/images/profile.png",
      description: "Artificial intelligence research and development"
    },
    {
      name: "Tech Solutions Inc",
      tier: "Silver",
      logo: "/images/profile.png",
      description: "Technology consulting and services"
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
          Sponsors - SQAI 2026
        </Typography>

        <Paper sx={{ p: 3, mb: 4, textAlign: 'center' }}>
          <Typography variant="body1" paragraph>
            We are grateful to our sponsors who make SQAI 2026 possible. Their support enables us to 
            bring together the global quantum AI community and advance the field through collaboration 
            and knowledge sharing.
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<Business />}
            href="mailto:info@sqai.org"
            sx={{ mt: 2 }}
          >
            Become a Sponsor
          </Button>
        </Paper>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Our Sponsors
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {sponsors.map((sponsor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    src={sponsor.logo}
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      mx: 'auto', 
                      mb: 2,
                      bgcolor: 'primary.main'
                    }}
                  >
                    <Business />
                  </Avatar>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {sponsor.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="primary" 
                    gutterBottom
                    sx={{ 
                      bgcolor: 'primary.light',
                      color: 'primary.contrastText',
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      display: 'inline-block'
                    }}
                  >
                    {sponsor.tier} Sponsor
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {sponsor.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Sponsorship Opportunities
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Platinum Sponsor ($10,000+)
              </Typography>
              <Typography variant="body2">
                • Logo on all conference materials
                • Keynote speaking opportunity
                • Exhibition booth
                • 4 complimentary registrations
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Gold Sponsor ($5,000+)
              </Typography>
              <Typography variant="body2">
                • Logo on conference website
                • Exhibition booth
                • 2 complimentary registrations
                • Welcome reception recognition
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Silver Sponsor ($2,500+)
              </Typography>
              <Typography variant="body2">
                • Logo on conference website
                • 1 complimentary registration
                • Networking event recognition
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Interested in Sponsoring?
          </Typography>
          <Typography variant="body1" paragraph>
            Contact us to learn more about sponsorship opportunities and custom packages.
          </Typography>
          <Button 
            variant="outlined" 
            startIcon={<Language />}
            href="mailto:sponsors@sqai.org"
            sx={{ mr: 2 }}
          >
            Email Us
          </Button>
          <Button 
            variant="contained"
            href="/files/SQAI2026-Sponsorship-Prospectus.pdf"
            target="_blank"
          >
            Download Prospectus
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Sponsors;