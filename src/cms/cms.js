import CMS from 'netlify-cms-app'

import { es } from 'netlify-cms-locales'

import MenuPostPreview from './preview-templates/MenuPostPreview'

CMS.registerLocale('es', es);

CMS.registerPreviewTemplate('menu', MenuPostPreview)
