// Manual figures. Nothing in the Meta or YouTube APIs knows about sales or about
// what we said we'd hit, so the goals and the bottom of the funnel live here.
// Update, then push this file to the skles-dashboard repo.
window.SKLES_SALES = {
  last_updated: "Sep 09, 2026",

  // Cumulative, since the funnel went live on 2026-07-21.
  apprentice_total: 1,      // $8.99/mo members
  protege_total: 0,         // $2,499 one-time
  enterpriser_total: 0,     // $9,999 one-time

  prices: { apprentice: 8.99, protege: 2499, enterpriser: 9999 },

  // The Sept–Nov projection from the August strategic review.
  plan: {
    "2026-08": { leads: 30, new_members: 1, active_members: 1,  mrr: 9,   protege: 0 },
    "2026-09": { leads: 45, new_members: 3, active_members: 4,  mrr: 36,  protege: 0 },
    "2026-10": { leads: 60, new_members: 5, active_members: 9,  mrr: 81,  protege: 0 },
    "2026-11": { leads: 80, new_members: 7, active_members: 15, mrr: 135, protege: 1 },
    "2026-12": { leads: 100, new_members: 9, active_members: 22, mrr: 198, protege: 1 }
  },

  // A goal for every funnel stage, not just the two the projection covers.
  // Leads and members come straight from the plan above. Qualified is derived
  // from it: the members target at the 10% registration-to-member rate O2 asks
  // for. Awareness is the sum of the per-channel goals below.
  stage_goals: {
    "2026-09": { awareness: 17000, leads: 45, qualified: 30, apprentice: 4,  protege: 0 },
    "2026-10": { awareness: 21000, leads: 60, qualified: 50, apprentice: 9,  protege: 0 },
    "2026-11": { awareness: 26000, leads: 80, qualified: 70, apprentice: 15, protege: 1 },
    "2026-12": { awareness: 30000, leads: 100, qualified: 90, apprentice: 22, protege: 1 }
  },

  // Per-channel goals. Only paid carries lead attribution today, so the organic
  // channels are held to reach goals until we can trace a lead back to them.
  // Paid awareness is a modest step up on the ~7.5k we do now; YouTube is the
  // 3,500 monthly views from O3; Instagram is a stretch on the current ~2,000.
  channel_goals: {
    "2026-09": {
      paid: { awareness: 10000, leads: 45, qualified: 30 },
      ig:   { awareness: 3000 },
      fb:   { awareness: 500 },
      yt:   { awareness: 3500 }
    },
    "2026-10": {
      paid: { awareness: 12000, leads: 60, qualified: 50 },
      ig:   { awareness: 4000 },
      fb:   { awareness: 1000 },
      yt:   { awareness: 4000 }
    },
    "2026-11": {
      paid: { awareness: 15000, leads: 80, qualified: 70 },
      ig:   { awareness: 5500 },
      fb:   { awareness: 1500 },
      yt:   { awareness: 4500 }
    }
  },

  // Numbers no API gives us. Fill them in and the OKRs stop saying "not tracked".
  manual_kpis: {
    email_open_rate: null,      // %, from GetResponse
    tiktok_new_followers: null, // this month
    outreach_contacts: null,    // Rodney's warm-lead calls this month
    milestones_logged: null     // member wins recorded
  },

  // Stage 5 has no acquisition path built yet: nothing in the funnel links to
  // or mentions Protégé. Flagged on the dashboard until that changes.
  protege_path_built: false
};
