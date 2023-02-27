import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard, faTelegram, faVk, faDiscord, faGithub, faMagnifyingGlass)

export default FontAwesomeIcon;

