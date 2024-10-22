import pract1 from "../assets/images/jBronze.jpg";
import pract2 from "../assets/images/jSilver.jpg";
import pract3 from "../assets/images/jGold.jpg";
import pract4 from "../assets/images/jPlatinum.jpg";
import jConsult1 from "../assets/images/jConsult1.jpg";
import jConsult2 from "../assets/images/jConsult2.jpg";
import jConsult3 from "../assets/images/jConsult3.jpg";
import jConsult4 from "../assets/images/jConsult4.jpg";

const Consultancy = [
  {
    id: 1,
    name: "Bronze Package: Basic Support",
    link: "bronze-package-basic-support",
    idealFor:
      "New non-profits or those with smaller budgets needing essential support to kick-start their projects and secure initial funding.",
    services: [
      "Business Start-up Consultation (1 hour)",
      "Bid Searching Service: One round of potential bid opportunities delivered",
      "Bid Writing: Assistance in preparing 1 basic funding bid (up to £5,000)",
      "Bid Review: One revision for the submitted bid",
    ],
    cost: "Contact for details",
    // frequency: "One-off service or monthly if rolling (£350/month for ongoing bid search and one bid per month)",
    consultationType: "bidwriting",
    image: pract1,
  },
  {
    id: 2,
    name: "Silver Package: Standard Support",
    link: "silver-package-standard-support",
    idealFor:
      "Non-profits that need consistent or moderate support with funding applications and business planning over time.",
    services: [
      "Business Start-up Consultation (2 hours) + Follow-up support",
      "Bid Searching Service: Delivery of 3 tailored bid opportunities per month",
      "Bid Writing: Assistance with 2 funding bids (up to £10,000 per bid)",
      "Bid Review: Detailed feedback and revisions for each bid submission",
      "Strategic Advice: Guidance on enhancing organisational readiness for funding",
    ],
    cost: "Contact for details",
    // frequency: "One-off or rolling monthly (e.g., £1,000/month for ongoing support)",
    consultationType: "bidwriting",
    image: pract2,
  },
  {
    id: 3,
    name: "Gold Package: Comprehensive Support",
    link: "gold-package-comprehensive-support",
    idealFor:
      "Non-profits looking to secure large-scale funding opportunities and achieve long-term financial sustainability.",
    services: [
      "Business Start-up Consultation (4 hours) + Ongoing advisory support",
      "Bid Searching Service: Comprehensive bid search with up to 5 tailored opportunities per month",
      "Bid Writing: Assistance with up to 4 funding bids (up to £25,000 per bid)",
      "Bid Review: Comprehensive review and edits for each bid",
      "Strategic Fundraising Plan: Creation of a tailored, long-term fundraising strategy",
      "Follow-up Support: Post-bid submission support (answering queries from funders)",
    ],
    cost: "Contact for details",
    // frequency: "One-off or rolling (e.g., £2,000/month for ongoing strategy and bid writing)",
    consultationType: "bidwriting",
    image: pract3,
  },
  {
    id: 4,
    name: "Platinum Package (Optional): Premium Bespoke Support",
    link: "platinum-package-premium-bespoke-support",
    idealFor:
      "Non-profits with ambitious growth plans and high-value funding targets, seeking end-to-end professional services.",
    services: [
      "Business Start-up Consultation: Unlimited support during the initial phase",
      "Bid Searching Service: Fully managed bid research with up to 8 opportunities delivered monthly",
      "Bid Writing: Unlimited bid writing (for bids up to £50,000 or more)",
      "Bid Review: In-depth, iterative reviews and refinement",
      "Strategic Fundraising Plan: Fully customised, long-term funding roadmap",
      "Ongoing Support: Includes strategy sessions, funder liaison, and reporting assistance",
    ],
    cost: "Contact for details",
    // frequency: "One-off or retainer basis (e.g., £3,500/month for rolling services)",
    consultationType: "bidwriting",
    image: pract4,
  },
  {
    id: 5,
    name: "Set up a Care Agency",
    link: "set-up-a-care-agency",
    idealFor:
      "Entrepreneurs and professionals looking to establish a care agency, navigate legal requirements, and ensure compliance with industry regulations.",
    services: [
      "Business Start-up Consultation: Initial setup guidance (2 hours)",
      "Regulatory Compliance: Assistance with meeting CQC (Care Quality Commission) requirements",
      "Policy Development: Creation of necessary policies and procedures",
      "Business Plan: Help with drafting a strategic business plan",
      "Recruitment Guidance: Tips on hiring qualified care staff",
    ],
    cost: "Contact for details",
    frequency:
      "One-off service or rolling consultation for ongoing setup support",
    consultationType: "consultancy",
    image: jConsult1,
  },
  {
    id: 6,
    name: "Set up a Non Profit Organisation",
    link: "set-up-a-non-profit-organisation",
    idealFor:
      "Individuals or teams seeking to establish a non-profit, secure registration, and develop sustainable strategies for social impact.",
    services: [
      "Organisation Structure: Advice on selecting the right legal structure",
      "Registration Support: Guidance through the Charity Commission or CIC registration process",
      "Governance Setup: Assistance with creating a board of trustees and governance framework",
      "Business Model: Help with designing a sustainable financial model",
      "Impact Measurement: Support with setting up monitoring and evaluation strategies",
    ],
    cost: "Contact for details",
    frequency: "One-off or rolling support to ensure a smooth launch",
    consultationType: "consultancy",
    image: jConsult2,
  },
  {
    id: 7,
    name: "Grant Funding Writing & Support for Non Profit Organisations",
    link: "grant-funding-writing-support-for-non-profit-organisations",
    idealFor:
      "Non-profit organisations aiming to access grant funding and enhance their fundraising capacity to achieve long-term sustainability.",
    services: [
      "Grant Searching: Identification of relevant grant opportunities",
      "Grant Writing: Assistance in writing compelling applications",
      "Budget Planning: Help with creating budgets aligned with grant requirements",
      "Impact Reporting: Guidance on preparing reports for funders",
      "Review and Feedback: Detailed review of grant applications",
    ],
    cost: "Contact for details",
    frequency: "One-off or rolling support with tailored grant funding plans",
    consultationType: "consultancy",
    image: jConsult3,
  },
  {
    id: 8,
    name: "Tender Writing & Support For Care Agencies",
    link: "tender-writing-support-for-care-agencies",
    idealFor:
      "Care agencies preparing to bid for tenders or contracts in the health and social care sectors, aiming to enhance their success rate.",
    services: [
      "Tender Searching: Identification of suitable tender opportunities",
      "Tender Writing: Comprehensive support with bid preparation",
      "Compliance Check: Ensuring documentation meets tender requirements",
      "Presentation Coaching: Tips for presenting bids to commissioners",
      "Post-Bid Support: Help with responding to feedback and queries",
    ],
    cost: "Contact for details",
    frequency: "One-off or ongoing support with monthly tender submissions",
    consultationType: "consultancy",
    image: jConsult4,
  },
];

export default Consultancy;
