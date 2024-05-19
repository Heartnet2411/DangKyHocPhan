import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
//import file css
import "./DangKyHocPhan.css";
import { getAllClass } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";
import {
  onRegisterClassDetails,
  onViewProfile,
  onGetClassDetails,
} from "../../store/actions";

export const DangKyHocPhan = () => {
  const dispatch = useDispatch();
  const { classes } = useSelector((state) => state.classReducer);
  const { student } = useSelector((state) => state.studentReducer);
  const { id, token } = student;
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedClassDetails, setSelectedClassDetails] = useState(null);
  const [studentID, setStudentID] = useState("");
  const [registeredClasses, setRegisteredClasses] = useState([]);
  const [registeredClassDetails, setRegisterdClassDetails] = useState([]);
  useEffect(() => {
    if (token) {
      dispatch(getAllClass());
      dispatch(onViewProfile()).then((res) => {
        if (res) {
          setStudentID(res.payload.studentID);
          console.log(res.payload.studentID);
          dispatch(
            onGetClassDetails({ studentID: res.payload.studentID })
          ).then((response) => {
            setRegisteredClasses(response.payload);
          });
        }
      });

    }
  }, [token]);
  useEffect(() => {
    if (registeredClasses) {
      const ParseClassDetails = () => {
        const arr = [];
        registeredClasses.forEach((item) => {
          arr.push(item.detailsID);
        });
        arr.forEach((i) => {
          i = i.replace(/new ObjectId\((.*?)\)/g, "$1");
          //i = i.replace(/(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)ZZ/g, "$1Z");
          //i = i.replace(/(\w+):/g, "\"$1\":");
          i = i.replace(/(\w+):(?!\d)/g, '"$1":'); // Wrap keys in quotes
          i = i.replace(
            /: (\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z),/g,
            ': "$1",'
          ); // Wrap dates in quotes
          i = i.replace(/'/g, '"');
          //console.log(i);
          try {
            const obj = JSON.parse(i);
            if (
              !registeredClassDetails.some(
                (item) => JSON.stringify(item) === JSON.stringify(obj)
              )
            ) {
              setRegisterdClassDetails((prevState) => [...prevState, obj]);
                 //console.log("Obj",obj);
            }
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        });
        return arr;
      };
      ParseClassDetails();
    }
  }, [registeredClasses]);
  console.log(registeredClassDetails);
  const handleRadioChange = (selectedClass) => {
    setSelectedClass(selectedClass);
    setSelectedClassDetails(null);
  };
  const handleShowDetails = (selectedClassDetails) => {
    setSelectedClassDetails(selectedClassDetails);
  };
  function formatClassSchedule(schedule) {
    return `${schedule.day} (Tiết ${schedule.time})`;
  }
  function formatDateRange(startDate, endDate) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedStartDate = new Date(startDate).toLocaleDateString(
      "vi-VN",
      options
    );
    const formattedEndDate = new Date(endDate).toLocaleDateString(
      "vi-VN",
      options
    );
    return `${formattedStartDate} - ${formattedEndDate}`;
  }
  function formatDateRegister(date) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(date).toLocaleDateString("vi-VN", options);
    return formattedDate;
  }
  const handleRegisterClass = () => {
    if (!selectedClass) {
      return alert("bạn chưa chọn môn để đăng kí");
    }
    if (!selectedClassDetails) {
      return alert("Bạn chưa chọn lớp học phần để đăng kí");
    }
    if (
      selectedClassDetails.student.length == selectedClassDetails.limitStudent
    ) {
      alert("Lớp đã đủ sinh viên,bạn không thể đăng kí");
    }
    return dispatch(
      onRegisterClassDetails({
        classID: selectedClass.classID,
        detailsID: selectedClassDetails.detailsID,
        studentID: studentID,
        classified: false,
      })
    ).then((res) => {
      if (res) {
        alert("Đăng kí thành công");
      } else {
        alert("Đăng kí thất bại, bạn chưa học môn tiên quyết");
      }
    });
  };
  return (
    <div>
      <header>
        <div>
          <a href="/">
            <img src="https://media.iuh.edu.vn/Media/2_sviuh/Images/logo-svd516f114-e-e.png" />
          </a>
        </div>
      </header>
      <div>
        <div>
          <h1>Đăng ký học phần</h1>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>STT</th>
                <th>Mã HP</th>
                <th>Tên môn học</th>
                <th>TC</th>
                <th>Bắt buộc</th>
                <th>Học phần học trước (a), tiên quyết (b), song hành (d)</th>
                <th>Khoa</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="radio"
                      name="class"
                      onChange={() => handleRadioChange(item)}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>{item.classID}</td>
                  <td>{item.className}</td>
                  <td>{item.credit}</td>
                  <td>{item.batBuoc}</td>
                  <td>{item.classRequire}</td>
                  <td>{item.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="detailsClass">
          <div>
            <h2>Lớp học phần chờ đăng kí</h2>
          </div>
          <div>
            <input type="checkbox" id="nonOverlapping" name="nonOverlapping" />
            <label for="nonOverlapping">
              Hiển thị lớp học phần không trùng lịch
            </label>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th> </th>
              <th>STT</th>
              <th>Mã LHP</th>
              <th>Tên môn học</th>
              <th>Lớp dự kiến</th>
              <th>sĩ số tối đa</th>
              <th>Đã đăng kí</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass &&
              selectedClass.details.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type="radio"
                        name="classDetails"
                        onChange={() => handleShowDetails(item)}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{item.detailsID}</td>
                    <td>{selectedClass.className}</td>
                    <td>{item.expectedClass}</td>
                    <td>{item.limitStudent}</td>
                    <td>{item.student.length}</td>
                    <td>
                      {item.student.length < item.limitStudent
                        ? "Còn chỗ"
                        : "Hết chỗ"}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <div className="txtdetails">
          <h2>Chi tiết lớp học phần</h2>
          <button className="btnCheck">Xem lịch trùng</button>
        </div>

        <div className="details">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Lịch học</th>
                <th>Phòng</th>
                <th>Giảng viên</th>
                <th>Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {selectedClassDetails && (
                <tr>
                  <td>1</td>
                  <td>
                    {formatClassSchedule(selectedClassDetails.classSchedule)}
                  </td>
                  <td>{selectedClassDetails.room}</td>
                  <td>{selectedClassDetails.teacher}</td>
                  <td>
                    {formatDateRange(
                      selectedClassDetails.startDate,
                      selectedClassDetails.endDate
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button
            onClick={() => {
              handleRegisterClass();
            }}
            className="btn"
          >
            Đăng ký môn
          </button>
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <h2>Lớp học phần đã đăng kí</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã LHP</th>
                  <th>Tên môn học</th>
                  <th>Lớp dự kiến</th>
                  <th>Số TC</th>
                  <th>Ngày Đăng Ký</th>
                </tr>
              </thead>
              <tbody>
                {registeredClassDetails.map((classDetail, index) => {
                  const registeredClass = registeredClasses[index];
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{classDetail.detailsID}</td>
                      <td>{registeredClass.classID.className}</td>
                      <td>{classDetail.expectedClass}</td>
                      <td>{registeredClass.classID.credit}</td>
                      <td>
                        {formatDateRegister(registeredClass.createdAt)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
