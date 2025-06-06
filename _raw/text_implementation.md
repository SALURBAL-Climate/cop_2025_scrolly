# COP30 Scrollytelling Implementation Plan

## Format Differences: Understanding the Medium Shift

**PDF Format:** Traditional document structure with linear narrative, headers, paragraphs, and static images. Content flows top-to-bottom in academic paper style. Reader controls pacing entirely.

**Instagram Carousel:** Individual slides with headline + visual + caption. Each slide must be self-contained. Platform algorithm controls reach and discovery.

**Scrollytelling Format:** Scroll-triggered narrative with sticky sidebar text paired with updating visuals/images. Content broken into discrete "moments" where user scroll triggers visual changes. Two-column layout (text card + visual area) with occasional full-width breaks for emphasis.

## Content Adaptation Strategy

### Slide 1: Introduction
**Text Card:** "How do 'COPs' work? What role does public health research play? How can researchers translate health evidence to drive climate action?"
**Visual/Image:** Animated globe with health icons emerging from major cities, connecting to form a network
**Adaptation Note:** Transform PDF's opening questions into engaging hook with visual metaphor

### Slide 2: What are COPs?
**Text Card:** "A 'Conference of the Parties' (COP) refers to a meeting of countries who have signed international climate agreements."
**Visual/Image:** Conference venue filling with country flags, transforming from empty to bustling
**Adaptation Note:** Convert static definition into visual transformation

### Slide 3: UNFCCC Context
**Text Card:** "The UN Framework Convention on Climate Change holds annual COPs. COP30 will take place in November 2025, hosted by Brazil."
**Visual/Image:** Calendar animation showing November 2025, zoom into Brazil map with Belém highlighted
**Adaptation Note:** Make temporal and geographic context immediately visual

### Slide 4: Preparatory Sessions
**Text Card:** "COP agendas are developed during preparatory meetings hosted by the presidency over 1-2 years prior."
**Visual/Image:** Timeline visualization showing meeting prep phases leading to main event
**Adaptation Note:** Transform complex prep process into clear temporal flow

### Slide 5: Core Negotiation
**Text Card:** "Delegates participate in official sessions and open/closed negotiating meetings. This can result in binding agreements like the Paris Agreement."
**Visual/Image:** Split-screen showing open meeting room vs. closed door negotiations, with agreement documents emerging
**Adaptation Note:** Visualize abstract negotiation process with concrete imagery

### Slide 6: High-Level COP
**Text Card:** "Public stage with speeches by heads of state, announcements, and calls to action. Open to delegates and observers."
**Visual/Image:** Podium with spotlight, audience silhouettes, media representatives
**Adaptation Note:** Show the public-facing, high-stakes nature of announcements

### Slide 7: Third COP
**Text Card:** "Side events, pavilions, panel talks, presentations, and protests. Scientists, NGOs, private sector, and activists participate."
**Visual/Image:** Split view of formal pavilions and outdoor protest/activist areas
**Adaptation Note:** Contrast formal vs. grassroots engagement

### Slide 8: Blue vs Green Zones
**Text Card:** "Blue zone: Restricted to accredited delegates. Green zone: Open to public, managed by host country."
**Visual/Image:** Aerial view of conference venue with blue and green zones clearly marked, showing access flows
**Adaptation Note:** Make abstract access concepts spatially concrete

### Slide 9: Health Integration History
**Text Card:** "Since 2014, health has gained prominence in climate negotiations. Recent COPs have featured dedicated health pavilions and declarations."
**Visual/Image:** Timeline map journey from COP23 (Fiji) → COP26 (Glasgow) → COP28 (Dubai) → COP29 (Baku)
**Adaptation Note:** Transform chronological text list into geographic journey

### Slide 10: COP28 Health Breakthrough
**Text Card:** "COP28 featured the first Health Day and Declaration on Climate and Health, elevating health in climate agenda."
**Visual/Image:** Dubai skyline with health pavilion, declaration document signing moment
**Adaptation Note:** Highlight pivotal moment with location-specific imagery

### Slide 11: COP29 Continuity
**Text Card:** "COP29 secured permanent space for health in future COP agendas through the Baku Continuity Coalition."
**Visual/Image:** Baku cityscape with coalition formation visualization, connecting to future COPs
**Adaptation Note:** Show momentum building toward COP30

### Slide 12: Brazil COP30 Focus
**Text Card:** "COP30 in Belém, Brazil will present the Climate & Health Action Plan to strengthen health system resilience."
**Visual/Image:** Belém waterfront with Action Plan highlights overlaid, Amazon context
**Adaptation Note:** Ground COP30 in specific location and concrete deliverables

### Slide 13: NDC Statistics
**Text Card:** "90% of national climate plans include health considerations, but only 1 in 10 quantify health benefits."
**Visual/Image:** Animated infographic with progressive reveals: 90% → 1/3 → 1/10 statistics
**Adaptation Note:** Turn static percentages into engaging data story

### Slide 14: Call to Action
**Text Card:** "Public health professionals have structured pathways to influence COP30. Your expertise can drive climate policy."
**Visual/Image:** Branching pathway diagram showing different professional roles leading to COP30 engagement
**Adaptation Note:** Transform general encouragement into specific, actionable pathways

## Full-Width Break Sections

### Mid-Point: "Where Does Health Fit?"
**Content:** Brief immersive section with full-width background imagery of health impacts
**Purpose:** Reset attention, provide breathing space in narrative

### Conclusion: "Your Path Forward"
**Content:** Resource links, contact information, next steps
**Purpose:** Clear call-to-action with practical next steps

## Technical Implementation Notes

- **Scroll Triggers:** Each slide triggered at 50% viewport for smooth transitions
- **Visual Persistence:** Images/visualizations update smoothly without jarring cuts
- **Mobile Adaptation:** Text cards stack above visuals on mobile, maintain narrative flow
- **Performance:** Lazy load images, optimize animations for 60fps
- **Accessibility:** Screen reader friendly with proper semantic markup