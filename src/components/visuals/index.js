// Visual Components for COP30 Scrolly Story
import IntroVisual from './IntroVisual';
import CopsVisual from './CopsVisual';
import BrazilVisual from './BrazilVisual';
import PreparationVisual from './PreparationVisual';
import NegotiationsVisual from './NegotiationsVisual';
import HighLevelVisual from './HighLevelVisual';
import ActivitiesVisual from './ActivitiesVisual';
import ZonesVisual from './ZonesVisual';
import HealthVisual from './HealthVisual';
import Cop28Visual from './Cop28Visual';
import Cop29Visual from './Cop29Visual';
import LeadershipVisual from './LeadershipVisual';
import CommitmentsVisual from './CommitmentsVisual';
import ActionVisual from './ActionVisual';

// Visual mapping for easy lookup
export const visualComponents = {
  intro: IntroVisual,
  cops: CopsVisual,
  brazil: BrazilVisual,
  preparation: PreparationVisual,
  negotiations: NegotiationsVisual,
  highlevel: HighLevelVisual,
  activities: ActivitiesVisual,
  zones: ZonesVisual,
  health: HealthVisual,
  cop28: Cop28Visual,
  cop29: Cop29Visual,
  leadership: LeadershipVisual,
  commitments: CommitmentsVisual,
  action: ActionVisual,
};

// Default visual component
const DefaultVisual = () => (
  <svg viewBox="0 0 400 300" className="visual-svg">
    <rect x="150" y="125" width="100" height="50" fill="#E0E0E0" rx="5" />
    <text x="200" y="155" textAnchor="middle" fill="#666" fontSize="16">Visual</text>
  </svg>
);

export default DefaultVisual;
