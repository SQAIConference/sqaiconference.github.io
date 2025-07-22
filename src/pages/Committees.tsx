import React from 'react';
import { Container, Typography, Box, Paper, Grid, Link, Divider } from '@mui/material';

// Data for each committee member (add more as needed)
const organizingCommittee = [
  {
    name: "Austin Hua",
    photo: "/images/austin_.png",
    title: "General Chair",
    affiliation: "SQAI Founder",
    contact: "r11922203@csie.ntu.edu.tw",
    link: "https://www.linkedin.com/in/austin-hua/"
  },
  {
    name: "Chi-Chuan Hwang",
    photo: "/images/chichuanhwang.jpeg",
    title: "TPC Chair",
    affiliation: "NCKU ES Professor",
    contact: "chchwang@mail.ncku.edu.tw",
    link: "https://researchoutput.ncku.edu.tw/en/persons/chi-chuan-hwang"
  },
  {
    name: "Tzu-Yin Chen",
    photo: "/images/tzuyinchen.jpg",
    title: "Publicity Chair",
    affiliation: "NTU LIS PhD Student",
    contact: "d12126008@g.ntu.edu.tw",
    link: "https://www.linkedin.com/in/tzuyin-chen/"
  },
  {
    name: "Samuel Yen-Chi Chen",
    photo: "/images/members/Yen-Chi.jpeg",
    title: "Publications Chair",
    affiliation: "Lead Research Scientist",
    contact: "ycchen1989@ieee.org",
    link: "https://www.linkedin.com/in/samuel-yen-chi-chen/"
  },
  {
    name: "Bernadette Harding",
    photo: "/images/members/bernadette.jpg",
    title: "Logistics Chair (US)",
    affiliation: "Startup Founder",
    contact: "info@sqai.org",
    link: "https://www.linkedin.com/in/bernadette-harding-8769025/"
  },
  {
    name: "Mattis Liu",
    photo: "/images/members/mattis.jpg",
    title: "Logistics Chair (TW)",
    affiliation: "Bonafide Strategies COO",
    contact: "bonafidetaiwan@gmail.com",
    link: "https://www.linkedin.com/in/%E6%AC%A3%E5%AE%87-%E5%8A%89-a4a09a353/"
  },
  {
    name: "Farley Warner",
    photo: "/images/farley.jpg",
    title: "Finance Chair",
    affiliation: "Government Contractor",
    contact: "cw_netguru@yahoo.com",
    link: "https://www.linkedin.com/in/farley-warner-669054a/"
  },
  {
    name: "Jonas Yen",
    photo: "/images/members/jonas-yen.jpg",
    title: "Collaborator",
    affiliation: "NTU QML Researcher",
    contact: "",
    link: "https://www.facebook.com/profile.php?id=100001078614941"
  },
  {
    name: "Ryan Landay",
    photo: "/images/members/ryan-landay.jpg",
    title: "Collaborator",
    affiliation: "Founder, ML Engineer",
    contact: "rlanday@gmail.com",
    link: "https://www.linkedin.com/in/rlanday/"
  },
  {
    name: "Stathes Paganis",
    photo: "/images/members/stathes-paganis.jpg",
    title: "Collaborator",
    affiliation: "NTU Physics Professor",
    contact: "paganis@phys.ntu.edu.tw",
    link: "https://www.phys.ntu.edu.tw/enphysics/paganis.html"
  },
  {
    name: "Alexander Frankish",
    photo: "/images/members/alexander-frankish.jpg",
    title: "Collaborator",
    affiliation: "A Pro Solutions Founder",
    contact: "",
    link: "https://www.linkedin.com/in/alexander-frankish/"
  },
  // Open positions
  {
    name: "Open Position",
    photo: "/images/placeholder-profile.png",
    title: "General Co-Chair",
    affiliation: "To be determined",
    contact: "Apply now",
    link: "mailto:info@sqai.org"
  },
  {
    name: "Open Position",
    photo: "/images/members/tbd.jpg",
    title: "Poster & Demos Chair",
    affiliation: "To be determined",
    contact: "Apply now",
    link: "mailto:info@sqai.org"
  },
  {
    name: "Open Position",
    photo: "/images/members/tbd.jpg",
    title: "Sponsorship Chair",
    affiliation: "To be determined",
    contact: "Apply now",
    link: "mailto:info@sqai.org"
  }
];

