import React from "react";
import { Container, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import './RerunTV.css';

import ImgIcon        from '../../Images/Project_Images/RerunTV/icon.png';
import ImgLive        from '../../Images/Project_Images/RerunTV/live.jpg';
import ImgGuide       from '../../Images/Project_Images/RerunTV/guide.jpg';
import ImgGuideHD     from '../../Images/Project_Images/RerunTV/guide-hd.jpg';
import ImgSetup       from '../../Images/Project_Images/RerunTV/setup.png';
import ImgTimeMachine from '../../Images/Project_Images/RerunTV/time-machine.jpg';

const REPO_URL = 'https://github.com/Zhubbs19/RerunTV';
const SITE_URL = 'https://zhubbs19.github.io/RerunTV/';
const SCORECARD_URL = 'https://scorecard.dev/viewer/?uri=github.com/Zhubbs19/RerunTV';

const TECH_TAGS = ['Electron', 'JavaScript', 'Node.js', 'React Native', 'GitHub Actions', 'CodeQL', 'Claude Code'];

const STATS = [
  { value: '~7 weeks', label: 'To public beta', note: 'First commit 2026-08-22, beta 2026-10-13, still in active development' },
  { value: '784', label: 'Automated tests', note: '97 test files, including property-based tests, with coverage reported in CI' },
  { value: '9', label: 'CI workflows', note: 'Tests and lint, installer smoke test, CodeQL, Scorecard, release build, demo pack, companion APK, Linux (experimental), website' },
  { value: '520', label: 'Commits', note: 'Detailed messages: cause, fix, verification' },
  { value: '~113k', label: 'Lines of JS', note: 'Plus 20k CSS, 4.1k TypeScript (phone app) and 1.4k Kotlin (Android clients)' },
  { value: '40', label: 'Bundled plugins', note: '27 features and 13 themes, behind a permission model' },
  { value: '7.4 / 10', label: 'OpenSSF Scorecard', note: 'Public, live badge' },
  { value: '27 pages', label: 'Wiki', note: 'Plus a feature website, 15 design docs and an in-app manual' },
];

const SIGNALS = [
  ['End-to-end ownership', 'Concept, architecture, implementation direction, testing, release engineering, security, legal diligence and documentation for one shipped product.'],
  ['Engineering discipline, not a demo', '784 tests, property-based tests that hunt for counter-examples, ESLint and coverage in CI, and a job that builds the real Windows installer, installs it silently on a clean VM and checks that it boots.'],
  ['Security and supply-chain awareness', 'CodeQL and OpenSSF Scorecard on every push, SHA-pinned Actions, least-privilege tokens, branch rulesets, Dependabot, Electron fuses that lock down packaged builds, a hardened LAN server, and signed SLSA build provenance with SHA-256 checksums on every release.'],
  ['Architecture that earns its keep', 'Schedule resolution is a pure function of (channel, time), which makes the time machine possible with no playback log. Config edits are named commands with inverses, applied through a single host.'],
  ['A plugin platform with a trust model', 'Plugins declare what they need (websites, programs, ports, files), the user approves it on a plain-language permission screen, and risky plugins run in a separate OS process that can only reach the sites it declared.'],
  ['Accessibility and responsibility', 'A first-run photosensitivity choice (full / gentle / minimal), measured-gentle demo content and a documented notice, because the app imitates flickering CRT TVs.'],
  ['IP and legal diligence', 'The app ships no media. Real network and show names and trademarked plugin names were removed, plugin IDs renamed with an automatic config migration, third-party licenses documented and git history filtered before publishing.'],
  ['Communication', 'A feature website, a 27-page wiki, numbered design documents, an in-app manual, a release checklist, a security policy and a contribution policy.'],
  ['Honesty', 'The page, README and repo state plainly that it is a beta, that installers are unsigned, and that it is vibe-coded and not independently audited.'],
];

const FEATURES = [
  'Live TV with an on-screen banner and CRT look',
  'Two on-screen layouts, including a mid-2000s digital cable-box guide in HD and Classic skins',
  'Time-grid program guide, Search and Listings by Channel',
  'Time machine: VCR-style shuttle through past and future schedule',
  'Channel setup, presets, programming blocks, ad breaks and bumpers',
  'Broadcast timing: breaks that pause the show at its fades to black, sped-up end credits, programs fitted to :00 and :30 slots',
  'Volume leveling across shows and ads',
  'Show and episode info from local .nfo files, TMDB and TVmaze',
  '13 themes and 5 period eras',
  'Phone remote (React Native app and web), LAN viewer and Android TV client',
  '40 plugins: virtual channels, overlays, weather, metadata, casting',
];

const CHALLENGES = [
  {
    title: 'Rewind and fast-forward through a schedule without storing history',
    decided: 'One clock (viewNow()) and schedule resolution as a pure function of (channel, time).',
    result: 'The time machine is just "evaluate the same functions at another timestamp". Property tests verify that positions stay in range and a channel repeats exactly every loop length.',
  },
  {
    title: 'Many settings, undo/redo, and several windows or devices editing at once',
    decided: 'Every config edit is a named command with an inverse; the main process applies commands through one config host with revisions.',
    result: 'Undo without snapshots, and no more "save reverted my change" races between the desktop and a paired phone.',
  },
  {
    title: 'Make shows start on the hour and half hour, like real TV',
    decided: 'An opt-in fit inside the same pure schedule maths: a program that runs a little long speeds up its end credits, then lightly compresses, within set limits; one that runs short gets breaks filled from the ad pool. Breaks pause the show instead of airing over it, from a plan seeded per loop so every pass agrees.',
    result: 'The guide, channel banner, calendar and time machine all show the same fitted times, with no extra state to keep in sync.',
  },
  {
    title: 'Data files rewritten whole on every change',
    decided: 'Moved viewing history, the library index and the caches into SQLite (Node\'s built-in driver), with numbered schema steps and a one-time import of the old JSON.',
    result: 'Writes are a row, not a 1.35 MB file, history holds 50,000 entries instead of 2,000, and a database from a newer build is left untouched instead of being "repaired".',
  },
  {
    title: 'Third-party plugins could be dangerous',
    decided: 'Capability declarations, user approval, one capability-checked bridge between a plugin\'s screen code and its main process, and a separate OS process for risky plugins, limited to the sites it declared.',
    result: 'A plugin can only do what it declared and the user approved, its page shows what it has actually done (calls made and refused, sites reached and blocked), and a crash cannot take the app down.',
  },
  {
    title: 'Releases people can trust without a code-signing certificate',
    decided: 'CI builds the installer, writes SHA-256 checksums, and publishes a signed SLSA build attestation plus an offline-verifiable provenance bundle.',
    result: 'Anyone can verify an installer came from this repo\'s CI (gh attestation verify). The unsigned-installer limitation is stated openly.',
  },
  {
    title: 'Catching a broken package before users do',
    decided: 'A CI job builds the real NSIS installer, installs it silently on a clean Windows VM and launches it with a debug port, then asserts version, boot, plugin loading and zero uncaught errors.',
    result: 'Packaging bugs fail the build instead of reaching a release.',
  },
  {
    title: 'Shipping a retro-TV app responsibly',
    decided: 'Removed copyrighted and trademarked material, shipped synthetic demo media, added a photosensitivity choice.',
    result: 'Safe to publish, with a documented policy.',
  },
];

const EVIDENCE = [
  '784 tests, including property-based tests; deprecated Node APIs fail the run, and CI reports coverage',
  'ESLint in CI (all 108 findings fixed when it was added)',
  '9 CI workflows, including a real-installer smoke test, an Android companion build and an experimental Linux run that caught a path leak on its first pass',
  'CodeQL: 12 findings so far, 8 fixed, 2 dismissed with written rationale, 2 open in a new test file',
  'OpenSSF Scorecard 7.4 / 10',
  'Actions pinned to commit SHAs, least-privilege tokens, branch rulesets, Dependabot',
  'Packaged builds lock down Electron fuses (no run-as-Node, no inspector, no NODE_OPTIONS)',
  'Signed SLSA build provenance and SHA-256 checksums on every release',
  '15 design docs, a 27-page wiki, a feature website and an in-app manual',
];

const FAQ = [
  ['Did you write the code yourself?', 'An AI coding agent wrote almost all of it under my direction. My contribution is the product vision, architecture and design docs, the invariants and quality gates, testing and release decisions, and the security and legal diligence. The repo says this plainly.'],
  ['Is it production ready?', 'It is a public beta. The installers are unsigned (Windows shows a warning), there is no external audit, and Windows is the only packaged desktop platform.'],
  ['What would you do differently or next?', 'See "What I would do next" above.'],
  ['Can I try it?', 'Download the installer and the demo-library zip from the Releases page. The demo media is generated test video, nothing copyrighted.'],
];

const outlinedButton = {
  color: 'rgba(255,255,255,0.85)',
  borderColor: 'rgba(255,255,255,0.3)',
  '&:hover': { borderColor: '#fff', color: '#fff', background: 'rgba(255,255,255,0.05)' },
};

function RerunTV() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | RerunTV">
        <Container maxWidth="xl" className="about-content">

          {/* ── Hero ──────────────────────────────────────── */}
          <div className="rtv-hero">
            <div className="rtv-hero-content">
              <p className="rtv-hero-eyebrow">Claude Code · Electron · Fall 2026</p>
              <div className="rtv-hero-title-row">
                <img src={ImgIcon} alt="RerunTV app icon" className="rtv-hero-logo" />
                <h1 className="rtv-hero-title">RerunTV</h1>
              </div>
              <p className="rtv-hero-tagline">Turn your own video folders into a live, channel-surfable cable box.</p>
              <p className="rtv-hero-desc">
                I designed and shipped RerunTV, a Windows desktop app (Electron) that simulates an old cable
                box. Channels are folders of your own videos, and the app computes what <em>would</em> be airing
                right now, so you can surf mid-show, rewind through a "time machine", and browse a program
                guide. I took it from idea to a public beta: architecture and design docs, 784 automated tests,
                CI that builds and launches the real installer on every push, supply-chain security (CodeQL,
                OpenSSF Scorecard, signed build provenance), a plugin system, a 27-page wiki and a feature
                website. It is
                vibe-coded: an AI coding agent wrote the code under my direction, and the engineering around
                it is what makes it trustworthy.
              </p>
              <div className="rtv-hero-actions">
                <Button variant="contained" size="large" href={REPO_URL} target="_blank" rel="noopener noreferrer">
                  Repo
                </Button>
                <Button variant="outlined" size="large" href={SITE_URL} target="_blank" rel="noopener noreferrer" sx={outlinedButton}>
                  Website
                </Button>
                <Button variant="outlined" size="large" href={`${REPO_URL}/wiki`} target="_blank" rel="noopener noreferrer" sx={outlinedButton}>
                  Wiki
                </Button>
                <Button variant="outlined" size="large" href={`${REPO_URL}/releases`} target="_blank" rel="noopener noreferrer" sx={outlinedButton}>
                  Releases
                </Button>
              </div>
              <div className="rtv-hero-tags">
                {TECH_TAGS.map(t => <span key={t} className="rtv-hero-tag">{t}</span>)}
              </div>
            </div>
          </div>

          {/* ── Stats ─────────────────────────────────────── */}
          <ul className="rtv-stats" aria-label="Project statistics">
            {STATS.map(s => (
              <li key={s.label} className="rtv-stat">
                <div className="rtv-stat-value">{s.value}</div>
                <div className="rtv-stat-label">{s.label}</div>
                <div className="rtv-stat-note">{s.note}</div>
              </li>
            ))}
          </ul>
          <div className="rtv-badges">
            <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer">
              <img src="https://api.scorecard.dev/projects/github.com/Zhubbs19/RerunTV/badge" alt="OpenSSF Scorecard" />
            </a>
            <a href={`${REPO_URL}/actions/workflows/ci.yml`} target="_blank" rel="noopener noreferrer">
              <img src={`${REPO_URL}/actions/workflows/ci.yml/badge.svg`} alt="CI status" />
            </a>
          </div>

          {/* ── Signals ───────────────────────────────────── */}
          <hr className="rtv-sep" />
          <div className="rtv-section">
            <h2 className="subheader">What This Project Shows</h2>
            <div className="rtv-card-grid">
              {SIGNALS.map(([title, body]) => (
                <div key={title} className="rtv-card"><strong>{title}</strong>{body}</div>
              ))}
            </div>
          </div>

          {/* ── The idea ──────────────────────────────────── */}
          <hr className="rtv-sep" />
          <div className="rtv-section">
            <h2 className="subheader">The Idea</h2>
            <p className="rtv-desc">
              Old cable boxes had one magic property: you flipped to a channel and the show was already in
              progress. RerunTV recreates that for your own library. Channels are folders; each has an anchor
              time; the app calculates what would be playing now if the folder had looped since then. Nothing
              runs in the background, so closing the app for a week costs nothing.
            </p>
          </div>

          {/* ── What it does ──────────────────────────────── */}
          <hr className="rtv-sep" />
          <div className="rtv-section">
            <h2 className="subheader">What It Does</h2>
            <div className="rtv-card-grid">
              {FEATURES.map(f => <div key={f} className="rtv-card">{f}</div>)}
            </div>
            <div className="rtv-shots">
              <figure>
                <img loading="lazy" src={ImgLive} alt="RerunTV live TV view with channel banner" />
                <figcaption>Live TV with banner</figcaption>
              </figure>
              <figure>
                <img loading="lazy" src={ImgGuideHD} alt="RerunTV program guide in the cable-box layout, HD skin" />
                <figcaption>Program guide, HD skin (the default)</figcaption>
              </figure>
              <figure>
                <img loading="lazy" src={ImgGuide} alt="RerunTV program guide in the cable-box layout, Classic skin" />
                <figcaption>Program guide, Classic skin</figcaption>
              </figure>
              <figure>
                <img loading="lazy" src={ImgTimeMachine} alt="RerunTV time machine scrubbing through the schedule" />
                <figcaption>Time machine</figcaption>
              </figure>
              <figure>
                <img loading="lazy" src={ImgSetup} alt="RerunTV channel setup screen" />
                <figcaption>Channel setup</figcaption>
              </figure>
            </div>
            <p className="rtv-desc" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              All screenshots show synthetic demo content only.
            </p>
          </div>

          {/* ── Challenges ────────────────────────────────── */}
          <hr className="rtv-sep" />
          <div className="rtv-section">
            <h2 className="subheader">Decisions That Shaped It</h2>
            <div className="rtv-challenges">
              {CHALLENGES.map(c => (
                <div key={c.title} className="rtv-challenge">
                  <h3>{c.title}</h3>
                  <dl>
                    <dt>Decision</dt><dd>{c.decided}</dd>
                    <dt>Result</dt><dd>{c.result}</dd>
                  </dl>
                </div>
              ))}
            </div>
          </div>

          {/* ── How it was built ──────────────────────────── */}
          <hr className="rtv-sep" />
          <div className="rtv-section">
            <h2 className="subheader">How It Was Built</h2>
            <blockquote className="rtv-quote">
              I directed an AI coding agent (Claude Code) the way a tech lead directs a team: I set the goals,
              wrote and approved the design documents, defined the invariants (for example "everything that
              asks what time it is goes through one function"), and required automated verification for every
              change. The agent wrote the code; tests, CI, static analysis and release checks are what I
              trust. It has not had an independent code review or security audit, and the repo says so.
            </blockquote>
          </div>

          {/* ── Engineering quality ───────────────────────── */}
          <hr className="rtv-sep" />
          <div className="rtv-section">
            <h2 className="subheader">Engineering Quality</h2>
            <ul className="rtv-list">
              {EVIDENCE.map(e => <li key={e}>{e}</li>)}
            </ul>
          </div>

          {/* ── Next ──────────────────────────────────────── */}
          <hr className="rtv-sep" />
          <div className="rtv-section">
            <h2 className="subheader">What I Would Do Next</h2>
            <p className="rtv-desc">
              Code signing (SignPath open-source program), turning the experimental Linux CI build into a
              released AppImage, a macOS build, and more demo content. See the{' '}
              <a href={`${REPO_URL}/wiki`} target="_blank" rel="noopener noreferrer">wiki</a>'s Roadmap and
              Known Issues page for the full list.
            </p>
          </div>

          {/* ── FAQ ───────────────────────────────────────── */}
          <hr className="rtv-sep" />
          <div className="rtv-section" style={{ marginBottom: '2rem' }}>
            <h2 className="subheader">Quick Answers</h2>
            <div className="rtv-faq">
              {FAQ.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>

        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default RerunTV;
