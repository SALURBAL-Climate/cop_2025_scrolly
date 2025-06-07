## Types of scrollies

- **Scrollable Dimension**
    - These are examples of using scroll to show **a dimension of the data**. They aren't necessarily difficult to implement technically, but provide a way to take advantage of the dynamic nature of the web.
    - Examples:
        - Verticaly scrolly: Vertical scale is ‘altitude’ you scroll and the contet udpates as you traveel up in altitude: https://qz.com/296941/interactive-graphic-every-active-satellite-orbiting-earth
        - Horizontal scrolly: the x-axis is the ‘distance’ from Sun (o)→ away from sun. As you scroll you see how close the planets and moons apperaing
- **Scrolly as Trigger**
    - For these, the **scroll just starts an animation or visualization.** Here, the a**ct of scrolling to a part of the page indicates readiness to ingest a new piece of content.**
    - This is like a normal web page with non-sticked content
- **Scroll as Steps (** atomic increments)
    - Scrolling can move the viewer through different steps or **segments** of a visualization. These examples replace the stepper with scrolling.
    - There is stickied content the stickied content updates as scroll triggers updates to the content.
- **Continuous Scrolling (continuous** transition)
    - Next, instead of atomic increments in the story, the scroll can be incorporated into a **continuous** transition of the data that is being displayed.
    - the progress of the sticketed onten is contiuenous (e.g. scroll =  driving along a road)

## Breakdown NYT

- Header
    - I really like the NYT header approach https://www.nytimes.com/newsgraphics/2013/10/13/russia/index.html
        - very minimal (vertical ehight is less htan 100 px) meaning you can have it continuous within the scrolly so users will always know branding and share but does not interfere with the narrative as its very subtle visually.
        - 
- Intro Image/Hero
    - I also really like the NYT header;
    - its an image iwth a title, subtitle and some creditations
    - Enganging immediately and sets the tone.
    - Very simipliar to the first page of the Instagram reel
- Context
    - I really like how this scrolly contextualize the whole narrative as a zoomed our route
    - this sets the context; we will be zooming in detail along this route, but here is route
    - It gives me the user a sense of what the big picture is before we zoom into the details.
- **Continuous Scrolling (continuous** transition)
    - This is contiuous scroling along the route ont he left then text on the right aligning with towns along the route
    - The end of the scrolling is the endof the web page

## /2

## 

## **Instagram Flow**

- Hero Image: Bringing urban health to the table at COP30: A guide for public health researchers and practitioners
- What is COP:
    - COP is a meeting ‘conference of Parities’ who ahve signed an internation aggrements conventions/treaties
    - The UNFCCC holds annual COPS to negotiate on global actions to address cliamte change. The COP30 will take place in Novemebr 2025, hosted by Brazil.
- What happens at COPs
    - **Preparatory** sessions: agendas are developed convened by COP Presdiency involving official country representatives and take place in the month or so before each COP
    - **Core** negotiations: Delegrates (government officials, experies/scientiets, civil society represetatives), particiaptin in official sessions (opena nd closed neogtiaitng meetings). Sometimes result in biding agreements (Kyoto Protocol, Paris Agreement) which then must be ratified by individual governemntes.
    - **High level COP**: public stage which includes speechs, accounemcents, denunciations, call to action.
    - **Third COP**: Side events, panels, presntaitons, protest, particuapnts incldue scientest, NGO, privtest sector represtnative and activitists.
    - **Spaces**: Blue space is the venue for official UNFCCC events (engoraitoans, panels) managed by UNFCCC. Green space is a open to public, maanged by host country. includes side events, worksops, exhibitions
- Where does Health Fit?
    - 2014 UN start healtha dn cliamte conference, since hten it has started to integrate into COP. Starting in 2017 COP23 hoted by Fiji and heald in Genarmny. WHO launched a **Special Initiative on Climate Change and Health in Small Island Developing States** (SIDS).
    - COP26 in glasgow: The "COP26 Special Report on Climate Change and Health" was developed in the lead up to the 2021 COP26 in Glasgow, where **WHO** also hosted the first **Health Pavilion**.
    - COP28 Dubai: The 2023 COP28 in Dubai also featured a **Health Pavilion, hosted by WHO and the Wellcome Trust,** as well as the **first-ever Health Day**, which culminated in the endorsement of the Declaration on Climate and Health. COP28 elevated the role of health in the climate change agenda and secured a global commitment to addressing climate-related health impacts.
    - COP29 Baku: At the 2024 COP29 in Baku, delegates committed to the Baku COP Presidencies Continuity Coalition for Climate and Health, securing a permanent space for health within future COP agendas.
    - The Road to COP 30 Brazil 2025: At the 2024 COP29 in Baku, delegates committed to the Baku COP Presidencies Continuity Coalition for Climate and Health, securing a permanent space for health within future COP agendas.
    - Nationally Determined Contributions (NDCs) are national climate action plans that outline each country’s commitments to reducing greenhouse gas emissions and adapting to the impacts of climate change. As part of the 2015 Paris Agreement, countries committed to submitting an updated NDC every five years.