const tpcCommittee = [
  {
    name: "Chi-Chuan Hwang",
    photo: "/images/chichuanhwang.jpeg",
    title: "TPC Chair",
    affiliation: "NCKU ES Professor",
    contact: "chchwang@mail.ncku.edu.tw",
    link: "https://researchoutput.ncku.edu.tw/en/persons/chi-chuan-hwang"
  },
  {
    name: "Samuel Yen-Chi Chen",
    photo: "/images/members/Yen-Chi.jpeg",
    title: "Area Chair: QML",
    affiliation: "Lead Research Scientist",
    contact: "ycchen1989@ieee.org",
    link: "https://www.linkedin.com/in/samuel-yen-chi-chen/"
  },
  {
    name: "Mark Chen",
    photo: "/images/members/mark-chen.jpg",
    title: "TPC Member",
    affiliation: "Mindify AI Founder",
    contact: "mark.chen.sstm@gmail.com",
    link: "https://www.linkedin.com/in/mark-chen-next/"
  },
  {
    name: "Daniel Ruiz",
    photo: "/images/members/daniel-ruiz.jpg",
    title: "TPC Member",
    affiliation: "Qnow.tech Founder",
    contact: "daniel@qnow.tech",
    link: "https://www.linkedin.com/in/luisdanielruiz-in"
  },
  {
    name: "Yash Gaur",
    photo: "/images/members/yash.jpeg",
    title: "TPC Member",
    affiliation: "Quantum AI Researcher",
    contact: "yashgaur3000@gmail.com",
    link: "https://www.linkedin.com/in/yash-gaur-b761b824b/"
  },
  // Open positions (multiple)
  ...[
    "Area Chair: QML",
    "Area Chair: QML",
    "Area Chair: QAI Hardware",
    "Area Chair: Quantum Data Science",
    "Area Chair: Hybrid Systems",
    "Area Chair: Applications",
    "Area Chair: Benchmarking/Performance",
    "Area Chair: Ethics/Society/Philosophy"
  ].map(title => ({
    name: "Open Position",
    photo: "/images/members/tbd.jpg",
    title,
    affiliation: "To be determined",
    contact: "Apply now",
    link: "mailto:info@sqai.org"
  }))
];

const steeringCommittee = [
  {
    name: "Austin Hua",
    photo: "/images/austin_.png",
    title: "SC Chair",
    affiliation: "SQAI Founder",
    contact: "r11922203@csie.ntu.edu.tw",
    link: "https://www.linkedin.com/in/austin-hua/"
  },
  {
    name: "Open Position",
    photo: "/images/members/tbd.jpg",
    title: "SC Member",
    affiliation: "To be determined",
    contact: "Apply now",
    link: "mailto:info@sqai.org"
  },
  {
    name: "Open Position",
    photo: "/images/members/tbd.jpg",
    title: "SC Member",
    affiliation: "To be determined",
    contact: "Apply now",
    link: "mailto:info@sqai.org"
  }
];

const advisoryBoard = [
  {
    name: "Lawrence Gasman",
    photo: "/images/members/lawrencegasman.jpeg",
    title: "Advisor",
    affiliation: "President, IQT Research",
    contact: "lawrence@insidequantumtechnology.com",
    link: "https://www.linkedin.com/in/lawrence-gasman-7480511/"
  },
  {
    name: "Shih-Wei Liao",
    photo: "/images/members/shih-wei-liao.jpg",
    title: "Advisor",
    affiliation: "NTU CS Professor",
    contact: "liao@csie.ntu.edu.tw",
    link: "https://ieeexplore.ieee.org/author/37086846354"
  }
];

