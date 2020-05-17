import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import { es } from 'netlify-cms-locales'

import MenuPostPreview from './preview-templates/MenuPostPreview'

CMS.registerLocale('es', es);

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('menu', MenuPostPreview)
