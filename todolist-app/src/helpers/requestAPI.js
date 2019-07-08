import axios from "axios";
import { url } from "../constant/url";

export const getData = async () => {
  let data = [];
  await axios.get(url).then(res => (data = res.data));
  return data;
};

export const addNewTask = async newTask => {
  let data = [];
  await axios.post(url, newTask).then(res => {
    if (res.status === 201) {
      data = getData();
    }
  });
  return data;
};

export const deleteTask = async task => {
  let data = [];
  await axios.delete(url + `/${task.id}`).then(res => {
    if(res.status === 200){
      data = getData();
    }
  });
  return data;
};

export const updateTask = async task => {
  let data = [];
  await axios.put(url + `/${task.id}`, task).then(res => {
    if (res.status === 200) {
      data = getData();
    }
  });
  return data;
};