# Implementation Plan

- I think we will need a combination of comonents and not just one purely
- Header: Add top stickied header with logo and share
- The contnet below can be editted at https://www.notion.so/drexel-ccuh/COP-Scrolly-1fd57008e88580ffbec1ecfee7aa7c09

Slide # | Section | Content Type | Text Column | Visual Column | Visual Transition
-- | -- | -- | -- | -- | --
1 | Hero/Intro | Full-width Hero | Title overlay: "Bringing Urban Health to the Table at COP30: A guide for public health researchers and practitioners" | Large hero image (urban health/climate theme) | N/A - static hero
2 | What is COP? - Definition | Step Scrolly | COP = Conference of Parties who have signed international agreements/treaties | Diagram showing global treaty signatories | Fade in from hero
3 | What is COP? - UNFCCC | Step Scrolly | UNFCCC holds annual COPs to negotiate global climate actions | Visual of annual meeting cycle | Fade/slide transition
4 | What is COP? - COP30 | Step Scrolly | COP30 will take place November 2025, hosted by Brazil | Map showing Brazil/COP30 branding | Fade/slide transition
5 | What happens - Preparatory | Step Scrolly | Preparatory sessions: agendas developed by COP Presidency with country representatives in months before COP | Schematic of prep meeting structure | Fade in first component
6 | What happens - Core | Step Scrolly | Core negotiations: Delegates participate in official sessions, sometimes resulting in binding agreements | Visual of negotiation rooms/process | Slide to next component
7 | What happens - High-level | Step Scrolly | High-level COP: public stage with speeches, announcements, calls to action | Image of public speaking/podium | Slide to next component
8 | What happens - Third COP | Step Scrolly | Third COP: Side events, panels, protests with scientists, NGOs, activists | Visual of side events/pavilions | Slide to final component
9 | Spaces - Blue | Step Scrolly | Blue space: Official UNFCCC events venue managed by UNFCCC | Diagram of blue space layout | Split reveal or overlay
10 | Spaces - Green | Step Scrolly | Green space: Open to public, managed by host country, includes workshops and exhibitions | Diagram of green space layout | Complete the split/overlay
11 | History - 2014 Start | Continuous Scrolly | 2014: UN starts health and climate conference integration | Timeline marker at 2014 | Begin smooth timeline scroll
12 | History - COP23 (2017) | Continuous Scrolly | COP23 Fiji/Germany: WHO launches Special Initiative on Climate Change and Health in SIDS | Timeline marker progressing to 2017 | Smooth scroll along timeline
13 | History - COP26 (2021) | Continuous Scrolly | COP26 Glasgow: First Health Pavilion hosted by WHO, Special Report on Climate Change and Health | Timeline marker at 2021 | Continue timeline progression
14 | History - COP28 (2023) | Continuous Scrolly | COP28 Dubai: Health Pavilion + first Health Day, Declaration on Climate and Health endorsed | Timeline marker at 2023 | Continue timeline progression
15 | History - COP29 (2024) | Continuous Scrolly | COP29 Baku: Baku COP Presidencies Continuity Coalition for Climate and Health commitment | Timeline marker at 2024 | Continue timeline progression
16 | History - COP30 (2025) | Continuous Scrolly | Road to COP30 Brazil 2025: Permanent space for health secured in future COPs | Timeline marker at 2025 | Complete timeline progression
17 | NDCs Definition | Step Scrolly | NDCs are national climate action plans outlining each country's emission reduction commitments | Infographic of NDC structure | Fade in from timeline
18 | NDCs Process | Step Scrolly | Part of 2015 Paris Agreement, countries submit updated NDCs every 5 years | Visual of 5-year cycle process | Slide/fade transition
19 | Call to Action | Step Scrolly | Next steps and guidance for public health researchers and practitioners at COP30 | Action checklist or pathway graphic | Final reveal animation


