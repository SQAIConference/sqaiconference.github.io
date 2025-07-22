import React from 'react';
import { Container, Typography, Box, Paper, Grid, Link } from '@mui/material';

// You may want to split the following sections into separate components for maintainability.
// For brevity, all content is included inline here.

const About = () => (
  <Container maxWidth="lg">
    <Box sx={{ py: 4 }}>
      {/* Header Image */}
      <img
        src="/images/sqai2026.png"
        alt="Taipei"
        style={{
          display: 'block',
          width: '100%',
          maxWidth: 770,
          margin: '0 auto 2rem auto',
          borderRadius: 8,
        }}
      />

      {/* Welcome Title */}
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Welcome from the Chairs of SQAI 2026
      </Typography>
      <Typography variant="body1" paragraph>
        It is with great pleasure that we welcome you to the <b>3rd International Symposium on Quantum Artificial Intelligence (SQAI)</b>, hosted by the <i>Quantum Intelligence Society</i>, on June 26-28, 2026, in two locations: Taipei and Washington, D.C.
      </Typography>

      {/* Event Table */}
      <Box sx={{ my: 4, borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', fontSize: '0.95rem' }}>
          <thead>
            <tr>
              <th style={{ background: 'linear-gradient(135deg, #98d4dc, #0366d6)', color: 'white', padding: '12px 15px', textAlign: 'left', fontWeight: 600 }}>Event</th>
              <th style={{ background: 'linear-gradient(135deg, #98d4dc, #0366d6)', color: 'white', padding: '12px 15px', textAlign: 'left', fontWeight: 600 }}>Loc.</th>
              <th style={{ background: 'linear-gradient(135deg, #98d4dc, #0366d6)', color: 'white', padding: '12px 15px', textAlign: 'left', fontWeight: 600 }}>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span style={{ background: '#2196f3', color: 'white', borderRadius: 5, padding: '6px 8px', fontWeight: 700, marginRight: 8, display: 'inline-block', minWidth: 70, textAlign: 'center' }}>SQAI-A</span>
                Academic Conference
              </td>
              <td>
                <span role="img" aria-label="Taiwan" style={{ marginRight: 8 }}>🇹🇼</span> Taipei
              </td>
              <td>All day, June 26–27, 2026 (UTC+8)</td>
            </tr>
            <tr>
              <td>
                <span style={{ background: '#03a9f4', color: 'white', borderRadius: 5, padding: '6px 8px', fontWeight: 700, marginRight: 8, display: 'inline-block', minWidth: 70, textAlign: 'center' }}>SQAI-B</span>
                Business Expo
              </td>
              <td>
                <span role="img" aria-label="Taiwan" style={{ marginRight: 8 }}>🇹🇼</span> Taipei
              </td>
              <td>10:00–18:00, June 28, 2026 (UTC+8)</td>
            </tr>
            <tr>
              <td>
                <span style={{ background: '#00bcd4', color: 'white', borderRadius: 5, padding: '6px 8px', fontWeight: 700, marginRight: 8, display: 'inline-block', minWidth: 70, textAlign: 'center' }}>SQAI-C</span>
                Capitol Summit
              </td>
              <td>
                <span role="img" aria-label="USA" style={{ marginRight: 8 }}>🇺🇸</span> D.C.
              </td>
              <td>08:30–16:30, June 27, 2026 (UTC−4)</td>
            </tr>
            <tr>
              <td>
                <span style={{ background: '#009688', color: 'white', borderRadius: 5, padding: '6px 8px', fontWeight: 700, marginRight: 8, display: 'inline-block', minWidth: 70, textAlign: 'center' }}>SQAI-D</span>
                Digital Access
              </td>
              <td>
                <span role="img" aria-label="Online" style={{ marginRight: 8 }}>🌐</span> Online
              </td>
              <td>Live Zoom sessions & recordings</td>
            </tr>
          </tbody>
        </table>
      </Box>

      {/* Countdown Timer Placeholder */}
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          SQAI 2026 Countdown
        </Typography>
        <Typography sx={{ color: '#555', mb: 2 }}>
          June 26, 2026 at 9:00 AM Taipei Time
        </Typography>
        {/* You can implement a real countdown timer here */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Paper sx={{ p: 2, minWidth: 70 }}>
            <Typography variant="h4" id="countdown-days">00</Typography>
            <Typography variant="caption">DAYS</Typography>
          </Paper>
          <Paper sx={{ p: 2, minWidth: 70 }}>
            <Typography variant="h4" id="countdown-hours">00</Typography>
            <Typography variant="caption">HOURS</Typography>
          </Paper>
          <Paper sx={{ p: 2, minWidth: 70 }}>
            <Typography variant="h4" id="countdown-minutes">00</Typography>
            <Typography variant="caption">MINS</Typography>
          </Paper>
          <Paper sx={{ p: 2, minWidth: 70 }}>
            <Typography variant="h4" id="countdown-seconds">00</Typography>
            <Typography variant="caption">SECS</Typography>
          </Paper>
        </Box>
      </Box>

      {/* Tagline */}
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Box sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 2,
          p: 2,
          borderRadius: 2,
          boxShadow: 1,
          background: '#f8f9fa'
        }}>
          <span style={{ fontSize: '2.2rem', color: '#0366d6' }}>☁️</span>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h5" sx={{ color: '#0366d6', fontWeight: 600 }}>
              Reach for the <span style={{
                fontWeight: 800,
                background: 'linear-gradient(90deg, #0356b6, #2c8cd6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>"SQAI"</span>
            </Typography>
            <Typography variant="body2" sx={{ color: '#444' }}>
              Leading a future of universal quantum utility where AI runs natively on quantum hardware
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Features */}
      <Grid container spacing={3} sx={{ my: 4 }}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="feature-card" sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
            <img src="/images/sqai-a.jpg" alt="SQAI Academic Conference" style={{ width: '100%', borderRadius: 8, marginBottom: 8 }} />
            <Typography variant="h6" sx={{ color: '#0366d6', fontWeight: 600 }}>
              <span role="img" aria-label="Academic">🎓</span> Academic Conference
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Research & Knowledge Exchange</Typography>
            <Typography variant="body2">
              Our 2026 target is 50 outstanding research papers. We will feature a rich lineup of keynote speeches, technical presentations, demos, and poster sessions.
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
              Taipei, Taiwan • June 26-27, 2026
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="feature-card" sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
            <img src="/images/sqai-b.jpg" alt="SQAI Business Expo" style={{ width: '100%', borderRadius: 8, marginBottom: 8 }} />
            <Typography variant="h6" sx={{ color: '#1a56b0', fontWeight: 600 }}>
              <span role="img" aria-label="Business">💼</span> Business Expo
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Industry & Innovation</Typography>
            <Typography variant="body2">
              SQAI's sponsors will be given access to a booth, and exhibitors will be allowed to roam around to talk to the company or institute of their choosing.
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
              Taipei, Taiwan • June 28, 2026
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="feature-card" sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
            <img src="/images/sqai-c.jpg" alt="SQAI Capitol Summit" style={{ width: '100%', borderRadius: 8, marginBottom: 8 }} />
            <Typography variant="h6" sx={{ color: '#004ea8', fontWeight: 600 }}>
              <span role="img" aria-label="Capitol">🏛️</span> Capitol Summit
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Policy & Leadership</Typography>
            <Typography variant="body2">
              Will feature keynote speeches and discussion panels from civic and corporate leaders. SQAI-C will also have a networking event.
            </Typography>
            <Box sx={{ mt: 1, mb: 1, p: 1, background: '#f8f9fa', borderRadius: 1 }}>
              <span role="img" aria-label="USA" style={{ marginRight: 5 }}>🇺🇸</span>
              <b>America's 250th Anniversary</b>
              <div style={{ fontSize: '0.9em' }}>Celebrating 250 years of American innovation - looking toward a quantum future</div>
            </Box>
            <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
              D.C., United States • June 27, 2026
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="feature-card" sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
            <img src="/images/sqai-d.jpg" alt="SQAI Digital Access" style={{ width: '100%', borderRadius: 8, marginBottom: 8 }} />
            <Typography variant="h6" sx={{ color: '#003c7e', fontWeight: 600 }}>
              <span role="img" aria-label="Digital">🌐</span> Digital Access
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Global Participation</Typography>
            <Typography variant="body2">
              Will be provided for all registrants, including both Zoom sessions and recordings for SQAI-A, SQAI-B, and SQAI-C.
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
              Online / Hybrid • All Events
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Venue Maps */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" align="center" sx={{ mb: 3 }}>
          Conference Venues (TBD)
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ color: '#0366d6', fontWeight: 600 }}>
              SQAI DC
            </Typography>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Walter E. Washington Convention Center
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                801 Mt Vernon Pl NW, Washington, DC 20001
              </Typography>
            </Paper>
            <iframe
              title="DC Venue"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1033869272562!2d-77.02500972404868!3d38.90494014760058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7eacb9ec6b1%3A0xd5ec97173492aaf5!2sWalter+E.+Washington+Convention+Center!5e0!3m2!1sen!2sus!4v1719655254279!5m2!1sen!2sus&iwloc=A"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ color: '#0366d6', fontWeight: 600 }}>
              SQAI Taipei
            </Typography>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                NTU Multi-Purpose Classroom Building
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                No. 1, Sec. 4, Roosevelt Rd, Da'an District, Taipei City, Taiwan
              </Typography>
            </Paper>
            <iframe
              title="Taipei Venue"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7836520213633!2d121.53121297607675!3d25.01942897781699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98bf4d8b18d%3A0x153d8d2476be8d27!2sMulti-Purpose+Classroom+Building,+NTU!5e0!3m2!1sen!2sus!4v1719655333451!5m2!1sen!2sus&iwloc=A"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Carousel */}
      <Box sx={{ my: 6, textAlign: 'center' }}>
        {/* You can implement a real carousel here. For now, show a static image. */}
        <img src="/images/taipei1.jpg" alt="Taipei Cityscape" style={{ width: '100%', maxWidth: 800, borderRadius: 8, margin: '0 auto' }} />
        {/* Add more images or a carousel component as needed */}
      </Box>

      {/* Newsletter Signup */}
      <Box sx={{ my: 6, maxWidth: 600, mx: 'auto', p: 3, background: '#f8f9fa', borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h5" align="center" sx={{ mb: 2 }}>
          Stay Connected with SQAI
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          Subscribe to receive updates about SQAI conferences, call for papers, and quantum AI research news.
        </Typography>
        {/* Replace with your newsletter form or embed */}
        <form action="https://sqai.us1.list-manage.com/subscribe/post?u=575497683b4ff97fa73f1b50a&amp;id=3fdda4ba79&amp;f_id=007f2fe5f0" method="post" target="_blank" rel="noopener noreferrer">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <input type="email" name="EMAIL" placeholder="Email Address" required style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
            <button type="submit" style={{ background: '#2196f3', color: 'white', border: 'none', borderRadius: 4, padding: '10px 0', fontWeight: 600, fontSize: '1rem' }}>
              Subscribe
            </button>
          </Box>
        </form>
      </Box>
    </Box>
  </Container>
);

export default About;
