import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import './StepAhead.css';

import ImgLogo                 from '../../Images/Project_Images/StepAhead/StepAhead_Logo.png';
import ImgWelcome              from '../../Images/Project_Images/StepAhead/Screenshot_20260523_214853.jpg';
import ImgMapPins              from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014347.jpg';
import ImgAlertDetail          from '../../Images/Project_Images/StepAhead/Screenshot_20260523_232245.jpg';
import ImgPinDetail            from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014249.jpg';
import ImgPinPlace             from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014543.jpg';
import ImgAlertsList           from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014423.jpg';
import ImgReportType           from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014531.jpg';
import ImgReportsList          from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014810.jpg';
import ImgMyRoutes             from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014413.jpg';
import ImgRouteSettingsSafety  from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014612.jpg';
import ImgRouteSettingsCom     from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014616.jpg';
import ImgShareRoute           from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014649.jpg';
import ImgProfile              from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014747.jpg';
import ImgMyPins               from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014801.jpg';
import ImgBusiness             from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014850.jpg';
import ImgJoin                 from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014911.jpg';
import ImgCreateAccount        from '../../Images/Project_Images/StepAhead/Screenshot_20260524_014937.jpg';

const TECH_TAGS = ['Claude Code', 'Flutter', 'Supabase', 'Google Maps', 'Firebase', 'Cloudflare Pages', 'GitHub', 'Wear OS'];

