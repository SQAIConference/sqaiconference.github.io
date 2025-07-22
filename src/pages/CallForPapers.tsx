import React from 'react';
import { Container, Box, Typography, Alert, Button } from '@mui/material';

const CallForPapers = () => {
  // Submission button click handler to match the notification logic in _pages/cfp.md
  const handleSubmissionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const openingDate = new Date('2025-09-01T00:00:00');
    const today = new Date();
    if (today < openingDate) {
      e.preventDefault();
      // Show notification (simple alert for now, can be replaced with a Snackbar)
      alert('Submission Portal Not Open Yet\n\nThe paper submission system will open on September 1, 2025.\n\nPlease check back later or sign up for our newsletter to receive a notification.');
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Box sx={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #0366d6', p: 2, mb: 3 }}>
          <Typography component="strong" sx={{ color: '#d73a49', fontSize: '1.1em' }}>
            ⚠️ IMPORTANT FORMAT NOTICE:
          </Typography>
          <br />
          All submissions <strong>MUST</strong> follow the IEEE conference two-column format. Papers not conforming to this format will be automatically rejected. Please use the official IEEE templates linked below.
        </Box>

        <Box sx={{ backgroundColor: '#f5f5f5', p: 1.5, mb: 3, textAlign: 'center' }}>
          <strong>Quick Links<br /></strong>
          <a href="#overview">Overview</a> |{' '}
          <a href="#important-dates">Important Dates</a> |{' '}
          <a href="#submission-guidelines">Submission Guidelines</a> |{' '}
          <a href="#ieee-format-guidelines">IEEE Format Guidelines</a>
        </Box>

        <Box sx={{ textAlign: 'center', my: 4, maxWidth: 600, mx: 'auto' }}>
          <a
            id="submit-paper-btn"
            href="https://openreview.net/group?id=SQAI.org/2026/Symposium"
            className="submit-paper-button"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #0366d6, #004494)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2em',
              padding: '15px 30px',
              textDecoration: 'none',
              borderRadius: 6,
              boxShadow: '0 4px 12px rgba(3, 102, 214, 0.3)',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(255,255,255,0.2)'
            }}
            onClick={handleSubmissionClick}
          >
            <i className="fas fa-paper-plane" style={{ marginRight: 10 }}></i>
            Submit Paper <span style={{ fontSize: '0.85em', opacity: 0.9 }}>(Opens Sept 1)</span>
          </a>
          <Typography sx={{ mt: 1.5, color: '#555', fontStyle: 'italic' }}>
            Submissions via OpenReview portal • See guidelines below
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <img src="/images/quantumcomputer.jpg" alt="Quantum Computer" style={{ width: '100%', borderRadius: 8 }} />
          <Typography variant="caption" display="block" sx={{ textAlign: 'center', mt: 1 }}>
            Source: <a href="https://www.quantum.gov/quantum-image-gallery/" target="_blank" rel="noopener noreferrer">quantum.gov</a> – QSA researchers work on the E8 experiment using ultracold atoms to study novel quantum phases of matter.
          </Typography>
        </Box>

        <Typography variant="h4" id="overview" gutterBottom>
          Overview
        </Typography>
        <Typography paragraph>
          <strong>Quantum AI</strong> is the emerging field at the intersection of <strong>quantum computing</strong> and <strong>artificial intelligence</strong>, where quantum algorithms and hardware are leveraged to enhance the way intelligent systems learn, reason, and process information. It is more than just a technical fusion—it is a reimagination of how intelligence and computation may co-evolve in the quantum era.
        </Typography>
        <Typography paragraph>
          We invite submissions of <strong>original research papers, demos, and workshop proposals</strong> in all areas related to <strong>Quantum Artificial Intelligence</strong>. Topics of interest include, but are not limited to:
        </Typography>
        {/* ...You can add the topics/accordion here as in the markdown, or use a static list for now... */}

        <Typography variant="h4" id="important-dates" gutterBottom sx={{ mt: 5 }}>
          Important Dates
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', mb: 3 }}>
          <Box sx={{ flex: '0 0 45%', background: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#0366d6', mt: 0 }}>
              Submission Timeline
            </Typography>
            <ul style={{ marginBottom: 0 }}>
              <li><strong>Call for Papers Opens</strong>: September 1, 2025</li>
              <li><strong>Submission Deadline</strong>: February 22, 2026</li>
              <li><strong>Notification of Acceptance</strong>: April 3, 2026</li>
              <li><strong>Camera-Ready Deadline</strong>: May 3, 2026</li>
            </ul>
          </Box>
          <Box sx={{ flex: '0 0 45%', background: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#0366d6', mt: 0 }}>
              Review Process
            </Typography>
            <ul style={{ marginBottom: 0 }}>
              <li><strong>Initial Format Check</strong>: Immediately after submission</li>
              <li><strong>Peer Review Period</strong>: Feb 23 - Mar 25, 2026</li>
              <li><strong>Final Decision</strong>: Apr 3, 2026</li>
              <li><strong>Conference Date</strong>: June 26–28, 2026</li>
            </ul>
          </Box>
        </Box>
        <Box sx={{ backgroundColor: '#fff3cd', borderLeft: '4px solid #ffc107', p: 1.5, mb: 3 }}>
          <strong>Note:</strong> Papers that do not conform to the IEEE format will not proceed to the peer review stage. Please ensure your submission follows all formatting requirements.
        </Box>

        <Typography variant="h4" id="submission-guidelines" gutterBottom sx={{ mt: 5 }}>
          Submission Guidelines
        </Typography>
        <ul>
          <li>Submissions must be <strong>original</strong> and <strong>not under review elsewhere</strong>.</li>
          <li>Papers <strong>must</strong> use the <strong>IEEE conference two-column format</strong> (submissions not in this format will be automatically rejected).</li>
          <li>Authors should download and use the <a href="https://www.ieee.org/conferences/publishing/templates" target="_blank" rel="noopener noreferrer">IEEE Manuscript Templates for Conference Proceedings</a> (Word or LaTeX).</li>
          <li>Direct links to templates:
            <ul>
              <li><a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-latex-template.zip" target="_blank" rel="noopener noreferrer">LaTeX Template</a></li>
              <li><a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx" target="_blank" rel="noopener noreferrer">Microsoft Word Template</a></li>
            </ul>
          </li>
          <li>Submissions should be made via our <a href="https://openreview.net/group?id=SQAI.org/2026/Symposium&referrer=%5BHomepage%5D(%2F)#tab-recent-activity" target="_blank" rel="noopener noreferrer">OpenReview portal</a>.</li>
          <li>All accepted contributions will be presented at the conference and included in the proceedings.</li>
        </ul>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Paper Length</strong>
        </Typography>
        <ul>
          <li><strong>Long papers</strong>: 8 pages + references</li>
          <li><strong>Short papers</strong>: 4 pages + references</li>
          <li><strong>Demos</strong>: 2 pages + references</li>
        </ul>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <strong>Note:</strong> The page limits are strict and include all figures, tables, and appendices, but exclude references.
        </Typography>
        <Typography paragraph>
          We welcome theoretical, applied, and exploratory contributions. All submissions will undergo a rigorous double-blind peer review process.
        </Typography>

        <Box sx={{ textAlign: 'center', my: 4, p: 3, backgroundColor: '#f8fbff', borderRadius: 2, border: '1px solid rgba(3, 102, 214, 0.2)' }}>
          <Typography variant="h5" sx={{ color: '#0366d6', mt: 0 }}>
            Ready to Submit Your Paper?
          </Typography>
          <Typography>
            Please ensure your submission follows all the guidelines detailed above before submitting.
          </Typography>
          <a
            href="https://openreview.net/group?id=SQAI.org/2026/Symposium"
            className="submit-paper-button"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #0366d6, #004494)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.1em',
              padding: '12px 25px',
              textDecoration: 'none',
              borderRadius: 6,
              boxShadow: '0 4px 12px rgba(3, 102, 214, 0.3)',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(255,255,255,0.2)',
              marginTop: 10
            }}
            onClick={handleSubmissionClick}
          >
            <i className="fas fa-paper-plane" style={{ marginRight: 10 }}></i>
            Submit via OpenReview <span style={{ fontSize: '0.85em', opacity: 0.9 }}>(Opens Sept 1)</span>
          </a>
        </Box>

        <Typography variant="h4" id="ieee-format-guidelines" gutterBottom sx={{ mt: 5 }}>
          IEEE Format Guidelines
        </Typography>
        {/* ...You can add the IEEE format requirements, FAQ, and checklist here as in the markdown... */}
        <Typography paragraph>
          <strong>Formatting Requirements</strong>
        </Typography>
        <ol>
          <li><strong>Paper Size</strong>: US Letter (8.5" x 11")</li>
          <li><strong>Margins</strong>: Top: 0.75", Left and Right: 0.625", Bottom: 1"</li>
          <li><strong>Column Format</strong>: Two columns with 0.25" spacing between columns</li>
          <li><strong>Font</strong>: Main Text: 10pt Times New Roman, Title: 24pt Times New Roman, centered, Author Names: 11pt Times New Roman, Section Headings: 10pt, bold, all caps, Subsection Headings: 10pt, bold</li>
          <li><strong>Line Spacing</strong>: Single-spaced throughout</li>
          <li><strong>Page Numbering</strong>: Do not include page numbers</li>
          <li><strong>Citations</strong>: IEEE citation style with numbered references</li>
        </ol>
        {/* ...Add FAQ and checklist as needed... */}
      </Box>
    </Container>
  );
};

export default CallForPapers;