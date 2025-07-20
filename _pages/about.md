---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<img src="/images/sqai2026.png" alt="Taipei" style="display:block; width:100%; max-width:770px; margin:0 auto 2rem auto; border-radius: 8px;" />

<!-- 首页图片已移至布局文件 default.html，无需在此重复插入 -->

<h1 data-i18n="welcome_title">Welcome from the Chairs of SQAI 2026</h1>

<p data-i18n="welcome_content">It is with great pleasure that we welcome you to the <span style="white-space: nowrap;">**3rd International Symposium on Quantum Artificial Intelligence (SQAI)**</span>, hosted by the *Quantum Intelligence Society*, on June 26-28, 2026, in two locations: Taipei and Washington, D.C.</p>

<style>
.event-table-container {
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.event-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  font-size: 0.95rem;
}

.event-table th {
  background: linear-gradient(135deg, #98d4dc, #0366d6);
  color: white;
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  position: relative;
}

.event-table th:first-child {
  border-top-left-radius: 12px;
}

.event-table th:last-child {
  border-top-right-radius: 12px;
}

.event-table th i {
  margin-right: 6px;
  font-size: 1.1rem;
}

.event-table td {
  padding: 12px 15px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  vertical-align: middle;
}

.event-table tr:last-child td {
  border-bottom: none;
}

.event-table tr:nth-child(even) {
  background-color: #f8fbfe;
}

.event-table tr:hover {
  background-color: #f0f7ff;
}

.event-name {
  font-weight: 600;
  color: #0366d6;
  display: flex;
  align-items: center;
  flex-wrap: nowrap; /* 防止换行 */
  gap: 6px; /* 减少标签与文字之间的间距 */
}

.event-name div {
  font-weight: 600;
  font-size: 0.95rem;
  white-space: nowrap; /* 确保文本不会换行 */
  padding-left: 2px; /* 稍微添加一点内边距 */
}

.event-name span {
  font-size: 0.8rem;
  color: #555;
  font-weight: normal;
  font-style: italic;
}

.event-location {
  display: flex;
  align-items: center;
}

.event-location .flag {
  margin-right: 8px;
  font-size: 1.2rem;
}

.event-time {
  white-space: nowrap;
  color: #444;
}

.sqai-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  border-radius: 5px;
  color: white !important; /* 强制使用白色文本 */
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.3px;
  margin-right: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  text-transform: uppercase;
  width: 70px;
  height: 28px;
  flex-shrink: 0;
  text-shadow: 0 1px 2px rgba(0,0,0,0.4);
  border: 1px solid rgba(255,255,255,0.25);
}

.sqai-a-tag {
  background: #2196f3;
}

.sqai-b-tag {
  background: #03a9f4;
}

.sqai-c-tag {
  background: #00bcd4;
}

.sqai-d-tag {
  background: #009688;
}

@media (max-width: 768px) {
  .event-table {
    font-size: 0.85rem;
  }
  
  .event-table th, .event-table td {
    padding: 10px;
  }
  
  .event-name span {
    display: block;
    margin-top: 2px;
  }
  
  .sqai-tag {
    width: 65px;
    min-width: 65px;
    padding: 5px 6px;
    font-size: 0.8rem;
    letter-spacing: 0.2px;
    margin-right: 6px;
    color: white !important; /* 确保在移动设备上也强制使用白色 */
  }
  
  .event-name {
    gap: 4px; /* 在移动设备上进一步减少间距 */
  }
  
  .event-name div {
    font-size: 0.9rem; /* 移动设备上字体略小 */
  }
}

@media (max-width: 500px) {
  .event-table-container {
    margin: 1rem -10px;
    border-radius: 0;
    max-width: calc(100% + 20px);
    overflow-x: auto;
  }
  
  .event-table {
    min-width: 500px;
  }
}
</style>

