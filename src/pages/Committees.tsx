import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Paper,
} from '@mui/material';

const Committees = () => {
  const committeeMembers = [
    {
      name: "Dr. Alice Johnson",
      role: "General Chair",
      affiliation: "MIT",
      image: "/images/profile.png"
    },
    {
      name: "Prof. Bob Smith",
      role: "Program Chair",
      affiliation: "Stanford University",
      image: "/images/profile.png"
    },
    {
      name: "Dr. Carol Wang",
      role: "Technical Committee",
      affiliation: "Tsinghua University",
      image: "/images/profile.png"
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
          Committees - SQAI 2026
        </Typography>

        <Paper sx={{ p: 3, mb: 4, borderLeft: '4px solid #98d4dc' }}>
          <Typography variant="body1">
            The SQAI 2026 organizing committee brings together leading experts in quantum computing 
            and artificial intelligence from academia, industry, and government institutions worldwide.
          </Typography>
        </Paper>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Organizing Committee
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {committeeMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    src={member.image}
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      mx: 'auto', 
                      mb: 2,
                      bgcolor: 'primary.main'
                    }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="primary" gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.affiliation}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, mt: 4 }}>
          Technical Program Committee
        </Typography>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="body1">
            The Technical Program Committee is responsible for reviewing submissions and ensuring 
            the quality of the scientific program. Committee members are experts in quantum computing, 
            artificial intelligence, and related fields.
          </Typography>
        </Paper>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, mt: 4 }}>
          Advisory Board
        </Typography>

        <Paper sx={{ p: 3 }}>
          <Typography variant="body1">
            Our advisory board provides strategic guidance and ensures the symposium maintains 
            its high standards and relevance to the rapidly evolving field of quantum artificial intelligence.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Committees;