import {
  Container,
  Typography,
  Box,
  Alert,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Link,
} from '@mui/material';
import { Send as SendIcon, Warning as WarningIcon } from '@mui/icons-material';

const CallForPapers = () => {
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
          Call for Papers - SQAI 2026
        </Typography>

        <Alert 
          severity="warning" 
          icon={<WarningIcon />}
          sx={{ mb: 3 }}
        >
          <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            ⚠️ IMPORTANT FORMAT NOTICE:
          </Typography>
          <Typography variant="body2">
            All submissions <strong>MUST</strong> follow the IEEE conference two-column format. 
            Papers not conforming to this format will be automatically rejected. 
            Please use the official IEEE templates linked below.
          </Typography>
        </Alert>

        <Paper sx={{ p: 2, mb: 3, textAlign: 'center', bgcolor: '#f5f5f5' }}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Link href="#overview">Overview</Link>
            <Link href="#important-dates">Important Dates</Link>
            <Link href="#submission-guidelines">Submission Guidelines</Link>
            <Link href="#ieee-format-guidelines">IEEE Format Guidelines</Link>
          </Box>
        </Paper>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<SendIcon />}
            href="https://openreview.net/group?id=SQAI.org/2026/Symposium"
            target="_blank"
            sx={{
              px: 4,
              py: 2,
              fontSize: '1.2rem',
              background: 'linear-gradient(135deg, #0366d6, #004494)',
              '&:hover': {
                background: 'linear-gradient(135deg, #0377f6, #0056b3)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Submit Paper
            <Typography component="span" sx={{ ml: 1, fontSize: '0.85em', opacity: 0.9 }}>
              (Opens Sept 1)
            </Typography>
          </Button>
          <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', fontStyle: 'italic' }}>
            Submissions via OpenReview portal • See guidelines below
          </Typography>
        </Box>

        <Box id="overview" sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Overview
          </Typography>
          <Typography variant="body1" paragraph>
            The 3rd International Symposium on Quantum Artificial Intelligence (SQAI 2026) 
            invites original research contributions that advance the understanding and application 
            of quantum computing in artificial intelligence and machine learning.
          </Typography>
        </Box>

        <Box id="important-dates" sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Important Dates
          </Typography>
          <Paper sx={{ p: 3 }}>
            <List>
              <ListItem>
                <ListItemText
                  primary="Paper Submission Deadline"
                  secondary="March 15, 2026 (23:59 UTC)"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Notification of Acceptance"
                  secondary="May 1, 2026"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Camera-Ready Papers Due"
                  secondary="May 15, 2026"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Conference Dates"
                  secondary="June 26-28, 2026"
                />
              </ListItem>
            </List>
          </Paper>
        </Box>

        <Box id="submission-guidelines" sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Submission Guidelines
          </Typography>
          <Typography variant="body1" paragraph>
            We welcome submissions in the following areas:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Quantum Machine Learning Algorithms" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Quantum Neural Networks" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Quantum Optimization for AI" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Quantum-Enhanced Data Analytics" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Applications of Quantum AI" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Quantum Computing Hardware for AI" />
            </ListItem>
          </List>
        </Box>

        <Box id="ieee-format-guidelines" sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            IEEE Format Guidelines
          </Typography>
          <Alert severity="info" sx={{ mb: 2 }}>
            All papers must be formatted according to IEEE conference templates
          </Alert>
          <Typography variant="body1" paragraph>
            Please download the appropriate template for your submission:
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="outlined" href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank">
              LaTeX Template
            </Button>
            <Button variant="outlined" href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank">
              Word Template
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CallForPapers;