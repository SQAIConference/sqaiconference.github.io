import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CheckCircle, Event, Person, Restaurant } from '@mui/icons-material';

const Registration = () => {
  const registrationTypes = [
    {
      type: "Academic",
      price: "$250",
      description: "For students, faculty, and academic researchers",
      features: [
        "Full conference access",
        "Welcome reception",
        "Coffee breaks",
        "Conference materials",
        "Certificate of participation"
      ]
    },
    {
      type: "Industry",
      price: "$450",
      description: "For industry professionals and practitioners",
      features: [
        "Full conference access",
        "Welcome reception",
        "All networking events",
        "Conference materials",
        "Certificate of participation",
        "Business expo access"
      ]
    },
    {
      type: "Government",
      price: "$350",
      description: "For government officials and policy makers",
      features: [
        "Full conference access",
        "Capitol Summit access",
        "Policy roundtables",
        "Conference materials",
        "Certificate of participation"
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
          Registration - SQAI 2026
        </Typography>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="body1">
            Join us for the 3rd International Symposium on Quantum Artificial Intelligence. 
            Choose the registration type that best fits your background and interests.
          </Typography>
        </Paper>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Registration Types
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {registrationTypes.map((regType, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom color="primary">
                    {regType.type}
                  </Typography>
                  <Typography variant="h4" component="div" gutterBottom>
                    {regType.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {regType.description}
                  </Typography>
                  <List dense>
                    {regType.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircle color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button 
                    variant="contained" 
                    fullWidth
                    href="#register-form"
                  >
                    Register Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box className="america250-notice" sx={{
          my: 4,
          p: 3,
          background: 'linear-gradient(135deg, #0366d6, #2196f3)',
          borderRadius: 2,
          color: 'white',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,102,214,0.2)'
        }}>
          <strong>
            <i className="fas fa-flag-usa" style={{ marginRight: 8 }}></i>
            America's 250th Anniversary
          </strong>
          <div style={{ marginTop: 6 }}>
            Special registration rates and commemorative events for the 2026 semiquincentennial celebration.
          </div>
        </Box>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Important Information
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                <Event sx={{ mr: 1, verticalAlign: 'middle' }} />
                Early Bird Discount
              </Typography>
              <Typography variant="body2">
                Register before April 1, 2026 and save 20% on registration fees.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                <Person sx={{ mr: 1, verticalAlign: 'middle' }} />
                Group Discounts
              </Typography>
              <Typography variant="body2">
                Groups of 5 or more from the same institution receive a 15% discount.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                <Restaurant sx={{ mr: 1, verticalAlign: 'middle' }} />
                What's Included
              </Typography>
              <Typography variant="body2">
                All registration types include access to technical sessions, welcome reception, 
                coffee breaks throughout the conference, and conference materials. 
                Lunch is provided on all conference days.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box id="register-form" sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Register?
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            href="https://example.com/register"
            target="_blank"
            sx={{ px: 4, py: 2, fontSize: '1.2rem' }}
          >
            Complete Registration
          </Button>
          <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
            Secure online registration via our partner platform
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Registration;