// Helper for member card
const MemberCard = ({ member, className }: { member: any, className?: string }) => (
  <Box className={className} sx={{
    width: 200,
    background: '#fff',
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: 2,
    textAlign: 'center',
    mb: 2,
    mx: 'auto'
  }}>
    <Box
      sx={{
        width: 150,
        height: 150,
        mx: 'auto',
        my: 2,
        borderRadius: '50%',
        backgroundColor: '#f0f0f0',
        backgroundImage: `url('${member.photo}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
    <Box sx={{ px: 2, pb: 2 }}>
      <Typography variant="h6" sx={{ fontSize: '0.9em', fontWeight: 'bold', color: '#333', mb: 0.5 }}>
        {member.link ? (
          <Link href={member.link} target="_blank" rel="noopener noreferrer" sx={{ color: '#0366d6', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            {member.name}
          </Link>
        ) : member.name}
      </Typography>
      <Typography variant="body2" sx={{ color: '#0366d6', fontSize: '0.9em', mb: 0.5 }}>{member.title}</Typography>
      <Typography variant="body2" sx={{ color: '#666', fontSize: '0.85em', fontStyle: 'italic', mb: 1 }}>{member.affiliation}</Typography>
      {member.contact && (
        <Typography variant="caption" sx={{ color: '#888', fontSize: '0.8em' }}>
          {member.contact.startsWith('Apply') ? (
            <Link href={member.link} sx={{ color: '#0366d6', textDecoration: 'underline' }}>{member.contact}</Link>
          ) : member.contact}
        </Typography>
      )}
    </Box>
  </Box>
);

const Section = ({
  id,
  title,
  description,
  members,
  className,
}: {
  id: string;
  title: string;
  description: React.ReactNode;
  members: any[];
  className?: string;
}) => (
  <Box id={id} sx={{ my: 6 }}>
    <Typography variant="h4" className={className} sx={{ borderLeft: '4px solid #0366d6', pl: 2, mb: 2, fontWeight: 600, color: '#0366d6' }}>
      {title}
    </Typography>
    <Paper sx={{ background: '#f8f9fa', borderRadius: 1, p: 2, mb: 2 }}>
      <Typography variant="body1">{description}</Typography>
    </Paper>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
      {members.map((m, i) => (
        <MemberCard key={i} member={m} className={className ? className.replace('-header', '-member') : ''} />
      ))}
    </Box>
  </Box>
);

const AboutCommittees = () => (
  <Box id="about-committees" sx={{ my: 6 }}>
    <Typography variant="h4" className="about-header" align="center" sx={{ color: '#0366d6', mb: 3, pb: 1, borderBottom: '3px solid #0366d6', fontWeight: 700 }}>
      About Our Committees
    </Typography>
    <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ color: '#0366d6', mb: 2 }}>Organizing Committee (OC)</Typography>
      <Typography paragraph>
        The <strong>Organizing Committee (OC)</strong> oversees the overall planning and execution of the conference, including:
      </Typography>
      <ul>
        <li>Coordinating logistics (venue, schedule, communication)</li>
        <li>Managing sponsorships and partnerships</li>
        <li>Publicity and community engagement</li>
        <li>Platform and registration support</li>
        <li>On-site event coordination</li>
      </ul>
      <Typography paragraph>
        If you have skills in project coordination, event planning, community building, or media outreach, we'd love to have you on the OC.
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, borderRadius: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#0366d6' }}>General Chair</Typography>
            <Typography variant="body2">
              The General Chair provides overall leadership for the symposium, setting the vision, coordinating all committees, and serving as the primary representative of SQAI to the broader community. This role involves strategic planning, stakeholder relationship management, and ensuring the event meets its academic and professional objectives.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, borderRadius: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#0366d6' }}>General Co-Chair</Typography>
            <Typography variant="body2">
              The General Co-Chair assists the General Chair in overseeing the conference, with a focus on specific areas such as logistics, sponsorship, or programming. This role is essential for balancing the workload of the General Chair and ensuring all aspects of the conference are effectively managed.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, borderRadius: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#0366d6' }}>Publications Chair</Typography>
            <Typography variant="body2">
              The Publications Chair oversees the preparation, formatting, and dissemination of the conference proceedings and accepted papers. This includes coordinating with authors, managing the submission of camera-ready versions, ensuring proper formatting, and working with publishers or online platforms to make the research accessible to the community.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, borderRadius: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#0366d6' }}>Publicity Chair</Typography>
            <Typography variant="body2">
              The Publicity Chair is responsible for promoting the conference, increasing its visibility, and engaging the broader community. This includes managing social media, preparing press releases, coordinating outreach to academic and industry partners, and ensuring timely communication of important updates to potential attendees and contributors.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, borderRadius: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#0366d6' }}>Finance Chair</Typography>
            <Typography variant="body2">
              The Finance Chair oversees the conference budget, financial planning, and expense management. This role includes securing sponsorships, managing registration fees, allocating resources efficiently across all aspects of the conference, and ensuring financial transparency and accountability.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, borderRadius: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#0366d6' }}>Logistics Chair</Typography>
            <Typography variant="body2">
              The Logistics Chair coordinates all operational aspects of the conference, including venue arrangements, audiovisual setup, catering, accommodation coordination, transportation, and on-site management. This role ensures the smooth execution of the conference schedule and attendee experience.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, borderRadius: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#0366d6' }}>Poster & Demos Chair</Typography>
            <Typography variant="body2">
              The Poster & Demos Chair organizes interactive sessions that showcase cutting-edge research and technology demonstrations. Responsibilities include managing the submission and selection process, coordinating display logistics, scheduling presentations, and creating an engaging environment for knowledge exchange and networking.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, borderRadius: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#0366d6' }}>Sponsorship Chair</Typography>
            <Typography variant="body2">
              The Sponsorship Chair develops and implements strategies to secure financial support for the conference. This role involves creating sponsorship packages, building relationships with potential sponsors from industry and academia, negotiating agreements, ensuring sponsor visibility, and managing sponsor relationships before, during, and after the event to ensure mutual value.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
    <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ color: '#0366d6', mb: 2 }}>Technical Program Committee (TPC)</Typography>
      <Typography paragraph>
        The <strong>Technical Program Committee (TPC)</strong> ensures the academic and technical quality of the conference by:
      </Typography>
      <ul>
        <li>Reviewing paper submissions</li>
        <li>Designing the research track program</li>
        <li>Organizing keynote and panel sessions</li>
        <li>Curating posters, demos, and workshops</li>
        <li>Shaping the scientific direction of SQAI</li>
      </ul>
      <Typography paragraph>
        If you're an active researcher, academic, or practitioner in quantum computing, AI, or related fields — we welcome your involvement in shaping the technical backbone of SQAI.
      </Typography>
    </Paper>
  </Box>
);

const Committees = () => (
  <Container maxWidth="lg">
    <Box sx={{ py: 4 }}>
      <img src="/images/sqaicommittee.jpg" alt="SQAI 2023 Committee" style={{ width: '100%', maxWidth: 800, borderRadius: 8, margin: '0 auto 1.5rem auto', display: 'block' }} />
      <Typography variant="caption" display="block" sx={{ textAlign: 'center', mb: 3 }}>
        SQAI 2023 Committee at National Taiwan University - including TAIA Joannie Hsieh, TAIA Jeff Peng, NTUAI President Steven Lu, and SQAI founder Austin Hua
      </Typography>
      {/* Quick Navigation */}
      <Paper sx={{ background: '#f5f5f5', p: 2, mb: 4, borderRadius: 2 }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '1.1em', color: '#444', mb: 1 }}>Quick Navigation</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 1 }}>
          <Link href="#organizing-committee" className="nav-link" sx={{ color: '#56a3b7', px: 1, py: 0.5 }}>Organizing Committee</Link>
          <Link href="#technical-program-committee" className="nav-link" sx={{ color: '#56a3b7', px: 1, py: 0.5 }}>Technical Program Committee</Link>
          <Link href="#steering-committee" className="nav-link" sx={{ color: '#56a3b7', px: 1, py: 0.5 }}>Steering Committee</Link>
          <Link href="#advisory-board" className="nav-link" sx={{ color: '#56a3b7', px: 1, py: 0.5 }}>Advisory Board</Link>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, borderTop: '1px solid #eee', pt: 1 }}>
          <Link href="#about-committees" className="info-link" sx={{ color: '#56a3b7', fontSize: '0.95em', opacity: 0.9 }}>About Roles</Link>
          <Link href="#contribute" className="info-link" sx={{ color: '#56a3b7', fontSize: '0.95em', opacity: 0.9 }}>Join Us</Link>
        </Box>
      </Paper>
      {/* Committees */}
      <Section
        id="organizing-committee"
        title="Organizing Committee (OC)"
        description={
          <>
            The Organizing Committee coordinates the conference logistics, communications, and overall structure of the event.
          </>
        }
        members={organizingCommittee}
        className="oc-header"
      />
      <Section
        id="technical-program-committee"
        title="Technical Program Committee (TPC)"
        description={
          <>
            The Technical Program Committee (TPC) is responsible for evaluating submissions, shaping the conference program, and ensuring the highest quality of scientific content.
          </>
        }
        members={tpcCommittee}
        className="tpc-header"
      />
      <Section
        id="steering-committee"
        title="Steering Committee (SC)"
        description={
          <>
            The Steering Committee (SC) provides long-term vision and continuity for the conference series, ensuring the event grows and evolves to meet the needs of the quantum AI community.
          </>
        }
        members={steeringCommittee}
        className="steering-header"
      />
      <Section
        id="advisory-board"
        title="Advisory Board"
        description={
          <>
            Our Advisory Board consists of industry leaders and academic experts who provide strategic guidance and expertise.
          </>
        }
        members={advisoryBoard}
        className="advisory-header"
      />
      <Divider sx={{ my: 6 }} />
      {/* About Committees */}
      <AboutCommittees />
      {/* Contribute Section */}
      <Box id="contribute" sx={{ my: 6 }}>
        <Typography variant="h4" className="contribute-header" align="center" sx={{ color: '#0366d6', mb: 3, pb: 1, borderBottom: '3px solid #0366d6', fontWeight: 700 }}>
          Join Our Committees
        </Typography>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={7}>
            <Typography paragraph>
              We're actively recruiting passionate volunteers for all our committees. By joining SQAI, you'll:
            </Typography>
            <ul>
              <li>Connect with leading researchers and industry professionals in quantum AI</li>
              <li>Shape the direction of this emerging and transformative field</li>
              <li>Gain valuable experience in academic conference organization</li>
              <li>Be at the forefront of quantum computing and AI integration</li>
            </ul>
            <Typography paragraph>
              Whether your strengths are in technical reviews, event coordination, communications, or strategic planning, there's a meaningful role for you in building SQAI 2026.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
              Reach out via email: <Link href="mailto:info@sqai.org" sx={{ color: '#0366d6', textDecoration: 'underline' }}>info@sqai.org</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 3, borderRadius: 2, background: '#f8f9fa' }}>
              <Typography variant="h6" align="center" sx={{ mb: 2 }}>Open Positions</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ background: '#0366d6', color: 'white', px: 1.5, py: 0.5, borderRadius: 1, fontWeight: 'bold', fontSize: '0.8rem' }}>TPC</Box>
                  <Typography variant="body2">Area Chairs (Multiple Areas)</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ background: '#0366d6', color: 'white', px: 1.5, py: 0.5, borderRadius: 1, fontWeight: 'bold', fontSize: '0.8rem' }}>OC</Box>
                  <Typography variant="body2">Poster & Demos Chair</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ background: '#0366d6', color: 'white', px: 1.5, py: 0.5, borderRadius: 1, fontWeight: 'bold', fontSize: '0.8rem' }}>OC</Box>
                  <Typography variant="body2">Sponsorship Chair</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ background: '#0366d6', color: 'white', px: 1.5, py: 0.5, borderRadius: 1, fontWeight: 'bold', fontSize: '0.8rem' }}>SC</Box>
                  <Typography variant="body2">Steering Committee Members</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
);

export default Committees;