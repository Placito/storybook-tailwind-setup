import { TextField } from '@redwoodjs/forms'

import Icon from '../Icon/Icon'

const UploadAvatar = () => (
  <div className="field relative border-dashed">
    <TextField placeholder="Drag and Drop an image" name="Avatar" />
    <button className="absolute right-6 top-8">
      <Icon className="text-white" id="upload" size={32} />
    </button>
  </div>
)

export default UploadAvatar
