// Manual figures. Nothing in the Meta or YouTube APIs knows about sales, so the
// bottom of the funnel is kept here by hand. Update it when a sale lands, then
// push this file to the skles-dashboard repo and the dashboard picks it up.
window.SKLES_SALES = {
  last_updated: "Sep 09, 2026",

  // Cumulative, since the funnel went live on 2026-07-21.
  apprentice_total: 1,      // $8.99/mo members
  protege_total: 0,         // $2,499 one-time
  enterpriser_total: 0,     // $9,999 one-time

  prices: { apprentice: 8.99, protege: 2499, enterpriser: 9999 },

  // The Sept–Nov plan from the August strategic review, so the funnel can show
  // actual against target rather than a number floating on its own.
  plan: {
    "2026-08": { leads: 30, new_members: 1, active_members: 1,  mrr: 9,   protege: 0 },
    "2026-09": { leads: 45, new_members: 3, active_members: 4,  mrr: 36,  protege: 0 },
    "2026-10": { leads: 60, new_members: 5, active_members: 9,  mrr: 81,  protege: 0 },
    "2026-11": { leads: 80, new_members: 7, active_members: 15, mrr: 135, protege: 1 },
    "2026-12": { leads: 100, new_members: 9, active_members: 22, mrr: 198, protege: 1 }
  },

  // Stage 5 has no acquisition path built yet: nothing in the funnel links to
  // or mentions Protégé. Flagged on the dashboard until that changes.
  protege_path_built: false
};
