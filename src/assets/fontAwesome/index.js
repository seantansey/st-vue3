/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faBars,
  faEnvelope,
  faCalendar,
  faLocationDot,
  faXmark,
  faCircleNodes,
  faChevronLeft,
  faChevronDown,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faDev,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(
  faBars,
  faLinkedinIn,
  faGithub,
  faEnvelope,
  faCalendar,
  faLocationDot,
  faDev,
  faXmark,
  faCircleNodes,
  faChevronLeft,
  faChevronDown,
  faPaperPlane
);

export default FontAwesomeIcon;
