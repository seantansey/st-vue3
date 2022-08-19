/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faBars,
  faEnvelope,
  faArrowRight,
  faCalendar,
  faLocationDot,
  faPaperPlane,
  faGem,
  faComment,
  faHeart,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faXmark,
  faCircleNodes,
} from "@fortawesome/free-solid-svg-icons";

import {
  faJsSquare,
  faVuejs,
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faNode,
  faLaravel,
  faLinkedin,
  faGithub,
  faPhp,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(
  faBars,
  faJsSquare,
  faVuejs,
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faNode,
  faLaravel,
  faLinkedin,
  faGithub,
  faEnvelope,
  faArrowRight,
  faCalendar,
  faLocationDot,
  faPaperPlane,
  faGem,
  faPhp,
  faComment,
  faHeart,
  faDev,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faXmark,
  faCircleNodes
);

export default FontAwesomeIcon;