<div class="event-table-container">
  <table class="event-table">
    <thead>
      <tr>
        <th><i class="fas fa-calendar-check"></i> Event</th>
        <th><i class="fas fa-map-marker-alt"></i> Loc.</th>
        <th><i class="fas fa-clock"></i> Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="event-name">
            <span class="sqai-tag sqai-a-tag">SQAI-A</span>
            <div>Academic Conference</div>
          </div>
        </td>
        <td>
          <div class="event-location">
            <span class="flag">🇹🇼</span> Taipei
          </div>
        </td>
        <td class="event-time">All day, June 26–27, 2026 (UTC+8)</td>
      </tr>
      <tr>
        <td>
          <div class="event-name">
            <span class="sqai-tag sqai-b-tag">SQAI-B</span>
            <div>Business Expo</div>
          </div>
        </td>
        <td>
          <div class="event-location">
            <span class="flag">🇹🇼</span> Taipei
          </div>
        </td>
        <td class="event-time">10:00–18:00, June 28, 2026 (UTC+8)</td>
      </tr>
      <tr>
        <td>
          <div class="event-name">
            <span class="sqai-tag sqai-c-tag">SQAI-C</span>
            <div>Capitol Summit</div>
          </div>
        </td>
        <td>
          <div class="event-location">
            <span class="flag">🇺🇸</span> D.C.
          </div>
        </td>
        <td class="event-time">08:30–16:30, June 27, 2026 (UTC−4)</td>
      </tr>
      <tr>
        <td>
          <div class="event-name">
            <span class="sqai-tag sqai-d-tag">SQAI-D</span>
            <div>Digital Access</div>
          </div>
        </td>
        <td>
          <div class="event-location">
            <span class="flag">🌐</span> Online
          </div>
        </td>
        <td class="event-time">Live Zoom sessions & recordings</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Countdown Timer -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/countdown.css">
<!-- Ensure countdown.js loads directly on this page for more reliable operation -->
<script src="{{ site.baseurl }}/assets/js/countdown.js" async></script>
<div id="countdown-container" class="countdown-container">
  <h3 class="countdown-title">SQAI 2026 Countdown</h3>
  <div class="countdown-event">
    <div style="font-size: 0.9rem; color: #555; margin-top: -10px; margin-bottom: 10px; text-align: center;">June 26, 2026 at 9:00 AM Taipei Time</div>
  </div>
  <div class="countdown-timer">
    <div class="countdown-block">
      <div id="countdown-days" class="countdown-value">00</div>
      <div class="countdown-label">DAYS</div>
    </div>
    <div class="countdown-block">
      <div id="countdown-hours" class="countdown-value">00</div>
      <div class="countdown-label">HOURS</div>
    </div>
    <div class="countdown-block">
      <div id="countdown-minutes" class="countdown-value">00</div>
      <div class="countdown-label">MINS</div>
    </div>
    <div class="countdown-block">
      <div id="countdown-seconds" class="countdown-value">00</div>
      <div class="countdown-label">SECS</div>
      <noscript>
        <!-- CSS fallback animation will be applied if JavaScript is disabled -->
        <style>
          #countdown-seconds { color: transparent; }
          #countdown-seconds::before {
            content: "00";
            display: block;
            animation: seconds-fallback 60s infinite linear;
            color: #0366d6;
          }
        </style>
      </noscript>
    </div>
  </div>
</div>

<!-- Simple script to check for fallback CSS after a delay -->
<script>
  // Check after 5 seconds if the countdown is working
  setTimeout(function() {
    var secondsEl = document.getElementById('countdown-seconds');
    if (secondsEl && secondsEl.textContent === '00') {
      secondsEl.classList.add('js-disabled');
      console.log('Countdown not working, enabling CSS fallback animation');
    }
  }, 5000);
</script>

> Here is our vision.  
SQAI is the world's premiere international **academic + business + civic** conference in **quantum + AI**.  
> 1. **Interdisciplinary-QAI**: Merging **Q**uantum and **AI**.  
> 2. **Intersectoral-ABC**: Bringing together **A**cademicians, **B**usinesspeople, and **C**ivic Leaders.  
> 3. **International-ATW**: Uniting QAI research initiatives between **A**merica, **T**aiwan, and the **W**orld.  

<div class="sqai-tagline-container">
  <div class="sqai-tagline">
    <div class="sqai-tagline-content">
      <div class="sqai-tagline-icon">☁️</div>
      <div class="sqai-tagline-text-container">
        <div class="sqai-tagline-text">Reach for the <span class="sqai-text-wrapper"><span class="sqai-text">"SQAI"</span></span></div>
        <div class="sqai-tagline-subtext">Leading a future of universal quantum utility where AI runs natively on quantum hardware</div>
      </div>
    </div>
  </div>
