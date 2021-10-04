import files from '../../components/filesToUpload';
import * as actionType from '../File/type';

const addFile = () => async dispatch => {
  dispatch({
    type: actionType.UPLOADING,
    payload: files,
  });
};

export default addFile;
