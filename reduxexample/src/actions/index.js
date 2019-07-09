import {TONGGLE_STATUS, SORT} from '../constants/actionTypes'

export const tonggleStatus = () => {
  return {
    type: TONGGLE_STATUS 
  }
}

export const sort = (sort) => {
  return {
    type: SORT,
    sort 
  }
}