</div>

<style>
.sqai-tagline-container {
  margin: 30px auto;
  text-align: center;
  width: 100%;
}

.sqai-tagline {
  display: inline-flex;
  padding: 15px 20px;
  max-width: 700px;
  position: relative;
  width: auto;
}

.sqai-tagline-content {
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
}

.sqai-tagline-icon {
  font-size: 2.2rem;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: #0366d6;
  text-shadow: 0 2px 5px rgba(3, 102, 214, 0.2);
}

.sqai-tagline-text-container {
  text-align: left;
  display: flex;
  flex-direction: column;
}

.sqai-tagline-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0366d6;
  line-height: 1.3;
  text-shadow: 0 1px 2px rgba(255,255,255,1);
  margin: 0;
  letter-spacing: 0.2px;
}

.sqai-text-wrapper {
  display: inline-block;
  position: relative;
  padding: 0 2px;
  margin: 0 1px;
}

.sqai-text-wrapper::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 2px;
  background: linear-gradient(90deg, #0366d6, #2c8cd6);
  border-radius: 2px;
  opacity: 0.8;
}

.sqai-text {
  font-weight: 800;
  font-size: 1.2em;
  background: linear-gradient(90deg, #0356b6, #2c8cd6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: inline-block;
  letter-spacing: 0.5px;
  position: relative;
  padding: 0 2px;
  filter: drop-shadow(0 1px 1px rgba(255,255,255,0.9));
}

.sqai-tagline-subtext {
  font-size: 0.95rem;
  font-weight: normal;
  color: #444;
  margin-top: 4px;
  line-height: 1.4;
  max-width: 500px;
}

/* Fallback for browsers that don't support background-clip */
@supports not (background-clip: text) or not (-webkit-background-clip: text) {
  .sqai-text {
    background: transparent;
    -webkit-text-fill-color: #0366d6;
    color: #0366d6;
    text-shadow: 0 1px 0 rgba(255,255,255,0.7);
    font-weight: 800;
    position: relative;
  }
  
  .sqai-text::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background: #0366d6;
    border-radius: 2px;
  }
}

@media (max-width: 768px) {
  .sqai-tagline {
    padding: 10px;
    width: 100%;
  }
  
  .sqai-tagline-content {
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .sqai-tagline-icon {
    font-size: 1.8rem;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }
  
  .sqai-tagline-text-container {
    text-align: left;
  }
  
  .sqai-tagline-text {
    font-size: 1.2rem;
  }
  
  .sqai-tagline-subtext {
    font-size: 0.9rem;
    text-align: left;
    margin-top: 4px;
  }
}

/* 超小屏幕的额外适配 */
@media (max-width: 480px) {
  .sqai-tagline {
    padding: 8px 5px;
  }
  
  .sqai-tagline-content {
    flex-direction: row;
    gap: 10px;
  }
  
  .sqai-tagline-icon {
    width: 36px;
    height: 36px;
    font-size: 1.6rem;
  }
  
  .sqai-tagline-text {
    font-size: 1.1rem;
  }
  
  .sqai-tagline-subtext {
    font-size: 0.85rem;
    line-height: 1.3;
  }
}
</style>

---

As the boundaries between quantum computing, artificial intelligence, and interdisciplinary systems continue to blur, SQAI 2026 provides a unique academic, business, and civic platform to explore breakthroughs at the intersection of these transformative technologies. The symposium will spotlight the most pressing challenges and visionary advances shaping the future of computation and cognition.

<style>
.sqai-features {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0;
  justify-content: center;
}

.feature-card {
  flex: 1 1 300px;
  min-width: 300px;
  max-width: 480px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.07);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.feature-img-container {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.feature-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.feature-card:hover .feature-img {
  transform: scale(1.05);
}

.feature-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
  height: 60%;
  pointer-events: none;
}

.feature-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  color: white !important; /* 强制使用白色文本 */
  padding: 6px 14px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.3);
  text-transform: uppercase;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  min-width: 70px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 1px 2px rgba(0,0,0,0.4);
  border: 1px solid rgba(255,255,255,0.25);
}

