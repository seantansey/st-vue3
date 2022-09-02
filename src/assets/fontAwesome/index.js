/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faBars,
  faEnvelope,
  faCalendar,
  faLocationDot,
  faPlus,
  faXmark,
  faCircleNodes,
  faChevronLeft,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(
  faBars,
  faLinkedin,
  faGithub,
  faEnvelope,
  faCalendar,
  faLocationDot,
  faDev,
  faPlus,
  faXmark,
  faCircleNodes,
  faChevronLeft,
  faChevronDown
);

export default FontAwesomeIcon;
