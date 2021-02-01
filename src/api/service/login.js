import { basePost } from '../base-service/base';

export default {
  login(value) {
    return basePost('/login.do', value);
  }
};