.sqai-a .feature-badge {
  background: #2196f3;
  background: linear-gradient(135deg, #2196f3, #1976d2);
}

.sqai-b .feature-badge {
  background: #03a9f4;
  background: linear-gradient(135deg, #03a9f4, #0288d1);
}

.sqai-c .feature-badge {
  background: #00bcd4;
  background: linear-gradient(135deg, #00bcd4, #0097a7);
}

.sqai-d .feature-badge {
  background: #009688;
  background: linear-gradient(135deg, #009688, #00796b);
}

.feature-header {
  padding: 18px 20px 5px;
  background: white;
  color: #333;
}

.feature-title {
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: #0366d6;
}

.feature-title i {
  margin-right: 10px;
  font-size: 1.2rem;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(3,102,214,0.1);
  border-radius: 50%;
  padding: 5px;
  color: #0366d6;
}

.sqai-a .feature-title, .sqai-a .feature-title i {
  color: #0366d6;
}

.sqai-b .feature-title, .sqai-b .feature-title i {
  color: #1a56b0;
}

.sqai-c .feature-title, .sqai-c .feature-title i {
  color: #004ea8;
}

.sqai-d .feature-title, .sqai-d .feature-title i {
  color: #003c7e;
}

.feature-subtitle {
  margin: 5px 0 0;
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.7;
  font-style: italic;
  color: #555;
}

.feature-content {
  padding: 5px 20px 20px;
  color: #333;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.feature-info {
  margin-bottom: 15px;
  line-height: 1.6;
  flex-grow: 1;
}

.feature-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: auto;
  padding-top: 15px;
  border-top: 1px solid rgba(0,0,0,0.06);
  color: #666;
  font-size: 0.9rem;
}

.feature-meta i {
  margin-right: 6px;
  color: #0366d6;
}

.feature-meta-item {
  margin-right: 15px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .feature-card {
    min-width: 100%;
  }
  
  .feature-img-container {
    height: 160px;
  }
}
</style>

<div class="sqai-features">
  <!-- SQAI-A Card -->
  <div class="feature-card sqai-a">
    <div class="feature-img-container">
      <img src="/images/sqai-a.jpg" alt="SQAI Academic Conference" class="feature-img">
      <div class="feature-overlay"></div>
      <div class="feature-badge">SQAI-A</div>
    </div>
    <div class="feature-header">
      <h3 class="feature-title">
        <i class="fas fa-graduation-cap"></i> Academic Conference
      </h3>
      <div class="feature-subtitle">Research & Knowledge Exchange</div>
    </div>
    <div class="feature-content">
      <div class="feature-info">
        Our 2026 target is 50 outstanding research papers. We will feature a rich lineup of keynote speeches, technical presentations, demos, and poster sessions.
      </div>
      <div class="feature-meta">
        <div class="feature-meta-item"><i class="fas fa-map-marker-alt"></i> Taipei, Taiwan</div>
        <div class="feature-meta-item"><i class="fas fa-calendar-alt"></i> June 26-27, 2026</div>
      </div>
    </div>
  </div>
  
  <!-- SQAI-B Card -->
  <div class="feature-card sqai-b">
    <div class="feature-img-container">
      <img src="/images/sqai-b.jpg" alt="SQAI Business Expo" class="feature-img">
      <div class="feature-overlay"></div>
      <div class="feature-badge">SQAI-B</div>
    </div>
    <div class="feature-header">
      <h3 class="feature-title">
        <i class="fas fa-briefcase"></i> Business Expo
      </h3>
      <div class="feature-subtitle">Industry & Innovation</div>
    </div>
    <div class="feature-content">
      <div class="feature-info">
        SQAI's sponsors will be given access to a booth, and exhibitors will be allowed to roam around to talk to the company or institute of their choosing.
      </div>
      <div class="feature-meta">
        <div class="feature-meta-item"><i class="fas fa-map-marker-alt"></i> Taipei, Taiwan</div>
        <div class="feature-meta-item"><i class="fas fa-calendar-alt"></i> June 28, 2026</div>
      </div>
    </div>
  </div>

  <!-- SQAI-C Card -->
  <div class="feature-card sqai-c">
    <div class="feature-img-container">
      <img src="/images/sqai-c.jpg" alt="SQAI Capitol Summit" class="feature-img">
      <div class="feature-overlay"></div>
      <div class="feature-badge">SQAI-C</div>
    </div>
    <div class="feature-header">
      <h3 class="feature-title">
        <i class="fas fa-landmark"></i> Capitol Summit
      </h3>
      <div class="feature-subtitle">Policy & Leadership</div>
    </div>
    <div class="feature-content">
      <div class="feature-info">
        Will feature keynote speeches and discussion panels from civic and corporate leaders. SQAI-C will also have a networking event.
      </div>
      
      <div class="america250-banner" style="margin: 10px 0; padding: 8px 12px; font-size: 0.9em;">
        <i class="fas fa-flag-usa" style="margin-right: 5px;"></i> 
        <strong>America's 250th Anniversary</strong>
        <div style="margin-top: 3px; font-size: 0.9em;">Celebrating 250 years of American innovation - looking toward a quantum future</div>
      </div>
      
      <div class="feature-meta">
        <div class="feature-meta-item"><i class="fas fa-map-marker-alt"></i> D.C., United States</div>
        <div class="feature-meta-item"><i class="fas fa-calendar-alt"></i> June 27, 2026</div>
      </div>
    </div>
  </div>

  <!-- SQAI-D Card -->
  <div class="feature-card sqai-d">
    <div class="feature-img-container">
      <img src="/images/sqai-d.jpg" alt="SQAI Digital Access" class="feature-img">
      <div class="feature-overlay"></div>
      <div class="feature-badge">SQAI-D</div>
    </div>
    <div class="feature-header">
      <h3 class="feature-title">
        <i class="fas fa-laptop"></i> Digital Access
      </h3>
      <div class="feature-subtitle">Global Participation</div>
    </div>
    <div class="feature-content">
      <div class="feature-info">
        Will be provided for all registrants, including both Zoom sessions and recordings for SQAI-A, SQAI-B, and SQAI-C.
      </div>
      <div class="feature-meta">
        <div class="feature-meta-item"><i class="fas fa-globe"></i> Online / Hybrid</div>
        <div class="feature-meta-item"><i class="fas fa-calendar-alt"></i> All Events</div>
      </div>
    </div>
  </div>
</div>

We will offer everyone from researchers and engineers to policy experts a vibrant space to share insights, collaborate across domains, and chart new directions in quantum, AI, and Quantum AI research and application.

We are honored to host SQAI 2026 in the dynamic and culturally rich cities of Taipei and DC. We look forward to your contributions and to advancing the frontier of Quantum AI - together.

<div class="venue-maps">
  <style>
    .venue-maps {
      margin-top: 3rem;
      margin-bottom: 2rem;
    }
    .venue-maps h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }
    .map-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
    .map-wrapper {
      flex: 1;
      min-width: 300px;
      max-width: 600px;
      position: relative;
    }
    .map-label {
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #0366d6;
    }
    .map-frame {
      width: 100%;
      height: 400px;
      border: none;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .location-info {
      position: absolute;
      top: 50px;
      left: 10px;
      z-index: 10;
      background: white;
      padding: 8px 12px;
      border-radius: 4px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      max-width: 250px;
      pointer-events: none;
    }
    .location-name {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 4px;
    }
    .location-address {
      font-size: 12px;
      color: #555;
    }
    @media (max-width: 768px) {
      .map-wrapper {
        flex: 100%;
      }
      .location-info {
        max-width: 200px;
      }
    }
  </style>
  
  <h2>Conference Venues (TBD)</h2>
  
  <div class="map-container">
    <div class="map-wrapper">
      <div class="map-label">SQAI DC</div>
      <div class="location-info">
        <div class="location-name">Walter E. Washington Convention Center</div>
        <div class="location-address">801 Mt Vernon Pl NW, Washington, DC 20001</div>
      </div>
      <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1033869272562!2d-77.02500972404868!3d38.90494014760058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7eacb9ec6b1%3A0xd5ec97173492aaf5!2sWalter+E.+Washington+Convention+Center!5e0!3m2!1sen!2sus!4v1719655254279!5m2!1sen!2sus&iwloc=A" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    <div class="map-wrapper">
      <div class="map-label">SQAI Taipei</div>
      <div class="location-info">
        <div class="location-name">NTU Multi-Purpose Classroom Building</div>
        <div class="location-address">No. 1, Sec. 4, Roosevelt Rd, Da'an District, Taipei City, Taiwan</div>
      </div>
      <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7836520213633!2d121.53121297607675!3d25.01942897781699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98bf4d8b18d%3A0x153d8d2476be8d27!2sMulti-Purpose+Classroom+Building,+NTU!5e0!3m2!1sen!2sus!4v1719655333451!5m2!1sen!2sus&iwloc=A" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>

<!-- 图片轮播 -->
<div class="taipei-carousel-section">
  <div class="carousel-container">
    <div class="carousel-slides" id="carouselSlidesContainer">
      <div class="carousel-slide fade">
        <img src="/images/taipei1.jpg" alt="Taipei Cityscape">
      </div>
      
      <div class="carousel-slide fade">
        <img src="/images/dc1.jpg" alt="Washington DC">
      </div>
      
      <div class="carousel-slide fade">
        <img src="/images/taipei3.jpg" alt="Taipei 101">
      </div>
      
      <div class="carousel-slide fade">
        <img src="/images/dc4.jpg" alt="Washington DC">
      </div>
      
      <div class="carousel-slide fade">
        <img src="/images/taipei4.jpg" alt="Taipei Culture">
      </div>
      
      <div class="carousel-slide fade">
        <img src="/images/dc3.jpg" alt="Washington DC">
      </div>
      
      <div class="carousel-slide fade">
        <img src="/images/taipei2.jpg" alt="Taipei Night Scene">
      </div>
      
      <div class="carousel-slide fade">
        <img src="/images/dc2.jpg" alt="Washington DC">
      </div>
      
      <!-- Navigation dots -->
      <div class="carousel-dots">
        <button class="dot" onclick="currentSlide(1)" aria-label="Slide 1"></button>
        <button class="dot" onclick="currentSlide(2)" aria-label="Slide 2"></button>
        <button class="dot" onclick="currentSlide(3)" aria-label="Slide 3"></button>
        <button class="dot" onclick="currentSlide(4)" aria-label="Slide 4"></button>
        <button class="dot" onclick="currentSlide(5)" aria-label="Slide 5"></button>
        <button class="dot" onclick="currentSlide(6)" aria-label="Slide 6"></button>
        <button class="dot" onclick="currentSlide(7)" aria-label="Slide 7"></button>
        <button class="dot" onclick="currentSlide(8)" aria-label="Slide 8"></button>
      </div>
    </div>
  </div>
</div>

<style>
  /* 轮播样式 */
  .taipei-carousel-section {
    margin-top: 2rem;
    text-align: center;
  }
  
  .carousel-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .carousel-slides {
    width: 100%;
    position: relative;
  }
  
  .carousel-slide {
    display: none;
    width: 100%;
  }
  
  /* Make first slide visible by default */
  .carousel-slide:first-child {
    display: block;
  }
  
  .carousel-slide img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    vertical-align: middle;
    border-radius: 8px;
  }
  
  /* 移除了.caption样式，不再显示底部黑条和文字 */
  
  /* 淡入淡出动画 */
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }
  
  @keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }
  
  /* 导航点样式 */
  .carousel-dots {
    text-align: center;
    position: absolute;
    bottom: 15px;
    width: 100%;
    z-index: 5;
  }
  
  .dot {
    height: 12px;
    width: 12px;
    margin: 0 5px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  
  .active, .dot:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  
  /* 响应式设计 */
  @media screen and (max-width: 768px) {
    .carousel-slide img {
      height: 300px;
    }
    
    .carousel-dots {
      bottom: 10px;
    }
    
    .dot {
      height: 10px;
      width: 10px;
      margin: 0 4px;
    }
  }
</style>

<script src="/assets/js/carousel.js"></script>

<hr style="margin: 2.5rem 0;">

<h2 id="newsletter" style="text-align: center; margin-bottom: 1rem; font-size: 1.4em;">Stay Connected with SQAI</h2>

<!-- Newsletter Signup (Mailchimp) -->
<div id="mc_embed_shell" style="margin: 0 auto; max-width: 600px; padding: 15px; background-color: #f8f9fa; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
  <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
  <style type="text/css">
    #mc_embed_signup {
      background: none !important;
      clear: left;
      font: 14px Helvetica,Arial,sans-serif;
      width: 100%;
      margin: 0 !important;
      padding: 0;
      display: block;
      color: #000 !important;
    }
    #mc_embed_signup form {
      margin-left: auto !important;
      margin-right: auto !important;
      max-width: 500px;
      padding: 5px 0 !important;
    }
    #mc_embed_signup h2 {
      font-size: 1.3em !important;
      text-align: center;
      color: #2196f3;
      margin-bottom: 0.7em !important;
      margin-top: 0.3em !important;
    }
    #mc_embed_signup .mc-field-group {
      padding-bottom: 2% !important;
      min-height: auto !important;
    }
    #mc_embed_signup .button {
      background-color: #2196f3 !important;
      transition: all 0.3s ease;
      height: auto !important;
      min-height: 32px !important;
      line-height: 32px !important;
      padding: 0 15px !important;
    }
    #mc_embed_signup .button:hover {
      background-color: #1976d2 !important;
    }
    #mc_embed_signup .mc-field-group input {
      border: 1px solid rgba(0,0,0,0.1) !important;
      color: #000 !important;
      padding: 8px !important;
      height: auto !important;
    }
    #mc_embed_signup .asterisk {
      color: #e85c41;
    }
    #mc_embed_signup label {
      color: #000 !important;
      padding-bottom: 3px !important;
    }
    #mc_embed_signup #mce-success-response {
      color: #2196f3 !important;
      font-weight: bold !important;
    }
    .newsletter-intro {
      text-align: center;
      margin-bottom: 12px;
      color: #555;
      font-size: 0.95em;
    }
    .indicates-required {
      margin-bottom: 8px !important;
      font-size: 0.85em !important;
    }
    /* 确保所有文本字段使用黑色文本 */
    #mc_embed_signup input[type="email"],
    #mc_embed_signup input[type="text"] {
      color: #000 !important;
    }
    /* 减少底部间距 */
    #mc_embed_signup .foot {
      padding-top: 10px !important;
    }
    /* 缩小Mailchimp图标 */
    #mc_embed_signup .foot img.refferal_badge {
      width: 160px !important;
      height: 30px !important;
      opacity: 0.7;
    }
  </style>
  
  <p class="newsletter-intro">Subscribe to receive updates about SQAI conferences, call for papers, and quantum AI research news.</p>
  
  <div id="mc_embed_signup">
    <form action="https://sqai.us1.list-manage.com/subscribe/post?u=575497683b4ff97fa73f1b50a&amp;id=3fdda4ba79&amp;f_id=007f2fe5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll"><h2>Subscribe to SQAI's Newsletter</h2>
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
        <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required></div>
        <div id="mce-responses" class="clear foot">
          <div class="response" id="mce-error-response" style="display: none;"></div>
          <div class="response" id="mce-success-response" style="display: none;"></div>
        </div>
        <!-- 真实的人不应该填写这个字段，这是一个防机器人的陷阱 -->
        <div aria-hidden="true" style="position: absolute; left: -5000px;">
          <input type="text" name="b_575497683b4ff97fa73f1b50a_3fdda4ba79" tabindex="-1" value="">
        </div>
        <div class="optionalParent">
          <div class="clear foot">
            <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
            <p style="margin: 0px auto; text-align: center;"><a href="http://eepurl.com/jgABzM" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 160px; height: 30px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
          </div>
        </div>
      </div>
    </form>
  </div>
  <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
  <script type="text/javascript">
  (function($) {
    window.fnames = new Array(); 
    window.ftypes = new Array();
    fnames[0]='EMAIL';
    ftypes[0]='email';
    fnames[1]='FNAME';
    ftypes[1]='text';
    fnames[2]='LNAME';
    ftypes[2]='text';
    fnames[3]='ADDRESS';
    ftypes[3]='address';
    fnames[4]='PHONE';
    ftypes[4]='phone';
    fnames[5]='BIRTHDAY';
    ftypes[5]='birthday';
    fnames[6]='COMPANY';
    ftypes[6]='text';
    
    // 确保jQuery加载完成
    $(document).ready(function() {
      // 手动绑定表单提交事件
      $('#mc-embedded-subscribe-form').on('submit', function(event) {
        console.log('表单提交'); // 调试日志
      });
    });
    
  }(jQuery));
  var $mcj = jQuery.noConflict(true);
  </script>
</div>
<!-- End Newsletter Signup -->

<!-- End of content -->