function StepAhead() {
  const [copied, setCopied] = useState(false);

  function copyPassword() {
    navigator.clipboard.writeText('stepahead_demo').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | StepAhead">
        <Container maxWidth="xl" className="about-content">

          {/* ── Hero ──────────────────────────────────────── */}
          <div className="sa-hero">
            <div className="sa-hero-content">
              <p className="sa-hero-eyebrow">IXDS 720 — MVP to Implementation · Claude Code · Flutter · Spring 2026</p>
              <div className="sa-hero-title-row">
                <img src={ImgLogo} alt="StepAhead app icon" className="sa-hero-logo" />
                <h1 className="sa-hero-title">StepAhead</h1>
              </div>
              <p className="sa-hero-tagline">Walk smarter. Navigate real-world hazards.</p>
              <p className="sa-hero-desc">
                A community-driven walking navigation app prototype — real-time hazard alerts, accessibility
                pins, route sharing, and infrastructure reporting. Built from paper prototype to live
                production backend in two sprints.
              </p>
              <div className="sa-hero-actions">
                <div className="sa-hero-action-group">
                  <Button
                    variant="contained"
                    size="large"
                    href="https://demo.stepahead-app.pages.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try the Demo
                  </Button>
                  <span className="sa-hero-access-hint">Password required — see below</span>
                </div>
                <Button
                  variant="outlined"
                  size="large"
                  href="https://canva.link/b2459ym4og2cep7"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'rgba(255,255,255,0.85)',
                    borderColor: 'rgba(255,255,255,0.3)',
                    '&:hover': { borderColor: '#fff', color: '#fff', background: 'rgba(255,255,255,0.05)' },
                  }}
                >
                  Process Book
                </Button>
              </div>
              <div className="sa-hero-tags">
                {TECH_TAGS.map(t => <span key={t} className="sa-hero-tag">{t}</span>)}
              </div>
            </div>
            <div className="sa-hero-media">
              <iframe
                className="sa-hero-video"
                src="https://www.youtube.com/embed/WvjivgjRZCA"
                title="StepAhead Vision Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* ── Demo Access ───────────────────────────────── */}
          <hr className="sa-sep" />
          <div className="sa-section">
            <h3 className="subheader">Demo Web App Access</h3>
            <div className="sa-access-card">
              <div className="sa-access-password-row">
                <span className="sa-access-label">Password</span>
                <code className="sa-access-password">stepahead_demo</code>
                <button className="sa-copy-btn" onClick={copyPassword}>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="sa-access-desc">
                Enter the password above to enter the demo. The demo runs fully
                in-browser with a pre-generated dataset — walking routes, hazard alerts, and accessibility
                pins and a preset location. No account needed, no location permission required, no data
                written to the database. Everything in the demo resets on page reload.
              </p>
            </div>
          </div>

          {/* ── Core Features ─────────────────────────────── */}
          <hr className="sa-sep" />
          <div className="sa-section">
            <h3 className="subheader">Core Features (Some features not available in demo)</h3>
            <div className="sa-feature-grid">
              <div className="sa-feature-card">Real-time hazard and construction alerts with priority levels and community verification voting</div>
              <div className="sa-feature-card">Accessibility infrastructure pins — elevators, crosswalks, uneven sidewalks, restrooms</div>
              <div className="sa-feature-card">Government infrastructure reporting (simulated) with status lifecycle (pending → reviewed → resolved)</div>
              <div className="sa-feature-card">Saved and recent route management with route accessibility filter settings</div>
              <div className="sa-feature-card">Route sharing with share codes and configurable expiration time  (not available in demo)</div>
              <div className="sa-feature-card">Business profiles and location information</div>
              <div className="sa-feature-card">Wear OS companion app — directions and quick hazard reporting from your wrist (not available in demo)</div>
            </div>
          </div>

          {/* ── Live Map & Hazard Alerts ──────────────────── */}
          <hr className="sa-sep" />
          <div className="sa-section">
            <h3 className="subheader">Live Map & Hazard Alerts</h3>
            <p className="sa-section-desc">
              The interactive Google Maps view is the core of the app. Active alerts and community
              pins appear as color-coded markers. Tapping any marker opens a bottom sheet with full
              details — alert type, priority badge, description, location, contributor trust score,
              and community verification buttons (Still There, Cleared, Incorrect).
            </p>
            <div className="sa-phones">
              <img src={ImgMapPins} alt="Live map with pins and alerts" />
              <img src={ImgAlertDetail} alt="Construction alert detail sheet" />
            </div>
          </div>

          {/* ── Accessibility Pins ────────────────────────── */}
          <hr className="sa-sep" />
          <div className="sa-section">
            <h3 className="subheader">Accessibility Infrastructure Pins</h3>
            <p className="sa-section-desc">
              Users can place persistent pins marking infrastructure features critical for pedestrians
              with mobility needs — crosswalks, elevators, stairs, uneven sidewalks, and restrooms.
              Pins can be private or community-visible and optionally linked to an active alert when a
              feature is currently blocked.
            </p>
            <div className="sa-phones">
              <img src={ImgPinPlace} alt="Place accessibility pin screen" />
              <img src={ImgPinDetail} alt="Crosswalk pin detail sheet" />
            </div>
          </div>

          {/* ── Alerts & Reporting ────────────────────────── */}
          <hr className="sa-sep" />
          <div className="sa-section">
            <h3 className="subheader">Alerts & Community Reporting</h3>
            <p className="sa-section-desc">
              The alerts tab lists all active hazards near the user. The reporting system would escalate
              issues through four categories: Infrastructure Issue (routed to local government),
              Incorrect Alert, Report User, or Other. Reports track status through a full lifecycle —
              pending → reviewed → resolved or dismissed — giving users an auditable paper trail for
              community or government accountability.
            </p>
            <div className="sa-phones">
              <img src={ImgAlertsList} alt="Alerts list" />
              <img src={ImgReportType} alt="Report type selection" />
              <img src={ImgReportsList} alt="Reports list with status badges" />
            </div>
          </div>

          {/* ── Route Management ──────────────────────────── */}
          <hr className="sa-sep" />
          <div className="sa-section">
            <h3 className="subheader">Route Management & Sharing</h3>
            <p className="sa-section-desc">
              Users can save, favorite, and recall walking routes. Each route has its own accessibility
              settings — 10 configurable options including wheelchair access, elevator-only paths,
              avoiding active alerts, and alert priority threshold. Routes can also be shared with a generated
              6-character share code with expiry options from 1 hour to 30 days.
            </p>
            <div className="sa-phones">
              <img src={ImgMyRoutes} alt="My Routes list" />
              <img src={ImgRouteSettingsSafety} alt="Route settings — safety options" />
              <img src={ImgRouteSettingsCom} alt="Route settings — community options" />
              <img src={ImgShareRoute} alt="Share route with expiry options" />
            </div>
          </div>

          {/* ── Profile & Community ───────────────────────── */}
          <hr className="sa-sep" />
          <div className="sa-section">
            <h3 className="subheader">Profile, Badges & Business Dashboard</h3>
            <p className="sa-section-desc">
              User profiles show contribution stats and community badges — Explorer, Mapper, and Sentinel —
              awarded automatically by Supabase database triggers at contribution milestones. Business users
              get a dashboard for managing their storefront profile, visible to nearby walkers via proximity
              notifications during navigation.
            </p>
            <div className="sa-phones">
              <img src={ImgProfile} alt="User profile with badges" />
              <img src={ImgMyPins} alt="My Pins list" />
              <img src={ImgBusiness} alt="Business dashboard" />
            </div>
          </div>

          {/* ── Onboarding ────────────────────────────────── */}
          <hr className="sa-sep" />
          <div className="sa-section">
            <h3 className="subheader">Onboarding</h3>
            <p className="sa-section-desc">
              New users choose between a Personal Account or Business Account at sign-up, with both
              email/password and Google OAuth supported. Email verification via 8-digit OTP is required before the
              app can be accessed.
            </p>
            <div className="sa-phones">
              <img src={ImgJoin} alt="Join StepAhead — account type selection" />
              <img src={ImgCreateAccount} alt="Create account form" />
            </div>
          </div>

          {/* ── Design & Development Process ──────────────── */}
          <hr className="sa-sep" />
          <div className="sa-section">
            <h3 className="subheader">Design & Development Process</h3>
            <p className="sa-section-desc" style={{ marginBottom: '1.25rem' }}>
              The project ran across three sprints within a 10-week timeframe.
            </p>
            <div className="sa-sprint-grid">
              <div className="sa-sprint-card">
                <div className="sa-sprint-number">Sprint 1</div>
                <div className="sa-sprint-label">Alpha Prototype Development</div>
                <div className="sa-sprint-body">
                  Paper prototype (OneNote) → mid-fi wireframes (Visily) → high-fidelity screens
                  (Figma Make + Claude Code); 5 usability testing participants on the React alpha prototype.
                </div>
              </div>
              <div className="sa-sprint-card">
                <div className="sa-sprint-number">Sprint 2</div>
                <div className="sa-sprint-label">Full Flutter MVP Build</div>
                <div className="sa-sprint-body">
                  Full Flutter app build with Supabase schema, real-time navigation, Google Auth,
                  customizable profiles, and GitHub Actions CI/CD for web and APK deployments.
                </div>
              </div>
              <div className="sa-sprint-card">
                <div className="sa-sprint-number">Sprint 3</div>
                <div className="sa-sprint-label">Vision Video Development</div>
                <div className="sa-sprint-body">
                  Created a vision video showcasing the app's core features and user experience using Heygen AI video generation, ElevenLabs AI voiceover, and Adobe Premiere Pro for editing.
                </div>
              </div>
            </div>
          </div>

          {/* ── Tech Stack ────────────────────────────────── */}
          <hr className="sa-sep" />
          <div className="sa-section" style={{ marginBottom: '2rem' }}>
            <h3 className="attribution-header">Tech Stack</h3>
            <div className="sa-tech-grid">
              <div className="sa-tech-card">
                <div className="sa-tech-label">Mobile Framework</div>
                <div className="sa-tech-value">Flutter, Dart, GitHub Pages and Cloudflare Pages (For web app version), Wear OS (companion)</div>
              </div>
              <div className="sa-tech-card">
                <div className="sa-tech-label">Backend</div>
                <div className="sa-tech-value">Supabase Database and Google OAuth</div>
              </div>
              <div className="sa-tech-card">
                <div className="sa-tech-label">Mapping</div>
                <div className="sa-tech-value">Google Maps Platform — Maps SDK (Android) using Google Maps JS API (web), Directions API, Places API, Geocoding API</div>
              </div>
              <div className="sa-tech-card">
                <div className="sa-tech-label">GitHub Actions Workflows</div>
                <div className="sa-tech-value">4 GitHub Actions workflows — signed APK build, Flutter web deployment to Cloudflare then GitHub Pages</div>
              </div>
              <div className="sa-tech-card">
                <div className="sa-tech-label">Design Tools</div>
                <div className="sa-tech-value">Figma Make (Initial UI design), Visily (wireframes), OneNote (paper prototype), Claude Code + VS Code, Android Studio</div>
              </div>
            </div>
          </div>

        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default StepAhead;
