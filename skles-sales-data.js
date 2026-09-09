// Everything the APIs can't tell us: sales, goals, and the KPIs that live in
// GetResponse, Zoom or someone's head. Structure mirrors the five funnel stages
// in the August strategic review so the dashboard and the plan agree.
// Update, then push this file to the skles-dashboard repo.
window.SKLES_SALES = {
  last_updated: "Sep 09, 2026",

  apprentice_total: 1,      // $8.99/mo members, cumulative
  protege_total: 0,         // $2,499 one-time
  enterpriser_total: 0,     // $9,999 one-time
  prices: { apprentice: 8.99, protege: 2499, enterpriser: 9999 },

  // Monthly projection from the August review. Goals elsewhere are pro-rated
  // from these when the dashboard is filtered to a shorter period.
  plan: {
    "2026-08": { leads: 30, new_members: 1, active_members: 1,  mrr: 9,   protege: 0 },
    "2026-09": { leads: 45, new_members: 3, active_members: 4,  mrr: 36,  protege: 0 },
    "2026-10": { leads: 60, new_members: 5, active_members: 9,  mrr: 81,  protege: 0 },
    "2026-11": { leads: 80, new_members: 7, active_members: 15, mrr: 135, protege: 1 },
    "2026-12": { leads: 100, new_members: 9, active_members: 22, mrr: 198, protege: 1 }
  },

  // Monthly goal for every stage of the plan's funnel.
  stage_goals: {
    "2026-09": { tof: 17000, nurture: 45, webinar: 30, meeting: 12, retention: 4,  protege: 0 },
    "2026-10": { tof: 21000, nurture: 60, webinar: 50, meeting: 16, retention: 9,  protege: 0 },
    "2026-11": { tof: 26000, nurture: 80, webinar: 70, meeting: 20, retention: 15, protege: 1 },
    "2026-12": { tof: 30000, nurture: 100, webinar: 90, meeting: 24, retention: 22, protege: 1 }
  },

  // Monthly goal per channel, per stage. Only paid carries lead attribution
  // today; the organic channels are held to reach goals until we can trace a
  // lead back to them.
  channel_goals: {
    "2026-09": {
      paid:   { tof: 10000, nurture: 45, webinar: 30 },
      ig:     { tof: 3000 },
      fb:     { tof: 500 },
      yt:     { tof: 3500 },
      tiktok: { tof: 12000 },
      li:     { tof: 800 }
    },
    "2026-10": {
      paid:   { tof: 12000, nurture: 60, webinar: 50 },
      ig:     { tof: 4000 }, fb: { tof: 1000 }, yt: { tof: 4000 },
      tiktok: { tof: 14000 }, li: { tof: 1200 }
    },
    "2026-11": {
      paid:   { tof: 15000, nurture: 80, webinar: 70 },
      ig:     { tof: 5500 }, fb: { tof: 1500 }, yt: { tof: 4500 },
      tiktok: { tof: 16000 }, li: { tof: 1600 }
    }
  },

  // Tactical KPIs per stage, matching the review's scoreboard. null = not
  // captured yet; the dashboard shows those as gaps rather than zeros.
  // Fill from: GetResponse (email), Zoom exports (webinar/meeting), Rodney (outreach).
  kpis: {
    tof: {
      tiktok_views: null,          // manual export
      linkedin_impressions: null,  // manual export
      ebook_ctr: null              // live from Meta, left null so the API wins
    },
    nurture: {
      guide_delivery_open: null,   // %, GetResponse. Was 17.7% in August
      broadcast_open: null,        // %, was 36.1%
      broadcast_click: null,       // %, was 2.6%
      webinar_invite_click: null   // %, was ~1.0%
    },
    webinar: {
      live_attendees: 0,           // Zoom export. 0 of 3 at the last session
      apprentice_from_webinar: 1   // the one sale so far came through here
    },
    meeting: {
      registered: 14,              // August: 14 registered
      participants: 3,             // 3 showed
      sales: 0                     // none closed
    },
    retention: {
      active_members: 1,
      churned: 0,
      outreach_contacts: null,     // Rodney's warm-lead calls
      outreach_converted: null,
      milestones_logged: null
    }
  },

  // Nothing in the funnel links to or mentions Protégé yet.
  protege_path_built: false
};
