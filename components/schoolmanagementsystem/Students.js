import React, { useState } from "react";

import DataTable from "react-data-table-component";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

const Students = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      name: "noor",
      fatherName: "taj",
      address: "Anghapur",
      class: "26",
      status: "",
      rollNo: "01",
    },
    {
      id: 2,
      name: "zia",
      fatherName: "taj",

      address: "Anghapur",
      class: "26",
      status: "",
      rollNo: "02",
    },
    {
      id: 3,
      name: "usman",
      fatherName: "taj",

      address: "Anghapur",
      class: "26",
      status: "",
      rollNo: "03",
    },
    {
      id: 5,
      name: "ali",
      fatherName: "taj",

      address: "Anghapur",
      class: "26",
      status: "",
      rollNo: "04",
    },
    {
      id: 6,
      name: "wildan",
      fatherName: "taj",

      address: "Anghapur",
      class: "26",
      status: "",
      rollNo: "05",
    },
    {
      id: 7,
      name: "zuber",
      fatherName: "taj",

      address: "Anghapur",
      class: "26",
      status: "",
      rollNo: "06",
    },
    {
      id: 8,
      name: "noor",
      fatherName: "taj",

      address: "Anghapur",
      class: "26",
      status: "",
      rollNo: "07",
    },
    {
      id: 9,
      name: "zia",
      fatherName: "taj",

      address: "Anghapur",
      class: "26",
      status: "",
      rollNo: "08",
    },
    {
      id: 10,
      name: "usman",
      fatherName: "taj",

      address: "Anghapur",
      class: "26",
      status: "",
      rollNo: "09",
    },
    {
      id: 11,
      name: "ali",
      fatherName: "taj",

      address: "Anghapur",
      class: "26",
      status: "",
      rollNo: "10",
    },
    {
      id: 12,
      name: "wildan",
      fatherName: "taj",

      address: "Anghapur",
      class: "26",
      status: "",
      rollNo: "11",
    },
    {
      id: 13,
      name: "zuber",
      fatherName: "taj",

      address: "Anghapur",
      class: "26",
      status: "",
      rollNo: "12",
    },
  ];
  const fields = [
    { label: "Last ID:", type: "text" },
    { label: "ID", type: "text" },
    { label: "Family ID", type: "text" },
    { label: "Title", type: "text" },
    { label: "Student Name", type: "text" },
    { label: "Mother Name", type: "text" },
    { label: "Address", type: "text area" },
    { label: "Province", type: "select" },
    { label: "City", type: "select" },
    { label: "Form B", type: "text" },
    { label: "Religion", type: "text" },
    { label: "Place of Birth", type: "text" },
    { label: "Date of Birth", type: "date" },
    { label: "(In Words)", type: "text" },
    { label: "Mobile No", type: "text" },
    { label: "Phone No", type: "text" },
    { label: "Email Address", type: "text" },
    { label: "Other", type: "text" },
    { label: "Father Name", type: "text" },
    { label: "Grdn Name", type: "text" },
    { label: "Occupation", type: "text" },
    { label: "Mobile", type: "text" },
    { label: "Designation", type: "text" },
    { label: "CNIC No", type: "text" },
    { label: "Class in which admitted", type: "text" },
    { label: "Previous Class", type: "text" },
    { label: "Current Class", type: "text" },
    { label: "Group", type: "text" },
    { label: "Leaves", type: "text" },
    { label: "Last School Attended", type: "text" },
    { label: "Adm No", type: "text" },
    { label: "Admission Date", type: "date" },
    { label: "Status", type: "select" },
    { label: "Leaving Date", type: "date" },
    { label: "Leaving Reason", type: "text" },
    { label: "Roll No", type: "text" },
    { label: "Adm Fee", type: "text" },
    { label: "Others", type: "text" },
    { label: "Arrears", type: "text" },
    { label: "Total", type: "text" },
    { label: "Received", type: "text" },
    { label: "Remaining", type: "text" },
    { label: "Rcpt Date", type: "date" },
    { label: "Upload Picture", type: "text" },
  ];
  //   const [items,setItems]=useState(data)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [records, setRecords] = useState(data);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentRollNo, setNewStudentRollNo] = useState("");
  //   function handleFilter(event) {
  //     const newData = data.filter((row) => {
  //       return (
  //         row.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
  //         row.rollNo.toString().includes(event.target.value.toLowerCase())

  //       );
  //     });
  //     console.log(data)
  //     setRecords(newData);
  //   }
  const handleNewStudentNameChange = (e) => {
    setNewStudentName(e.target.value);
  };
  const handleNewStudentRollNoChange = (e) => {
    setNewStudentRollNo(e.target.value);
  };
  const handleAddStudent = () => {
    const newStudent = {
      id: data.length + 1,
      name: newStudentName,
      rollNo: newStudentRollNo,
    };
    setNewStudentName("");
    setNewStudentRollNo("");
    setRecords([...records, newStudent]);
  };
  return (
    <section id="students" className="min-h-screen ">
      <div className="container mt-5 ">
       <div className="flex items-center justify-between">
         <div className="relative">
          <input type="text" onChange={(e) => setRecords(e.target.value)} id="floating" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent   border-2 border-green-700 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Search For Student"/>
          
        </div>
        <div className="w-1/3 flex justify-end">
          {/* <input
            type="text"
            placeholder="Enter new student name"
            value={newStudentName}
            onChange={handleNewStudentNameChange}
            className="w-full border-2 rounded px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter new student roll number"
            value={newStudentRollNo}
            onChange={handleNewStudentRollNoChange}
            className="w-full border-2 rounded px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}

          <button
            onClick={openModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Student
          </button>
        </div>
       </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
        <table cellPadding={0} className="w-full text-sm text-left  text-gray-800" >
          <thead className="text-lg  uppercase  bg-gray-300 text-gray-800">
            <tr className="">
              <th scope="col" className="px-6 py-3">Std.ID</th>
              <th scope="col" className="px-6 py-3">Student Name</th>
              <th scope="col" className="px-6 py-3">Father Name</th>
              <th scope="col" className="px-6 py-3">Address</th>
              <th scope="col" className="px-6 py-3">Class</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Roll No</th>
            </tr>
          </thead>
          <tbody className="relative p-2">
            {data
              .filter(
                (row) =>
                  row.name.toLowerCase().includes(records) ||
                  row.rollNo.toLowerCase().includes(records)
              )
              .map((item, i) => (
                <tr key={i} item={item} className="bg-white border-b  border-gray-700">
                  <td className="px-6 py-4 text-lg">{item.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  text-lg">{item.name}</td>
                  <td className="px-6 py-4 text-lg">{item.fatherName}</td>
                  <td className="px-6 py-4 text-lg">{item.address}</td>
                  <td className="px-6 py-4 text-lg">{item.class}</td>
                  <td className="px-6 py-4 text-lg">{item.status}</td>
                  <td className="px-6 py-4 text-lg">{item.rollNo}</td>
                </tr>
              ))}
          </tbody>
        </table>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="z-[1002] absolute w-[90%] h-[75%] top-[20%] left-1/2 transform -translate-x-1/2 mt-9 p-5 bg-white rounded-lg shadow-lg overflow-auto"
        >
          <h2>Add Student</h2>
          <form className="flex items-start justify-start gap-3">
            <div className="grid grid-cols-4 gap-[8rem] p-5 mx-3 ">
              <div className="flex flex-col gap-3 items-start justify-evenly ">
                {fields.slice(0, 12).map((field) => (
                  <div
                    className="flex gap-3 items-start justify-evenly p-2"
                    key={field.label}
                  >
                    {/* <div className=" ">
                    <label>{field.label}:</label>
                  </div>
                  <div className="">
                    <input
                      type={field.type}
                      className="p-1 bg-transparent border border-slate-800 rounded"
                      />
                  </div> */}
                    <div class="relative">
                      <input
                        type={field.type}
                        id="floating_outlined"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-green-600 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        for="floating_outlined"
                        className="absolute text-sm text-green-600  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        {field.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start justify-evenly">
                {fields.slice(12, 24).map((field) => (
                  <div
                    className="flex gap-3 items-start justify-evenly"
                    key={field.label}
                  >
                   <div class="relative">
                      <input
                        type={field.type}
                        id="floating_outlined"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-green-600 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        for="floating_outlined"
                        className="absolute text-sm text-green-600  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        {field.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start justify-evenly">
                {fields.slice(24,36 ).map((field) => (
                  <div
                    className="flex gap-3 items-start justify-evenly"
                    key={field.label}
                  >
                   <div class="relative">
                      <input
                        type={field.type}
                        id="floating_outlined"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-green-600 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        for="floating_outlined"
                        className="absolute text-sm text-green-600  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        {field.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start justify-evenly">
                {fields.slice(36,44 ).map((field) => (
                  <div
                    className="flex gap-3 items-start justify-evenly"
                    key={field.label}
                  >
                   <div class="relative">
                      <input
                        type={field.type}
                        id="floating_outlined"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-green-600 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        for="floating_outlined"
                        className="absolute text-sm text-green-600  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        {field.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
          <div className="absolute top-[0] right-0 text-3xl text-white rounded-full bg-green-800 w-8 h-8 flex items-center justify-center hover:shadow-lg shadow-yellow-900 hover:scale-125 hover:border-2 border-yellow-400">
            {/* <button onClick={closeModal}  >&times;</button> */}
            <AiFillCloseCircle
              className="text-green-600"
              onClick={closeModal}
            />
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Students;
