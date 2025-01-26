// "use client";
// import React from "react";
// import AuthPageHeading from "@/components/protectedRoutes/AuthPageHeading";
// import Button from "../../features/Button";

// // $ Import the custom hook to collect the project form data
// import useHandleSubmitTest from "@/app/customHook/useHandleSubmitTest";

// const ProjectTestForm = () => {
//   const { handleTestSubmit } = useHandleSubmitTest();
//   return (
//     <form
//       onSubmit={handleTestSubmit}
//       className="grid gap-8 max-w-4xl w-full bg-white dark:bg-formColorDark rounded-md p-6 mx-auto shadow-md border border-gray-800"
//     >
//       <AuthPageHeading title="Test Form" />
//       <div className="grid sm:grid-cols-2 gap-6">
//         {/* <FormRowInput
//           name="projectTitle"
//           type="text"
//           placeholderText="project Title"
//           labelText="Project Title"
//           onChange={() => {}}
//         /> */}
//       </div>

//       <Button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded tracking-wider uppercase"
//         buttonLabel="Submit Form"
//       />
//     </form>
//   );
// };

// export default ProjectTestForm;
