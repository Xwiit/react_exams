import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//This function helps to get the teacher details from the local storage
export function getTeacher() {
  let teacher = localStorage.getItem("teacher");
  if (teacher) {
    return JSON.parse(teacher);
  } else {
    return null;
  }
}
export default getTeacher;

export function userData() {
  const stringifyUser = localStorage.getItem("teacher");
  return JSON.parse(stringifyUser || {});
}

export function Protector({ Component }) {
  const navigate = useNavigate();
  const { jwt } = userData();
  useEffect(() => {
    if (!jwt) {
      navigate("/login");
    }
  }, [navigate, jwt]);

  return Component;
}

// fetching the result from local storage

export function getResult() {
  let result = localStorage.getItem("result");
  if (result) {
    return JSON.parse(result);
  } else {
    return null;
  }
}
export function getStduent() {
  let student = localStorage.getItem("student");
  if (student) {
    return JSON.parse(student);
  } else {
    return null;
  }
}
export function getSession() {
  let session = localStorage.getItem("session");
  if (session) {
    return JSON.parse(session);
  } else {
    return null;
  }
}
export function getRemark() {
  let remark = localStorage.getItem("remarks");
  if (remark) {
    return JSON.parse(remark);
  } else {
    return null;
  }
}
export function getAllStudents() {
  let students = localStorage.getItem("allStudents");
  if (students) {
    return JSON.parse(students);
  } else {
    return null;
  }
}
