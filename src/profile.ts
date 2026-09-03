/**
 * ═══════════════════════════════════════════════════════════════════════
 *  YOUR PROFILE — this is the main file you edit. (The other one is
 *  src/theme.ts, where you pick your look.)
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Everything here flows automatically to:
 *   - /api/whoami and /api/profile  (what the course platform reads)
 *   - your home page and /about     (what humans read)
 *
 * Because both pages and APIs read from THIS one object, they can never
 * disagree, and "pages match the API" is one of the graded checks.
 *
 * Fill in every field, replace the placeholder photo, and you're done.
 */

export const profile = {
  /** Your name as you want it to appear everywhere. */
  displayName: "Julia Boyce",

  /** Your UD email — must match the one you signed into the course with. */
  email: "jrboyce@udel.edu",

  /** Where you're from. Shows on your roster card and /about. */
  hometown: "Paoli, Pennsylvania",

  /**
   * 2 to 4 fun facts (the grader checks the count!). Real ones: they're
   * how classmates find something to say hello about.
   */
  funFacts: [
    "I like to watch movies.",
    "I can juggle a soccer ball.",
    "I have a cat named Holly."
  ],

  /** One decision you're proud of, in a sentence. */
  decisionImProudOf:
    "I accepted a job offer for a full-time position after graduation.",

  /**
   * Your photo. Replace public/photo.svg with a real photo of you
   * (e.g. put photo.jpg in the public/ folder and change this to "/photo.jpg").
   * It must be a real image file: the grader fetches it and checks.
   */
  photoPath: "/photo.PNG",

  /**
   * Who can see your roster card:
   *   "class"          — your classmates and the professor (recommended)
   *   "professor-only" — just the professor
   */
  rosterVisibility: "class",

  /** A one-line tagline for your home page. Make it yours. */
  tagline: "Building my experience with analytics, one project at a time.",

  /**
   * A short bio for your home page: two or three sentences, written like
   * a person, not a resume. What are you studying? What do you care about?
   */
  bio: "I'm a marketing and business analytics student at the University of Delaware learning to make good decisions at any scale. This site is my working portfolio: every course challenge deploys here as a live service. I'm interested in using both my creative and analyticals skills to make effective decisions and help businesses grow. ",

  /**
   * Your GitHub repo URL. The course platform reads this from /api/health to
   * verify you have ≥ 5 commits spread over days (not one bulk dump).
   * Example: "https://github.com/your-username/your-repo"
   */
  repoUrl: "https://github.com/julia-boyce/my-site",
};
