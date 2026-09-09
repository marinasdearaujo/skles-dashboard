// Everything the APIs can't tell us: sales, goals, and the KPIs that live in
// GetResponse, Zoom or someone's head. Structure mirrors the five funnel stages
// in the August strategic review so the dashboard and the plan agree.
// Update, then push this file to the skles-dashboard repo.
window.SKLES_SALES = {
  last_updated: "Sep 09, 2026 · counted from GetResponse",

  // Actual revenue from the GetResponse Courses report, which is the system of
  // record. List membership was a poor proxy: it counts anyone ever added,
  // including Sean himself and older cohorts, so it overstated sales badly.
  //
  // AUGUST 2026 (1 Aug - 31 Aug), the first full month of the funnel:
  //   3 sales · $2,016.98 revenue · $773.07 ad spend · 2.61x return
  //   1 x Protege' 6 Step Blueprint  $1,999.00
  //   2 x Apprentice Intro           $17.98  (2 x $8.99)
  revenue_by_month: {
    "2026-08": { sales: 3, revenue: 2016.98, protege: 1, apprentice: 2 }
  },

  // ATTRIBUTION, traced contact by contact in GetResponse on Sep 9.
  // Neither August buyer came through the ebook. Both were existing leads
  // re-engaged through the webinar arm:
  //   Philip Hinton  May 21 no-show -> Jul 15 webinar -> Protege' Aug 15
  //   Chay Simpson   in list Dec 25 -> Jul 7 webinar  -> Apprentice Aug 18
  // So the sales cycle is roughly three months from first touch, and the
  // ebook cohort (Aug onwards) is not due to convert until Oct/Nov.
  attribution: {
    august_sales_from_ebook: 0,
    august_sales_from_webinar_reengagement: 3,
    typical_days_first_touch_to_sale: 90,
    ebook_leads_converted_so_far: 0,
    ebook_funnel_age_weeks: 7
  },

  // Live from the GetResponse MCP, Aug 1 to Sep 9.
  email_performance: {
    sent: 814, delivered: 814, opened: 310, clicked: 25,
    open_rate: 38.08, click_rate: 3.07, ctor: 8.06,
    bounced: 0, unsubscribed: 0, complaints: 0
  },
  apprentice_total: 2,       // paying, August
  protege_total: 1,          // paying, August

  // NOTE: the Protege' course transacted at $1,999, not the $2,499 shown on the
  // landing page. Use the transacted figure for any economics.
  protege_price_actual: 1999,

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
      guide_delivery_open: null,   // %, per-message stat, still to pull
      broadcast_open: 38.1,        // live from GetResponse, Aug 1 to Sep 9
      broadcast_click: 3.07,       // live from GetResponse, Aug 1 to Sep 9
      webinar_invite_click: null   // %, was ~1.0%. The button was dead until Sep 8,
                                   // so every figure before then measured a broken link.
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
      active_members: 10,   // active students, GetResponse Courses, August
      churned: 0,
      outreach_contacts: null,     // Rodney's warm-lead calls
      outreach_converted: null,
      milestones_logged: null
    }
  },

  // Tactical monthly goals per channel, the numbers the channel view scores
  // itself against. Same shape as the SE dashboard's "% to goal" tables.
  channel_targets: {
    paid:   { spend: 760, impressions: 12000, clicks: 1200, ctr: 12, cpl: 25, leads: 45, regs: 30 },
    ig:     { reach: 3000, profile_views: 1200, new_followers: 400, engagement_rate: 12, website_clicks: 60 },
    fb:     { page_views: 500, page_engagements: 1800, fans: 260 },
    yt:     { subs: 450, views_month: 3500, uploads_month: 12 }
  },

  // The funnel emails still never mention Protégé, but people are buying it
  // anyway through Sean directly and the course platform. So the gap is that
  // the funnel doesn't ASSIST the sale, not that the sale never happens.
  protege_path_built: false,
  protege_sells_outside_funnel: true
};
