import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const Program = () => (
  <Container maxWidth="lg">
    <Box sx={{ py: 4 }}>
      <img
        src="/images/quantumlaser.jpg"
        alt="Quantum Laser"
        style={{
          width: '100%',
          maxWidth: '100%',
          borderRadius: 8,
          marginBottom: '0.3rem',
        }}
      />
      <Typography variant="caption" display="block" sx={{ textAlign: 'center', mb: 2 }}>
        Source: <a href="https://www.quantum.gov/quantum-image-gallery/" target="_blank" rel="noopener noreferrer">quantum.gov</a> - Laser beam passes through a vapor cell of rubidium atoms to measure microwave fields
      </Typography>
      <Paper sx={{ p: 3, mb: 4, mt: 2 }}>
        <Typography variant="body1">
          <strong>Note:</strong> The program is subject to change. Final schedule will be announced by 12/31/2025.
        </Typography>
      </Paper>
      {/* Program Navigation */}
      <Box sx={{ background: '#f5f5f5', p: 2, mb: 3, textAlign: 'center' }}>
        <strong>Navigate the Program<br /></strong>
        <a href="#sqai-a">🎓 SQAI-A</a> |{' '}
        <a href="#sqai-b">💼 SQAI-B</a> |{' '}
        <a href="#sqai-c">🏛️ SQAI-C</a> |{' '}
        <a href="#sqai-d">🌐 SQAI-D</a>
      </Box>
      {/* SQAI-A */}
      <Box id="sqai-a" sx={{ my: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          SQAI-A (Academic Conference) <span style={{ background: 'linear-gradient(135deg, #2196f3, #1976d2)', color: 'white', borderRadius: 5, padding: '0.3rem 0.7rem', marginLeft: 8 }}>Taipei</span>
        </Typography>
        <Typography paragraph>
          The academic conference will be held in Taipei on June 26-27, 2026 (UTC+8). Our 2026 target is 50 outstanding research papers, featuring keynote speeches, technical presentations, demos, and poster sessions.
        </Typography>
        {/* ...add features, schedule iframe, etc. as in the markdown... */}
      </Box>
      {/* SQAI-B */}
      <Box id="sqai-b" sx={{ my: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          SQAI-B (Business Expo) <span style={{ background: 'linear-gradient(135deg, #03a9f4, #0288d1)', color: 'white', borderRadius: 5, padding: '0.3rem 0.7rem', marginLeft: 8 }}>Taipei</span>
        </Typography>
        <Typography paragraph>
          The Business Expo will be held in Taipei on June 28, 2026 (UTC+8), 10:00-18:00, following SQAI-A. SQAI's sponsors will be given access to a booth, and exhibitors will be allowed to roam around to talk to the company or institute of their choosing.
        </Typography>
        {/* ...add features... */}
      </Box>
      {/* SQAI-C */}
      <Box id="sqai-c" sx={{ my: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          SQAI-C (Capitol Summit) <span style={{ background: 'linear-gradient(135deg, #00bcd4, #0097a7)', color: 'white', borderRadius: 5, padding: '0.3rem 0.7rem', marginLeft: 8 }}>DC</span>
        </Typography>
        <Box sx={{ mb: 2, p: 2, background: '#f8f9fa', borderRadius: 1 }}>
          <span role="img" aria-label="USA" style={{ marginRight: 5 }}>🇺🇸</span>
          <b>America's 250th Anniversary</b>
          <div style={{ fontSize: '0.9em' }}>Celebrating 250 years of American innovation - looking toward a quantum future</div>
        </Box>
        <Typography paragraph>
          The Capitol Summit will be held in Washington, D.C. on June 27, 2026 (UTC−4), 08:30-16:30, starting immediately after SQAI-A. SQAI-C will feature keynote speeches and discussion panels from civic and corporate leaders, along with a networking event.
        </Typography>
        {/* ...add features, schedule iframe, etc. as in the markdown... */}
      </Box>
      {/* SQAI-D */}
      <Box id="sqai-d" sx={{ my: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          SQAI-D (Digital Access) <span style={{ background: 'linear-gradient(135deg, #009688, #00796b)', color: 'white', borderRadius: 5, padding: '0.3rem 0.7rem', marginLeft: 8 }}>Virtual</span>
        </Typography>
        <Typography paragraph>
          Digital Access will be provided for all registrants, including both Zoom sessions and recordings for SQAI-A, SQAI-B, and SQAI-C throughout the conference period.
        </Typography>
        {/* ...add features... */}
      </Box>
    </Box>
  </Container>
);

export default Program;